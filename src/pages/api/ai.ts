import type { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";
import * as tensorflow from "@tensorflow/tfjs";

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

    // const model = await tensorflow.loadLayersModel(
    //     "http://localhost:8000/model/model.json"
    // );

    // const prediction = model.predict(
    //     tensorflow.tensor2d([message], [1, message.length])
    // ) as tensorflow.Tensor;

    // const index = prediction.argMax(1).dataSync()[0];

    // const response = intent[index].responses;

    const pythonProcess = spawn("python", [
        "F:\\Hard-disk\\Project\\Works\\JAK API\\src\\ai\\response.py",
        message,
    ]);
    pythonProcess.stdout.on("data", (data: any) => {
        const reply = data.toString();
        res.status(200).json(reply);
    });
};
