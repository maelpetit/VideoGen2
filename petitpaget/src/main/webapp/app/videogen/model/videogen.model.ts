export class VideoGeneratorModel {
    constructor(
        public medias: Media[],
        public information?: VideoGenInformation
    ){}
}

export class VideoGenInformation {
    constructor(
        public authorName: string,
        public version?: string,
        public creationDate?: string
    ){}
}

export class Media {
    constructor(
        public type: string,
        public description?: MediaDescription,
        public medias?: MediaDescription[],
        public id?: string
    ){}
}

export class MediaDescription {
    constructor(
        public location: string,

        //Video
        public videoId?: string,
        public duration?: number,
        public probability?: number,
        public description?: string,
        public thumbnail?: string,
        public selected?: boolean,
        //TODO Filter + VideoText

        //Image
        public toptext?: string,
        public bottomtext?: string
    ){
    }
}
