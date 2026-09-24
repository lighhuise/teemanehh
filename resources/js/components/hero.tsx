import CutoutBox from "@/components/ui/misc/cutout-box";

export default function Hero() {
    return(
        <div className={` px-6 pt-28 pb-14 -mt-24 relative z-0`}>
            <CutoutBox
                asWrapper
                position="bottom"
                className="bg-background w-full min-h-122 rounded-md p-6 grid place-content-center"
            >
                <h1 className="text-7xl max-w-2xl mx-auto text-center font-black tracking-tight">Teemane Heavy Haulage</h1>
            </CutoutBox>
        </div>
    )
}
