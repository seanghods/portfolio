import { Button } from "react-daisyui";
import resumeP1 from "@/assets/resume/sean-ghods-resume-p1.jpg";
import resumeP2 from "@/assets/resume/sean-ghods-resume-p2.jpg";

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/sean-ghods-resume.pdf";
    link.download = "Sean_Ghods_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="py-8 lg:py-20" id="resume">
      <div className="container">
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-4xl font-semibold text-base-content text-gradient-light">
            Resume
          </h2>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-6">
          <div
            data-aos="fade-up"
            className="flex gap-3 justify-center items-center"
          >
            <img
              src={resumeP1}
              className="rounded-lg w-1/3 h-1/3"
              alt="pic of resume page 1"
            />
            <img
              src={resumeP2}
              className="rounded-lg w-1/3 h-1/3"
              alt="pic of resume page 1"
            />
          </div>
          <div data-aos="fade-up">
            <Button onClick={handleDownload} color="primary">
              Download Resume
            </Button>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <i className="devicon-github-original text-[60px]" />
            <div>View my github here:</div>
            <a
              className="text-gradient-light hover:brightness-110"
              href="https://github.com/seanghods"
            >
              https://github.com/seanghods.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
