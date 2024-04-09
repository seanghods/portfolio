import { Avatar, Button } from "react-daisyui";
import face from "@/assets/landing/me-pic.png";

export const Intro = () => {
  return (
    <section className="py-8 lg:py-20" id="intro">
      <div className="container flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <Avatar data-aos="fade-down" src={face} shape="circle" size="lg" />
          <h1
            data-aos="fade-right"
            className="text-4xl font-black tracking-tighter lg:text-4xl lg:leading-none"
          >
            Hi, I'm Sean Ghods,
            <span className="text-gradient-light">
              {" "}
              a full-stack Software Engineer.{" "}
            </span>
          </h1>
          <p data-aos="fade-left" className="w-3/4 text-lg">
            I create{" "}
            <span className="text-gradient-light">
              websites, mobile apps, web servers, and more
            </span>{" "}
            with a mix of TypeScript, React, React Native, and Node.js.
          </p>
          <div data-aos="fade-up" className="mt-8inline-flex gap-3">
            <a href="#skills">
              <Button color="primary">Learn More</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
