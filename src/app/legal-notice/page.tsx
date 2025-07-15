'use client'

export default function LegalNotice() {
    return (<div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-title1 font-bold text-center mb-8">特定商取引法に基づく表記</h1>

        {/* 販売業者名 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">販売業者名</h2>
            <p>アドサル</p>
        </section>

        {/* 運営統括責任者 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">運営統括責任者</h2>
            <p>小早川馨輝</p>
        </section>

        {/* 販売者所在地 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">販売者所在地</h2>
            <p>〒720-0812　広島県福山市霞町1丁目7-8-2</p>
        </section>

        {/* 販売業者の連絡先 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">販売業者の連絡先</h2>
            <p>電話番号：080-1634-7500</p>
            <p>
                メールアドレス：{" "}
                <a
                    href="mailto:tsunalab.info@gmail.com"
                    className="text-blue-600 hover:underline"
                >
                    tsunalab.info@gmail.com
                </a>
            </p>
        </section>

        {/* 販売価格 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">販売価格</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>【フリープラン】セールスページの表記に従う</li>
                <li>【ビジネスプラン】セールスページの表記に従う</li>
            </ul>
            <p className="mt-4">※時期によって料金が異なる場合がございます</p>
            <p>商品代金以外に必要な費用：特にありません</p>
        </section>

        {/* お支払い方法 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">お支払い方法</h2>
            <p>クレジットカード、コンビニ、銀行振込、Paidy</p>
        </section>

        {/* 商品引渡し時期 */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">商品引渡し時期</h2>
            <p>決済完了後、24時間以内にメールにてご案内</p>
        </section>

        {/* キャンセルについて */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">キャンセルについて</h2>
            <p>購入日から7日以内に運営へご連絡いただくかお問い合わせフォームでご連絡ください</p>
        </section>

        {/* 解約について */}
        <section className="mb-6">
            <h2 className="text-title2 font-bold mb-4">解約について</h2>
            <p>
                退会のお申し出をいただいた場合、翌月以降のサービス提供及び利用料金の請求を停止いたします
            </p>
        </section>
    </div>)
}
