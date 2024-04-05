import React from "react";
import { Link } from "react-router-dom";

const FooterHeadquarter = () => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <h1 className="text-base font-bold text-white">Trụ sở</h1>
      <ul className="flex flex-col gap-6 items-start text-white text-sm">
        <li>
          <Link>Số 290 Phạm Văn Đông</Link>
        </li>
        <li>
          <Link>Phú Thượng, Phú Vang, Thừa Thiên Huế</Link>
        </li>
        <li>
          <Link>0234 3821 888</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterHeadquarter;
