import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import LandinPage from "../app/landingPage/page";
import Loading from "@/component/loader";

export default function Home() {
  return (
    <div>
      <LandinPage />
      {/* <Loading /> */}
    </div>
  );
}
