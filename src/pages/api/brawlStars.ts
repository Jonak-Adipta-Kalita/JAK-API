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
                        image: "/images/brawlStars/brock/pins/hot-road-brock/neutral.png",
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
                        image: "/images/brawlStars/el_primo/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/el-dragon/verdoso/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/el-dragon/rosado/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/el-tigro/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/el_primo/pins/el-corazon/neutral.png",
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
                pins: [
                    {
                        image: "/images/brawlStars/mortis/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/mortis/pins/rockabilly-mortis/neutral.png",
                    },
                ],
            },
            {
                id: 30,
                name: "Tara",
                image: "/images/brawlStars/tara/main.png",
                gadget: ["Psychic Enhancer", "Support from Beyond"],
                starpower: ["Black Portal", "Healing Shade"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/tara/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/tara/pins/tempest-tara/neutral.png",
                    },
                ],
            },
            {
                id: 31,
                name: "Gene",
                image: "/images/brawlStars/gene/main.png",
                gadget: ["Lamp Blowout", "Vengeful Spirits"],
                starpower: ["Magic Puffs", "Spirit Slap"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/gene/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/gene/pins/swamp-gene/neutral.png",
                    },
                ],
            },
            {
                id: 32,
                name: "Max",
                image: "/images/brawlStars/max/main.png",
                gadget: ["Phase Shifter", "Sneaky Sneakers"],
                starpower: ["Super Charged", "Run N Gun"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/max/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/max/pins/phew.png",
                    },
                ],
            },
            {
                id: 33,
                name: "Mr. P",
                image: "/images/brawlStars/mr_p/main.png",
                gadget: ["Service Bell", "Porter Reinforcements"],
                starpower: ["Handle With Care", "Revolving Door"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/mr_p/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/count-pengula/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/mr-fly/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/daruma-mr-p/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/mr_p/pins/daruma-mr-p/special.png",
                    },
                ],
            },
            {
                id: 34,
                name: "Sprout",
                image: "/images/brawlStars/sprout/main.png",
                gadget: ["Garden Mulcher", "Transplant"],
                starpower: ["Overgrowth", "Photosynthesis"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/sprout/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/prince-sprout/emerald/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/prince-sprout/ruby/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/sprout/pins/corrupted-sprout/gg.png",
                    },
                ],
            },
            {
                id: 35,
                name: "Byron",
                image: "/images/brawlStars/byron/main.png",
                gadget: ["Shot In The Arm", "Booster Shots"],
                starpower: ["Malaise", "Injection"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/byron/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/byron/pins/overlord-byron/neutral.png",
                    },
                ],
            },
            {
                id: 36,
                name: "Squeak",
                image: "/images/brawlStars/squeak/main.png",
                gadget: ["Windup", "Residue"],
                starpower: ["Chain Reaction", "Super Sticky"],
                category: "Mythic",
                pins: [
                    {
                        image: "/images/brawlStars/squeak/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/squeak/pins/ghost-squeak/neutral.png",
                    },
                ],
            },
            {
                id: 37,
                name: "Spike",
                image: "/images/brawlStars/spike/main.png",
                gadget: ["Poping Pincushion", "Life Plant"],
                starpower: ["Fertilize", "Curveball"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/spike/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/dark-lord-spike/happy.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/logmas-spike/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/sakura-spike/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/spike/pins/pyro-spike/neutral.png",
                    },
                ],
            },
            {
                id: 38,
                name: "Crow",
                image: "/images/brawlStars/crow/main.png",
                gadget: ["Defence Booster", "Slowing Toxic"],
                starpower: ["Extra Toxic", "Carrion Crow"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/crow/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/crow/pins/phew.png",
                    },
                ],
            },
            {
                id: 39,
                name: "Leon",
                image: "/images/brawlStars/leon/main.png",
                gadget: ["Clone Projector", "Lollipop Drop"],
                starpower: ["Smoke Trails", "Invisiheal"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/leon/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/leon/pins/werewolf-leon/neutral.png",
                    },
                ],
            },
            {
                id: 40,
                name: "Sandy",
                image: "/images/brawlStars/sandy/main.png",
                gadget: ["Sleep Simulator", "Sweet Dreams"],
                starpower: ["Rude Sands", "Healing Winds"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/sandy/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/sandy/pins/special.png",
                    },
                ],
            },
            {
                id: 41,
                name: "Amber",
                image: "/images/brawlStars/amber/main.png",
                gadget: ["Fire Starters", null],
                starpower: ["Wild Flames", "Scrochin Siphon"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/amber/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/amber/pins/special.png",
                    },
                ],
            },
            {
                id: 42,
                name: "Gale",
                image: "/images/brawlStars/gale/main.png",
                gadget: ["Spring Ejector", "Twister"],
                starpower: ["Blustery Blow", "Freezing Snow"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/gale/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/happy.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/sad.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/angry.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/gg.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/clap.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/gale/pins/merchant-gale/phew.png",
                    },
                ],
            },
            {
                id: 43,
                name: "Surge",
                image: "/images/brawlStars/surge/main.png",
                gadget: ["Power Surge", null],
                starpower: ["To The Max!", "Serve Ice Cold"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/surge/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/happy.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/sad.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/angry.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/gg.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/clap.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/phew.png",
                    },
                    {
                        image: "/images/brawlStars/surge/pins/mecha-paladin-surge/special.png",
                    },
                ],
            },
            {
                id: 44,
                name: "Colette",
                image: "/images/brawlStars/colette/main.png",
                gadget: ["Na-Ah", "Gotcha!"],
                starpower: ["Push It", "Mass Tax"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/colette/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/happy.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/sad.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/angry.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/gg.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/clap.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/phew.png",
                    },
                    {
                        image: "/images/brawlStars/colette/pins/trixie-colette/special.png",
                    },
                ],
            },
            {
                id: 45,
                name: "Lou",
                image: "/images/brawlStars/lou/main.png",
                gadget: ["Ice Block", "Cryo Syrup"],
                starpower: ["Supercool", "Hypothermia"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/lou/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/happy.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/sad.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/angry.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/gg.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/clap.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/phew.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/king-lou/special.png",
                    },
                    {
                        image: "/images/brawlStars/lou/pins/smooth-lou/neutral.png",
                    },
                ],
            },
            {
                id: 46,
                name: "Colonel Ruffs",
                image: "/images/brawlStars/colonel_ruffs/main.png",
                gadget: ["Take Cover", "Air Support"],
                starpower: ["Air Superiority", "Field Promotions"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/happy.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/sad.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/angry.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/gg.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/clap.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/phew.png",
                    },
                    {
                        image: "/images/brawlStars/colonel_ruffs/pins/ronin-ruffs/special.png",
                    },
                ],
            },
            {
                id: 47,
                name: "Belle",
                image: "/images/brawlStars/belle/main.png",
                gadget: ["Nest Egg", "Reverse Polarity"],
                starpower: ["Positive Feedback", "Grounded"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/belle/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/happy.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/sad.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/angry.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/gg.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/clap.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/phew.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/goldhand-belle/special.png",
                    },
                    {
                        image: "/images/brawlStars/belle/pins/ivy-belle/happy.png",
                    },
                ],
            },
            {
                id: 48,
                name: "Buzz",
                image: "/images/brawlStars/buzz/main.png",
                gadget: ["Reserve Buoy", null],
                starpower: ["Tougher Torpedo", "Eyes Sharp"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/buzz/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/happy.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/sad.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/angry.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/gg.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/clap.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/phew.png",
                    },
                    {
                        image: "/images/brawlStars/buzz/pins/born-bad-buzz/special.png",
                    },
                ],
            },
            {
                id: 49,
                name: "Ash",
                image: "/images/brawlStars/ash/main.png",
                gadget: ["Chill Pill", "Rotten Banana"],
                starpower: ["First Bash", "Mad As Heck"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/ash/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/happy.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/sad.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/angry.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/gg.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/clap.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/phew.png",
                    },
                    {
                        image: "/images/brawlStars/ash/pins/ninja-ash/special.png",
                    },
                ],
            },
            {
                id: 50,
                name: "Meg",
                image: "/images/brawlStars/meg/main.png",
                gadget: ["Jolting Volts", null],
                starpower: ["Force Field", "Self Destruction"],
                category: "Legendary",
                pins: [
                    {
                        image: "/images/brawlStars/meg/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/beetle-meg/special.png",
                    },
                    {
                        image: "/images/brawlStars/meg/pins/monster-truck-meg/neutral.png",
                    },
                ],
            },
            {
                id: 51,
                name: "Lola",
                image: "/images/brawlStars/lola/main.png",
                gadget: ["Freeze Frames", "Stunt Double"],
                starpower: ["Improvise", "Sealed With A Kiss"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/lola/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/happy.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/sad.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/angry.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/gg.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/clap.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/phew.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/rebel-lola/special.png",
                    },
                    {
                        image: "/images/brawlStars/lola/pins/galaxy-storm-lola/neutral.png",
                    },
                ],
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
                pins: [
                    {
                        image: "/images/brawlStars/fang/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/happy.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/sad.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/angry.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/gg.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/clap.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/phew.png",
                    },
                    {
                        image: "/images/brawlStars/fang/pins/furious-fang/special.png",
                    },
                ],
            },
            {
                id: 54,
                name: "Eve",
                image: "/images/brawlStars/eve/main.png",
                gadget: ["Gotta Go!", "Motherly Love"],
                starpower: ["Unnatural Order", "Happy Surprise"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/eve/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/happy.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/sad.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/angry.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/gg.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/clap.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/phew.png",
                    },
                    {
                        image: "/images/brawlStars/eve/pins/spiky-eve/special.png",
                    },
                ],
            },
            {
                id: 55,
                name: "Janet",
                image: "/images/brawlStars/janet/main.png",
                gadget: ["Drop The Bass", "Backstage Pass"],
                starpower: ["Stage View", "Vocal Warm-Up"],
                category: "Chromatic",
                pins: [
                    {
                        image: "/images/brawlStars/janet/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/happy.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/sad.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/angry.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/gg.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/clap.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/phew.png",
                    },
                    {
                        image: "/images/brawlStars/janet/pins/valkyrie-janet/special.png",
                    },
                ],
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
                pins: [
                    {
                        image: "/images/brawlStars/otis/pins/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/happy.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/sad.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/angry.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/gg.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/clap.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/phew.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/special.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/neutral.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/happy.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/sad.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/angry.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/gg.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/clap.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/thanks.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/phew.png",
                    },
                    {
                        image: "/images/brawlStars/otis/pins/pharaotis/special.png",
                    },
                ],
            },
        ],
    });
};
