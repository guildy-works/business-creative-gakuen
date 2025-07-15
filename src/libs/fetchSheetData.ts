// 型定義
export interface PlanTableRow {
    channel_name: string;
    content: string;
    description: string;
    free_plan: string;
    business_plan: string;
} 

export async function fetchPlanTableData(): Promise<PlanTableRow[]> {
    const SPREADSHEET_ID = "1Ez0IqN7ZQAEU0KGyuRo6PHHMBCE6i5MRZWjGi-wztRw";
    const SHEET_NAME = "Sheet1";
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json;format:html;version=0.6;reqId=1;&sheet=${SHEET_NAME}`;
    
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));

        return jsonData.table.rows.map((row: any) => ({
            channel_name: row.c[0]?.v ?? '',
            content: row.c[1]?.v ?? '',
            description: row.c[2]?.v ?? '',
            free_plan: row.c[3]?.v ?? '',
            business_plan: row.c[4]?.v ?? ''
        }));
    } catch (error) {
        console.error("スプレッドシートのデータ取得に失敗しました:", error);
        return [];
    }
}

