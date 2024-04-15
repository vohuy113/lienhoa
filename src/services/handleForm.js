// import { toast } from 'react-toastify';
import { API_URL } from "./api";
import "react-toastify/dist/ReactToastify.css";
export const saveDataFromForm = (data) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json, */*;q=0.1");
  const formdata = new FormData();
  formdata.append("_wpcf7_unit_tag", "wpcf7-f88-p94-o1");
  formdata.append("ho-ten", data.name);
  formdata.append("your-email", data.email);
  formdata.append("so-dien-thoai", data.phone_number);
  formdata.append("message", data.message);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    `${API_URL}/wp-json/contact-form-7/v1/contact-forms/9/feedback`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.status == "mail_sent") {
      } else {
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
