import React, { useState, useEffect } from "react";
import CardEvent from "../../components/CardEvent";
import ImgEvent from "../../components/ImgEvent";
import { getEvent } from "../../services/event";
import IMG from "../../assets/Homepage/SectionWellcome/clear.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
    const fetchData = async () => {
      try {
        const eventData = await getEvent();
        setData(eventData);
      } catch (error) {
        console.error("Failed to fetch event:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="w-full flex max-h-[632px] xl:h-[632px] py-[50px]">
      <ImgEvent
        img={IMG}
        // img={item?._embedded["wp:featuredmedia"]?.["0"]?.source_url}
      />
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        className="w-1/2 h-full"
        // showArrows={false}
        // renderIndicator={(onClickHandler, isSelected, index, label) => {
        //   const defStyle = {
        //     color: "white",
        //     cursor: "pointer",
        //   };

        //   const style = isSelected
        //     ? { ...defStyle, color: "green" }
        //     : { ...defStyle };
        //   return (
        //     <span
        //       style={style}
        //       onClick={onClickHandler}
        //       onKeyDown={onClickHandler}
        //       value={index}
        //       key={index}
        //       role="button"
        //       tabIndex={0}
        //       aria-label={`${label} ${index + 1}`}
        //     >
        //       {"dots" + index}
        //     </span>
        //   );
        // }}
      >
        {data &&
          data.map((item) => (
            <div className="flex w-full h-full">
              <CardEvent
                title={item?.title.rendered}
                desc={
                  "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ..."
                }
                timeEvent={item?.acf.time}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default SectionEvent;
