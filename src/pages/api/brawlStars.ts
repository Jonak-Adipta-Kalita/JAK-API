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
                image: "/images/brawlStars/shelly/main.png",
                gadget: ["Fast Forward", "Clay Pigeon"],
                starpower: ["Shell Shock", "Band-Aid"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/shelly/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/shelly/pins/witch-shelly/neutral.png",
                    },
                ],
            },
            {
                id: 1,
                name: "Nita",
                image: "/images/brawlStars/nita/main.png",
                gadget: ["Bear Paws", "Faux Fur"],
                starpower: ["Bear with Me", "Hyper Bear"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/nita/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/red-nose-nita/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/nian-nita/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/nita/pins/shiba-nita/neutral.png",
                    },
                ],
            },
            {
                id: 2,
                name: "Colt",
                image: "/images/brawlStars/colt/main.png",
                gadget: ["Speed Loader", "Silver Bullet"],
                starpower: ["Slick Boots", "Magnum Special"],
                category: "Common",
                pins: [
                    {
                        image: "colt/neutral.png",
                    },
                    {
                        image: "colt/happy.png",
                    },
                    {
                        image: "colt/sad.png",
                    },
                    {
                        image: "colt/angry.png",
                    },
                    {
                        image: "colt/gg.png",
                    },
                    {
                        image: "colt/clap.png",
                    },
                    {
                        image: "colt/thanks.png",
                    },
                    {
                        image: "colt/phew.png",
                    },
                    {
                        image: "colt/special.png",
                    },
                ],
            },
            {
                id: 3,
                name: "Bull",
                image: "/images/brawlStars/bull/main.png",
                gadget: ["T-Bone Injector", "Stomper"],
                starpower: ["Berserker", "Tough Guy"],
                category: "Common",
                pins: [
                    {
                        image: "bull/neutral.png",
                    },
                    {
                        image: "bull/happy.png",
                    },
                    {
                        image: "bull/sad.png",
                    },
                    {
                        image: "bull/angry.png",
                    },
                    {
                        image: "bull/gg.png",
                    },
                    {
                        image: "bull/clap.png",
                    },
                    {
                        image: "bull/thanks.png",
                    },
                    {
                        image: "bull/phew.png",
                    },
                ],
            },
            {
                id: 4,
                name: "Jessie",
                image: "/images/brawlStars/jessie/main.png",
                gadget: ["Spark Plug", "Recoil Spring"],
                starpower: ["Energize", "Shocky"],
                category: "Common",

                pins: [
                    {
                        image: "/images/brawlStars/jessie/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/jessie/pins/tanuki-jessie/neutral.png",
                    },
                ],
            },
            {
                id: 5,
                name: "Brock",
                image: "/images/brawlStars/brock/main.png",
                gadget: ["Rocket Laces", "Rocket Fuel"],
                starpower: ["More Rockets", "Rocket No. Four"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/brock/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/brock/pins/postal-brock/neutral.png",
                    },
                ],
            },
            {
                id: 6,
                name: "Dynamike",
                image: "/images/brawlStars/dynamike/main.png",
                gadget: ["Fidget Spinner", "Satchel Charge"],
                starpower: ["Dyna Jump", "Demolition"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/dynamike/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/dynamike/pins/santa-mike/gg.png",
                    },
                ],
            },
            {
                id: 7,
                name: "Bo",
                image: "/images/brawlStars/bo/main.png",
                gadget: ["Super Totem", "Tripwire"],
                starpower: ["Circling Eagle", "Snare A Bear"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/bo/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/ho-ho-ho-bo/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/bo/pins/wasp-bo/neutral.png",
                    },
                ],
            },
            {
                id: 8,
                name: "Tick",
                image: "/images/brawlStars/tick/main.png",
                gadget: ["Mine Mania", "Last Hurrah"],
                starpower: ["Well Oiled", "Automa-Tick Reload"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/tick/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/tick/pins/snowman-tick/clap.png",
                    },
                ],
            },
            {
                id: 9,
                name: "8-Bit",
                image: "/images/brawlStars/8-bit/main.png",
                gadget: ["Cheat Cartridge", "Extra Credits"],
                starpower: ["Boosted Booster", "Plugged In"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/8-bit/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/8-bit/pins/v8-bit/neutral.png",
                    },
                ],
            },
            {
                id: 10,
                name: "Emz",
                image: "/images/brawlStars/emz/main.png",
                gadget: ["Friend Zoner", "Acid Spray"],
                starpower: ["Bad Karma", "Hype"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/emz/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/emz/pins/special.png",
                    },
                ],
            },
            {
                id: 11,
                name: "Stu",
                image: "/images/brawlStars/stu/main.png",
                gadget: ["Speed Zone", "Breakthrough"],
                starpower: ["Zero Drag", "Gaso Heal"],
                category: "Common",
                pins: [
                    {
                        image: "/images/brawlStars/stu/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/stu/pins/headless-rider-stu/neutral.png",
                    },
                ],
            },
            {
                id: 12,
                name: "El Primo",
                image: "/images/brawlStars/el_primo/main.png",
                gadget: ["Suplex Supplement", "Asteroid Belt"],
                starpower: ["El Fuego", "Meteor Rush"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/el-primo/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/el-dragon/verdoso/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/el-dragon/rosado/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/el-tigro/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el-primo/pins/el-corazon/neutral.png",
                    },
                ],
            },
            {
                id: 13,
                name: "Barley",
                image: "/images/brawlStars/barley/main.png",
                gadget: ["Sticky Syrup Mixer", "Herbal Tonic"],
                starpower: ["Medical Use", "Extra Noxious"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/barley/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/bakesale-barley/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/barley/pins/sway-master-barley/neutral.png",
                    },
                ],
            },
            {
                id: 14,
                name: "Poco",
                image: "/images/brawlStars/poco/main.png",
                gadget: ["Tuning Fork", "Protective Tunes"],
                starpower: ["Da Capo!", "Screeching Solo"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/poco/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/poco/pins/serenade-poco/neutral.png",
                    },
                ],
            },
            {
                id: 15,
                name: "Rosa",
                image: "/images/brawlStars/rosa/main.png",
                gadget: ["Grow Light", "Unfriendly Bushes"],
                starpower: ["Plant Life", "Thorny Gloves"],
                category: "Rare",
                pins: [
                    {
                        image: "/images/brawlStars/rosa/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/happy.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/sad.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/angry.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/gg.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/clap.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/phew.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/brawl-o-ween-rosa/special.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/major-rosa/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/rosa/pins/mantis-rosa/neutral.png",
                    },
                ],
            },
            {
                id: 16,
                name: "Rico",
                image: "/images/brawlStars/rico/main.png",
                gadget: ["Multiball Launcher", "Bouncy Castle"],
                starpower: ["Super Bouncy", "Robo Retreat"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/rico/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/rico/pins/firefly-rico/neutral.png",
                    },
                ],
            },
            {
                id: 17,
                name: "Darryl",
                image: "/images/brawlStars/darryl/main.png",
                gadget: ["Recoiling Rotator", "Tar Barrel"],
                starpower: ["Steel Hoops", "Rolling Reload"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/darryl/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/megabox-darryl/special.png",
                    },
                    {
                        image: "/images/brawlStars/darryl/pins/crash-test-darryl/neutral.png",
                    },
                ],
            },
            {
                id: 18,
                name: "Penny",
                image: "/images/brawlStars/penny/main.png",
                gadget: ["Salty Barrel", "Trusty Spyglass"],
                starpower: ["Heavy Coffers", "Master Blaster"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/penny/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/penny/pins/phew.png",
                    },

                    {
                        image: "/images/brawlStars/penny/pins/lil-helper-penny/neutral.png",
                    },
                ],
            },
            {
                id: 19,
                name: "Carl",
                image: "/images/brawlStars/carl/main.png",
                gadget: ["Heat Ejector", "Flying Hook"],
                starpower: ["Power Throw", "Protective Pirouette"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/carl/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/road-rage-carl/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/carl/pins/biker-carl/neutral.png",
                    },
                ],
            },
            {
                id: 20,
                name: "Jacky",
                image: "/images/brawlStars/jacky/main.png",
                gadget: ["Pneumatic Booster", null],
                starpower: ["Counter Crush", "Hardy Hard Hat"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/jacky/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/jacky/pins/gift-express-jacky/happy.png",
                    },
                ],
            },
            {
                id: 21,
                name: "Piper",
                image: "/images/brawlStars/piper/main.png",
                gadget: ["Auto Aimer", "Homemade Recipe"],
                starpower: ["Ambush", "Snappy Sniping"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/piper/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/calavera-piper/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/piper/pins/cupid-piper/neutral.png",
                    },
                ],
            },
            {
                id: 22,
                name: "Pam",
                image: "/images/brawlStars/pam/main.png",
                gadget: ["Pulse Modulator", "ScrapSucker"],
                starpower: ["Mama's Hug", "Mama's Squeeze"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/pam/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/pam/pins/phew.png",
                    },
                ],
            },
            {
                id: 23,
                name: "Frank",
                image: "/images/brawlStars/frank/main.png",
                gadget: ["Active Noise Canceling", "Irresistible Attraction"],
                starpower: ["Power Grab", "Sponge"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/frank/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/frank/pins/holiday-party-frank/gg.png",
                    },
                ],
            },
            {
                id: 24,
                name: "Bibi",
                image: "/images/brawlStars/bibi/main.png",
                gadget: ["Vitamin Booster", "Extra Stikcy"],
                starpower: ["Home Run", "Batting Stance"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/bibi/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/bibi/pins/phew.png",
                    },
                ],
            },
            {
                id: 25,
                name: "Bea",
                image: "/images/brawlStars/bea/main.png",
                gadget: ["Honey Molasses", "Rattled Hive"],
                starpower: ["Insta Beaload", "Honeycomb"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/bea/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/neko-bea/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/bea/pins/gold-neko-bea/neutral.png",
                    },
                ],
            },
            {
                id: 26,
                name: "Nani",
                image: "/images/brawlStars/nani.png",
                gadget: ["Warp Blast", "Return to Sender"],
                starpower: ["Autofocus", "Tempered Steel"],
                category: "Super Rare",
                pins: [
                    {
                        image: "/images/brawlStars/nani/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/nani/pins/special.png",
                    },
                ],
            },
            {
                id: 27,
                name: "Edgar",
                image: "/images/brawlStars/edgar/main.png",
                gadget: ["Let's Fly", "Hardcore"],
                starpower: ["Hard Landing", "Fisticuffs"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/edgar/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/orochi-edgar/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/edgar/pins/doctor-edgar/neutral.png",
                    },
                ],
            },
            {
                id: 28,
                name: "Griff",
                image: "/images/brawlStars/griff/main.png",
                gadget: ["Piggy Bank", null],
                starpower: ["Keep the Change", "Business Resilience"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/griff/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/griff/pins/sleigher-griff/happy.png",
                    },
                ],
            },
            {
                id: 29,
                name: "Mortis",
                image: "/images/brawlStars/mortis/main.png",
                gadget: ["Combo Spinner", "Survival Shovel"],
                starpower: ["Creepy Harvest", "Coiled Snake"],
                category: "Mythic",
            },
            {
                id: 30,
                name: "Tara",
                image: "/images/brawlStars/tara/main.png",
                gadget: ["Psychic Enhancer", "Support from Beyond"],
                starpower: ["Black Portal", "Healing Shade"],
                category: "Mythic",
            },
            {
                id: 31,
                name: "Gene",
                image: "/images/brawlStars/gene/main.png",
                gadget: ["Lamp Blowout", "Vengeful Spirits"],
                starpower: ["Magic Puffs", "Spirit Slap"],
                category: "Mythic",
            },
            {
                id: 32,
                name: "Max",
                image: "/images/brawlStars/max/main.png",
                gadget: ["Phase Shifter", "Sneaky Sneakers"],
                starpower: ["Super Charged", "Run N Gun"],
                category: "Mythic",
            },
            {
                id: 33,
                name: "Mr. P",
                image: "/images/brawlStars/mr_p/main.png",
                gadget: ["Service Bell", "Porter Reinforcements"],
                starpower: ["Handle With Care", "Revolving Door"],
                category: "Mythic",
            },
            {
                id: 34,
                name: "Sprout",
                image: "/images/brawlStars/sprout/main.png",
                gadget: ["Garden Mulcher", "Transplant"],
                starpower: ["Overgrowth", "Photosynthesis"],
                category: "Mythic",
            },
            {
                id: 35,
                name: "Byron",
                image: "/images/brawlStars/byron/main.png",
                gadget: ["Shot In The Arm", "Booster Shots"],
                starpower: ["Malaise", "Injection"],
                category: "Mythic",
            },
            {
                id: 36,
                name: "Squeak",
                image: "/images/brawlStars/squeak/main.png",
                gadget: ["Windup", "Residue"],
                starpower: ["Chain Reaction", "Super Sticky"],
                category: "Mythic",
            },
            {
                id: 37,
                name: "Spike",
                image: "/images/brawlStars/spike/main.png",
                gadget: ["Poping Pincushion", "Life Plant"],
                starpower: ["Fertilize", "Curveball"],
                category: "Legendary",
            },
            {
                id: 38,
                name: "Crow",
                image: "/images/brawlStars/crow/main.png",
                gadget: ["Defence Booster", "Slowing Toxic"],
                starpower: ["Extra Toxic", "Carrion Crow"],
                category: "Legendary",
            },
            {
                id: 39,
                name: "Leon",
                image: "/images/brawlStars/leon/main.png",
                gadget: ["Clone Projector", "Lollipop Drop"],
                starpower: ["Smoke Trails", "Invisiheal"],
                category: "Legendary",
            },
            {
                id: 40,
                name: "Sandy",
                image: "/images/brawlStars/sandy/main.png",
                gadget: ["Sleep Simulator", "Sweet Dreams"],
                starpower: ["Rude Sands", "Healing Winds"],
                category: "Legendary",
            },
            {
                id: 41,
                name: "Amber",
                image: "/images/brawlStars/amber/main.png",
                gadget: ["Fire Starters", null],
                starpower: ["Wild Flames", "Scrochin Siphon"],
                category: "Legendary",
            },
            {
                id: 42,
                name: "Gale",
                image: "/images/brawlStars/gale/main.png",
                gadget: ["Spring Ejector", "Twister"],
                starpower: ["Blustery Blow", "Freezing Snow"],
                category: "Chromatic",
            },
            {
                id: 43,
                name: "Surge",
                image: "/images/brawlStars/surge/main.png",
                gadget: ["Power Surge", null],
                starpower: ["To The Max!", "Serve Ice Cold"],
                category: "Chromatic",
            },
            {
                id: 44,
                name: "Colette",
                image: "/images/brawlStars/colette/main.png",
                gadget: ["Na-Ah", "Gotcha!"],
                starpower: ["Push It", "Mass Tax"],
                category: "Chromatic",
            },
            {
                id: 45,
                name: "Lou",
                image: "/images/brawlStars/lou/main.png",
                gadget: ["Ice Block", "Cryo Syrup"],
                starpower: ["Supercool", "Hypothermia"],
                category: "Chromatic",
            },
            {
                id: 46,
                name: "Colonel Ruffs",
                image: "/images/brawlStars/colonel_ruffs/main.png",
                gadget: ["Take Cover", "Air Support"],
                starpower: ["Air Superiority", "Field Promotions"],
                category: "Chromatic",
            },
            {
                id: 47,
                name: "Belle",
                image: "/images/brawlStars/belle/main.png",
                gadget: ["Nest Egg", "Reverse Polarity"],
                starpower: ["Positive Feedback", "Grounded"],
                category: "Chromatic",
            },
            {
                id: 48,
                name: "Buzz",
                image: "/images/brawlStars/buzz/main.png",
                gadget: ["Reserve Buoy", null],
                starpower: ["Tougher Torpedo", "Eyes Sharp"],
                category: "Chromatic",
            },
            {
                id: 49,
                name: "Ash",
                image: "/images/brawlStars/ash/main.png",
                gadget: ["Chill Pill", "Rotten Banana"],
                starpower: ["First Bash", "Mad As Heck"],
                category: "Chromatic",
            },
            {
                id: 50,
                name: "Meg",
                image: "/images/brawlStars/meg/main.png",
                gadget: ["Jolting Volts", null],
                starpower: ["Force Field", "Self Destruction"],
                category: "Legendary",
            },
            {
                id: 51,
                name: "Lola",
                image: "/images/brawlStars/lola/main.png",
                gadget: ["Freeze Frames", "Stunt Double"],
                starpower: ["Improvise", "Sealed With A Kiss"],
                category: "Chromatic",
            },
            {
                id: 52,
                name: "Grom",
                image: "/images/brawlStars/grom/main.png",
                gadget: ["Guardia", "Radio Check"],
                starpower: ["Tallow in the Shins", "Factor X"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/grom/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/grom/pins/special.png",
                    },
                ],
            },
            {
                id: 53,
                name: "Fang",
                image: "/images/brawlStars/fang/main.png",
                gadget: ["Corn Foo", "Roundhouse Kick"],
                starpower: ["Fresh Kicks", "Divine Soles"],
                category: "Chromatic",
            },
            {
                id: 54,
                name: "Eve",
                image: "/images/brawlStars/eve/main.png",
                gadget: ["Gotta Go!", "Motherly Love"],
                starpower: ["Unnatural Order", "Happy Surprise"],
                category: "Chromatic",
            },
            {
                id: 55,
                name: "Janet",
                image: "/images/brawlStars/janet/main.png",
                gadget: ["Drop The Bass", "Backstage Pass"],
                starpower: ["Stage View", "Vocal Warm-Up"],
                category: "Chromatic",
            },
            {
                id: 56,
                name: "Bonnie",
                image: "/images/brawlStars/bonnie/main.png",
                gadget: ["Sugar Rush", "Crash Test"],
                starpower: ["Black Powder", "Wisdom Tooth"],
                category: "Epic",
                pins: [
                    {
                        image: "/images/brawlStars/bonnie/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/bonnie/pins/empress-bonnie/neutral.png",
                    },
                ],
            },
            {
                id: 57,
                name: "Otis",
                image: "/images/brawlStars/otis/main.png",
                gadget: ["Dormant Star", null],
                starpower: ["Stencil Glue", null],
                category: "Chromatic",
            },
        ],
    });
};
