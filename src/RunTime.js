import { useEffect, useState } from "react";

function RunTime() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timeId = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <div>
      <h1>{countDown} </h1>
    </div>
  );
}
export default RunTime;
