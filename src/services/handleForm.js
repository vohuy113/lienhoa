// import { toast } from 'react-toastify';
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
    `http://104.43.106.2/wp-json/contact-form-7/v1/contact-forms/175/feedback`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.status == "mail_sent") {
      } else {
        console.log("fail");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
