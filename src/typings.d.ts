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
        description: string;
        gadget: [string, string | null];
        starpower: [string, string | null];
        category: string;
        pins: {
            image: string;
        }[];
        sprays:
            | {
                  image: string;
              }[]
            | null;
        profile_icon: { image: string }[];
    }[];
    players: {
        pins: {
            type: string;
            values: {
                image: string;
            }[];
        }[];
        sprays: {
            image: string;
        }[];
        profile_icons: {
            image: string;
        }[];
    };
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
    elements: {
        id: number;
        name: string;
        image: string;
        archon: string;
        status_applies: string | null;
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
                description: string;
                imageURL: string;
                link: string;
            }[];
        },
        {
            id: number;
            value: string;
            languages: {
                id: number;
                value: string;
                website: string;
                level: number;
                imageURL: string;
            }[];
            frameworks: {
                id: number;
                value: string;
                website: string;
                languages: string[];
                level: number;
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
    games: {
        id: number;
        platform: string;
        value: string;
        description: string;
        imageURL: string;
        link: string;
    }[];
    pictures: {
        id: number;
        name: string;
        height: string;
        width: string;
        image: string;
    }[];
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
        power: string;
        magical_words: string | null;
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

export interface MughalEmpire {
    description: string;
    kings: {
        id: number;
        name: string;
        givenName: string;
        image: string;
        description: string;
        reigned: string;
        wives: {
            id: number;
            name: string;
            born: string | null;
            died: string | null;
            image: string | null;
            description: string;
        }[];
    }[];
}
