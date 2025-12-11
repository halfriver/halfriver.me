import { useState, useRef } from 'react';

// lightmode ginkgo 
import ginkgo1_light from "../assets/ginkgo2_light.png";
import ginkgo2_light from "../assets/ginkgo2_light.png";
import ginkgo_off1_light from "../assets/ginkgo_offset2_light.png";
import ginkgo_off2_light from "../assets/ginkgo_offset2_light.png";

// darkmode ginkgo 
import ginkgo1_dark from "../assets/seigaiha_top_light.png";
import ginkgo2_dark from "../assets/seigaiha_top_light_alt.png";
import ginkgo_off1_dark from "../assets/seigaiha_top_light_offset.png";
import ginkgo_off2_dark from "../assets/seigaiha_top_light_offset_alt.png";

// consider darkmode
import { useTheme } from "../Context";

export default function TopHeader({ scroll }) {
    const { dark } = useTheme();
    const sectionRef = useRef(null);
    const [distanceFromCenter, setDistanceFromCenter] = useState(0);

    const bgs = dark 
        ? [ ginkgo1_dark,
            ginkgo2_dark ]
        : [ ginkgo1_light,
            ginkgo2_light ]

    const bgs_off = dark 
        ? [ ginkgo_off1_dark,
            ginkgo_off2_dark ]
        : [ ginkgo_off1_light,
            ginkgo_off2_light ]

    const rowCount = 10;

    // parallax movement factor
    const baseMovement = 0.5

    return (
        <section id="top-header" className="relative -mb-10">
            <div className="flex flex-col">
                <div className="grid grid-cols-1">
                    {Array.from({ length: rowCount }).map((_, i) => {
                        const evenIndex = Math.floor(i / 2) % bgs.length;
                        const oddIndex  = Math.floor(i / 2) % bgs_off.length;

                        const bg = i % 2 === 0 
                            ? bgs_off[ oddIndex ] 
                            : bgs[ evenIndex ] ;

                        const marg = i % 2 === 0 ? "-my-6" : "-my-14";
                        
                        const flip = i % 4 === 0 ? "-scale-x-100" : ""; 
                        
                        // TOP rows move more, bottom rows move less
                        const weight = (rowCount - i) / rowCount;   // row 0 ≈ 1, last row ≈ small
                        let offset = scroll * baseMovement * weight;  // scroll down → move down

                        const shouldFlip = i % 4 === 0;
                        const scaleX = shouldFlip ? -1 : 1;

                        return (
                            <div
                                key={i}
                                className={`h-30 drop-shadow-xl/25 bg-contain bg-center bg-repeat-x ${marg} ${flip} `}
                                style={{ 
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "auto 100%", 
                                    transform: `translateY(${offset}px) scaleX(${scaleX})`,
                                    transition: "transform 0.15s ease-out",
                                    zIndex: 20 - i
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


{/* treetop fade */} 
{/* <div className="" 
    style={{
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)", 
        WebkitMaskRepeat: "no-repeat", WebkitMaskSize: "100% 100%", 
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)", 
        maskRepeat: "no-repeat", maskSize: "100% 100%", 
    }} > 
    <div className="grid grid-cols-1"> 
        {Array.from({ length: 4 }).map((_, i) => { 
            const bg = i % 2 === 0 ? seigaiha_light : seigaiha_light_offset; 
            return ( 
                <div 
                    key={i} 
                    className="min-h-18 bg-contain bg-center bg-repeat -my-4" 
                    style={{ backgroundImage: url(${bg}) }} 
                /> 
            ); 
        })}
    </div> 
</div> */}