

function Divider1() {
    return (
        <div
            className="relative isolate h-32 w-full select-none overflow-hidden sm:h-44 lg:h-60 border-y-4 border-y-primary bg-linear-to-t from-primary to-primary/90 bg-fixed shadow-[inset_0_12px_28px_rgba(0,0,0,0.25),inset_0_-12px_28px_rgba(0,0,0,0.25)]"
            aria-hidden="true"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#000_4px,#000_8px)] bg-fixed"
            />
        </div>
    );
}

export default Divider1;

Divider1.displayName = 'Divider1';
