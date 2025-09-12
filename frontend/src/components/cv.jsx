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
              <a href={ MyResume } target="_blank" className="btn border-transparent text-offwhite bg-seagreen-400 hover:bg-seagreen-500 dark:text-black-700 dark:bg-seagreen-300 hover:dark:bg-seayellow-600" title="OhkawaResume.pdf" rel="noreferrer">
                { t.cv.button } <SquareArrowOutUpRight className="ml-2" />
              </a>
            </div>
          </div>
          
        </div>

        {/* timeline */}
      </div>

      {/* <div className="max-w-5xl section-content mt-6">
        <div className="filter mb-6">
          <input className="btn border-transparent text-offwhite bg-seagreen-400 hover:bg-seagreen-500 dark:text-black-700 dark:bg-seagreen-300 hover:dark:bg-seayellow-600 filter-reset" type="radio" name="metaframeworks" aria-label="All"/>
          <input className="btn border-transparent text-offwhite bg-seagreen-400 hover:bg-seagreen-500 dark:text-black-700 dark:bg-seagreen-300 hover:dark:bg-seayellow-600" type="radio" name="metaframeworks" aria-label="Sveltekit"/>
          <input className="btn border-transparent text-offwhite bg-seagreen-400 hover:bg-seagreen-500 dark:text-black-700 dark:bg-seagreen-300 hover:dark:bg-seayellow-600" type="radio" name="metaframeworks" aria-label="Nuxt"/>
          <input className="btn border-transparent text-offwhite bg-seagreen-400 hover:bg-seagreen-500 dark:text-black-700 dark:bg-seagreen-300 hover:dark:bg-seayellow-600" type="radio" name="metaframeworks" aria-label="Next.js"/>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <CircleStar />
            </div>
            <div className="timeline-start mb-10">
              <time className="font-mono italic text-end">1984</time>
              <div className="collapse bg-base-100 border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
              been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
              and has evolved through seven distinct forms
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2001</time>
              <div className="text-lg font-black">iPod</div>
              The iPod is a discontinued series of portable media players and multi-purpose mobile devices
              designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
              8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
              million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
              over 20 years, the iPod brand is the oldest to be discontinued by Apple
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2007</time>
              <div className="text-lg font-black">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
              operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
              January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
              of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
              accounts for 15.6% of global smartphone market share
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start md:text-end">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">Apple Watch</div>
              The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
              tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
              iOS and other Apple products and services
            </div>
          </li>
        </ul>
      </div> */}
    </section>
  );
}