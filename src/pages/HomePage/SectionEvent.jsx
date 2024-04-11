import React, { useState, useEffect } from "react";
import CardEvent from "../../components/CardEvent";
import ImgEvent from "../../components/ImgEvent";
import { getEvent } from "../../services/event";
import IMG from "../../assets/ImageEvent.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
const SectionEvent = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const eventData = await getEvent();
    //     setData(eventData);
    //   } catch (error) {
    setData([
      {
        title:
          "Title 1: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        timeEvent: new Date("2024-04-10T10:30:00"),
      },
      {
        title:
          "Title 2: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        timeEvent: new Date("2024-04-10T10:30:00"),
      },
      {
        title:
          "Title 3: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        timeEvent: new Date("2024-04-10T10:30:00"),
      },
      {
        title:
          "Title 4: Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        desc: "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...",
        timeEvent: new Date("2024-04-10T10:30:00"),
      },
    ]);
    //     console.error("Failed to fetch event:", error);
    //   }
    // };
    // fetchData();
  }, []);
  // useEffect(() => {
  //   if (!data) {
  //     setData([
  //       {
  //         title: "Title 1",
  //         desc: "Description 1",
  //         timeEvent: new Date("2024-04-10T10:30:00"),
  //       },
  //       {
  //         title: "Title 2",
  //         desc: "Description 2",
  //         timeEvent: new Date("2024-04-10T10:30:00"),
  //       },
  //       {
  //         title: "Title 3",
  //         desc: "Description 3",
  //         timeEvent: new Date("2024-04-10T10:30:00"),
  //       },
  //       {
  //         title: "Title 4",
  //         desc: "Description 4",
  //         timeEvent: new Date("2024-04-10T10:30:00"),
  //       },
  //     ]);
  //   }
  // }, [data]);
  const { t } = useTranslation();
  return (
    <div
      id="event"
      className="w-full flex max-h-[632px] xl:h-[632px] xl:py-[50px] py-4"
    >
      <ImgEvent
        img={IMG}
        // img={item?._embedded["wp:featuredmedia"]?.["0"]?.source_url}
      />
      {!!data?.length && (
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          className="w-full lg:w-1/2 h-full"
        >
          {data &&
            data.map((item) => (
              <div className="flex w-full h-full">
                <CardEvent
                  // title={item?.title.rendered || item.title}
                  // desc={
                  //   "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ..." ||
                  //   item.desc
                  // }
                  // timeEvent={item?.acf.time || item.timeEvent}
                  title={item.title}
                  desc={item.desc}
                  timeEvent={item.timeEvent}
                />
              </div>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default SectionEvent;
