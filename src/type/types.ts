export interface Content {
    name: string;
    img: string;
    information: Information;
    text: string;
}

export interface Information {
    strength: number;
    lives: number;
}