import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components imports
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="flex flex-col items-center text-center xl:block xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-end Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Hryhorii Kachurovskyi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I implement modern front-end technologies such as React with TypeScript to create interactive user interfaces
            </p>

            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="https://drive.google.com/file/d/1UFTibsP1t0oT6uOTqHNBFzRYjYW3q77_/view?usp=sharing">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Cv</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home;
