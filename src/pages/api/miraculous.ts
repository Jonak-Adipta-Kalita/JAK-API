import type { NextApiRequest, NextApiResponse } from "next";
import akumatized from "../../data/miraculous/akumatized";
import amokatized from "../../data/miraculous/amokatized";
import holders from "../../data/miraculous/holders";
import kwamis from "../../data/miraculous/kwamis";
import { Miraculous } from "../../typings";

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
export default (
    req: NextApiRequest,
    res: NextApiResponse<Miraculous | { error: string }>
) => {
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
};
