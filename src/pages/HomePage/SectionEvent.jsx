import React, { useState, useEffect } from "react";
import CardEvent from "../../components/CardEvent";
import ImgEvent from "../../components/ImgEvent";
import { getEvent } from "../../services/event";
import IMG from "../../assets/ImageEvent.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

const SectionEvent = () => {
  const [data, setData] = useState([]);
  const defaultData = [
    {
      title:
        "Title 1: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      timeEvent: new Date("2024-04-15T10:30:00"),
    },
    {
      title:
        "Title 2: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      timeEvent: new Date("2024-04-17T10:30:00"),
    },
    {
      title:
        "Title 3: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      timeEvent: new Date("2024-04-21T10:30:00"),
    },
    {
      title:
        "Title 4: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
      timeEvent: new Date("2024-04-22T10:30:00"),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await getEvent();
        if (eventData) {
          setData(eventData);
        } else {
          setData(defaultData);
        }
      } catch (error) {
        console.error("Failed to fetch event:22222", error);
      }
    };
    fetchData();
  }, []);
  const { t } = useTranslation();
  return (
    <div
      id="event"
      className="w-full flex max-h-[632px] xl:h-[632px] xl:py-[50px] py-4"
    >
      <ImgEvent img={IMG} />
      {!!data?.length && (
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          className="w-full lg:w-1/2 h-full"
        >
          {data &&
            data.map((item, index) => (
              <div key={item.title + index} className="flex w-full h-full">
                <CardEvent
                  title={item?.title?.rendered || item.title}
                  desc={item?.content?.rendered || item.desc}
                  timeEvent={item?.acf?.time || item.timeEvent}
                />
              </div>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default SectionEvent;
