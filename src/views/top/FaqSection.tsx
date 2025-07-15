import { SectionBox } from "@/components/SectionBox"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md"
import { resources } from "@/resources";

export const FaqSection = () => {
    return (
        <SectionBox disableMaxWidth className="mx-auto max-w-4xl !gap-8">
            <h2 className="text-title1 w-full border-b-2 border-color3 pb-4 text-center border-dotted max-w-md">Q&A</h2>

            <div className='w-full divide-y-2 divide-color1/5 border-2 border-black/5 rounded-xl'>
                {resources?.faq.map((x, i) => <Disclosure as="div"
                    className="w-full relative group p-2 md:p-6"
                    key={i}
                >
                    <DisclosureButton className="py-2 px-3 overflow-hidden text-title4 font-bold cursor-pointer group w-full flex items-center justify-start gap-2">
                        <span className="bg-color3 text-white rounded-md  font-bold px-4 py-2 size-10 flex justify-center items-center">
                            Q
                        </span>
                        <h3 className="ml-3 text-start text-title3 text-color1">
                            {x.q}
                        </h3>
                        <div className="ml-auto ">
                            <MdArrowDownward
                                className="size-5 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                        </div>

                    </DisclosureButton>
                    <DisclosurePanel transition
                        className="mt-4 p-1 pt-0 px-3 whitespace-break-spaces transition duration-200 ease-out overflow-hidden data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                        <div className="flex items-center gap-2">
                            <span className="mb-auto size-10 bg-color2 text-white font-bold rounded-md px-4 py-2 flex items-center justify-center">
                                A
                            </span>
                            <p className="ml-3 text-start text-title4 text-gray-600">
                                {x.a}
                            </p>
                        </div>
                    </DisclosurePanel>
                </Disclosure>)
                }
            </div>
        </SectionBox>
    )
}
