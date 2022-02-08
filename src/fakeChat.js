import { useEffect, useState } from "react";

const lessions = [
  {
    id: 1,
    name: "React la gi?"
  },
  {
    id: 2,
    name: " SPA/MPA la gi?"
  },
  {
    id: 3,
    name: "Arrow Function"
  }
];

function Chat() {
  const [lessionID, setLessionID] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lession-${lessionID}`, handleComment);

    return () => {
      window.removeEventListener(`lession-${lessionID}`, handleComment);
    };
  }, [lessionID]);
  return (
    <div>
      <ul>
        {lessions.map((lession) => (
          <li
            key={lession.id}
            style={{
              color: lessionID === lession.id ? "red" : "#333"
            }}
            onClick={() => setLessionID(lession.id)}
          >
            {lession.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Chat;
