// lightmode seigaiha
import seigaiha_light from "../assets/seigaiha_bottom_light.png";
import seigaiha_light_offset from "../assets/seigaiha_bottom_light_offset.png";
import seigaiha_light_top from "../assets/seigaiha_bottom_light_offset_top.png";
import wave_left_light from "../assets/footer_wave_left_light.png";
import wave_right_light from "../assets/footer_wave_right_light.png";

// darkmode seigaiha
import seigaiha_dark from "../assets/seigaiha_bottom_dark.png";
import seigaiha_dark_offset from "../assets/seigaiha_bottom_dark_offset.png";
import seigaiha_dark_top from "../assets/seigaiha_bottom_dark_offset_top.png";
import wave_left_dark from "../assets/footer_wave_left_dark.png";
import wave_right_dark from "../assets/footer_wave_right_dark.png";

// consider darkmode
import { useTheme } from "../Context";

export default function BottomFooter() {
    const { dark } = useTheme();

    // light/dark assignment
    const seigaiha = dark  ? seigaiha_dark : seigaiha_light;
    const seigaiha_offset = dark ? seigaiha_dark_offset : seigaiha_light_offset;
    const seigaiha_top = dark ? seigaiha_dark_top : seigaiha_light_top;
    const wave_left = dark ? wave_left_dark : wave_left_light;
    const wave_right = dark ? wave_right_dark : wave_right_light;

    return (
        <section id="bottom-footer" className="mt-10 md:mt-20">
            
            <div className="relative h-20">
                {/* copyright */}
                <div className="max-w-6xl mx-auto flex justify-center xl:justify-end relative">
                    <div className="text-xs z-20">
                        © 2025 Kayko Ohkawa
                    </div>
                </div>
                {/* left and right waves */}
                <img 
                    src={wave_left} 
                    className="h-30 md:h-50 absolute bottom-0 left-0 drop-shadow-xl/25 z-0"
                />
                <img 
                    src={wave_right} 
                    className="h-30 md:h-50 absolute bottom-0 right-0 drop-shadow-xl/25 z-0"
                />
            </div>

            {/* seigaiha */}
            <div className="grid grid-cols-1">
                {/* top seigaiha */}
                <div 
                    className="h-19 bg-contain bg-center bg-repeat -mb-4 z-10"
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