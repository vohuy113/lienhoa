import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">Page</h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>Giới thiệu</Link>
        </li>
        <li>
          <Link>Đào tạo</Link>
        </li>
        <li>
          <Link>Sân tập</Link>
        </li>
        <li>
          <Link>Tin tức</Link>
        </li>
        <li>
          <Link>Sự kiện</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPage;
