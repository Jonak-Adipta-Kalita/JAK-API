import type { NextApiRequest, NextApiResponse } from "next";
import * as tensorflow from "@tensorflow/tfjs";
import intent from "../../ai/model/intents.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }

    const { message } = req.body;
    const modal = tensorflow.loadLayersModel(
        "https://raw.githubusercontent.com/Jonak-Adipta-Kalita/JAK-API/main/src/ai/model.json"
    );

    res.status(200).json({});
};
