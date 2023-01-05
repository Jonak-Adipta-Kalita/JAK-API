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

import omnitrix from "./data/ben10/omnitrix";
import brawlers from "./data/brawlStars/brawlers";
import players from "./data/brawlStars/players";
import characters from "./data/genshinImpact/characters";
import elements from "./data/genshinImpact/elements";
import fav_food from "./data/jak/fav_food";
import games from "./data/jak/games";
import hobby from "./data/jak/hobby";
import pictures from "./data/jak/pictures";
import social_medias from "./data/jak/social_medias";
import akumatized from "./data/miraculous/akumatized";
import amokatized from "./data/miraculous/amokatized";
import holders from "./data/miraculous/holders";
import kwamis from "./data/miraculous/kwamis";
import kings from "./data/mughalEmpire/kings";

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
            character: characters,
            elements: elements,
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
        omnitrix: omnitrix,
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
            brawlers: brawlers,
            players: players,
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
            kwamis: kwamis,
            holders: holders,
            akumatized: akumatized,
            amokatized: amokatized,
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
            kings: kings,
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
        hobby: hobby,
        pictures: pictures,
        games: games,
        fav_food: fav_food,
        social_medias: social_medias,
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
