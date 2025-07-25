import "./OpeningAnimation.tsx.scss";

import Open1 from '@/assets/open1.gif';
import Open2 from '@/assets/open2.gif';
import Open3 from '@/assets/open3.gif';
import Open4 from '@/assets/open4.gif';
import Open5 from '@/assets/open5.gif';
import Image from 'next-export-optimize-images/picture';
import { useState, useEffect } from "react";

const images = [Open1, Open2, Open3, Open4, Open5];

export const OpeningAnimation = (props: { onOpeningAnimationCompleted: () => void }) => {

    const [num, setNum] = useState(-1);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(prevNum => {
                if (prevNum >= images.length) {
                    // 最後の画像まで表示したら、アニメーション完了
                    setIsAnimationComplete(true);
                    clearInterval(interval);
                    return prevNum;
                }
                return prevNum + 1;
            });
        }, 135); // 0.5秒ごとに切り替え

        return () => clearInterval(interval);
    }, []);

    // アニメーション完了時のコールバック呼び出し
    useEffect(() => {
        if (isAnimationComplete) {
            // 次のレンダーサイクルで実行
            setTimeout(() => {
                props.onOpeningAnimationCompleted();
            }, 0);
        }
    }, [isAnimationComplete, props]);

    // アニメーションが完了したら何も表示しない
    if (isAnimationComplete) {
        return null;
    }

    return (<>
        <div className="fixed inset-0 w-svh h-svh bg-black z-50" />
        {num >= 0 && num < images.length && <Image src={images[num]} className="fixed inset-0  w-svh h-svh z-50" alt={`Opening image ${num + 1}`} />}
        {num >= 0 && num === images.length && <div className="fixed inset-0 w-svh h-svh bg-blue-500 z-50" />}
    </>

    );
};
