import reactNative from "@/assets/landing/react-native.png";

export const Skills = () => {
  return (
    <section className="py-8" id="skills">
      <div className="container">
        <h2
          data-aos="fade-down"
          className="my-12 text-center text-4xl font-semibold lg:mt-32 text-gradient-light"
        >
          Skills
        </h2>
        <div className="flex flex-col gap-5 ">
          <div
            data-aos="fade-up"
            className="flex justify-center items-center w-full gap-16 mx-8 flex-wrap"
          >
            <i className="devicon-typescript-plain colored text-[60px] md:text-[80px]" />
            <i className="devicon-react-original-wordmark colored text-[80px] md:text-[100px]" />
            <img
              src={reactNative}
              alt="react native logo"
              className="w-[88px] h-[96px]"
            />
            <i className="devicon-nodejs-plain-wordmark colored text-[80px] md:text-[100px]" />
            <i className="devicon-express-original-wordmark text-[70px] md:text-[90px]" />
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-center items-center w-full gap-16 flex-wrap"
          >
            <i className="devicon-mongodb-plain-wordmark colored text-[60px] md:text-[100px]" />
            <i className="devicon-tailwindcss-plain-wordmark colored text-[100px] md:text-[120px]" />
            <i className="devicon-javascript-plain colored text-[60px] md:text-[80px]" />
            <i className="devicon-html5-plain-wordmark colored text-[60px] md:text-[80px]" />
            <i className="devicon-css3-plain-wordmark colored text-[60px] md:text-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
