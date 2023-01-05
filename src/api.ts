import express, { Response } from "express";
import {
    Ben10,
    BrawlStars,
    GenshinImpact,
    JAK,
    Miraculous,
    MughalEmpire,
} from "./typings";
import dotenv from "dotenv";

import ben10Omnitrix from "./data/ben10/omnitrix";
import brawlStarsBrawlers from "./data/brawlStars/brawlers";
import brawlStarsPlayers from "./data/brawlStars/players";
import genshinImpactCharacters from "./data/genshinImpact/characters";
import genshinImpactElements from "./data/genshinImpact/elements";
import jakFavFood from "./data/jak/fav_food";
import jakGames from "./data/jak/games";
import jakHobby from "./data/jak/hobby";
import jakPictures from "./data/jak/pictures";
import jakSocialMedias from "./data/jak/social_medias";
import miraculousAkumatized from "./data/miraculous/akumatized";
import miraculousAmokatized from "./data/miraculous/amokatized";
import miraculousHolders from "./data/miraculous/holders";
import miraculousKwamis from "./data/miraculous/kwamis";
import mughalEmpireKings from "./data/mughalEmpire/kings";

dotenv.config();
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {});

app.get(
    "/api/genshinImpact",
    async (req, res: Response<GenshinImpact | { error: string }>) => {
        if (!(req.method === "GET")) {
            res.setHeader("Allow", ["GET"]);
            return res
                .status(405)
                .json({ error: `Method ${req.method} not allowed` });
        }
        res.status(200).json({
            character: genshinImpactCharacters,
            elements: genshinImpactElements,
        });
    }
);

app.get("/api/ben10", async (req, res: Response<Ben10 | { error: string }>) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
    res.status(200).json({
        omnitrix: ben10Omnitrix,
    });
});

app.get(
    "/api/brawlStars",
    async (req, res: Response<BrawlStars | { error: string }>) => {
        if (!(req.method === "GET")) {
            res.setHeader("Allow", ["GET"]);
            return res
                .status(405)
                .json({ error: `Method ${req.method} not allowed` });
        }
        res.status(200).json({
            brawlers: brawlStarsBrawlers,
            players: brawlStarsPlayers,
        });
    }
);

app.get(
    "/api/miraculous",
    async (req, res: Response<Miraculous | { error: string }>) => {
        if (!(req.method === "GET")) {
            res.setHeader("Allow", ["GET"]);
            return res
                .status(405)
                .json({ error: `Method ${req.method} not allowed` });
        }
        res.status(200).json({
            kwamis: miraculousKwamis,
            holders: miraculousHolders,
            akumatized: miraculousAkumatized,
            amokatized: miraculousAmokatized,
        });
    }
);

app.get(
    "/api/mughalEmpire",
    async (req, res: Response<MughalEmpire | { error: string }>) => {
        if (!(req.method === "GET")) {
            res.setHeader("Allow", ["GET"]);
            return res
                .status(405)
                .json({ error: `Method ${req.method} not allowed` });
        }

        res.status(200).json({
            description:
                "The Mughal Empire, Mogul or Moghul Empire, was an early-modern empire in South Asia. For some two centuries, the empire stretched from the outer fringes of the Indus basin in the west, northern ,in the northwest, and  Kashmir in the north,  the highlands of present-day Assam and Bangladesh in the east, and the uplands of the Deccan plateau in south India.  The Mughal empire is conventionally said to have been founded in 1526 by Babur, a warrior chieftain from what today is Uzbekistan, who employed aid from the neighboring Safavid and Ottoman empires, to defeat the Sultan of Delhi, Ibrahim Lodhi, in the First Battle of Panipat, and to sweep down the plains of Upper India.",
            kings: mughalEmpireKings,
        });
    }
);

app.get("/api/jak", async (req, res: Response<JAK | { error: string }>) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
    res.status(200).json({
        hobby: jakHobby,
        pictures: jakPictures,
        games: jakGames,
        fav_food: jakFavFood,
        social_medias: jakSocialMedias,
    });
});

app.post(
    "/api/ai",
    async (req, res: Response<Miraculous | { error: string }>) => {
        if (!(req.method === "GET")) {
            res.setHeader("Allow", ["GET"]);
            return res
                .status(405)
                .json({ error: `Method ${req.method} not allowed` });
        }

        const { message }: { message: string } = req.body;

        const response = await fetch(
            `${process.env.WEBSITE_BACKEND_URL}/api/ai/chatbot`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: message,
                }),
            }
        );

        const data = await response.json();

        res.status(200).json(data.response || data.error);
    }
);

app.listen(3000, () => {
    console.log("API listening on port 3000!");
});
