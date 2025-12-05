// lightmode seigaiha
import seigaiha_light from "../assets/seigaiha_bottom_light.png";
import seigaiha_light_offset from "../assets/seigaiha_bottom_light_offset.png";
import seigaiha_light_top from "../assets/seigaiha_bottom_light_offset_top.png";
import wave_light from "../assets/bottomwave_light.png";

// darkmode seigaiha
import seigaiha_dark from "../assets/seigaiha_bottom_dark.png";
import seigaiha_dark_offset from "../assets/seigaiha_bottom_dark_offset.png";
import seigaiha_dark_top from "../assets/seigaiha_bottom_dark_offset_top.png";
import wave_dark from "../assets/bottomwave_light.png";

// consider darkmode
import { useTheme } from "../Context";

export default function BottomFooter() {
    const { dark } = useTheme();

    const seigaiha = dark 
        ? seigaiha_dark
        : seigaiha_light;

    const seigaiha_offset = dark 
        ? seigaiha_dark_offset
        : seigaiha_light_offset;

    const seigaiha_top = dark 
        ? seigaiha_dark_top
        : seigaiha_light_top;

    const wave = dark 
        ? wave_dark
        : wave_light;

    // const froth = dark 
    //     ? froth_light
    //     : froth_dark;

    return (
        <section id="bottom-footer" className="relative -mt-50 -mb-8" >
            {/* copyright */}
            <div className="w-full">
                <div className="max-w-6xl mx-auto flex justify-end relative">
                    <div className="p-4 mt-18 text-xs z-20">
                        © 2025 Kayko Ohkawa
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                {/* wave */}
                <div 
                    className="h-[6.7rem] bg-contain bg-center bg-no-repeat -my-1"
                    style={{ 
                        backgroundImage: `url(${wave})`,
                        backgroundSize: "auto 100%",
                    }}
                />
            </div>
            <div className="grid grid-cols-2 gap-[20rem]">

                {/* froth */}
                <div 
                    className="h-[6.7rem] bg-contain bg-right bg-repeat-x -mt-26"
                    style={{ 
                        backgroundImage: `url(${wave})`,
                        backgroundSize: "auto 100%",
                    }}
                />
                <div 
                    className="h-[6.7rem] bg-contain bg-left bg-repeat-x -mt-26"
                    style={{ 
                        backgroundImage: `url(${wave})`,
                        backgroundSize: "auto 100%",
                    }}
                />
            </div>

            {/* seigaiha */}
            <div className="grid grid-cols-1">
                {/* top seigaiha */}
                <div 
                    className="h-19 bg-contain bg-center bg-repeat -mb-4 -mt-9"
                    style={{ 
                        backgroundImage: `url(${seigaiha_top})`,
                        backgroundSize: "auto 100%",
                    }}
                />

                {/* seigaiha rows */}
                {Array.from({ length: 4 }).map((_, i) => {
                    const bg = i % 2 === 0 ? seigaiha : seigaiha_offset;
                    const flip = i % 4 === 0 ? "-scale-x-100" : ""; 

                    return (
                        <div
                            key={i}
                            className={`h-18 bg-contain bg-center bg-repeat -my-4 ${flip}`}
                            style={{ 
                                backgroundImage: `url(${bg})`,
                                backgroundSize: "auto 100%",
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
}