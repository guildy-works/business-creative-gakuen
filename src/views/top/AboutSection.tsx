import { BlackTextBox } from "@/components/BlackTextBox";
import decoration1 from "@/assets/decoration1.png";
import Image from 'next-export-optimize-images/picture';
import { NumberBorderBox } from "@/components/NumberBorderBox";

import Text01 from "@/assets/01.png";
import Text02 from "@/assets/02.png";
import Text03 from "@/assets/03.png";
import Text04 from "@/assets/04.png";
import Text05 from "@/assets/05.png";

import About01 from "@/assets/about01.png";
import About02 from "@/assets/about02.png";
import About03 from "@/assets/about03.png";
import About04 from "@/assets/about04.png";
import About05 from "@/assets/フリー商談会.png";
import About06 from "@/assets/discord.png";

import Chat1 from "@/assets/chat1.png";
import Chat2 from "@/assets/chat2.png";
import Chat3 from "@/assets/chat3.png";

import Link from "next/link";
import { resources } from "@/resources";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";

export default function AboutSection() {
    return (
        <div
            className="bg-image flex flex-col items-center justify-center max-w-6xl mx-auto gap-12 py-8 px-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 sm:py-12 md:py-24">
            <BlackTextBox className="text-center !p-8 !py-6" isOutline={false}>
                <h2 className="text-title2 font-nikokaku tracking-tighter">出会いから<span className="text-color2">アイデア</span>を</h2>
                <h3 className="text-[1.1rem] tracking-[0.08rem] mt-2 font-nikokaku">
                    <span className="text-red-600">初心者から上級者</span>
                    が集まり、スキルアップを実現
                </h3>
            </BlackTextBox>

            <BlackTextBox className="ml-auto flex py-6" isOutline>
                <div className="mt-2">
                    <svg className="animate-pulse-x"  width="20" height="20" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-title4 font-bold">
                        <span>中四国最大級</span><br />
                        <span >オンラインコミュニティ</span>
                    </h2>
                    <h3 className="text-size-p mt-4 font-dot pr-24">
                        ビジネスに必要な<br />
                        <span className="text-color2">クリエイティブやマーケティングを</span><br />
                        学んでシェアしてスキルアップ
                    </h3>
                    <Image src={Chat1} alt="Background" className="absolute bottom-0 right-0 w-24" />
                </div>
            </BlackTextBox>

            <BlackTextBox className="mr-auto flex py-6 relative" isOutline>
                <div className="mt-2">
                    <svg className="animate-pulse-x"  width="20" height="20" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-title4 font-bold">
                        <span>経営者や</span><br />
                        <span >フリーランスと共創</span>
                    </h2>
                    <h3 className="text-size-p mt-4 font-dot  pr-20">
                        中四国で活躍している<br />
                        経営者やフリーランスと交流でき<br />
                        <span className="text-color2">中四国の人脈が広がる</span><br />
                    </h3>
                    <Image src={Chat2} alt="Background" className="absolute bottom-0 right-0 w-24" />
                </div>
            </BlackTextBox>


            <BlackTextBox className="ml-auto flex py-6 relative" isOutline>
                <div className="mt-2">
                    <svg className="animate-pulse-x" width="20" height="20" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5L0 10L0 0L8 5Z" fill="white" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-title4 font-bold">
                        <span>想像を超えた</span><br />
                        <span >クリエイティブの発見</span>
                    </h2>
                    <h3 className="text-size-p mt-4 font-dot pr-20">
                        同業種や他業種、異なる世代と繋がり<br />
                        <span className="text-color2">ひとりでは思いつかなかった</span><br />
                        <span className="text-color2">アイデアに出会える</span>
                    </h3>
                    <Image src={Chat3} alt="Background" className="absolute bottom-0 right-0 w-24" />
                </div>
            </BlackTextBox>

            <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 md:gap-12">
                <FadeAndSlideScrollTriggerAnimation>
                <Image src={decoration1} alt="Background" className="animate-pulse-y" />
                </FadeAndSlideScrollTriggerAnimation>

                <NumberBorderBox className="" numberText={Text01}>
                    <div className="flex p-2">
                        <div className="flex flex-col px-1">
                            <h3 className="border-b border-black mr-auto pb-2 text-title4 font-bold">メンバー交流</h3>
                            <p className="text-size-p mt-3 font-bold leading-4">
                                交流会やトークイベントなど、<br />
                                色んなイベントを毎月開催してます！<br />
                                中四国のフリーランスや経営者、<br />
                                クリエイターと繋がろう
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <Image src={About01} alt="About01" className="w-48" />
                        </div>
                    </div>
                </NumberBorderBox>

                <NumberBorderBox className="" numberText={Text02}>
                    <div className="flex p-2">
                        <div className="flex flex-col px-1">
                            <h3 className="border-b border-black mr-auto pb-2 text-title4 font-bold">宣伝や案件依頼</h3>
                            <p className="text-size-p mt-3 font-bold leading-4">
                                自分の事業やイベントの宣伝<br />
                                仕事依頼や求人募集ができる！<br />
                                名簿登録すると直接仕事や案件がメンバーから来るかも
                            </p>
                        </div>
                        <div className="flex flex-col px-1 w-60">
                            <Image src={About02} alt="Free Business Meeting" />
                        </div>
                    </div>
                </NumberBorderBox>
                <NumberBorderBox className="" numberText={Text03}>
                    <div className="flex p-2">
                        <div className="flex flex-col px-1">
                            <h3 className="border-b border-black mr-auto pb-2 text-title4 font-bold">朝活とオフィス</h3>
                            <p className="text-size-p mt-3 font-bold leading-4">
                                毎日みんなで朝活をし<br />
                                習慣化させ1日の生産性をUP！<br />
                                24時間解放のバーチャルオフィスも
                            </p>
                        </div>
                        <div className="flex flex-col px-1 w-60">
                            <Image src={About03} alt="Free Business Meeting" />
                        </div>
                    </div>
                </NumberBorderBox>

                <NumberBorderBox className="" numberText={Text04}>
                    <div className="flex p-2">
                        <div className="flex flex-col px-1">
                            <h3 className="border-b border-black mr-auto pb-2 text-title4 font-bold">部活と委員会</h3>
                            <p className="text-size-p mt-3 font-bold leading-4">
                                オンラインで交流！<br />
                                部活は趣味で繋がろう！<br />
                                委員会はトレンドや事例紹介など会議をしてスキルアップ！
                            </p>
                        </div>
                        <div className="flex flex-col px-1 w-60">
                            <Image src={About04} alt="Free Business Meeting" />
                        </div>
                    </div>
                </NumberBorderBox>

                <NumberBorderBox className="" numberText={Text05}>
                    <div className="flex p-2">
                        <div className="flex flex-col px-1">
                            <h3 className="border-b border-black mr-auto pb-2 text-title4 font-bold">情報の相互提供</h3>
                            <p className="text-size-p mt-3 font-bold leading-4">
                                自分のアイデアを共有しながら、<br />
                                メンバーのアイデアを参考にして、<br />
                                自分の事業やクリエイティブに落とし込もう
                            </p>
                        </div>
                        <div className="flex flex-col px-1 w-60">
                            <Image src={About05} alt="Free Business Meeting" />
                        </div>
                    </div>
                </NumberBorderBox>

                <NumberBorderBox className="w-full !p-0" innerClassName="!pt-0">
                    <div className="flex flex-col p-3 items-center justify-center">
                        <div className="flex flex-col px-1 items-center justify-center text-center">
                            <h3 className="text-title3 font-bold">実際の様子</h3>
                            <p className="text-size-p font-bold leading-4">
                                <Link href={resources.links.discordOfficial} target="_blank" className="text-color10 underline" rel="noopener noreferrer">Discord</Link>
                                という無料アプリを使用します
                            </p>
                        </div>
                        <div className="flex flex-col px-1 w-full mt-2">
                            <Image src={About06} alt="Free Business Meeting" />
                        </div>
                    </div>
                </NumberBorderBox>
            </div>
        </div>


    );
}


