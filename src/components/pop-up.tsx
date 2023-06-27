export default function PopUp({ open, message, type, handleClose }: { handleClose: () => void, open: boolean, message: string, type: "error" | "success" }) {
    const color = type === "error" ? "bg-red-700" : "bg-green-700";
    
    setTimeout(() => {
        handleClose();
    }, 2500);

    if(!open) return null;

    return (
        <span className={`absolute z-[100] ${color} bottom-16 px-4 py-2 mx-4 right-16 text-white font-bold rounded-xl`}>
            {message}
        </span>
    )
}