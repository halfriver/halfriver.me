import { useTheme, useLanguage } from "../Context";

export default function Divider({ image, alt = "divider"}) {
  const { dark } = useTheme();
  
  return (
    <div className={'w-full flex justify-center my-[1rem] lg:my-[3rem]'}>
      <img src={image} alt={alt} className="max-w-[15rem] object-cover object-center" />
    </div>
  );
}