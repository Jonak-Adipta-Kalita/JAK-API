import type { NextApiRequest, NextApiResponse } from "next";
import characters from "../../data/genshinImpact/characters";
import elements from "../../data/genshinImpact/elements";
import { GenshinImpact } from "../../typings";

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
export default (
    req: NextApiRequest,
    res: NextApiResponse<GenshinImpact | { error: string }>
) => {
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
};
