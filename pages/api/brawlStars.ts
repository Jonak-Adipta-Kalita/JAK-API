import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        brawlers: [
            {
                id: 0,
                name: "Shelly",
                image: "/images/brawlStars/shelly.png",
                gadget: ["Fast Forward", "Clay Pigeon"],
                starpower: ["Shell Shock", "Band-Aid"],
                category: "Starting Brawler",
            },
            {
                id: 1,
                name: "Nita",
                image: "/images/brawlStars/nita.png",
                gadget: ["Bear Paws", "Faux Fur"],
                starpower: ["Bear with Me", "Hyper Bear"],
                category: "Trophy Road Brawler",
            },
            {
                id: 2,
                name: "Colt",
                image: "/images/brawlStars/colt.png",
                gadget: ["Speed Loader", "Silver Bullet"],
                starpower: ["Slick Boots", "Magnum Special"],
                category: "Trophy Road Brawler",
            },
            {
                id: 3,
                name: "Bull",
                image: "/images/brawlStars/bull.png",
                gadget: ["T-Bone Injector", "Stomper"],
                starpower: ["Berserker", "Tough Guy"],
                category: "Trophy Road Brawler",
            },
            {
                id: 4,
                name: "Jessie",
                image: "/images/brawlStars/jessie.png",
                gadget: ["Spark Plug", "Recoil Spring"],
                starpower: ["Energize", "Shocky"],
                category: "Trophy Road Brawler",
            },
            {
                id: 5,
                name: "Brock",
                image: "/images/brawlStars/brock.png",
                gadget: ["Rocket Laces", "Rocket Fuel"],
                starpower: ["More Rockets", "Rocket No. Four"],
                category: "Trophy Road Brawler",
            },
            {
                id: 6,
                name: "Dynamike",
                image: "/images/brawlStars/dynamike.png",
                gadget: ["Fidget Spinner", "Satchel Charge"],
                starpower: ["Dyna Jump", "Demolition"],
                category: "Trophy Road Brawler",
            },
            {
                id: 7,
                name: "Bo",
                image: "/images/brawlStars/bo.png",
                gadget: ["Super Totem", "Tripwire"],
                starpower: ["Circling Eagle", "Snare A Bear"],
                category: "Trophy Road Brawler",
            },
            {
                id: 8,
                name: "Tick",
                image: "/images/brawlStars/tick.png",
                gadget: ["Mine Mania", "Last Hurrah"],
                starpower: ["Well Oiled", "Automa-Tick Reload"],
                category: "Trophy Road Brawler",
            },
            {
                id: 9,
                name: "8-Bit",
                image: "8-/images/brawlStars/bit.png",
                gadget: ["Cheat Cartridge", "Extra Credits"],
                starpower: ["Boosted Booster", "Plugged In"],
                category: "Trophy Road Brawler",
            },
            {
                id: 10,
                name: "Emz",
                image: "/images/brawlStars/emz.png",
                gadget: ["Friend Zoner", "Acid Spray"],
                starpower: ["Bad Karma", "Hype"],
                category: "Trophy Road Brawler",
            },
            {
                id: 11,
                name: "Stu",
                image: "/images/brawlStars/stu.png",
                gadget: ["Speed Zone", "Breakthrough"],
                starpower: ["Zero Drag", "Gaso Heal"],
                category: "Trophy Road Brawler",
            },
            {
                id: 12,
                name: "El Primo",
                image: "/images/brawlStars/el_primo.png",
                gadget: ["Suplex Supplement", "Asteroid Belt"],
                starpower: ["El Fuego", "Meteor Rush"],
                category: "Rare Brawler",
            },
            {
                id: 13,
                name: "Barley",
                image: "/images/brawlStars/barley.png",
                gadget: ["Sticky Syrup Mixer", "Herbal Tonic"],
                starpower: ["Medical Use", "Extra Noxious"],
                category: "Rare Brawler",
            },
            {
                id: 14,
                name: "Poco",
                image: "/images/brawlStars/poco.png",
                gadget: ["Tuning Fork", "Protective Tunes"],
                starpower: ["Da Capo!", "Screeching Solo"],
                category: "Rare Brawler",
            },
            {
                id: 15,
                name: "Rosa",
                image: "/images/brawlStars/rosa.png",
                gadget: ["Grow Light", "Unfriendly Bushes"],
                starpower: ["Plant Life", "Thorny Gloves"],
                category: "Rare Brawler",
            },
            {
                id: 16,
                name: "Rico",
                image: "/images/brawlStars/rico.png",
                gadget: ["Multiball Launcher", "Bouncy Castle"],
                starpower: ["Super Bouncy", "Robo Retreat"],
                category: "Super Rare Brawler",
            },
            {
                id: 17,
                name: "Darryl",
                image: "/images/brawlStars/darryl.png",
                gadget: ["Recoiling Rotator", "Tar Barrel"],
                starpower: ["Steel Hoops", "Rolling Reload"],
                category: "Super Rare Brawler",
            },
            {
                id: 18,
                name: "Penny",
                image: "/images/brawlStars/penny.png",
                gadget: ["Pocket Detonator", "Captain's Compass"],
                starpower: ["Last Blast", "Balls Of Fire"],
                category: "Super Rare Brawler",
            },
            {
                id: 19,
                name: "Carl",
                image: "/images/brawlStars/carl.png",
                gadget: ["Heat Ejector", "Flying Hook"],
                starpower: ["Power Throw", "Protective Pirouette"],
                category: "Super Rare Brawler",
            },
            {
                id: 20,
                name: "Jacky",
                image: "/images/brawlStars/jacky.png",
                gadget: ["Pneumatic Booster", null],
                starpower: ["Counter Crush", "Hardy Hard Hat"],
                category: "Super Rare Brawler",
            },
            {
                id: 21,
                name: "Piper",
                image: "/images/brawlStars/piper.png",
                gadget: ["Auto Aimer", "Homemade Recipe"],
                starpower: ["Ambush", "Snappy Sniping"],
                category: "Epic Brawler",
            },
            {
                id: 22,
                name: "Pam",
                image: "/images/brawlStars/pam.png",
                gadget: ["Pulse Modulator", "ScrapSucker"],
                starpower: ["Mama's Hug", "Mama's Squeeze"],
                category: "Epic Brawler",
            },
            {
                id: 23,
                name: "Frank",
                image: "/images/brawlStars/frank.png",
                gadget: ["Active Noise Canceling", "Irresistible Attraction"],
                starpower: ["Power Grab", "Sponge"],
                category: "Epic Brawler",
            },
            {
                id: 24,
                name: "Bibi",
                image: "/images/brawlStars/bibi.png",
                gadget: ["Vitamin Booster", "Extra Stikcy"],
                starpower: ["Home Run", "Batting Stance"],
                category: "Epic Brawler",
            },
            {
                id: 25,
                name: "Bea",
                image: "/images/brawlStars/bea.png",
                gadget: ["Honey Molasses", "Rattled Hive"],
                starpower: ["Insta Beaload", "Honeycomb"],
                category: "Epic Brawler",
            },
            {
                id: 26,
                name: "Nani",
                image: "/images/brawlStars/nani.png",
                gadget: ["Warp Blast", "Return to Sender"],
                starpower: ["Autofocus", "Tempered Steel"],
                category: "Super Rare Brawler",
            },
            {
                id: 27,
                name: "Edgar",
                image: "/images/brawlStars/edgar.png",
                gadget: ["Let's Fly", "Hardcore"],
                starpower: ["Hard Landing", "Fisticuffs"],
                category: "Epic Brawler",
            },
            {
                id: 28,
                name: "Griff",
                image: "/images/brawlStars/griff.png",
                gadget: ["Piggy Bank", null],
                starpower: ["Keep the Change", "Business Resilience"],
                category: "Epic Brawler",
            },
            {
                id: 29,
                name: "Mortis",
                image: "/images/brawlStars/mortis.png",
                gadget: ["Combo Spinner", "Survival Shovel"],
                starpower: ["Creepy Harvest", "Coiled Snake"],
                category: "Mythic Brawler",
            },
            {
                id: 30,
                name: "Tara",
                image: "/images/brawlStars/tara.png",
                gadget: ["Psychic Enhancer", "Support from Beyond"],
                starpower: ["Black Portal", "Healing Shade"],
                category: "Mythic Brawler",
            },
            {
                id: 31,
                name: "Gene",
                image: "/images/brawlStars/gene.png",
                gadget: ["Lamp Blowout", "Vengeful Spirits"],
                starpower: ["Magic Puffs", "Spirit Slap"],
                category: "Mythic Brawler",
            },
            {
                id: 32,
                name: "Max",
                image: "/images/brawlStars/max.png",
                gadget: ["Phase Shifter", "Sneaky Sneakers"],
                starpower: ["Super Charged", "Run N Gun"],
                category: "Mythic Brawler",
            },
            {
                id: 33,
                name: "Mr. P",
                image: "/images/brawlStars/mr_p.png",
                gadget: ["Service Bell", "Porter Reinforcements"],
                starpower: ["Handle With Care", "Revolving Door"],
                category: "Mythic Brawler",
            },
            {
                id: 34,
                name: "Sprout",
                image: "/images/brawlStars/sprout.png",
                gadget: ["Garden Mulcher", "Transplant"],
                starpower: ["Overgrowth", "Photosynthesis"],
                category: "Mythic Brawler",
            },
            {
                id: 35,
                name: "Byron",
                image: "/images/brawlStars/byron.png",
                gadget: ["Shot In The Arm", "Booster Shots"],
                starpower: ["Malaise", "Injection"],
                category: "Mythic Brawler",
            },
            {
                id: 36,
                name: "Squeak",
                image: "/images/brawlStars/squeak.png",
                gadget: ["Windup", "Residue"],
                starpower: ["Chain Reaction", "Super Sticky"],
                category: "Mythic Brawler",
            },
            {
                id: 37,
                name: "Spike",
                image: "/images/brawlStars/spike.png",
                gadget: ["Poping Pincushion", "Life Plant"],
                starpower: ["Fertilize", "Curveball"],
                category: "Legendary Brawler",
            },
            {
                id: 38,
                name: "Crow",
                image: "/images/brawlStars/crow.png",
                gadget: ["Defence Booster", "Slowing Toxic"],
                starpower: ["Extra Toxic", "Carrion Crow"],
                category: "Legendary Brawler",
            },
            {
                id: 39,
                name: "Leon",
                image: "/images/brawlStars/leon.png",
                gadget: ["Clone Projector", "Lollipop Drop"],
                starpower: ["Smoke Trails", "Invisiheal"],
                category: "Legendary Brawler",
            },
            {
                id: 40,
                name: "Sandy",
                image: "/images/brawlStars/sandy.png",
                gadget: ["Sleep Simulator", "Sweet Dreams"],
                starpower: ["Rude Sands", "Healing Winds"],
                category: "Legendary Brawler",
            },
            {
                id: 41,
                name: "Amber",
                image: "/images/brawlStars/amber.png",
                gadget: ["Fire Starters", null],
                starpower: ["Wild Flames", "Scrochin Siphon"],
                category: "Legendary Brawler",
            },
            {
                id: 42,
                name: "Gale",
                image: "/images/brawlStars/gale.png",
                gadget: ["Spring Ejector", "Twister"],
                starpower: ["Blustery Blow", "Freezing Snow"],
                category: "Chromatic Brawler",
            },
            {
                id: 43,
                name: "Surge",
                image: "/images/brawlStars/surge.png",
                gadget: ["Power Surge", null],
                starpower: ["To The Max!", "Serve Ice Cold"],
                category: "Chromatic Brawler",
            },
            {
                id: 44,
                name: "Colette",
                image: "/images/brawlStars/colette.png",
                gadget: ["Na-Ah", "Gotcha!"],
                starpower: ["Push It", "Mass Tax"],
                category: "Chromatic Brawler",
            },
            {
                id: 45,
                name: "Lou",
                image: "/images/brawlStars/lou.png",
                gadget: ["Ice Block", "Cryo Syrup"],
                starpower: ["Supercool", "Hypothermia"],
                category: "Chromatic Brawler",
            },
            {
                id: 46,
                name: "Colonel Ruffs",
                image: "/images/brawlStars/colonel_ruffs.png",
                gadget: ["Take Cover", "Air Support"],
                starpower: ["Air Superiority", "Field Promotions"],
                category: "Chromatic Brawler",
            },
            {
                id: 47,
                name: "Belle",
                image: "/images/brawlStars/belle.png",
                gadget: ["Nest Egg", "Reverse Polarity"],
                starpower: ["Positive Feedback", "Grounded"],
                category: "Chromatic Brawler",
            },
            {
                id: 48,
                name: "Buzz",
                image: "/images/brawlStars/buzz.png",
                gadget: ["Reserve Buoy", null],
                starpower: ["Tougher Torpedo", "Eyes Sharp"],
                category: "Chromatic Brawler",
            },
            {
                id: 49,
                name: "Ash",
                image: "/images/brawlStars/ash.png",
                gadget: ["Chill Pill", "Rotten Banana"],
                starpower: ["First Bash", "Mad As Heck"],
                category: "Chromatic Brawler",
            },
            {
                id: 50,
                name: "Meg",
                image: "/images/brawlStars/meg.png",
                gadget: ["Jolting Volts", null],
                starpower: ["Force Field", "Self Destruction"],
                category: "Legendary Brawler",
            },
            {
                id: 51,
                name: "Lola",
                image: "/images/brawlStars/lola.png",
                gadget: ["Freeze Frames", "Stunt Double"],
                starpower: ["Improvise", "Sealed With A Kiss"],
                category: "Chromatic Brawler",
            },
            {
                id: 52,
                name: "Grom",
                image: "/images/brawlStars/grom.png",
                gadget: ["Guardia", "Radio Check"],
                starpower: ["Tallow in the Shins", "Factor X"],
                category: "Epic Brawler",
            },
            {
                id: 53,
                name: "Fang",
                image: "/images/brawlStars/fang.png",
                gadget: ["Corn Foo", "Roundhouse Kick"],
                starpower: ["Fresh Kicks", null],
                category: "Chromatic Brawler",
            },
            {
                id: 54,
                name: "Eve",
                image: "/images/brawlStars/eve.png",
                gadget: ["Gotta Go!", "Motherly Love"],
                starpower: ["Unnatural Order", "Happy Surprise"],
                category: "Chromatic Brawler",
            },
        ],
    });
};
