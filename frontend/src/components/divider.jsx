import { useTheme, useLanguage } from "../Context";

export default function Divider({ image, alt = "divider", width = "max-w-[15rem]"}) {
  const { dark } = useTheme();
  
  return (
    <div className={"w-full flex justify-center my-[1rem] lg:my-[3rem] relative"}>
      <img src={image} alt={alt} className={`${width} object-cover object-center z-10`} />
    </div>
  );
}