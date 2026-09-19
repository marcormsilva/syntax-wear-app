interface OverlayProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
}

export const Overlay = ({ children, title, subtitle, className }: OverlayProps) => {
    return <div className={`absolute flex items-center w-full  text-center ${className}`}>

        <div className="text-white w-91 flex flex-col items-center ">
            <h2 className="text-xl font-medium leading-normal tracking-wider mb-2.5">{title}</h2>
            <h1 className="text-2xl leading-9 tracking-wider mb-10">{subtitle}</h1>

            <div className="flex gap-3.5">
                {children}
            </div>
        </div>

    </div>
}