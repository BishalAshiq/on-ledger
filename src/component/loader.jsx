import {Dots} from "react-activity";
import "react-activity/dist/library.css";

const Loading = ({loading = true}) => {
  if (!loading) return null;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Dots size={25} />
    </div>
  );
};

export default Loading;
