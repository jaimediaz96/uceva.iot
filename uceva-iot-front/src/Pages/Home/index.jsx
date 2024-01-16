import CallToAction from "./CallToAction";
import Carousel from "./Carousel";
import ProjectSummary from "./ProjectSummary";

function Home() {
  return (
    <div className="flex">
      <ProjectSummary />
      <div className="flex-1 flex flex-col justify-between w-1/2 h-[29rem]">
        <Carousel />
        <CallToAction />
      </div>
    </div>
  );
}

export default Home;