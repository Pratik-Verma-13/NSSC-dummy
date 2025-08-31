import Image from "next/image";
import BgImage from "@/components/Images/bg.png"
import logo from "@/components/Images/nssc-logo.webp"

export default function Home() {
  return (
    <div>
        <div className="bg-image-div">
          <Image
            src={BgImage}
            alt="space-background"
            className="bg-image"
          />
        </div>
        <div className="darkened"></div>
        <div className="content">
          <div className="logo">
            <Image
              src={logo}
              alt="nssc-logo"
              className="nssc-logo"
            />
          </div>
          <div className="welcome-msg">
            <h1>National Student's Space Challenge 2025</h1>
            <h2>Coming Soon ...</h2>
          </div>
        </div>
    </div>
  );
}
