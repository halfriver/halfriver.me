import { useTheme } from "../Context";

export default function Divider({ image, alt = "divider", width = "max-w-[15rem]"}) {
  const { dark } = useTheme();
  
  return (
    <div className={"w-full flex justify-center mt-[1rem] mb-[3rem] lg:mt-[3rem]"}>
      <img src={image} alt={alt} className={`${width} object-cover object-center z-10`} />
    </div>
  );
}