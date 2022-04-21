import { useState, useEffect } from "react";
import "./styles.css";

const Clock = () => {
  const [dateInfo, setDateInfo] = useState({
    time: "00.00.00",
    date: "1.1.2000",
    day: "Maanantai",
  });

  useEffect(() => {
    const date = new Date();

    setDateInfo({
      time: date.toLocaleTimeString(),
      date: date.toLocaleDateString(),
      day: date.toLocaleDateString("fi-FI", { weekday: "long" }),
    });
  }, []);

  setInterval(() => {
    const date = new Date();

    setDateInfo({
      time: date.toLocaleTimeString(),
      date: date.toLocaleDateString(),
      day: date.toLocaleDateString("fi-FI", { weekday: "long" }),
    });
  }, 1000);

  return (
    <div className="clock-container">
      <div className="clock">{dateInfo.time}</div>
      <div className="date">
        {dateInfo.day} {dateInfo.date}
      </div>
    </div>
  );
};

export default Clock;
