import { useState } from "react";

export const Contact = () => {
  const [emailClicked, setEmailClicked] = useState(false);
  const copyEmailToClipboard = async () => {
    try {
      setEmailClicked(true);
      await navigator.clipboard.writeText("seanxghods@gmail.com");
      setTimeout(() => setEmailClicked(false), 500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <section className="py-8 lg:py-20" id="contact">
      <div className="container flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <h1
            data-aos="fade-right"
            className="text-4xl font-black tracking-tighter lg:text-4xl lg:leading-none"
          >
            Reach Out!
          </h1>
          <p data-aos="fade-left" className="w-3/4 text-lg">
            Email me at{" "}
            <span
              data-tip={
                emailClicked ? "Copied!" : "Click to copy email to clipboard"
              }
              className={`${
                emailClicked ? "opacity-100 tooltip-open" : "opacity-100"
              } tooltip text-gradient-light cursor-pointer transition-opacity duration-150 ease-in-out`}
              onClick={() => {
                copyEmailToClipboard();
              }}
            >
              seanxghods@gmail.com
            </span>{" "}
            for any inquiries or opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};
