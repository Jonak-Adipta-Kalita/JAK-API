export interface Ben10 {
    omnitrix: {
        id: number;
        name: string;
        image: string;
    }[];
}

export interface BrawlStars {
    brawlers: {
        id: number;
        name: string;
        image: string;
        gadget: [string, string | null];
        starpower: [string, string | null];
        category: string;
    }[];
}

export interface GenshinImpact {
    character: {
        id: number;
        name: string;
        image: string;
        element: string;
        weapon: string;
        special_dish: string | null;
        sex: "Male" | "Female";
        birthday: string;
        constellation: string;
        nation: string | null;
    }[];
}

export interface JAK {
    hobby: [
        {
            id: number;
            value: string;
            games: {
                id: number;
                platform: string;
                value: string;
                imageURL: string;
            }[];
        },
        {
            id: number;
            value: string;
            languages: {
                id: number;
                value: string;
                website: string;
                imageURL: string;
            }[];
            frameworks: {
                id: number;
                value: string;
                website: string;
                languages: string[];
                imageURL: string;
            }[];
        },
        {
            id: number;
            value: string;
            instruments: {
                id: number;
                value: string;
                imageURL: string;
            }[];
        }
    ];
    fav_food: {
        id: number;
        value: string;
        imageURL: string;
        ingredients: string[];
    }[];
    social_medias: {
        id: number;
        value: string;
        imageURL: string;
        link: string;
        username: string;
    }[];
}

export interface Miraculous {
    kwamis: {
        id: number;
        name: string;
        image: string;
        owner: string[];
        holder: string;
        miraculous: string;
    }[];
    holders: {
        id: number;
        name: string;
        image: string;
        real_name: string;
        kwami: string[];
        magical_words: string;
        main_power: string;
    }[];
    akumatized: {
        id: number;
        name: string;
        image: string;
        victim: string;
        goals: string[];
        quote: string | null;
        power_and_abilities: string[];
    }[];
    amokatized: {
        id: number;
        name: string;
        image: string;
        serve: string;
        power_and_ability: string[] | null[];
    }[];
}