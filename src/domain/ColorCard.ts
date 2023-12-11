export class ColorCard{
    constructor(
        public id: number,
        public code: number,
        public type: string,
        public hexaColor: string){}

    static fromJSON(cardJSON: ColorCardJSON){
        return new ColorCard(
            cardJSON.id,
            cardJSON.code,
            cardJSON.texture,
            cardJSON.hexaColor
            )
    }
}

export type ColorCardJSON = {
    id: number,
    code: number,
    texture: string,
    hexaColor: string
}