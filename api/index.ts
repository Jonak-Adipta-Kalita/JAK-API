import express, { Response } from "express";
import {
    Ben10,
    BrawlStars,
    GenshinImpact,
    JAK,
    Miraculous,
    MughalEmpire,
} from "../typings";
import dotenv from "dotenv";

import ben10Omnitrix from "../data/ben10/omnitrix";
import brawlStarsBrawlers from "../data/brawlStars/brawlers";
import brawlStarsPlayers from "../data/brawlStars/players";
import genshinImpactCharacters from "../data/genshinImpact/characters";
import genshinImpactElements from "../data/genshinImpact/elements";
import jakFavFood from "../data/jak/fav_food";
import jakGames from "../data/jak/games";
import jakHobby from "../data/jak/hobby";
import jakPictures from "../data/jak/pictures";
import jakSocialMedias from "../data/jak/social_medias";
import miraculousAkumatized from "../data/miraculous/akumatized";
import miraculousAmokatized from "../data/miraculous/amokatized";
import miraculousHolders from "../data/miraculous/holders";
import miraculousKwamis from "../data/miraculous/kwamis";
import mughalEmpireKings from "../data/mughalEmpire/kings";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        working: true,
    });
});

/**
 * @swagger
 * /api/genshinImpact:
 *   get:
 *     description: Get the Data about Genshin Impact
 *     summary: Get Genshin Impact Data
 *     responses:
 *       200:
 *          description: Genshin Impact Data
 */
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

/**
 * @swagger
 * /api/ben10:
 *   get:
 *     description: Get the Data about Ben 10
 *     summary: Get Ben 10 Data
 *     responses:
 *       200:
 *          description: Ben 10 Data
 */
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

/**
 * @swagger
 * /api/brawlStars:
 *   get:
 *     description: Get the Data about Brawl Stars
 *     summary: Get Brawl Stars Data
 *     responses:
 *       200:
 *          description: Brawl Stars Data
 */
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

/**
 * @swagger
 * /api/miraculous:
 *   get:
 *     description: Get the Data about Miraculous
 *     summary: Get Miraculous Data
 *     responses:
 *       200:
 *          description: Miraculous Data
 */
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

/**
 * @swagger
 * /api/mughalEmpire:
 *   get:
 *     description: Get the Data about The Mughal Empire
 *     summary: Get The Mughal Empire Data
 *     responses:
 *       200:
 *          description: The Mughal Empire Data
 */
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

/**
 * @swagger
 * /api/jak:
 *   get:
 *     description: Get the Data about JAK
 *     summary: Get JAK Data
 *     responses:
 *       200:
 *          description: JAK Data
 */
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

/**
 * @swagger
 * /api/ai:
 *   post:
 *     summary: Talk with Alexis
 *     description: Talk with Alexis a AI made by JAK
 *     parameters:
 *       - name: message
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Response from Alexis
 */
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
    console.log("API listening on port 3000");
});
