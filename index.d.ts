export function parse(file: File | Uint32Array | Buffer): PromisesAPlus.Thenable<Tag>;

export interface Tag {
    title: string,
    artist: string,
    album: string,
    year: string,
    image: Image,
    lyrics: string,
    comment: string,
    track: number,
    genre: string
    version: VersionInfo
}

export interface Image {
    type: string,
    mime: string,
    imageType: string,
    descriptions: string
}

export interface Flags {
    unsync: number,
    xheader: number,
    experimental: number
}

export interface VersionInfo {
    v1: v1,
    v2: v2
}

export interface v1 {
    major: number,
    minor: number
}

export interface v2 extends v1 {
    revision: number,
    flags: Flags
}
