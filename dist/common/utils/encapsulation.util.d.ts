export declare class xiaoQinVarUtils {
    private readonly Regex_matchAll;
    static uuid(): string;
    static dateFormat(fmt: string, date: Date): string;
    static dateFormatByEcma(date: Date | number, option?: any): string;
    static randomFileName(filename: String): string;
    static getBeforeAndAfterTime(date?: Date): number[];
    static randomString(num?: number): string;
}
