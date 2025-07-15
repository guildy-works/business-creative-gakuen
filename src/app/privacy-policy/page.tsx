'use client'

import { SectionType1 } from "@/components/SectionType1"
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation"
import { DOMMotionComponents, motion, useInView } from "motion/react"
import { ReactNode } from "react"

export default function PrivacyPolicy() {
    return (<div className=" flex flex-col relative">
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-title1 font-bold text-center mb-8">プライバシーポリシー</h1>

            {/* 前文 */}
            <section className="mb-6">
                <p>
                    つながるラボ運営者（以下「サロン運営者」といいます。）は、<br/>
                    本ウェブサイト上で提供するサービス（以下「本サロン」といいます）における、<br/>
                    メンバーの個人情報の取扱いについて、<br/>
                    以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
                </p>
            </section>

            {/* 第1条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第1条（個人情報）</h2>
                <p>
                    個人情報とは、個人に関する情報であり、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの
                    （他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を指します。
                </p>
            </section>

            {/* 第2条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第2条（個人情報を収集・利用する目的）</h2>
                <p>サロン運営者が個人情報を収集・利用する目的は以下のとおりです。</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>本サロンの提供・運営のため</li>
                    <li>メンバーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                    <li>
                        メンバーが利用中のサービスの新機能、更新情報、キャンペーン等及びサロン運営者が提供する関連サービスの案内のメールを送付するため
                    </li>
                    <li>有料サービスにおいて、メンバーに利用料金を請求するため</li>
                    <li>本サロンを通じたサービスの提供及び紹介</li>
                    <li>上記の利用目的に付随する目的</li>
                </ul>
            </section>

            {/* 第3条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第3条（利用目的の変更）</h2>
                <p>
                    個人情報の利用目的を、関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合にはメンバーに通知又は公表します。
                </p>
            </section>

            {/* 第4条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第4条（個人情報の適正な取得）</h2>
                <p>サロン運営者は、適正に個人情報を取得し、偽りその他不正の手段により取得しません。</p>
            </section>

            {/* 第5条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第5条（個人情報の安全管理）</h2>
                <p>
                    サロン運営者は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、
                    サロン運営者の従業員に対し、必要かつ適切な監督を行います。また、サロン運営者は、個人情報の取扱いの全部又は一部を委託する場合は、
                    委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
                </p>
            </section>

            {/* 第6条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第6条（個人情報の第三者提供）</h2>
                <p>
                    本サロンは、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、
                    委託を受けた者に対する必要かつ適切な監督を行うこととします。
                </p>
            </section>

            {/* 第7条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第7条（個人情報の開示）</h2>
                <p>
                    サロン運営者は、本人から個人情報の開示を求められたときは、本人に対し遅滞なくこれを開示します。
                    ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合にはその旨を遅滞なく通知します。
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                    <li>サロン運営者の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                    <li>その他法令に違反することとなる場合</li>
                </ul>
            </section>

            {/* 第8条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第8条（個人情報の訂正および削除）</h2>
                <p>
                    メンバーは、サロン運営者の保有する自己の個人情報が誤った情報である場合には、個人情報の訂正、追加または削除（以下「訂正等」といいます）を請求することができます。
                    サロン運営者は、メンバーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
                </p>
            </section>

            {/* 第9条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第9条（個人情報の利用停止等）</h2>
                <p>
                    メンバーは、メンバー本人の個人情報が「あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由」又は
                    「偽りその他不正の手段により取得されたものであるという理由」により、個人情報保護法の定めに基づきその利用の停止又は消去（以下「利用停止等」といいます）を求めることができます。
                </p>
            </section>

            {/* 第10条 */}
            <section className="mb-6">
                <h2 className="text-title2 font-bold mb-4">第10条（継続的改善）</h2>
                <p>
                    サロン運営者は、個人情報の取り扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、プライバシーポリシーを変更することがあります。
                    本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、メンバーに通知することなく変更することができるものとします。
                </p>
            </section>

            {/* 第11条 */}
            <section>
                <h2 className="text-title2 font-bold mb-4">第11条（お問い合わせ窓口）</h2>
                <p>
                    開示等のお申出、ご意見、ご質問、苦情、その他個人情報の取り扱いに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <p className="mt-4">
                    Eメールアドレス：{" "}
                    <a
                        href="mailto:tsunalab.info@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        tsunalab.info@gmail.com
                    </a>
                </p>
            </section>
        </div>

    </div>)
}
