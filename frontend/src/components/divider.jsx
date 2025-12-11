import { useState, useEffect, useRef } from 'react';

export default function Divider({ image_fish, image_wave, scroll, posit}) {
  const [fishOffset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;

    // distance from center → positive when below center, negative when above
    const distance = elementCenter - viewportCenter;

    // convert distance to motion
    const factor = 0.03;
    const initial = -50;
    let newOffset = -distance * factor + initial;

    // clamp so it doesn’t drift too far
    const max = 80;
    newOffset = Math.max(-max, Math.min(max, newOffset));

    setOffset(newOffset);
  }, [scroll]); // recalc whenever global scroll changes

  return (
    <div ref={ref} className={"w-full relative justify-center pt-[1rem] pb-[3rem] lg:pt-[3rem] min-h-[10rem]"}>
      {/* fish (above) */}
      <img 
        id={`divider-fish-${posit}`}
        src={image_fish} 
        className="absolute left-1/2 top-1/2 
               max-w-[17rem] z-20 drop-shadow-xl/25" 
        style={{
          transform: `translate(-50%, ${fishOffset}px)`,
          transition: "transform 0.15s ease-out"
        }}
      />

      {/* wave (beneath) */}
      <img 
        id={`divider-wave-${posit}`}
        src={image_wave} 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               max-w-[17rem] z-10 drop-shadow-xl/25" 
      />
    </div>
  );
}