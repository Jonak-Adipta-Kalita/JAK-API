import type { NextApiRequest, NextApiResponse } from "next";
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
        brawlers: [
            {
                id: 0,
                name: "Shelly",
                image: "/images/brawlStars/brawlers/shelly/main.png",
                gadget: ["Fast Forward", "Clay Pigeon"],
                starpower: ["Shell Shock", "Band-Aid"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/shelly/pins/witch-shelly/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/shelly/sprays/normal.png",
                    },
                ],
            },
            {
                id: 1,
                name: "Nita",
                image: "/images/brawlStars/brawlers/nita/main.png",
                gadget: ["Bear Paws", "Faux Fur"],
                starpower: ["Bear with Me", "Hyper Bear"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/red-nose-nita/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/nian-nita/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nita/pins/shiba-nita/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/nita/sprays/normal.png",
                    },
                ],
            },
            {
                id: 2,
                name: "Colt",
                image: "/images/brawlStars/brawlers/colt/main.png",
                gadget: ["Speed Loader", "Silver Bullet"],
                starpower: ["Slick Boots", "Magnum Special"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colt/pins/sharktooth-colt/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/colt/sprays/normal.png",
                    },
                ],
            },
            {
                id: 3,
                name: "Bull",
                image: "/images/brawlStars/brawlers/bull/main.png",
                gadget: ["T-Bone Injector", "Stomper"],
                starpower: ["Berserker", "Tough Guy"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bull/pins/phew.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/bull/sprays/normal.png",
                    },
                ],
            },
            {
                id: 4,
                name: "Jessie",
                image: "/images/brawlStars/brawlers/jessie/main.png",
                gadget: ["Spark Plug", "Recoil Spring"],
                starpower: ["Energize", "Shocky"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jessie/pins/tanuki-jessie/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/jessie/sprays/normal.png",
                    },
                ],
            },
            {
                id: 5,
                name: "Brock",
                image: "/images/brawlStars/brawlers/brock/main.png",
                gadget: ["Rocket Laces", "Rocket Fuel"],
                starpower: ["More Rockets", "Rocket No. Four"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/hot-road-brock/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/brock/pins/postal-brock/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/brock/sprays/normal.png",
                    },
                ],
            },
            {
                id: 6,
                name: "Dynamike",
                image: "/images/brawlStars/brawlers/dynamike/main.png",
                gadget: ["Fidget Spinner", "Satchel Charge"],
                starpower: ["Dyna Jump", "Demolition"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/dynamike/pins/santa-mike/gg.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/dynamike/sprays/normal.png",
                    },
                ],
            },
            {
                id: 7,
                name: "Bo",
                image: "/images/brawlStars/brawlers/bo/main.png",
                gadget: ["Super Totem", "Tripwire"],
                starpower: ["Circling Eagle", "Snare A Bear"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/ho-ho-ho-bo/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bo/pins/wasp-bo/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/bo/sprays/normal.png",
                    },
                ],
            },
            {
                id: 8,
                name: "Tick",
                image: "/images/brawlStars/brawlers/tick/main.png",
                gadget: ["Mine Mania", "Last Hurrah"],
                starpower: ["Well Oiled", "Automa-Tick Reload"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tick/pins/snowman-tick/clap.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/tick/sprays/normal.png",
                    },
                ],
            },
            {
                id: 9,
                name: "8-Bit",
                image: "/images/brawlStars/brawlers/8-bit/main.png",
                gadget: ["Cheat Cartridge", "Extra Credits"],
                starpower: ["Boosted Booster", "Plugged In"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/8-bit/pins/v8-bit/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/8-bit/sprays/normal.png",
                    },
                ],
            },
            {
                id: 10,
                name: "Emz",
                image: "/images/brawlStars/brawlers/emz/main.png",
                gadget: ["Friend Zoner", "Acid Spray"],
                starpower: ["Bad Karma", "Hype"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/emz/pins/special.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/emz/sprays/normal.png",
                    },
                ],
            },
            {
                id: 11,
                name: "Stu",
                image: "/images/brawlStars/brawlers/stu/main.png",
                gadget: ["Speed Zone", "Breakthrough"],
                starpower: ["Zero Drag", "Gaso Heal"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/stu/pins/headless-rider-stu/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/stu/sprays/normal.png",
                    },
                ],
            },
            {
                id: 12,
                name: "El Primo",
                image: "/images/brawlStars/brawlers/el_primo/main.png",
                gadget: ["Suplex Supplement", "Asteroid Belt"],
                starpower: ["El Fuego", "Meteor Rush"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/el-dragon/verdoso/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/el-dragon/rosado/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/el-tigro/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/el_primo/pins/el-corazon/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/el_primo/sprays/normal.png",
                    },
                ],
            },
            {
                id: 13,
                name: "Barley",
                image: "/images/brawlStars/brawlers/barley/main.png",
                gadget: ["Sticky Syrup Mixer", "Herbal Tonic"],
                starpower: ["Medical Use", "Extra Noxious"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/bakesale-barley/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/barley/pins/sway-master-barley/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/barley/sprays/normal.png",
                    },
                ],
            },
            {
                id: 14,
                name: "Poco",
                image: "/images/brawlStars/brawlers/poco/main.png",
                gadget: ["Tuning Fork", "Protective Tunes"],
                starpower: ["Da Capo!", "Screeching Solo"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/poco/pins/serenade-poco/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/poco/sprays/normal.png",
                    },
                ],
            },
            {
                id: 15,
                name: "Rosa",
                image: "/images/brawlStars/brawlers/rosa/main.png",
                gadget: ["Grow Light", "Unfriendly Bushes"],
                starpower: ["Plant Life", "Thorny Gloves"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/brawl-o-ween-rosa/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/major-rosa/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rosa/pins/mantis-rosa/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/rosa/sprays/normal.png",
                    },
                ],
            },
            {
                id: 16,
                name: "Rico",
                image: "/images/brawlStars/brawlers/rico/main.png",
                gadget: ["Multiball Launcher", "Bouncy Castle"],
                starpower: ["Super Bouncy", "Robo Retreat"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/rico/pins/firefly-rico/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/rico/sprays/normal.png",
                    },
                ],
            },
            {
                id: 17,
                name: "Darryl",
                image: "/images/brawlStars/brawlers/darryl/main.png",
                gadget: ["Recoiling Rotator", "Tar Barrel"],
                starpower: ["Steel Hoops", "Rolling Reload"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/megabox-darryl/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/darryl/pins/crash-test-darryl/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/darryl/sprays/normal.png",
                    },
                ],
            },
            {
                id: 18,
                name: "Penny",
                image: "/images/brawlStars/brawlers/penny/main.png",
                gadget: ["Salty Barrel", "Trusty Spyglass"],
                starpower: ["Heavy Coffers", "Master Blaster"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/penny/pins/phew.png",
                    },

                    {
                        image: "/images/brawlStars/brawlers/penny/pins/lil-helper-penny/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/penny/sprays/normal.png",
                    },
                ],
            },
            {
                id: 19,
                name: "Carl",
                image: "/images/brawlStars/brawlers/carl/main.png",
                gadget: ["Heat Ejector", "Flying Hook"],
                starpower: ["Power Throw", "Protective Pirouette"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/road-rage-carl/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/carl/pins/biker-carl/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/carl/sprays/normal.png",
                    },
                ],
            },
            {
                id: 20,
                name: "Jacky",
                image: "/images/brawlStars/brawlers/jacky/main.png",
                gadget: ["Pneumatic Booster", null],
                starpower: ["Counter Crush", "Hardy Hard Hat"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/jacky/pins/gift-express-jacky/happy.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/jacky/sprays/normal.png",
                    },
                ],
            },
            {
                id: 21,
                name: "Piper",
                image: "/images/brawlStars/brawlers/piper/main.png",
                gadget: ["Auto Aimer", "Homemade Recipe"],
                starpower: ["Ambush", "Snappy Sniping"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/calavera-piper/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/piper/pins/cupid-piper/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 22,
                name: "Pam",
                image: "/images/brawlStars/brawlers/pam/main.png",
                gadget: ["Pulse Modulator", "ScrapSucker"],
                starpower: ["Mama's Hug", "Mama's Squeeze"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/pam/pins/phew.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 23,
                name: "Frank",
                image: "/images/brawlStars/brawlers/frank/main.png",
                gadget: ["Active Noise Canceling", "Irresistible Attraction"],
                starpower: ["Power Grab", "Sponge"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/frank/pins/holiday-party-frank/gg.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 24,
                name: "Bibi",
                image: "/images/brawlStars/brawlers/bibi/main.png",
                gadget: ["Vitamin Booster", "Extra Stikcy"],
                starpower: ["Home Run", "Batting Stance"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bibi/pins/phew.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 25,
                name: "Bea",
                image: "/images/brawlStars/brawlers/bea/main.png",
                gadget: ["Honey Molasses", "Rattled Hive"],
                starpower: ["Insta Beaload", "Honeycomb"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/neko-bea/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bea/pins/gold-neko-bea/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 26,
                name: "Nani",
                image: "/images/brawlStars/brawlers/nani.png",
                gadget: ["Warp Blast", "Return to Sender"],
                starpower: ["Autofocus", "Tempered Steel"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/nani/pins/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 27,
                name: "Edgar",
                image: "/images/brawlStars/brawlers/edgar/main.png",
                gadget: ["Let's Fly", "Hardcore"],
                starpower: ["Hard Landing", "Fisticuffs"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/orochi-edgar/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/edgar/pins/doctor-edgar/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 28,
                name: "Griff",
                image: "/images/brawlStars/brawlers/griff/main.png",
                gadget: ["Piggy Bank", null],
                starpower: ["Keep the Change", "Business Resilience"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/griff/pins/sleigher-griff/happy.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 29,
                name: "Mortis",
                image: "/images/brawlStars/brawlers/mortis/main.png",
                gadget: ["Combo Spinner", "Survival Shovel"],
                starpower: ["Creepy Harvest", "Coiled Snake"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mortis/pins/rockabilly-mortis/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 30,
                name: "Tara",
                image: "/images/brawlStars/brawlers/tara/main.png",
                gadget: ["Psychic Enhancer", "Support from Beyond"],
                starpower: ["Black Portal", "Healing Shade"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/tara/pins/tempest-tara/neutral.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/tara/sprays/tempest-tara.png",
                    },
                ],
            },
            {
                id: 31,
                name: "Gene",
                image: "/images/brawlStars/brawlers/gene/main.png",
                gadget: ["Lamp Blowout", "Vengeful Spirits"],
                starpower: ["Magic Puffs", "Spirit Slap"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gene/pins/swamp-gene/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 32,
                name: "Max",
                image: "/images/brawlStars/brawlers/max/main.png",
                gadget: ["Phase Shifter", "Sneaky Sneakers"],
                starpower: ["Super Charged", "Run N Gun"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/max/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/max/pins/phew.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 33,
                name: "Mr. P",
                image: "/images/brawlStars/brawlers/mr_p/main.png",
                gadget: ["Service Bell", "Porter Reinforcements"],
                starpower: ["Handle With Care", "Revolving Door"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/count-pengula/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/mr-fly/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/daruma-mr-p/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/mr_p/pins/daruma-mr-p/special.png",
                    },
                ],
                sprays: [
                    {
                        image: "/images/brawlStars/brawlers/mr_p/sprays/daruma-mr-p.png",
                    },
                ],
            },
            {
                id: 34,
                name: "Sprout",
                image: "/images/brawlStars/brawlers/sprout/main.png",
                gadget: ["Garden Mulcher", "Transplant"],
                starpower: ["Overgrowth", "Photosynthesis"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/prince-sprout/emerald/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/prince-sprout/ruby/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sprout/pins/corrupted-sprout/gg.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 35,
                name: "Byron",
                image: "/images/brawlStars/brawlers/byron/main.png",
                gadget: ["Shot In The Arm", "Booster Shots"],
                starpower: ["Malaise", "Injection"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/byron/pins/overlord-byron/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 36,
                name: "Squeak",
                image: "/images/brawlStars/brawlers/squeak/main.png",
                gadget: ["Windup", "Residue"],
                starpower: ["Chain Reaction", "Super Sticky"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/squeak/pins/ghost-squeak/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 37,
                name: "Spike",
                image: "/images/brawlStars/brawlers/spike/main.png",
                gadget: ["Poping Pincushion", "Life Plant"],
                starpower: ["Fertilize", "Curveball"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/dark-lord-spike/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/logmas-spike/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/sakura-spike/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/spike/pins/pyro-spike/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 38,
                name: "Crow",
                image: "/images/brawlStars/brawlers/crow/main.png",
                gadget: ["Defence Booster", "Slowing Toxic"],
                starpower: ["Extra Toxic", "Carrion Crow"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/crow/pins/phew.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 39,
                name: "Leon",
                image: "/images/brawlStars/brawlers/leon/main.png",
                gadget: ["Clone Projector", "Lollipop Drop"],
                starpower: ["Smoke Trails", "Invisiheal"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/leon/pins/werewolf-leon/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 40,
                name: "Sandy",
                image: "/images/brawlStars/brawlers/sandy/main.png",
                gadget: ["Sleep Simulator", "Sweet Dreams"],
                starpower: ["Rude Sands", "Healing Winds"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/sandy/pins/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 41,
                name: "Amber",
                image: "/images/brawlStars/brawlers/amber/main.png",
                gadget: ["Fire Starters", null],
                starpower: ["Wild Flames", "Scrochin Siphon"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/amber/pins/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 42,
                name: "Gale",
                image: "/images/brawlStars/brawlers/gale/main.png",
                gadget: ["Spring Ejector", "Twister"],
                starpower: ["Blustery Blow", "Freezing Snow"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/gale/pins/merchant-gale/phew.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 43,
                name: "Surge",
                image: "/images/brawlStars/brawlers/surge/main.png",
                gadget: ["Power Surge", null],
                starpower: ["To The Max!", "Serve Ice Cold"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/surge/pins/mecha-paladin-surge/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 44,
                name: "Colette",
                image: "/images/brawlStars/brawlers/colette/main.png",
                gadget: ["Na-Ah", "Gotcha!"],
                starpower: ["Push It", "Mass Tax"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colette/pins/trixie-colette/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 45,
                name: "Lou",
                image: "/images/brawlStars/brawlers/lou/main.png",
                gadget: ["Ice Block", "Cryo Syrup"],
                starpower: ["Supercool", "Hypothermia"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/king-lou/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lou/pins/smooth-lou/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 46,
                name: "Colonel Ruffs",
                image: "/images/brawlStars/brawlers/colonel_ruffs/main.png",
                gadget: ["Take Cover", "Air Support"],
                starpower: ["Air Superiority", "Field Promotions"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/colonel_ruffs/pins/ronin-ruffs/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 47,
                name: "Belle",
                image: "/images/brawlStars/brawlers/belle/main.png",
                gadget: ["Nest Egg", "Reverse Polarity"],
                starpower: ["Positive Feedback", "Grounded"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/goldhand-belle/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/ivy-belle/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/belle/pins/coral-belle/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 48,
                name: "Buzz",
                image: "/images/brawlStars/brawlers/buzz/main.png",
                gadget: ["Reserve Buoy", null],
                starpower: ["Tougher Torpedo", "Eyes Sharp"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/buzz/pins/born-bad-buzz/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 49,
                name: "Ash",
                image: "/images/brawlStars/brawlers/ash/main.png",
                gadget: ["Chill Pill", "Rotten Banana"],
                starpower: ["First Bash", "Mad As Heck"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/ash/pins/ninja-ash/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 50,
                name: "Meg",
                image: "/images/brawlStars/brawlers/meg/main.png",
                gadget: ["Jolting Volts", null],
                starpower: ["Force Field", "Self Destruction"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/beetle-meg/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/meg/pins/monster-truck-meg/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 51,
                name: "Lola",
                image: "/images/brawlStars/brawlers/lola/main.png",
                gadget: ["Freeze Frames", "Stunt Double"],
                starpower: ["Improvise", "Sealed With A Kiss"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/rebel-lola/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/lola/pins/galaxy-storm-lola/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 52,
                name: "Grom",
                image: "/images/brawlStars/brawlers/grom/main.png",
                gadget: ["Guardia", "Radio Check"],
                starpower: ["Tallow in the Shins", "Factor X"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/grom/pins/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 53,
                name: "Fang",
                image: "/images/brawlStars/brawlers/fang/main.png",
                gadget: ["Corn Foo", "Roundhouse Kick"],
                starpower: ["Fresh Kicks", "Divine Soles"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/furious-fang/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/fang/pins/octo-fang/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 54,
                name: "Eve",
                image: "/images/brawlStars/brawlers/eve/main.png",
                gadget: ["Gotta Go!", "Motherly Love"],
                starpower: ["Unnatural Order", "Happy Surprise"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/eve/pins/spiky-eve/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 55,
                name: "Janet",
                image: "/images/brawlStars/brawlers/janet/main.png",
                gadget: ["Drop The Bass", "Backstage Pass"],
                starpower: ["Stage View", "Vocal Warm-Up"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/janet/pins/valkyrie-janet/special.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 56,
                name: "Bonnie",
                image: "/images/brawlStars/brawlers/bonnie/main.png",
                gadget: ["Sugar Rush", "Crash Test"],
                starpower: ["Black Powder", "Wisdom Tooth"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/bonnie/pins/empress-bonnie/neutral.png",
                    },
                ],
                sprays: null,
            },
            {
                id: 57,
                name: "Otis",
                image: "/images/brawlStars/brawlers/otis/main.png",
                gadget: ["Dormant Star", "Phat Splatter"],
                starpower: ["Stencil Glue", null],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brawlers/otis/pins/pharaotis/special.png",
                    },
                ],
                sprays: null,
            },
        ],
        players: {
            pins: [
                {
                    image: "/images/brawlStars/players/pins/starting/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/smile.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/ecstatic.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/grin.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/laugh.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/sunglasses.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/blank.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/speechless.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/sad.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/shocked.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/stunned.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/bothered.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/annoyed.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/rage.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/frenzied.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/thumbs-up.png",
                },
                {
                    image: "/images/brawlStars/players/pins/starting/thumbs-down.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/sad.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/gg.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/phew.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2020/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/sad.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/gg.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/phew.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2020/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2021/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2021/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2021/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2021/gg.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2021/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2021/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/championship-challenge-2021/lighter.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/championship-challenge-2021/whistle.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/championship-challenge-2021/confetti.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/championship-challenge-2021/white-flag.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawloween-2021/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/singles-day-2021/sign.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2021/foam-finger.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2021/thumbs-down.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2021/sunglasses.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2021/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2021/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2021/clap.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2021/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2021/phew.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlidays-2021/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/world-finals-2021/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlies-2021/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2022/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2022/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2022/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2022/sweat.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-2022/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lunar-brawl-challenge-2022/gg.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawlentines-challenge-2022/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/monthly-finals-2022/gg.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/monthly-finals-2022/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/monthly-finals-2022/sleepy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/monthly-finals-2022/chaos-cup.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/monthly-finals-2022/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/monthly-finals-2022/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/totally-normal-challenge/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/lantern-brawl/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/grom's-easter/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/golden-week-challenge/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/golden-week-2022/happy.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/golden-week-2022/thanks.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/matcherino/contributer.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/matcherino/winner.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/thrower's-challenge/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/thrower's-challenge/special.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/hay-day-anniversary/neutral.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/brawl-ball-quest/angry.png",
                },
                {
                    image: "/images/brawlStars/players/pins/exclusive/clash-of-clans-anniversary-quest/angry.png",
                },
            ],
            sprays: [
                {
                    image: "/images/brawlStars/players/sprays/angel-skeleton.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/arrow-heart.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/bad-randoms.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/banana-peel.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/breaking-wall.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/champion.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/clash-of-clans.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/crash-test.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/crying-mask.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/don't-be-salty.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/double-chevron.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/footprint.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/gem-king.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/green-checkmark.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/lightning-cloud.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/red-checkmark.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/shark.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/starfish.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/starr-logo.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/sweat-drop.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/this-is-fine.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/thumbs-up.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/tire.png",
                },
                {
                    image: "/images/brawlStars/players/sprays/warning.png",
                },
            ],
        },
    });
};
