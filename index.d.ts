export function parse(file: File): PromisesAPlus.Thenable<Tag>;
export function parse(buffer: Uint32Array): PromisesAPlus.Thenable<Tag>;
export function parse(buffer: Buffer): PromisesAPlus.Thenable<Tag>;

export interface Tag {
    title: string,
    artist: string,
    album: string,
    year: string,
    image: Id3Image,
    lyrics: string,
    comment: string,
    track: number,
    genre: string
}

export interface Id3Image {
    type: string,
    mime: string,
    imageType: string,
    descriptions?: string
}

export interface Id3Flags {
    unsync: number,
    xheader: number,
    experimental: number
}

export interface Id3VersionInfo {
    v1: Id3Version,
    v2: Id3Version2
}

export interface Id3Version {
    major: number,
    minor: number
}

export interface Id3Version2 extends Id3Version {
    revision: number,
    flags: Id3Flags
}
