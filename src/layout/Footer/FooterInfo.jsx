import React from "react";
import { Link } from "react-router-dom";

const FooterInfo = () => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">Thông tin</h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>Liện hệ</Link>
        </li>
        <li>
          <Link>Đăng ký khóa học</Link>
        </li>
        <li>
          <Link>Đặt sân</Link>
        </li>
        <li>
          <Link>FAQs</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterInfo;
