import { useEffect, useState } from "react"
import { fetchPlanTableData, PlanTableRow } from "@/libs/fetchSheetData"
import { resources } from "@/resources"
import clsx from "clsx"

export const PlanTable = () => {
    const [rows, setRows] = useState<PlanTableRow[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPlanTableData()
            setRows(data)
            setLoading(false)
            console.log(data)
        }
        loadData()
    }, [])

    if (loading) {
        return <div className="text-center p-4">読み込み中...</div>
    }

    return (
        <div className="bg-gradient1 size-full">
            <div className="p-4 text-center">
                <h1 className="text-[1.2rem]">
                    つながるラボ(Discord内)の各チャンネル一覧
                </h1>
                <h4>プランによってチャンネルの利用が制限されています</h4>
            </div>

            {/* テーブルをラップして横スクロールを有効にする */}
            <table className="w-full">
                <thead className="bg-gradient1 sticky top-0 z-10">
                    <tr>
                        <th
                            className="min-w-[68px] text-center sm:px-4 md:px-6  py-3 text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            チャンネル名
                        </th>
                        <th
                            className="text-center sm:px-4 md:px-6  py-3 text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            内容
                        </th>
                        <th
                            className="text-center sm:px-4 md:px-6  py-3  text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            一言
                        </th>
                        <th
                            className="min-w-[48px] text-center sm:px-4 md:px-6  py-3  text-[8px] sm:text-sm font-medium text-white border-b border-black"
                        >
                            フリー
                        </th>
                        <th
                            className="min-w-[48px] text-center sm:px-4 md:px-6  py-3  text-[8px]  sm:text-sm font-medium text-white border-b border-black"
                        >
                            ビジネス
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gradient1">
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                rowIndex % 2 === 0
                                    ? "bg-gray-50/60 border-b border-black"
                                    : "bg-gray-50/40 border-b border-black"
                            }
                        >
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-0 text-[8px] sm:text-sm leading-[0.8rem] bg-gray-100 border-r left-0  font-bold border-black whitespace-pre-line">
                                {row.channel_name}
                            </td>
                            <td 
                                className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold border-r border-black whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: row.content }}
                            />
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold border-r border-black whitespace-pre-line">
                                {row.description}
                            </td>
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold bg-color3/60 border-r border-black whitespace-pre-line">
                                {row.free_plan}
                            </td>
                            <td className="text-center tracking-tighter sm:px-4 md:px-6 py-2 text-[8px] leading-[0.8rem] sm:text-sm font-bold bg-color2/60 border-r border-black whitespace-pre-line">
                                {row.business_plan}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
