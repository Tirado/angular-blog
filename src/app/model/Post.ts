export class Post {
    private _title: string;
    private _content: string;
    private _loveIts: number;
    private _createdAt: Date;

    constructor(title: string, content: string, loveIts: number = 0, createdAt: Date = new Date()) {
        this._title = title;
        this._content = content;
        this._loveIts = loveIts;
        this._createdAt = createdAt;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get loveIts(): number {
        return this._loveIts;
    }

    set loveIts(value: number) {
        this._loveIts = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }
}
