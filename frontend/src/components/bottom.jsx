import seigaiha_light from "../assets/seigaiha_lightblue.png";

export default function BottomFooter() {
    return (
        <section id="bottom-footer" className="relative -mt-60 -mb-10"
            style={{
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
            }}
        >
            <div className="grid grid-cols-1">
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2.png)] bg-center bg-repeat -my-4"/>
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2_offset.png)] bg-center bg-repeat -my-4"/>
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2.png)] bg-center bg-repeat -my-4"/>
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2_offset.png)] bg-center bg-repeat -my-4"/>
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2.png)] bg-center bg-repeat -my-4"/>
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2_offset.png)] bg-center bg-repeat -my-4"/>
            <div className="min-h-18 bg-contain bg-[url(../assets/seigaiha_lightblue2.png)] bg-center bg-repeat -my-4"/>
            </div>
        </section>
    );
}