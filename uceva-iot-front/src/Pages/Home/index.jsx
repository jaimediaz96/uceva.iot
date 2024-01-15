import Carousel from "./Carousel";
import ProjectSummary from "./ProjectSummary";

function Home() {
  return (
    <div className="flex gap-20">
      <ProjectSummary />
      <Carousel />
    </div>
  );
}

export default Home;