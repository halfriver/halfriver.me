import MyResume from '../assets/OhkawaResume.pdf'
import { SquareArrowOutUpRight, Plus, Minus, CircleStar, CircleChevronDown, CircleChevronUp } from 'lucide-react';
import { useLanguage } from '../Context'; 

export default function CV() {
  const { lang, setLang, t } = useLanguage();
  
  return (
    <section id="cv" className="flex flex-col items-center justify-center text-black-700 dark:text-seagreen-200 py-5">
      <div className="section-content">

        {/* resume download subsection */}
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl subsection-content border-4 border-seagreen-200 dark:border-seablue-600"> 
          <div className="flex flex-col md:flex-row gap-6 px-4 items-center">

            {/* blurb */}
            <div className="w-full text-center md:text-left">
              <h6>{ t.cv.blurb }</h6>
            </div>

            {/* button */}
            <div>
              <a href={ MyResume } target="_blank" className="btn border-transparent text-offwhite bg-seagreen-400 hover:bg-seagreen-500 dark:text-black-700 dark:bg-seagreen-300 hover:dark:bg-seayellow-600 p-6" title="OhkawaResume.pdf" rel="noreferrer">
                { t.cv.button } <SquareArrowOutUpRight className="ml-2" />
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* timeline */}
      <div className="max-w-5xl section-content mt-12">

        {/* filters */}
        <form className="flex justify-end pb-8">
          {t.cv.tagLabel.map((tag) => (
            <input className="btn m-2" type="checkbox" name="frameworks" aria-label={tag} />
          ))}
          <input className="btn m-2 btn-square" type="reset" value="x"/>
        </form>
        
        {/* timeline items */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {t.cv.timeline.map((item, idx) => (
            <li key={idx}>

              {/* icon */}
              <div className="timeline-middle"><CircleStar /></div>

              {/* card positioning */}
              <div className={`${idx % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"} mb-10`}>

                {/* date */}
                <time className="italic text-base font-semibold">{item.date}</time>

                {/* card content */}
                <div className="text-start collapse collapse-arrow border-seagreen-200 dark:border-seablue-600 border-t-3">
                  <input type="checkbox" />

                  {/* title */}
                  <div className="collapse-title text-base">{item.title}</div>

                  {/* body */}
                  <div className="collapse-content text-sm">{item.body}</div>
                </div>
              </div>

              {/* line */}
              <hr className="bg-seagreen-400 dark:bg-seagreen-300" />
            
            </li>
          ))}
          
        </ul>
      </div>
    </section>
  );
}