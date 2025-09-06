import '../styles/navbar.css';
import Headshot from "../assets/KaykoHeadshots-6.jpg";
import Fish from "../assets/placeholder1.png";
import LightFish from "../assets/placeholder1_light.png";
import { useTheme, useLanguage } from "../Context";

export default function AboutMe() {
  const { dark } = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <section id="aboutme" className="flex flex-col items-center justify-center">
      {/* decorative header */}
      <div className="h-120 text-center">decorative header</div>

      {/* header */}
      {/* <div className="max-w-5xl text-center text-seagreen-400 dark:text-seayellow-600 ">
        <h4 className="text-5xl m-6 mt-12">about me</h4>
      </div> */}

      {/* content */}
      <div className="max-w-6xl section-content text-black-700 dark:text-seagreen-200">
        <div className="subsection-content text-left text-base">
          {/* Floated image */}
          <img
            src={Headshot}
            alt="Portrait"
            className="float-left mr-6 mb-4 max-w-sm object-cover object-center rounded-sm"
          />

          <div className="subsection-content bg-seagreen-200 dark:bg-seablue-600 ml-102 mb-6">
            <div className="px-6 my-2 ml-4 text-left border-l-3 border-l-seagreen-400/80 dark:border-l-seayellow-600/80">
              <h5 dangerouslySetInnerHTML={{ __html: t.about.intro }} />
            </div>
          </div>

          {/* Text will flow/wrap around the image */}
          {t.about.body.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}

          {/* Clear float so the next section doesn’t slide beside the image */}
          <div className="clear-both" />
        </div>
      </div>

      <div className="mb-16">
        <img src={dark ? Fish : LightFish} alt="divider" className="max-w-[15rem] object-cover object-center"/>
      </div>
    </section>
  );
}