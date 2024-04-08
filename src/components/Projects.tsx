import liftright from "@/assets/site-pics/liftright.jpeg";
import statpick from "@/assets/site-pics/statpick.png";
import imsa from "@/assets/site-pics/imsa2.png";

export const Projects = () => {
  return (
    <section className="relative py-8 lg:py-20" id="projects">
      <div className="absolute start-[10%] z-0">
        <div className="pointer-events-none aspect-square w-60 rounded-full bg-gradient-to-r from-primary/10 via-violet-500/10 to-purple-500/10 blur-3xl [transform:translate3d(0,0,0)] lg:w-[600px]"></div>
      </div>

      <div className="container">
        <div data-aos="fade-up" className="flex flex-col items-center">
          <h2 className="inline text-4xl font-semibold text-gradient-light">
            Projects
          </h2>

          <p className="mt-4 text-lg sm:text-center">
            From a variety of entrpreneurial pursuits and freelance clients
          </p>
        </div>

        <div className="relative z-[2] mt-8 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <div
            data-aos="fade-up"
            className="hover:scale-105 overflow-hidden rounded-lg bg-base-200 shadow-md transition-all hover:shadow-xl"
          >
            <a
              href="https://www.ismystreameronline.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="liftright img"
                className="overflow-hidden rounded-ss-lg"
                src={liftright}
              />
            </a>
          </div>

          <div data-aos="fade-up" className="lg:mt-8">
            <h3 className="mt-2 text-3xl font-semibold">LiftRight AI</h3>
            <p className="mt-2 text-base font-medium">
              LiftRight AI uses OpenAI&apos;s GPT 4 to analyze user-uploaded
              weightlifting videos and offer form improvements.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-8 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <h3 className="mt-2 text-3xl font-semibold">Stat Pick AI</h3>
            <p className="mt-2 text-base">
              Stat Pick AI uses OpenAI&apos;s GPT 4 Turbo to analyze NBA
              statistics and make player prop stat recommendations
            </p>
          </div>
          <div className="order-first lg:order-last">
            <div className="hover:scale-105 overflow-hidden rounded-lg bg-base-200 shadow-md transition-all hover:shadow-xl">
              <a
                href="https://www.ismystreameronline.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="stat pick ai img"
                  className="overflow-hidden rounded-ss-lg"
                  src={statpick}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <div className="hover:scale-105 overflow-hidden rounded-lg bg-base-200 shadow-md transition-all hover:shadow-xl">
            <a
              href="https://www.ismystreameronline.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="imsa pic"
                className="overflow-hidden rounded-ss-lg"
                src={imsa}
              />
            </a>
          </div>

          <div className="lg:mt-7">
            <h3 className="mt-2 text-3xl font-semibold">
              Is My Streamer Online
            </h3>
            <p className="mt-2 text-base">
              Is My Streamer Online tracks the online status of streamers across
              all platforms for easy access viewing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
