import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import * as tensorflow from "@tensorflow/tfjs";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (!(req.method === "POST")) {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }

    const { message } = req.body;

    const words = fs.readFileSync("../../ai/model/words.pkl", "binary");
    const classes = fs.readFileSync("../../ai/model/classes.pkl", "binary");

    res.status(200).json({});
};
