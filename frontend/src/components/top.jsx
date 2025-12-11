// lightmode seigaiha 
import seigaiha_light from "../assets/seigaiha_top_light.png";
import seigaiha_light_offset from "../assets/seigaiha_top_light_offset.png";
import seigaiha_light_alt from "../assets/seigaiha_top_light_alt.png";
import seigaiha_light_alt2 from "../assets/seigaiha_top_light_alt2.png";
import seigaiha_light_offset_alt from "../assets/seigaiha_top_light_offset_alt.png";
import takanoha_light from '../assets/takanoha_light.png';

// darkmode seigaiha
import seigaiha_dark from "../assets/seigaiha_top_light.png";
import seigaiha_dark_offset from "../assets/seigaiha_top_light_offset.png";
import seigaiha_dark_alt from "../assets/seigaiha_top_light_alt.png";
import seigaiha_dark_alt2 from "../assets/seigaiha_top_light_alt2.png";
import seigaiha_dark_offset_alt from "../assets/seigaiha_top_light_offset_alt.png";
import takanoha_dark from '../assets/takanoha_dark.png';

// consider darkmode
import { useTheme } from "../Context";

export default function TopHeader({ scroll }) {
    const { dark } = useTheme();

    const bgs = dark 
        ? [ seigaiha_light,
            seigaiha_light_alt,
            seigaiha_light_alt2 ]
        : [ seigaiha_dark,
            seigaiha_dark_alt,
            seigaiha_dark_alt2 ]

    const bgs_off = dark 
        ? [ seigaiha_light_offset,
            seigaiha_light_offset_alt ]
        : [ seigaiha_dark_offset,
            seigaiha_dark_offset_alt ] 

    const takanoha = dark 
        ? takanoha_dark
        : takanoha_light

    return (
        <section id="top-header" className="relative -mb-50">
            <div className="flex flex-col">
                {/* top banner takanoha */}
                <div className="grid grid-cols-1">
                    <div className={"w-full flex justify-center mt-[18rem] absolute"}>
                        <img src={takanoha} className="w-[4rem] object-cover object-center" />
                    </div>
                </div>
                {/* treetop */}
                <div className="grid grid-cols-1">
                    {Array.from({ length: 6 }).map((_, i) => {
                        const evenIndex = Math.floor(i / 2) % bgs.length;
                        const oddIndex  = Math.floor(i / 2) % bgs_off.length;

                        const bg = i % 2 === 0 
                            ? bgs_off[ oddIndex ] 
                            : bgs[ evenIndex ] ;
                        
                        const flip = i % 4 === 0 ? "-scale-x-100" : ""; 
                        
                        return (
                            <div
                                key={i}
                                className={`h-18 drop-shadow-xl/25 bg-contain bg-center bg-repeat-x -my-4 ${flip}`}
                                style={{ 
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "auto 100%"
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            
            {/* treetop split */}
            <div className="flex flex-col mb-20">
            {Array.from({ length: 7 }).map((_, i) => {
                const bg = bgs[ i % bgs.length ];
                const flip_left = i % 4 === 0 ? "-scale-x-100 bg-left" : "bg-right"; 
                const flip_right = i % 4 === 0 ? "-scale-x-100 bg-right" : "bg-left"; 

                return (
                <div
                    key={i}
                    className="grid grid-cols-2"
                    style={{ columnGap: `${i * 9.4 + 9.4}rem` }}   // gap increases per iteration
                >
                    {/* left column */}
                    <div
                    className={`h-18 drop-shadow-xl/25 bg-contain bg-repeat-x -my-4 ${flip_left}`}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "auto 100%", 
                    }}
                    />

                    {/* right column */}
                    <div
                    className={`h-18 drop-shadow-xl/25 bg-contain bg-repeat-x -my-4 ${flip_right}`}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "auto 100%",
                    }}
                    />
                </div>
                );
            })}
            </div>
        </section>
    );
}