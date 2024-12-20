import React, { useEffect } from "react";
import { data } from "../../data/Event";
import Card from "../../components/Card";
import Search from "../../components/Search";
import { useTranslation } from "react-i18next";
import { getEventPerPage } from "../../services/event";
import { useState } from "react";
const Events = () => {
  const { t } = useTranslation();
  const [dataRender, setDataRender] = useState([]);
  useEffect(() => {
    let getDataEvent = async () => {
      let eventData = await getEventPerPage();
      setDataRender(eventData);
    };
    getDataEvent();
    return () => {};
  }, []);
  return (
    <div className="pt-[94px] lg:px-20 md:px-9 px-4">
      <div className="flex justify-between flex-col-reverse md:flex-row items-start md:items-center">
        <h1 className="font-semibold lg:text-[32px] md:text-2xl text-lg text-black md:py-10 py-6">
          {t("header.event")}
        </h1>
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataRender &&
          dataRender.map((item, index) => (
            <Card
              key={item?.id}
              title={item.name || item.title.rendered}
              subTitle={item.description || item.content.rendered}
              time={item.time || item.date}
              img={
                item.img ||
                item?._embedded["wp:featuredmedia"]?.["0"]?.source_url
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Events;
