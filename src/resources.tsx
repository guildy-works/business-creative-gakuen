import Ryo from '@/assets/members/ryo.png'
import Rin from '@/assets/members/りん.jpg'
import 田口雅弘 from '@/assets/members/田口雅弘.jpg'
import 宮本 from '@/assets/members/宮本.jpg'
import たけうちまりえ from '@/assets/members/たけうちまりえ.jpg'
import 早川優衣 from '@/assets/members/早川優衣.jpg'

import Issue1 from "@/assets/issue1.svg";
import Issue2 from "@/assets/issue2.svg";
import Issue3 from "@/assets/issue3.svg";
import Issue4 from "@/assets/issue4.svg";
import Issue5 from "@/assets/issue5.svg";
import Issue6 from "@/assets/issue6.svg";
import Issue7 from "@/assets/issue7.svg";
import Issue8 from "@/assets/issue8.svg";
import Balloon1 from "@/assets/balloon1.svg";
import CommingSoon from "@/assets/comming-soon.svg";

export const resources = {
    siteTitle: "中四国クリエイティヴ学園",
    top: {
        topTitle: "#アイデア、爆上げ",
    },

    host: "https://tsunagaru-lab.jp",
    faq: [
        {
            q: "中四国地方以外の人も参加できますか？",
            a: "もちろんです！ ただしイベントは中四国がメインとなるのでご了承ください"
        },
        {
            q: "入会費はいくらですか？",
            a: <>
                入会費は完全無料です！なお、有料プランを選択された場合は月額料金が発生します<br />
                無料プランをご利用の場合は、永年無料でご利用いただけます
            </>
        },
        {
            q: "クレジット引き落とし日はいつですか？",
            a: <>
                入会した日が会費の引き落とし日となります（体験期間中の場合は、体験キャンペーン終了日が引き落とし日です）<br />
                また、体験期間中に解約した場合は料金が発生することはありませんので、ご安心ください
            </>
        },
        {
            q: "いつでも退会できますか？",
            a: "いつでも退会可能です! メンバー専用LINEにて、お問い合わせお願いします"
        },
        {
            q: "プランの変更はできますか？",
            a: "可能です！ メンバー専用LINEにて、お問い合わせお願いします"
        }
    ],
    links: {
        mail: "mailto:tsunalab.info@gmail.com",
        line: "https://s.lmes.jp/landing-qr/2006439228-oBz5G5DO?uLand=NxpEQ9",
        discord: "https://discord.gg/J8chE8qKky?openExternalBrowser=1",
        personalLine: "https://s.lmes.jp/landing-qr/2006439228-oBz5G5DO?uLand=NxpEQ9",
        personalInstagram: "https://www.instagram.com/tsuna_lab?igsh=aGVidzA2czQzcjk3",
        discordOfficial: "https://discord.com/",
    },
    members1: [

    ],
    members2: [
        {
            name: "RYO",
            job: <>SNSインフルエンサー<br />パーソナルトレーナー</>,
            details: <>
                Instagram フォロワー42万人<br />
                YouTube チャンネル登録者21万人<br />
                TikTok フォロワー18万人<br /><br />

                パーソナルジム ドリームビルド 設立<br />
                ゆるダン体操 書籍販売
            </>,
            image: Ryo
        },
        {
            name: "早川優衣",
            job: <>
                BMXレーサー<br />
                <div className='mt-1 text-[1.2rem] font-bold' style={{ lineHeight: '1.3rem' }}>
                    全日本自転車連盟公式<br />
                    アンバサダー
                </div>
            </>,
            details: <>
                2024年の全日本選手権年齢別クラスで優勝し、2025年の7月末の世界選手権への出場決定<br />
                2023年相席食堂上半期おかわり賞ランキング、第８位入賞<br />
                実は…千鳥のノブの姪っ子！<br />
            </>,
            image: 早川優衣
        },

        {
            name: "小町りん",
            job: <>
                SNSインフルエンサー<br />
                クリエイター
            </>,
            details: <>
                広島で活躍するインフルエンサー<br />
                YouTubeチャンネル登録者13万人<br /><br />

                TikTokやInstagramでも活動しており、<br />
                1日でグッズ販売売上を数十万円を記録
            </>,
            image: Rin
        },

        {
            name: "田口雅弘",
            job: <>TAG株式会社代表取締役<br />家電品コンシェルジュ<br />イチミリセミナー講師</>,
            details: <>
                講演家として各地でポンコツ人生から見つけたヒントを発信中<br />
                YouTubeなどのSNSで配信活動もしているパワフル社長
            </>,
            image: 田口雅弘
        },
        {
            name: "宮本",
            job: <>AIデザインアーキテクト<br />mori studio 代表</>,
            details: <>
                最新のAI技術とデザインの知見を融合させ、<br />
                企業のデジタルトランスフォーメーションをリード<br />
                クリエイティブ×テクノロジーの新しい可能性を追求し、<br />
                次世代のビジネスソリューションを生み出すWebの万屋さん
            </>,
            image: 宮本
        },
        {
            name: <>たけうち<br />まりえ</>,
            job: "デザイナー　Jalart design",
            details: <>
                デジタル(チラシ、名刺、ロゴなど)から<br />
                アナログ(似顔絵、壁画など)まで<br />
                短納期・低予算で承ります<br />
                広島ものまね軍団のメンバーでもあり、<br />
                県内外のイベントで歌まねをしている
            </>,
            image: たけうちまりえ
        },
    ],
    introduces: [
        {
            num: "01",
            title: <>中四国の<br />⼈脈がつながる</>,
            content: <>
                交流会や各種イベントの開催<br />
                チャット上での交流<br />
                フリーランス、経営者、<br />
                学生や社会人とつながる
            </>,
            image: Issue1,
        },
        {
            num: "02",
            title: <>中四国で<br />集客や採⽤につながる</>,
            content: <>
                求人や案件、仕事の受発注<br />
                マルシェなどのイベント<br />
                商品やサービスの宣伝し放題
            </>,
            image: Issue7,
        },
        {
            num: "03",
            title: <>中四国で<br />スキルアップにつながる</>,
            content: <>
                朝活やセミナーの開催<br />
                スキルやノウハウなど<br />
                色んな情報をメンバー同士でシェア
            </>,
            image: Issue6,
        },
        {
            num: "04",
            title: <>中四国の<br />情報がつながる</>,
            content: <>
                中四国のリアルやトレンド<br />
                有益情報を受け取ることができる<br />
                情報を投稿すれば賞⾦が貰えるゲームも開催
            </>,
            image: Issue5,
        },
        // {
        //     num: "05",
        //     title: "中四国を盛り上げられる",
        //     content: <>
        //         行政や民間と協力、協業して<br />
        //         各メンバーの力と知恵で<br />
        //         地域資源、問題、経済の課題解決に取り組む
        //     </>,
        //     image: Issue4,
        // },
        {
            num: "05",
            title: "経済圏の構築",
            content: <>
                あのキャラクターがNFTに？<br />
                デジタルトークンを活用した地域創生
            </>,
            image: Issue8,
            baloon: CommingSoon,
        },
    ],
}
