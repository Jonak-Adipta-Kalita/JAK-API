import type { NextApiRequest, NextApiResponse } from "next";
import omnitrix from "../../data/ben10/omnitrix";
import { Ben10 } from "../../typings";

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
export default (
    req: NextApiRequest,
    res: NextApiResponse<Ben10 | { error: string }>
) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
    res.status(200).json({
        omnitrix: omnitrix,
    });
};
