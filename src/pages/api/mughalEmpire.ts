import type { NextApiRequest, NextApiResponse } from "next";
import kings from "../../data/mughalEmpire/kings";
import { MughalEmpire } from "../../typings";

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
export default (
    req: NextApiRequest,
    res: NextApiResponse<MughalEmpire | { error: string }>
) => {
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
};
