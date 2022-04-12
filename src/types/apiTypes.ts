export type CharacterTypes = {
    url: string;
    name: string;
    culture: string;
    born: string;
    died: string;
    titles?: string[] | null;
    aliases?: string[] | null;
    gender?: string[] | null;
    father: string;
    mother: string;
    spouse: string;
    allegiances?: string[] | null;
    books?: string[] | null;
    povBooks?: string[] | null;
    tvSeries?: string[] | null;
    playedBy?: string[] | null;
}

export type HouseTypes = {
    ancestralWeapons: Array<string>;
    cadetBranches: Array<string>;
    coatOfArms: Array<string>;
    currentLord: string;
    diedOut: string;
    founded: string;
    founder: string;
    heir: string;
    name: string;
    overlord: string;
    region: string;
    seats: Array<string>;
    swornMembers: Array<string>;
    titles: Array<string>;
    url: string;
    words: string;
}