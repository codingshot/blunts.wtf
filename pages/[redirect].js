import { useEffect } from "react";

const RedirectLinks = {
  "/telegram": "https://t.me/+7VyjGDEf9xI5YzEx",
  "/waitlist": "https://t.me/+7VyjGDEf9xI5YzEx",


      
};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;
