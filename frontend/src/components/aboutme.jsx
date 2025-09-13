import Headshot from "../assets/KaykoHeadshots.jpg";
import { useLanguage } from "../Context";

export default function AboutMe() {
  const { lang, setLang, t } = useLanguage();

  return (
    <section id="aboutme" className="flex flex-col items-center justify-center">
      {/* decorative header */}
      <div className="h-[25rem] text-center">decorative header</div>

      {/* content */}
      <div className="max-w-md md:max-w-2xl lg:max-w-6xl section-content text-black-700 dark:text-seagreen-200">
        <div className="subsection-content lg:text-left lg:text-base">
          
          {/* Headshot image */}
          <img
            src={Headshot}
            alt="Portrait"
            className="
              block mx-auto mb-4 max-w-xs object-cover object-center rounded-sm
              lg:float-left lg:mr-6 lg:mb-4 lg:max-w-sm lg:mx-0
            "
          />

          {/* Highlighted text */}
          <div className="subsection-content bg-seagreen-200 dark:bg-seablue-600 lg:ml-102 my-6 lg:mt-0">
            <div className="px-4 my-1 ml-2 lg:px-6 lg:my-2 lg:ml-4 text-left border-l-3 border-l-seagreen-400/80 dark:border-l-seayellow-600/80 text-md lg:text-lg">
              <div dangerouslySetInnerHTML={{ __html: t.about.intro }} />
            </div>
          </div>

          {/* Text wrapping around the image */}
          {t.about.body.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}

          {/* Clear float so the next section doesn’t slide beside the image */}
          <div className="clear-both" />
        </div>
      </div>
    </section>
  );
}