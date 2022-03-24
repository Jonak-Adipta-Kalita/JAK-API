import type { NextApiRequest, NextApiResponse } from "next";
import { GenshinImpact } from "../../typings";

/**
 * @swagger
 * /api/genshinImpact:
 *   get:
 *     description: Get the Data about Genshin Impact
 *     summary: Get Genshin Impact Data
 *     responses:
 *       200:
 *          description: Genshin Impact Data
 */
export default (
    req: NextApiRequest,
    res: NextApiResponse<GenshinImpact | { error: string }>
) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
    res.status(200).json({
        character: [
            {
                id: 0,
                name: "Albedo",
                image: "/images/genshinImpact/albedo.png",
                element: "Geo",
                weapon: "Sword",
                special_dish: "Woodland Dream",
                sex: "Male",
                birthday: "September 13th",
                constellation: "Princeps Cretaceus",
                nation: "Mondstadt",
            },
            {
                id: 1,
                name: "Amber",
                image: "/images/genshinImpact/amber.png",
                element: "Pyro",
                weapon: "Bow",
                special_dish: "Outrider's Champion Steak!",
                sex: "Female",
                birthday: "August 10th",
                constellation: "Lepus",
                nation: "Mondstadt",
            },
            {
                id: 2,
                name: "Barbara",
                image: "/images/genshinImpact/barbara.png",
                element: "Hydro",
                weapon: "Catalyst",
                special_dish: "Spicy Stew",
                sex: "Female",
                birthday: "July 5th",
                constellation: "Crater",
                nation: "Mondstadt",
            },
            {
                id: 3,
                name: "Beidou",
                image: "/images/genshinImpact/beidou.png",
                element: "Electro",
                weapon: "Claymore",
                special_dish: "Flash-Fried Filet",
                sex: "Female",
                birthday: "February 14th",
                constellation: "Victor Mare",
                nation: "Liyue",
            },
            {
                id: 4,
                name: "Bennett",
                image: "/images/genshinImpact/bennett.png",
                element: "Pyro",
                weapon: "Sword",
                special_dish: "Teyvat Charred Egg",
                sex: "Male",
                birthday: "February 29th",
                constellation: "Rota Calamitas",
                nation: "Mondstadt",
            },
            {
                id: 5,
                name: "Chongyun",
                image: "/images/genshinImpact/chongyun.png",
                element: "Cyro",
                weapon: "Claymore",
                special_dish: "Cold Noodles with Mountain Delicacies",
                sex: "Male",
                birthday: "September 7th",
                constellation: "Nubis Caesor",
                nation: "Liyue",
            },
            {
                id: 6,
                name: "Diluc",
                image: "/images/genshinImpact/diluc.png",
                element: "Pyro",
                weapon: "Claymore",
                special_dish: "Once Upon a Time in Mondstadt",
                sex: "Male",
                birthday: "April 30th",
                constellation: "Noctua",
                nation: "Mondstadt",
            },
            {
                id: 7,
                name: "Diona",
                image: "/images/genshinImpact/diona.png",
                element: "Cyro",
                weapon: "Bow",
                special_dish: "Definitely Not a Bar Food!",
                sex: "Female",
                birthday: "January 18th",
                constellation: "Feles",
                nation: "Mondstadt",
            },
            {
                id: 8,
                name: "Eula",
                image: "/images/genshinImpact/eula.png",
                element: "Cyro",
                weapon: "Claymore",
                special_dish: "Stormcrest Pie",
                sex: "Female",
                birthday: "October 25th",
                constellation: "Aphros Delos",
                nation: "Mondstadt",
            },
            {
                id: 9,
                name: "Fischl",
                image: "/images/genshinImpact/fischl.png",
                element: "Electro",
                weapon: "Bow",
                special_dish: "Die Heilige Sinfonie",
                sex: "Female",
                birthday: "May 27th",
                constellation: "Corvus",
                nation: "Mondstadt",
            },
            {
                id: 10,
                name: "Ganyu",
                image: "/images/genshinImpact/ganyu.png",
                element: "Cyro",
                weapon: "Bow",
                special_dish: "Prosperous Peace",
                sex: "Female",
                birthday: "December 2nd",
                constellation: "Sinae Unicornis",
                nation: "Liyue",
            },
            {
                id: 11,
                name: "Hu Tao",
                image: "/images/genshinImpact/hu-tao.png",
                element: "Pyro",
                weapon: "Polearm",
                special_dish: "Ghostly March",
                sex: "Female",
                birthday: "July 15th",
                constellation: "Papilo Charontis",
                nation: "Liyue",
            },
            {
                id: 12,
                name: "Jean",
                image: "/images/genshinImpact/jean.png",
                element: "Anemo",
                weapon: "Sword",
                special_dish: "Invigorating Pizza",
                sex: "Female",
                birthday: "March 14th",
                constellation: "Leo Minor",
                nation: "Mondstadt",
            },
            {
                id: 13,
                name: "Kaedehara Kazuha",
                image: "/images/genshinImpact/kaedehara-kazuha.png",
                element: "Anemo",
                weapon: "Sword",
                special_dish: "All-Weather Beuty",
                sex: "Male",
                birthday: "October 29th",
                constellation: "Acer Palmatum",
                nation: "Inazuma",
            },
            {
                id: 14,
                name: "Kaeya",
                image: "/images/genshinImpact/kaeya.png",
                element: "Cyro",
                weapon: "Sword",
                special_dish: "Fruity Skewers",
                sex: "Male",
                birthday: "November 30th",
                constellation: "Pavo Ocellus",
                nation: "Mondstadt",
            },
            {
                id: 15,
                name: "Kamisato Ayaka",
                image: "/images/genshinImpact/kamisato-ayaka.png",
                element: "Cyro",
                weapon: "Sword",
                special_dish: "Snow on the Heart",
                sex: "Female",
                birthday: "September 28th",
                constellation: "Grus Nivis",
                nation: "Inazuma",
            },
            {
                id: 16,
                name: "Keqing",
                image: "/images/genshinImpact/keqing.png",
                element: "Electro",
                weapon: "Sword",
                special_dish: "Survival Grilled Fish",
                sex: "Female",
                birthday: "November 20th",
                constellation: "Trulla Cementarii",
                nation: "Liyue",
            },
            {
                id: 17,
                name: "Klee",
                image: "/images/genshinImpact/klee.png",
                element: "Pyro",
                weapon: "Catalyst",
                special_dish: "Fish-Flavored Toast",
                sex: "Female",
                birthday: "July 27th",
                constellation: "Trifolium",
                nation: "Mondstadt",
            },
            {
                id: 18,
                name: "Lisa",
                image: "/images/genshinImpact/lisa.png",
                element: "Electro",
                weapon: "Catalyst",
                special_dish: "Mysterious Bolognese",
                sex: "Female",
                birthday: "June 9th",
                constellation: "Tempus Fugit",
                nation: "Mondstadt",
            },
            {
                id: 19,
                name: "Mona",
                image: "/images/genshinImpact/mona.png",
                element: "Hydro",
                weapon: "Catalyst",
                special_dish: "Der Weisheit Letzter",
                sex: "Female",
                birthday: "August 31st",
                constellation: "Astrolabos",
                nation: "Mondstadt",
            },
            {
                id: 20,
                name: "Ningguang",
                image: "/images/genshinImpact/ningguang.png",
                element: "Geo",
                weapon: "Catalyst",
                special_dish: "Qiankun Mora Meat",
                sex: "Female",
                birthday: "August 26st",
                constellation: "Opus Aequilibrium",
                nation: "Liyue",
            },
            {
                id: 21,
                name: "Noelle",
                image: "/images/genshinImpact/noelle.png",
                element: "Geo",
                weapon: "Claymore",
                special_dish: "Lighter-Than-Air Pancake",
                sex: "Female",
                birthday: "March 21st",
                constellation: "Parma Cordis",
                nation: "Mondstadt",
            },
            {
                id: 22,
                name: "Qiq",
                image: "/images/genshinImpact/qiqi.png",
                element: "Cyro",
                weapon: "Sword",
                special_dish: "No Tomorrow",
                sex: "Female",
                birthday: "March 3rd",
                constellation: "Pristina Nola",
                nation: "Liyue",
            },
            {
                id: 23,
                name: "Razor",
                image: "/images/genshinImpact/razor.png",
                element: "Electro",
                weapon: "Claymore",
                special_dish: "Puppy-Paw Hash Brown",
                sex: "Male",
                birthday: "September 9th",
                constellation: "Lupus Minor",
                nation: "Mondstadt",
            },
            {
                id: 24,
                name: "Rosaria",
                image: "/images/genshinImpact/rosaria.png",
                element: "Cyro",
                weapon: "Polearm",
                special_dish: "Dinner of Judgement",
                sex: "Female",
                birthday: "January 24th",
                constellation: "Spinea Corona",
                nation: "Mondstadt",
            },
            {
                id: 25,
                name: "Sucrose",
                image: "/images/genshinImpact/sucrose.png",
                element: "Anemo",
                weapon: "Catalyst",
                special_dish: "Nutritious Meal (V. 593)",
                sex: "Female",
                birthday: "November 26th",
                constellation: "Ampulla",
                nation: "Mondstadt",
            },
            {
                id: 26,
                name: "Tartaglia",
                image: "/images/genshinImpact/tartaglia.png",
                element: "Hydro",
                weapon: "Bow",
                special_dish: "A Pizza Catch",
                sex: "Male",
                birthday: "July 20th",
                constellation: "Monoceros Caeli",
                nation: "Snezhnaya",
            },
            {
                id: 27,
                name: "Venti",
                image: "/images/genshinImpact/venti.png",
                element: "Anemo",
                weapon: "Bow",
                special_dish: "A Buoyant Breeze",
                sex: "Male",
                birthday: "June 16th",
                constellation: "Carmen Dei",
                nation: "Mondstadt",
            },
            {
                id: 28,
                name: "Xiangling",
                image: "/images/genshinImpact/xiangling.png",
                element: "Pyro",
                weapon: "Polearm",
                special_dish: "Wanmin Restaurant The Crux",
                sex: "Female",
                birthday: "November 2nd",
                constellation: "Trulla",
                nation: "Liyue",
            },
            {
                id: 29,
                name: "Xiao",
                image: "/images/genshinImpact/xiao.png",
                element: "Anemon",
                weapon: "Polearm",
                special_dish: "Sweet Dream",
                sex: "Male",
                birthday: "April 17th",
                constellation: "Alatus Nemeseos",
                nation: "Liyue",
            },
            {
                id: 30,
                name: "Aether",
                image: "/images/genshinImpact/aether.png",
                element: "Adaptive",
                weapon: "Sword",
                special_dish: null,
                sex: "Male",
                birthday: "Player's Choice",
                constellation: "Viator",
                nation: null,
            },
            {
                id: 31,
                name: "Lumine",
                image: "/images/genshinImpact/lumine.png",
                element: "Adaptive",
                weapon: "Sword",
                special_dish: null,
                sex: "Female",
                birthday: "Player's Choice",
                constellation: "Viatrix",
                nation: null,
            },
            {
                id: 32,
                name: "Xingqiu",
                image: "/images/genshinImpact/xingqiu.png",
                element: "Hydro",
                weapon: "Sword",
                special_dish: "All-Delicacy Parcels",
                sex: "Male",
                birthday: "October 9th",
                constellation: "Fabulae Textile",
                nation: "Liyue",
            },
            {
                id: 33,
                name: "Xinyan",
                image: "/images/genshinImpact/xinyan.png",
                element: "Pyro",
                weapon: "Claymore",
                special_dish: "Rockin' Riffin' Chicken!",
                sex: "Female",
                birthday: "October 16th",
                constellation: "Fila Ignium",
                nation: "Liyue",
            },
            {
                id: 34,
                name: "Yanfei",
                image: "/images/genshinImpact/yanfei.png",
                element: "Pyro",
                weapon: "Catalyst",
                special_dish: "My Way",
                sex: "Female",
                birthday: "July 28th",
                constellation: "Bestia Iustitia",
                nation: "Liyue",
            },
            {
                id: 35,
                name: "Zhongli",
                image: "/images/genshinImpact/zhongli.png",
                element: "Geo",
                weapon: "Polearm",
                special_dish: "Slow-Cooked Bamboo Shoot Soup",
                sex: "Male",
                birthday: "December 31st",
                constellation: "Lapis Dei",
                nation: "Liyue",
            },
            {
                id: 36,
                name: "Yoimiya",
                image: "/images/genshinImpact/yoimiya.png",
                element: "Pyro",
                weapon: "Bow",
                special_dish: "Summer Festival Fish",
                sex: "Female",
                birthday: "June 21st",
                constellation: "Carassius Auratus",
                nation: "Inazuma",
            },
            {
                id: 37,
                name: "Sayu",
                image: "/images/genshinImpact/sayu.png",
                element: "Anemo",
                weapon: "Claymore",
                special_dish: "Dizziness-Be-Gone no Jutsu Version 2.0",
                sex: "Female",
                birthday: "October 19th",
                constellation: "Nyctereutes Minor",
                nation: "Inazuma",
            },
            {
                id: 38,
                name: "Sangonomiya Kokomi",
                image: "/images/genshinImpact/sangonomiya-kokomi.png",
                element: "Hydro",
                weapon: "Catalyst",
                special_dish: "A Stunning Stratagem",
                sex: "Female",
                birthday: "February 22nd",
                constellation: "Dracaena Somnolenta",
                nation: "Inazuma",
            },
            {
                id: 39,
                name: "Raiden Shogan",
                image: "/images/genshinImpact/raiden-shogan.png",
                element: "Electro",
                weapon: "Polearm",
                special_dish: null,
                sex: "Female",
                birthday: "June 26th",
                constellation: "Imperatrix Umbrosa",
                nation: "Inazuma",
            },
            {
                id: 40,
                name: "Thoma",
                image: "/images/genshinImpact/thoma.png",
                element: "Pyro",
                weapon: "Polearm",
                special_dish: "Warmth",
                sex: "Male",
                birthday: "January 9th",
                constellation: "Robeum Scutum",
                nation: "Inazuma",
            },
            {
                id: 41,
                name: "Kujou Sara",
                image: "/images/genshinImpact/kujou-sara.png",
                element: "Electro",
                weapon: "Bow",
                special_dish: "Faith Eternal",
                sex: "Female",
                birthday: "July 14th",
                constellation: "Flabellum",
                nation: "Inazuma",
            },
            {
                id: 42,
                name: "Aloy",
                image: "/images/genshinImpact/aloy.png",
                element: "Cryo",
                weapon: "Bow",
                special_dish: "Satiety Gel",
                sex: "Female",
                birthday: "April 4th",
                constellation: "Nora Fortis",
                nation: null,
            },
            {
                id: 43,
                name: "Arataki Itto",
                image: "/images/genshinImpact/arataki-itto.png",
                element: "Geo",
                weapon: "Claymore",
                special_dish: "Way of the Strong",
                sex: "Male",
                birthday: "June 1st",
                constellation: "Taurus Iracundus",
                nation: "Inazuma",
            },
            {
                id: 44,
                name: "Yun Jin",
                image: "/images/genshinImpact/yun-jin.png",
                element: "Geo",
                weapon: "Polearm",
                special_dish: "Cloud-Shrouded Jade",
                sex: "Female",
                birthday: "May 21st",
                constellation: "Opera Grandis",
                nation: "Liyue",
            },
            {
                id: 45,
                name: "Shenhe",
                image: "/images/genshinImpact/shenhe.png",
                element: "Cyro",
                weapon: "Polearm",
                special_dish: "Heartstring Noodles",
                sex: "Female",
                birthday: "March 10th",
                constellation: "Crista Doloris",
                nation: "Liyue",
            },
            {
                id: 46,
                name: "Gorou",
                image: "/images/genshinImpact/gorou.png",
                element: "Geo",
                weapon: "Bow",
                special_dish: "Victorious Legend",
                sex: "Male",
                birthday: "May 18th",
                constellation: "Canis Bellatoris",
                nation: "Inazuma",
            },
        ],
    });
};
