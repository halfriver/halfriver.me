import '../styles/navbar.css';
import Fish from "../assets/placeholder2.png";
import LightFish from "../assets/placeholder2_light.png";
import { useTheme, useLanguage } from '../Context'; 

export default function Contact() {
  const { dark } = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <section id="contact" className="flex flex-col items-center justify-center text-black-700 dark:text-seagreen-200">
      {/* divider */}
      <div className="mb-16">
        <img src={dark ? Fish : LightFish} alt="divider" className="max-w-[7.5rem] object-cover object-center"/>
      </div>
      

      <div className="max-w-lg text-center mt-12">
        <div className="max-w-5xl text-center text-seagreen-400 dark:text-seayellow-600">
          <h4 className="mb-6">{ t.contact.title }</h4>
        </div>
        <p className="mb-6">
          { t.contact.body }
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* copyright */}
      <div className="w-6xl my-16 text-right text-xs">
        © 2025 Kayko Ohkawa
      </div>

      {/* decorative footer */}
      <div className="h-80 items-center">decorative footer</div>
    </section>
  );
}