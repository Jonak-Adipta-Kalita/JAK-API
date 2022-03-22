import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
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
    const words = fs.readFileSync("../../ai/model/words.pkl", "binary");
    const classes = fs.readFileSync("../../ai/model/classes.pkl", "binary");
    const modal = tensorflow.loadLayersModel(
        "https://raw.githubusercontent.com/Jonak-Adipta-Kalita/JAK-API/main/src/ai/model.json"
    );

    const clean_up_sentence = (sentence: string) => {};
    const bag_of_words = (sentence: string) => {};
    const predict_class = (sentence: string) => {};
    const get_response = (intents_list: [], intents_json: object) => {};

    res.status(200).json({});
};
