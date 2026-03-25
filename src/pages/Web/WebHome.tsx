import Button from "../../components/Button";
import { GradientCircle } from "../../components/GradientCircle";

function WebHome() {
  return (
    <div className="pl-10 pr-10 h-[calc(100vh-6rem)]">
      <h1 className="text-title font-light text-white mb-home">San Tran</h1>
      <section className="text-heading1 font-bold text-white">
        <Button label="Works" buttonLink="/web/works" />
      </section>
      <div className="-translate-y-150 lg:-translate-y-320">
        {/* <GradientCircle /> */}
      </div>
      
    </div>
  );
}

export default WebHome;
