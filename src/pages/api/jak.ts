import type { NextApiRequest, NextApiResponse } from "next";
import { JAK } from "../../typings";
import hobby from "../../data/jak/hobby";
import games from "../../data/jak/games";
import social_media from "../../data/jak/social_media";

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
        games: games,
        social_media: social_media,
    });
};
