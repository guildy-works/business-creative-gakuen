import { SectionBox } from "@/components/SectionBox"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md"
import { resources } from "@/resources";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export const FaqSection = () => {
    return (
        <div className="bg-image3 p-8">
            <h2 className="text-title1 px-12 w-fit mx-auto text-center font-nikokaku bg-black text-white">Q&A</h2>
            <div className='w-full mt-4'>
                {resources?.faq.map((x, i) => (
                    <FadeAndSlideScrollTriggerAnimation key={i}>
                        <Disclosure as="div"
                            className="w-full relative group p-2"

                        >
                            <DisclosureButton className="py-2 px-3 overflow-hidden text-title5 font-bold cursor-pointer group w-full flex items-center justify-start gap-2 bg-black font-dot">
                                <span className="text-white px-4 py-2 size-10 flex justify-center items-center text-[2rem]">
                                    ?
                                </span>
                                <h3 className="ml-3 text-start text-title4  text-white">
                                    {x.q}
                                </h3>
                                <div className="ml-auto ">
                                    <MdArrowDownward
                                        className="size-5 text-white group-data-[hover]:fill-white group-data-[open]:rotate-180" />
                                </div>

                            </DisclosureButton>
                            <DisclosurePanel transition
                                className="bg-black p-1 px-3 whitespace-break-spaces transition duration-200 ease-out overflow-hidden data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                <div className="flex items-center gap-2 pb-4">

                                    <p className="ml-3 text-start text-title5 text-white">
                                        {x.a}
                                    </p>
                                </div>
                            </DisclosurePanel>
                        </Disclosure>
                    </FadeAndSlideScrollTriggerAnimation>
                ))
                }
            </div>
        </div >
    )
}
