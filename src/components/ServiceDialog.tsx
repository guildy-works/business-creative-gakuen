import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react"
import { Button3 } from "./Button3"
import { Button1 } from "./Button1"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"

export const ServiceDialog = ({ children, buttonText }: { children: React.ReactNode, buttonText?: string }) => {
    let [isOpen, setIsOpen] = useState(() => false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <FadeAndSlideScrollTriggerAnimation>
                <Button1
                    onClick={open}
                    className="!min-w-52 mt-1 h-16 bg-color3 text-white py-2 rounded-md hover:bg-color3/60 transition duration-300"
                >
                    {buttonText ?? "詳細を見る"}
                </Button1>
            </FadeAndSlideScrollTriggerAnimation>

            <Dialog open={isOpen} as="div"
                className="relative z-20 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0"
                transition onClose={close}>
                <DialogBackdrop transition className="fixed inset-0 bg-black/50 duration-300 ease-out data-[closed]:opacity-0" />

                <div className="fixed inset-0 w-screen">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="overflow-auto flex flex-col z-50 max-h-[94svh] rounded-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {children}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
