import React, { useState, useEffect } from "react";
import Context from "./Context";
import DateProvider from "./DateProvider";

const Provider = ({ children }) => {
  let [res, setRes] = useState({});
  let [isLoading, setLoad] = useState(false);

  useEffect(() => {
    const success = async (pos) => {
      let lat = pos.coords.latitude;
      let lot = pos.coords.longitude;
      let url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lot}&key=22f287d2dfc44895a15449ef4f16f404`;

      await fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setRes(json);
          setLoad(true);
        });
    };

    const error = async (err) => {
      window.alert(`ERROR(${err.code}): ${err.message}`);
    };

    "geolocation" in navigator
      ? navigator.geolocation.getCurrentPosition(success, error)
      : window.alert(`Geolocation is not supported by this browser`);
  }, []);

  return (
    <DateProvider>
      <Context.Provider value={{ res, isLoading }}>{children}</Context.Provider>
    </DateProvider>
  );
};

export default Provider;
