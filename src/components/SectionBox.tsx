import clsx from "clsx"

export const SectionBox = ({ children, disablePx, className,    disableMaxWidth }: {
    children: React.ReactNode,
    className?: string,
    disablePx?: boolean,
    disableMaxWidth?: boolean
}) => {
    return (
        <div className={clsx(
            "w-full flex flex-col items-center my-8 sm:my-12 md:my-24 gap-8 sm:gap-12 md:gap-16 relative",
            disablePx ? "" : "px-8",
            disableMaxWidth ? "" : "max-w-7xl",
            className
        )}>
            {children}
        </div>
    )
}