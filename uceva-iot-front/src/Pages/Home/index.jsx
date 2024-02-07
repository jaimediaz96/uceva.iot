import CallToAction from "./CallToAction";
import Carousel from "./Carousel";
import ProjectSummary from "./ProjectSummary";
import CallToAction2 from "./CallToAction2";

function Home() {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="flex flex-row justify-around w-full">
        <CallToAction />
        <Carousel />
      </div>
      <ProjectSummary />
      <CallToAction2/>
    </div>
  );
}

export default Home;