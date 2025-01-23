import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Works from "@/components/works";

export default function Home() {

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="h-full">
        <Intro />
        <AboutMe />
        <Experience />
        <Works />
      </div>
    </div>
  );
}
