import { getUserId } from "../firebase";
import { getFormattedTime } from "../utilities";

export default function MessageList({ messageData }) {
  const values = messageData && Object.values(messageData);
  return (
    <div className="flex flex-col gap-3 p-3">
      {values &&
        values.map(({ text, uid, photoURL, displayName, timestamp }, i) => {
          return (
            <div
              key={i}
              className={`flex bg-white gap-3 p-2 items-center rounded-md w-[min(70vw,400px)] ${
                uid === getUserId() ? "self-end" : ""
              }`}
            >
              <img className="rounded-full w-10" src={photoURL} />
              <div className="w-full">
                <div>{displayName}</div>
                <div className="flex justify-between">
                  <span>{text}</span>
                  <span className="text-slate-600">
                    {getFormattedTime(timestamp)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
