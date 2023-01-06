import type { NextApiRequest, NextApiResponse } from "next";
import brawlers from "../../data/brawlStars/brawlers";
import players from "../../data/brawlStars/players";
import { BrawlStars } from "../../typings";

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
export default (
    req: NextApiRequest,
    res: NextApiResponse<BrawlStars | { error: string }>
) => {
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
};
