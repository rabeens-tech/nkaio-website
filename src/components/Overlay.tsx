
interface IOverlay {
    opacity: number;
    zindex?: number;
}

const Overlay = (props: IOverlay) => {
    return <div className={`fixed top-0 left-0 bg-black/50 h-full w-full`} style={{ opacity: props.opacity, zIndex: props.zindex }}></div>;
}


export default Overlay