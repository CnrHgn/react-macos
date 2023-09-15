import { useState, useEffect } from "react";

function useFormattedDate() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const getFormattedDate = () => {
      const date = new Date();

      const day = date.getDate().toString().padStart(2, "0");
      const month = date.toLocaleString("en-US", { month: "short" });
      const weekday = date.toLocaleString("en-US", { weekday: "short" });
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const result = `${weekday} ${day} ${month} ${hours}:${minutes}`;
      return result;
    };

    setFormattedDate(getFormattedDate()); // Set the initial date immediately

    const intervalId = setInterval(() => {
      setFormattedDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return formattedDate;
}

export default useFormattedDate;
