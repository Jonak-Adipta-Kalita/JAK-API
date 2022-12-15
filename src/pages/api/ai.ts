import type { NextApiRequest, NextApiResponse } from "next";

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
export default async (
    req: NextApiRequest,
    res: NextApiResponse<string | { error: string }>
) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }

    const { message }: { message: string } = req.body;

    res.status(200).json("");
};
