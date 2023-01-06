import type { NextApiRequest, NextApiResponse } from "next";
import { JAK } from "../../typings";
import hobby from "../../data/jak/hobby";
import pictures from "../../data/jak/pictures";
import games from "../../data/jak/games";
import fav_food from "../../data/jak/fav_food";
import social_medias from "../../data/jak/social_medias";

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
export default (
    req: NextApiRequest,
    res: NextApiResponse<JAK | { error: string }>
) => {
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
};
