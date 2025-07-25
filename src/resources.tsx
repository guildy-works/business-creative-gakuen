import Ryo from '@/assets/members/ryo.png'
import Rin from '@/assets/members/りん.jpg'
import 田口雅弘 from '@/assets/members/田口雅弘.jpg'
import 宮本 from '@/assets/members/宮本.jpg'
import たけうちまりえ from '@/assets/members/たけうちまりえ.jpg'
import 早川優衣 from '@/assets/members/早川優衣.jpg'

export const resources = {
    siteTitle: "中四国クリエイティブ学園",
    top: {
        topTitle: "#アイデア、爆上げ",
    },
    host: "http://chugoku-shikoku.jp",
    faq: [
        {
            q: "どんな人が入ってますか",
            a: "フリーランス、SNS運用者、エンジニア、デザイナー、マーケター、映像クリエイター、LINE構築者、AI関連、イラストレーター、カメラマン、ライター、広告運用者、アフィリエイターなど幅広い業種の人がいます。"
        },
        {
            q: "中四国以外の人も入れますか",
            a: <>
                このコミュニティは“中四国びいき”です。<br />
                中四国に縁のある人や、
                空気感が好きな人たちが集まっているので、それに耐えることができら大丈夫です。
            </>
        },
        {
            q: "クレジットの引き落とし日は",
            a: <>
                入会した日が会費の引き落とし日となります（体験期間中の場合は、体験キャンペーン終了日が引き落とし日）<br />
                また、体験期間中に解約した場合は料金が発生することはありません。
            </>
        },
        {
            q: "プランの変更はできますか",
            a: "いつでも可能です！ メンバー専用LINEにて、お問い合わせお願いします。"
        },
    ],
    links: {
        email: "chugoku.shikoku.creative@gmail.com",
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
}
