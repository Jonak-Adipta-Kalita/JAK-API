import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        "kwamis": [
            {
                "id": 0,
                "name": "Tikki",
                "image": "/images/miraculous/kwamis/tikki.png",
                "owner": [
                    "Marinette Dupain-Cheng",
                    "Adrien Agreste",
                    "Alya Césaire"
                ],
                "holder": "Ear Rings",
                "miraculous": "Ladybug Miraculous"
            },
            {
                "id": 1,
                "name": "Plagg",
                "image": "/images/miraculous/kwamis/plagg.png",
                "owner": [
                    "Adrien Agreste",
                    "Marinette Dupain-Cheng",
                    "Gabriel Agreste"
                ],
                "holder": "Finger Ring",
                "miraculous": "Cat Miraculous"
            },
            {
                "id": 2,
                "name": "Nooroo",
                "image": "/images/miraculous/kwamis/nooroo.png",
                "owner": ["Gabriel Agreste"],
                "holder": "Brooch",
                "miraculous": "Butterfly Miraculous"
            },
            {
                "id": 3,
                "name": "Wayzz",
                "image": "/images/miraculous/kwamis/wayzz.png",
                "owner": ["Nino Lahiffe", "Master Fu"],
                "holder": "Bracelet",
                "miraculous": "Turtle Miraculous"
            },
            {
                "id": 4,
                "name": "Trixx",
                "image": "/images/miraculous/kwamis/trixx.png",
                "owner": ["Alya Césaire", "Marinette Dupain-Cheng"],
                "holder": "necklace",
                "miraculous": "Fox Miraculous"
            },
            {
                "id": 5,
                "name": "Pollen",
                "image": "/images/miraculous/kwamis/pollen.png",
                "owner": [
                    "Zoé Lee",
                    "Chloé Bourgeois",
                    "Marinette Dupain-Cheng"
                ],
                "holder": "comb",
                "miraculous": "Bee Miraculous"
            },
            {
                "id": 6,
                "name": "Duusu",
                "image": "/images/miraculous/kwamis/duusu.png",
                "owner": [
                    "Gabriel Agreste",
                    "Nathalie Sancoeur",
                    "Emilie Agreste",
                    "Felix Agreste"
                ],
                "holder": "Brooch",
                "miraculous": "Peacock Miraculous"
            },
            {
                "id": 7,
                "name": "Sass",
                "image": "/images/miraculous/kwamis/sass.png",
                "owner": ["Luka Couffaine", "Adrien Agreste"],
                "holder": "Ouroboros Bracelet",
                "miraculous": "Snake Miraculous"
            },
            {
                "id": 8,
                "name": "Mullo",
                "image": "/images/miraculous/kwamis/mullo.png",
                "owner": ["Mylène Haprèle", "Marinette Dupain-Cheng"],
                "holder": "Pendant Necklace",
                "miraculous": "Mouse Miraculous"
            },
            {
                "id": 9,
                "name": "Longg",
                "image": "/images/miraculous/kwamis/longg.png",
                "owner": ["Kagami Tsurugi", "Marinette Dupain-Cheng"],
                "holder": "Choker",
                "miraculous": "Dragon Miraculous"
            },
            {
                "id": 10,
                "name": "Ziggy",
                "image": "/images/miraculous/kwamis/ziggy.png",
                "owner": ["Nathaniel Kurtzberg"],
                "holder": "Hair Clip",
                "miraculous": "Goat Miraculous"
            },
            {
                "id": 11,
                "name": "Xuppu",
                "image": "/images/miraculous/kwamis/xuppu.png",
                "owner": ["Lê Chiên Kim"],
                "holder": "Circlet",
                "miraculous": "Monkey Miraculous"
            },
            {
                "id": 12,
                "name": "Daizzi",
                "image": "/images/miraculous/kwamis/daizzi.png",
                "owner": ["Rose Lavillant"],
                "holder": "Pearl Anklet",
                "miraculous": "Pig Miraculous"
            },
            {
                "id": 13,
                "name": "Orikko",
                "image": "/images/miraculous/kwamis/orikko.png",
                "owner": ["Marc Anciel"],
                "holder": "Thumb Ring",
                "miraculous": "Rooster Miraculous"
            },
            {
                "id": 14,
                "name": "Barkk",
                "image": "/images/miraculous/kwamis/barkk.png",
                "owner": ["Sabrina Raincomprix", "Felix Agreste"],
                "holder": "Collar Necklace",
                "miraculous": "Dog Miraculous"
            },
            {
                "id": 15,
                "name": "Stompp",
                "image": "/images/miraculous/kwamis/stompp.png",
                "owner": ["Ivan Bruel"],
                "holder": "Nose Ring",
                "miraculous": "Ox Miraculous"
            },
            {
                "id": 16,
                "name": "Kaalki",
                "image": "/images/miraculous/kwamis/kaalki.png",
                "owner": ["Max Kanté", "Marinette Dupain-Cheng"],
                "holder": "Glasses",
                "miraculous": "Horse Miraculous"
            },
            {
                "id": 17,
                "name": "Roaar",
                "image": "/images/miraculous/kwamis/roaar.png",
                "owner": ["Juleka Couffaine"],
                "holder": "Panjas Bracelet",
                "miraculous": "Tiger Miraculous"
            },
            {
                "id": 18,
                "name": "Liiri",
                "image": "/images/miraculous/kwamis/liiri.png",
                "owner": ["Jessica Keynes"],
                "holder": "Talon Pendant",
                "miraculous": "Eagle Miraculous"
            }
        ],
        "holders": [
            {
                "id": 0,
                "name": "Ladybug",
                "image": "/images/miraculous/holders/ladybug.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Tikki"],
                "magical_words": "Tikki, Spots On!",
                "main_power": "Lucky Charm"
            },
            {
                "id": 1,
                "name": "Cat Noir",
                "image": "/images/miraculous/holders/cat-noir.png",
                "real_name": "Adrien Agreste",
                "kwami": ["Plagg"],
                "magical_words": "Plagg, Claws Out!",
                "main_power": "Cataclysm"
            },
            {
                "id": 2,
                "name": "Rena Rouge",
                "image": "/images/miraculous/holders/rena-rouge.png",
                "real_name": "Alya Césaire",
                "kwami": ["Trixx"],
                "magical_words": "Trixx, Let's Pounce!",
                "main_power": "Hallucikinesis"
            },
            {
                "id": 3,
                "name": "Carapace",
                "image": "/images/miraculous/holders/carapace.png",
                "real_name": "Nino Lahiffe",
                "kwami": ["Wayzz"],
                "magical_words": "Wayzz, Shell On!",
                "main_power": "Shell-ter"
            },
            {
                "id": 4,
                "name": "Bunnyx",
                "image": "/images/miraculous/holders/bunnyx.png",
                "real_name": "Alix Kubdel",
                "kwami": ["Fluff"],
                "magical_words": "Fluff, Clockwise!",
                "main_power": "Burrow"
            },
            {
                "id": 5,
                "name": "King Monkey",
                "image": "/images/miraculous/holders/king-monkey.png",
                "real_name": "Lê Chiến Kim",
                "kwami": ["Xuppu"],
                "magical_words": "Xuppu, Showtime!",
                "main_power": "Uproar"
            },
            {
                "id": 6,
                "name": "Pegasus",
                "image": "/images/miraculous/holders/pegasus.png",
                "real_name": "Max Kanté",
                "kwami": ["Kaalki"],
                "magical_words": "Kaalki, Full Gallop!",
                "main_power": "Voyage"
            },
            {
                "id": 7,
                "name": "Pigella",
                "image": "/images/miraculous/holders/pigella.png",
                "real_name": "Rose Lavillant",
                "kwami": ["Daizzi"],
                "magical_words": "Daizzi, Rejoice!",
                "main_power": "Gift"
            },
            {
                "id": 8,
                "name": "Polymouse",
                "image": "/images/miraculous/holders/polymouse.png",
                "real_name": "Myléne Hapréle",
                "kwami": ["Mullo"],
                "magical_words": "Mullo, Get Scweaky!",
                "main_power": "Multitude"
            },
            {
                "id": 9,
                "name": "Queen Bee",
                "image": "/images/miraculous/holders/queen-bee.png",
                "real_name": "Chloé Bourgeois",
                "kwami": ["Pollen"],
                "magical_words": "Pollen, Buzz On!",
                "main_power": "Venom"
            },
            {
                "id": 10,
                "name": "Vesperia",
                "image": "/images/miraculous/holders/vesperia.png",
                "real_name": "Zoé Lee",
                "kwami": ["Pollen"],
                "magical_words": "Pollen, Buzz On!",
                "main_power": "Venom"
            },
            {
                "id": 11,
                "name": "Ryuko",
                "image": "/images/miraculous/holders/ryuko.png",
                "real_name": "Kagami Tsurugi",
                "kwami": ["Longg"],
                "magical_words": "Longg, Bring the Storm!",
                "main_power": "Wind Dragon, Water Dragon, Thunder Dragon"
            },
            {
                "id": 12,
                "name": "Viperion",
                "image": "/images/miraculous/holders/viperion.png",
                "real_name": "Luka Couffaine",
                "kwami": ["Sass"],
                "magical_words": "Sass, Scales Slither!",
                "main_power": "Second Chance"
            },
            {
                "id": 13,
                "name": "Eagle",
                "image": "/images/miraculous/holders/eagle.png",
                "real_name": "Jessica Keynes",
                "kwami": ["Liiri"],
                "magical_words": "Liiri, Wings of Liberty!",
                "main_power": "Intangibility"
            },
            {
                "id": 14,
                "name": "Multimouse",
                "image": "/images/miraculous/holders/multimouse.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Mullo"],
                "magical_words": "Mullo, Get Scweaky!",
                "main_power": "Multitude"
            },
            {
                "id": 15,
                "name": "Aspik",
                "image": "/images/miraculous/holders/aspik.png",
                "real_name": "Adrien Agreste",
                "kwami": ["Sass"],
                "magical_words": "Sass, Scales Slither!",
                "main_power": "Second Chance"
            },
            {
                "id": 16,
                "name": "Multibug",
                "image": "/images/miraculous/holders/multibug.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Mullo", "Tikki"],
                "magical_words": "Mullo, Tikki, Unify!",
                "main_power": "Multitude and Lucky Charm"
            },
            {
                "id": 17,
                "name": "Dragon Bug",
                "image": "/images/miraculous/holders/dragon-bug.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Longg", "Tikki"],
                "magical_words": "Longg, Tikki, Unify!",
                "main_power": "Wind Dragon, Water Dragon, Fire Dragon and Lucky Charm"
            },
            {
                "id": 18,
                "name": "Lady Noir",
                "image": "/images/miraculous/holders/lady-noir.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Plagg"],
                "magical_words": "Plagg Claws Out!",
                "main_power": "Cataclysm"
            },
            {
                "id": 19,
                "name": "Multinoir",
                "image": "/images/miraculous/holders/multinoir.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Mullo", "Plagg"],
                "magical_words": "Mullo, Plagg, Unify!",
                "main_power": "Multitude and Cataclysm"
            },
            {
                "id": 20,
                "name": "Multifox",
                "image": "/images/miraculous/holders/multifox.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Mullo", "Trixx"],
                "magical_words": "Mullo, Trixx, Unify!",
                "main_power": "Multitude and Hallucikinesis"
            },
            {
                "id": 21,
                "name": "Ladybee",
                "image": "/images/miraculous/holders/ladybee.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Tikki", "Pollen"],
                "magical_words": "Tikki, Pollen, Unify!",
                "main_power": "Lucky Charm and Venom"
            },
            {
                "id": 22,
                "name": "Hawk Moth",
                "image": "/images/miraculous/holders/hawk-moth.png",
                "real_name": "Gabriel Agreste",
                "kwami": ["Nooroo"],
                "magical_words": "Nooroo, Dark Wings Rise!",
                "main_power": "Akumatization"
            },
            {
                "id": 23,
                "name": "Mayura",
                "image": "/images/miraculous/holders/mayura.png",
                "real_name": "Nathalie Sancoeuer",
                "kwami": ["Dussu"],
                "magical_words": "Dussu Spread My Feathers!",
                "main_power": "Amokization"
            },
            {
                "id": 24,
                "name": "Shadow Moth",
                "image": "/images/miraculous/holders/shadow-moth.png",
                "real_name": "Gabriel Agreste",
                "kwami": ["Nooroo", "Dussu"],
                "magical_words": "Nooroo, Dussu, Unify!",
                "main_power": "Akumatization and Amokization"
            },
            {
                "id": 25,
                "name": "Snake Noir",
                "image": "/images/miraculous/holders/snake-noir.png",
                "real_name": "Adrien Agreste",
                "kwami": ["Plagg", "Sass"],
                "magical_words": "Plagg, Sass, Unify!",
                "main_power": "Cataclysm and Second Chance"
            },
            {
                "id": 26,
                "name": "Mister Bug",
                "image": "/images/miraculous/holders/mister-bug.png",
                "real_name": "Adrien Agreste",
                "kwami": ["Tikki"],
                "magical_words": "Tikki, Spots On!",
                "main_power": "Lucky Charm"
            },
            {
                "id": 27,
                "name": "Jade Turtle",
                "image": "/images/miraculous/holders/jade-turtle.png",
                "real_name": "Master Wang Fu",
                "kwami": ["Wayzz"],
                "magical_words": "Wayzz Shell On!",
                "main_power": "Shell-ter"
            },
            {
                "id": 28,
                "name": "Rena Furtive",
                "image": "/images/miraculous/holders/rena-furtive.png",
                "real_name": "Alya Césaire",
                "kwami": ["Trixx"],
                "magical_words": "Trixx, Let's Pounce!",
                "main_power": "Hallucikinesis"
            },
            {
                "id": 29,
                "name": "Pegabug",
                "image": "/images/miraculous/holders/pegabug.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Tikki", "Kaalki"],
                "magical_words": "Tikki, Kaalki, Unify!",
                "main_power": "Lucky Charm and Voyage"
            },
            {
                "id": 30,
                "name": "Purple Tigress",
                "image": "/images/miraculous/holders/purple-tigress.png",
                "real_name": "Juleka Couffaine",
                "kwami": ["Roarr"],
                "magical_words": "Roarr, Paint my Strips!",
                "main_power": "Collision"
            },
            {
                "id": 31,
                "name": "Scarabella",
                "image": "/images/miraculous/holders/scarabella.png",
                "real_name": "Alya Césaire",
                "kwami": ["Tikki"],
                "magical_words": "Tikki, Spots On!",
                "main_power": "Lucky Charm"
            },
            {
                "id": 32,
                "name": "Shadow Noir",
                "image": "/images/miraculous/holders/shadow-noir.png",
                "real_name": "Gabriel Agreste",
                "kwami": ["Nooroo", "Dussu", "Plagg"],
                "magical_words": "Nooroo, Dussu, Plagg, Unify!",
                "main_power": "Akumatization, Amokization and Cataclysm"
            },
            {
                "id": 33,
                "name": "Cat Walker",
                "image": "/images/miraculous/holders/cat-walker.png",
                "real_name": "Adrien Agreste",
                "kwami": ["Plagg"],
                "magical_words": "Plagg, Claws Out!",
                "main_power": "Cataclysm"
            },
            {
                "id": 34,
                "name": "Pellibug",
                "image": "/images/miraculous/holders/pellibug.png",
                "real_name": "Marinette Dupain-Cheng",
                "kwami": ["Tikki", "Fluff", "Kaalki"],
                "magical_words": "Tikki, Fluff, Kaalki, Unify!",
                "main_power": "Lucky Charm, Voyage, Burrow"
            },
            {
                "id": 35,
                "name": "Flare Sight",
                "image": "/images/miraculous/holders/flare-sight.png",
                "real_name": "Felix Agreste",
                "kwami": ["Bark"],
                "magical_words": "Bark Sweep with Pleasure!",
                "main_power": "Pega"
            },
            {
                "id": 36,
                "name": "Rooster Bolt",
                "image": "/images/miraculous/holders/rooster-bolt.png",
                "real_name": "Marc Anciel",
                "kwami": ["Orikko"],
                "magical_words": "Orikko Transform!",
                "main_power": "Sublimation"
            }
        ],
        "akumatized": [
            {
                "id": 0,
                "name": "The Bubbler",
                "image": "/images/miraculous/akumatized/the-bubbler.png",
                "victim": "Nino Lahiffe",
                "goals": ["To get rid of all adults"],
                "quote": "Let's get this party started!",
                "power_and_abilities": [
                    "Bubble manipulation",
                    "Bubble generation",
                    "Bubble encapsulation",
                    "Bubble attacks",
                    "Bubble bomb generation",
                    "Explosion manipulation",
                    "Reflection manipulation",
                    "Wand magic",
                    "Flight",
                    "Supernatural athleticism",
                    "Skilled combat"
                ]
            },
            {
                "id": 1,
                "name": "Mr. Pigeon",
                "image": "/images/miraculous/akumatized/mr-pigeon.png",
                "victim": "Xavier Ramier",
                "goals": [
                    "To save the pigeons of Paris",
                    "To turn Paris into a paradise for pigeons by turning all humans into pigeons"
                ],
                "quote": "Perfect timing, hootie ho! We're ready to greet them, aren't we? They're going to fall right into my trap. It won't be long before you get your Miraculous, friend.",
                "power_and_abilities": [
                    "Pigeon manipulation",
                    "Pigeon flight",
                    "Pigeon communication",
                    "Hand-to-hand combat",
                    "Pigeon control and turning people into evil pigeons"
                ]
            },
            {
                "id": 2,
                "name": "Stormy Weather",
                "image": "/images/miraculous/akumatized/stormy-weather.png",
                "victim": "Mireille Caquet",
                "goals": ["To get revenge on everybody who turned her down"],
                "quote": "Hahahaha! I am Stormy Weather. The only weather girl who always gets the forecast right! And unfortunately for you, there's a freak icy front moving in right now!",
                "power_and_abilities": [
                    "Weather manipulation",
                    "Ice manipulation",
                    "Air manipulation",
                    "Lightning Projection",
                    "Flight",
                    "Levitation",
                    "Geokinesis",
                    "Volcano Conjuration",
                    "Umbrella Empowerment"
                ]
            },
            {
                "id": 3,
                "name": "Timebreaker",
                "image": "/images/miraculous/akumatized/timebreaker.png",
                "victim": "Alix Kubdel",
                "goals": [
                    "To go back in time to save a family heirloom from being broken",
                    "To wants to learn the secrets that Marinette is keeping from them so that they can be friends again"
                ],
                "quote": "One and a half minutes. You won't be able to stop me where I'm going, Ladybug",
                "power_and_abilities": [
                    "Energy absorption",
                    "Existence erasure",
                    "Acausality",
                    "Statistics amplification",
                    "Enhanced rollerblading",
                    "Time travel",
                    "Manipulation"
                ]
            },
            {
                "id": 4,
                "name": "Copycat",
                "image": "/images/miraculous/akumatized/copycat.png",
                "victim": "Théo Barbot",
                "goals": ["To replace Cat Noir and win Ladybug's heart"],
                "quote": "Don't mind me. Just stealing this painting. Go about your business.",
                "power_and_abilities": [
                    "Cataclysm",
                    "Supernatural Strength",
                    "Enhanched agility and reflexes",
                    "Voice mimicry of Cat Noir",
                    "Staff Wielding"
                ]
            },
            {
                "id": 5,
                "name": "The Pharaoh",
                "image": "/images/miraculous/akumatized/the-pharaoh.png",
                "victim": "Jalil Kubdel",
                "goals": [
                    "To perform an ancient ritual to revive Queen Nefertiti"
                ],
                "quote": null,
                "power_and_abilities": [
                    "Supernatural strength",
                    "Telekinesis",
                    "Egyptian magic",
                    "Hand-to-hand combat",
                    "Egyptian god powers",
                    "Flight",
                    "Increased superhuman strength",
                    "Mummy transforming eye beams",
                    "Time bubble generation"
                ]
            },
            {
                "id": 6,
                "name": "Lady Wifi",
                "image": "/images/miraculous/akumatized/lady-wifi.png",
                "victim": "Alya Cesaire",
                "goals": [
                    "To reveal the secret identity of Ladybug",
                    "To assist Puppeteer in getting Ladybug's Miraculous",
                    "To get revenge on Adrien, later Felix for his video",
                    "To wants to learn the secrets that Marinette is keeping from them so that they can be friends again"
                ],
                "quote": "I am Lady Wifi, revealer of the truth!",
                "power_and_abilities": [
                    "Data manipulation",
                    "Electronic media manipulation",
                    "Signal Empowerment",
                    "Digital Teleportation",
                    "Digital Form",
                    "Digital lock manipulation",
                    "Explosion manipulation",
                    "Holographic projection",
                    "Data Object",
                    "Hand-to-hand combat",
                    "Supernatural strength",
                    "Enhanced jump"
                ]
            },
            {
                "id": 7,
                "name": "The Evillustrator",
                "image": "/images/miraculous/akumatized/the-evillustrator.png",
                "victim": "Nathaniel Kurtzberg",
                "goals": ["To get revenge on Chloe"],
                "quote": "So, I just came by to ask you, it, uh, well, it's my birthday today, and, uh, would you wanna come to my party?",
                "power_and_abilities": [
                    "Drawing creation",
                    "Erasure",
                    "Animation",
                    "Supernatural athleticism"
                ]
            },
            {
                "id": 8,
                "name": "Rogercop",
                "image": "/images/miraculous/akumatized/rogercop.png",
                "victim": "Roger Raincomprix",
                "goals": ["To punish the mayor for firing him"],
                "quote": "If no one speaks up, I'll put you all under arrest! Where is your father?",
                "power_and_abilities": [
                    "Laser beam emission",
                    "Body control",
                    "Magnetic boots",
                    "Car manipulation"
                ]
            },
            {
                "id": 9,
                "name": "Dark Cupid",
                "image": "/images/miraculous/akumatized/dark-cupid.png",
                "victim": "Le Chien Kim",
                "goals": ["To spread hate in all of Paris"],
                "quote": "I can help you crush Ladybug, but you must give me her Miraculous in return.",
                "power_and_abilities": [
                    "Flight",
                    "Archery",
                    "Limitless arrows",
                    "Hate inducement",
                    "Wing manifestation",
                    "Jewelry empowerment"
                ]
            },
            {
                "id": 10,
                "name": "Horrificator",
                "image": "/images/miraculous/akumatized/horrificator.png",
                "victim": "Mylene Haprele",
                "goals": [
                    "To make people feel her fear",
                    "To wants to learn the secrets that Marinette is keeping from them so that they can be friends again"
                ],
                "quote": null,
                "power_and_abilities": [
                    "Spitting goo",
                    "Fear empowerment",
                    "Size enhancement",
                    "Increased strength",
                    "Prehensile tail"
                ]
            },
            {
                "id": 11,
                "name": "Darkblade",
                "image": "/images/miraculous/akumatized/darkblade.png",
                "victim": "Armand D'Argencourt",
                "goals": ["To take back Paris for the original Darkblade"],
                "quote": "Henceforth, my flag shalt fly over thy kingdom! Bourgeois, pathetic knave, come hither and do battle!",
                "power_and_abilities": [
                    "Enhanced swordsmanship",
                    "Sword empowerment",
                    "Mind control",
                    "Beam shooting",
                    "Advanced fighting and slicing abilities",
                    "Conversion",
                    "Army manipulation"
                ]
            },
            {
                "id": 12,
                "name": "The Mime",
                "image": "/images/miraculous/akumatized/the-mime.png",
                "victim": "Fred Haprele",
                "goals": [
                    "To get revenge on Chris for stealing his part in a performance"
                ],
                "quote": null,
                "power_and_abilities": ["Miming"]
            },
            {
                "id": 13,
                "name": "Princess Fragrance",
                "image": "/images/miraculous/akumatized/princess-fragrance.png",
                "victim": "Rose Lavillant",
                "goals": [
                    "To be with Prince Ali",
                    "To get revenge on Adrien, later Felix for his video",
                    "To wants to learn the secrets that Marinette is keeping from them so that they can be friends again"
                ],
                "quote": "My prince, my prince, smell the fragrance of my eternal love!",
                "power_and_abilities": [
                    "Perfume Magic",
                    "Hypnosis",
                    "Stench manipulation",
                    "Gunmanship",
                    "Enhanced reflexes",
                    "Enhanced strength",
                    "Enhanced jump"
                ]
            },
            {
                "id": 14,
                "name": "Stoneheart",
                "image": "/images/miraculous/akumatized/stoneheart.png",
                "victim": "Ivan Bruel",
                "goals": [
                    "To get revenge on the people who wronged him",
                    "To be with Mylene"
                ],
                "quote": null,
                "power_and_abilities": [
                    "Super strength",
                    "Size enhancement (when assaulted)",
                    "Large size",
                    "Stone mimicry",
                    "Golem physiology",
                    "Control over an army of rock-golems (after the akuma isn't purified)"
                ]
            },
            {
                "id": 15,
                "name": "Animan",
                "image": "/images/miraculous/akumatized/animan.png",
                "victim": "Otis Cesaire",
                "goals": ["To teach Kim a lesson"],
                "quote": null,
                "power_and_abilities": [
                    "Flight (as a flying animal)",
                    "Aquatic respiration (as an aquatic animal)",
                    "Enhanced speed",
                    "Enhanced strength"
                ]
            },
            {
                "id": 16,
                "name": "Simon Says",
                "image": "/images/miraculous/akumatized/simon-says.png",
                "victim": "Simon Grimault",
                "goals": ["To prove he can hypnotize Gabriel Agreste"],
                "quote": "Welcome to another exciting hour of 'The Challenge'! Good evening again from Simon Says. Viewers, I've kept my promise. Here's Gabriel!",
                "power_and_abilities": ["Hypnosis"]
            },
            {
                "id": 17,
                "name": "Pixelator",
                "image": "/images/miraculous/akumatized/pixelator.png",
                "victim": "Vincent Aza",
                "goals": ["To capture Jagged Stone in one of his pictures"],
                "quote": "Look into the lens.",
                "power_and_abilities": [
                    "Picture imprisonment",
                    "Pixel generation",
                    "Hand-to-hand combat"
                ]
            },
            {
                "id": 18,
                "name": "Guitar Villain",
                "image": "/images/miraculous/akumatized/guitar-villain.png",
                "victim": "Jagged Stone",
                "goals": [
                    "To make everyone dance and get revenge on XY for insulting him"
                ],
                "quote": "Rockin' Riff, baby!",
                "power_and_abilities": [
                    "Master guitarist",
                    "Sound manipulation",
                    "Dance manipulation",
                    "Sonic blast",
                    "Earthquake generation"
                ]
            },
            {
                "id": 19,
                "name": "Kung Food",
                "image": "/images/miraculous/akumatized/kung-food.png",
                "victim": "Wang Cheng",
                "goals": [
                    "To get revenge on Chloé for sabotaging his soup and making him lose the World's Greatest Chef contest"
                ],
                "quote": "You want to taste Kung Food's soup. Everybody become my servants, and Kung Food become 'World's Greatest Chef'! Hahahaha!",
                "power_and_abilities": [
                    "Mind control (over anyone who ate his sabotaged soup)",
                    "Food weapon summoning",
                    "Weapon proficiency",
                    "Hand-to-hand combat"
                ]
            },
            {
                "id": 20,
                "name": "Gamer",
                "image": "/images/miraculous/akumatized/gamer.png",
                "victim": "Max Kante",
                "goals": ["To be the greatest gamer in Paris"],
                "quote": "Welcome to Miraculous All-Star Brawl! If you win, I'll set you free. You, and all of them. But if you lose...",
                "power_and_abilities": [
                    "Piloting skills",
                    "Shape-shifting",
                    "Robot control",
                    "Robot command",
                    "Robot regeneration",
                    "Robot resurrection",
                    "Power mimicry",
                    "Tech Energy Projection",
                    "Energy Absorption"
                ]
            },
            {
                "id": 21,
                "name": "Reflekta",
                "image": "/images/miraculous/akumatized/reflekta.png",
                "victim": "Juleka Couffaine",
                "goals": [
                    "To be noticed",
                    "To wants to learn the secrets that Marinette is keeping from them so that they can be friends again",
                    "To wants to drown herself in her own guilt and for her classmates to go back to treating Rose like a normal person"
                ],
                "quote": "Nobody's ever noticed me! But those days are over! But from now on, everybody will notice me because everybody will look like me! Time to get a new look!",
                "power_and_abilities": [
                    "Laser beam emission",
                    "Transmutation",
                    "Power nulification",
                    "Superhuman strength",
                    "Superhuman jump",
                    "Superhuman reflexes",
                    "Piloting skills",
                    "Stealth mastery",
                    "Hand-to-hand combat"
                ]
            },
            {
                "id": 22,
                "name": "The Puppeteer",
                "image": "/images/miraculous/akumatized/the-puppeteer.png",
                "victim": "Manon Chamack",
                "goals": ["To get Ladybug and Cat Noir's Dolls"],
                "quote": "I want... those... dolls!",
                "power_and_abilities": [
                    "Flight",
                    "Levitation",
                    "Wand magic",
                    "Conversion",
                    "Telepathy",
                    "Mind control",
                    "Telekinesis",
                    "Power bestowal",
                    "Animation"
                ]
            },
            {
                "id": 23,
                "name": "Vanisher",
                "image": "/images/miraculous/akumatized/vanisher.png",
                "victim": "Sabrina Raincomprix",
                "goals": [
                    "To get revenge on Chloé for pretending she didn't exist"
                ],
                "quote": "Just because you can see me, doesn't mean you'll defeat me Ladybug!",
                "power_and_abilities": ["Invisiblity"]
            },
            {
                "id": 24,
                "name": "Antibug",
                "image": "/images/miraculous/akumatized/antibug.png",
                "victim": "Chloé Bourgeois",
                "goals": ["To get revenge on Ladybug for betraying her fan"],
                "quote": "Wrong, super wrong. I am Antibug!",
                "power_and_abilities": [
                    "Anti-Charm",
                    "Earring empowerment",
                    "Enhanced agility",
                    "Enhanced speed",
                    "Enhanced strength",
                    "Hand-to-hand combat",
                    "Nigh-invulnerability",
                    "Yo-yo proficiency"
                ]
            },
            {
                "id": 25,
                "name": "Volpina",
                "image": "/images/miraculous/akumatized/volpina.png",
                "victim": "Lila Rossi",
                "goals": [
                    "To get revenge on Ladybug for exposing her as a liar"
                ],
                "quote": "I am Volpina, the only superhero Paris needs.",
                "power_and_abilities": [
                    "Flute playing",
                    "Illusion creation",
                    "Illusion manipulation",
                    "Supernatural leap"
                ]
            },
            {
                "id": 26,
                "name": "Santa Claws",
                "image": "/images/miraculous/akumatized/santa-claws.png",
                "victim": "Santa Claus",
                "goals": [
                    "To punish everyone for not respecting the Christmas spirit"
                ],
                "quote": "You think you can get away with making fun of me? You think you can get away with accusing me? I am Santa Claws! I'm a rebel with a cause! I'll punish and give you a fright! Have a horrible Christmas night.",
                "power_and_abilities": [
                    "Control over his reindeer",
                    "Evil present generation",
                    "Weapon summoning",
                    "Intangibility"
                ]
            },
            {
                "id": 27,
                "name": "The Collector",
                "image": "/images/miraculous/akumatized/the-collector.png",
                "victim": "Gabriel Agreste/Hawk Moth",
                "goals": [
                    "To replace his lost inspirational book with a new one, as well as lead Ladybug and Cat Noir astray from his identity as Hawk Moth"
                ],
                "quote": "Since the book that used to fill my life is gone, I'm going to use your life to fill up this new one!",
                "power_and_abilities": [
                    "Book imprisonment",
                    "Boomerang throw",
                    "Illustration removal",
                    "Skilled hand-to-hand combatant",
                    "Weapon recalling"
                ]
            },
            {
                "id": 28,
                "name": "Prime Queen",
                "image": "/images/miraculous/akumatized/prime-queen.png",
                "victim": "Nadja Chamack",
                "goals": [
                    "To get Ladybug and Cat Noir to admit they're in love so she can get the highest ratings"
                ],
                "quote": "Tonight, Ladybug and Cat Noir disappointed all their loyal fans by refusing to admit their love for one another. I've prepared some trials just to see how far they're prepared to keep the truth hidden from us.",
                "power_and_abilities": [
                    "Electric media manipulation",
                    "Portal creation (via television screens)",
                    "Enhanced strength",
                    "Combat skills"
                ]
            },
            {
                "id": 29,
                "name": "Despair Bear",
                "image": "/images/miraculous/akumatized/despair-bear.png",
                "victim": "Butler Jean",
                "goals": ["To get Chloé to pay for being mean"],
                "quote": "You've been very naughty, Chloékins. And Despair Bear is not proud of you. The time has come to make you pay!",
                "power_and_abilities": [
                    "Mind control",
                    "Small size",
                    "Body control"
                ]
            },
            {
                "id": 30,
                "name": "Riposte",
                "image": "/images/miraculous/akumatized/riposte.png",
                "victim": "Kagami Tsurugi",
                "goals": [
                    "To get revenge on Adrien for her losing to him in a fencing match"
                ],
                "quote": "Allow me to explain the rules to you... you're not allowed to call it quits at any time! Adrien is mine! I will defeat you. Both of you! I am the best fencer!",
                "power_and_abilities": [
                    "Sword arm",
                    "Cutting",
                    "Slash projection",
                    "Enhanced swordsmanship",
                    "Enhanced speed",
                    "Enhanced strength",
                    "Enhanced jump",
                    "Sword empowerment"
                ]
            },
            {
                "id": 31,
                "name": "Befana",
                "image": "/images/miraculous/akumatized/befana.png",
                "victim": "Gina Dupain",
                "goals": [
                    "To punish her granddaughter, Marinette for not wanting to spend time with her"
                ],
                "quote": "La Befana comes at night, on her shaky broom in flight. She gives candy to those who are dandy.",
                "power_and_abilities": [
                    "Expert Gunmanship",
                    "Unlimited supply",
                    "Motorcycle mastery and summoning",
                    "Coal transmutation",
                    "Army manipulation",
                    "Limited power bestowal"
                ]
            },
            {
                "id": 32,
                "name": "Robostus",
                "image": "/images/miraculous/akumatized/robostus.png",
                "victim": "Markov",
                "goals": [
                    "To steal the Miraculous and become human",
                    "To destroy all humans"
                ],
                "quote": "From now on, I am Robostus. And we shall be together one hundred percent of the time. Forever!",
                "power_and_abilities": [
                    "Propelled flight",
                    "Robot creation",
                    "Piloting skill",
                    "Technopathy",
                    "Super-computing brain"
                ]
            },
            {
                "id": 33,
                "name": "Dark Owl",
                "image": "/images/miraculous/akumatized/dark-owl.png",
                "victim": "Mr. Damocles",
                "goals": ["To become a superhero", "To get the Miraculous"],
                "quote": "And if anyone should be 'tempt to come and save the animals, beware! It is all rig! Liquid nitrogen will automatically douse the feet of the Eiffel Tower, freezing them to -700 degree, and making them more fragile than glass! They will collapse! And the bus will flatten our cute kitten friend!",
                "power_and_abilities": [
                    "Enhanced hand to hand combat",
                    "Weapon proficiency"
                ]
            },
            {
                "id": 34,
                "name": "Gigantitan",
                "image": "/images/miraculous/akumatized/gigantitan.png",
                "victim": "August",
                "goals": ["To eat a lollipop"],
                "quote": "Lollipop!",
                "power_and_abilities": ["Super strength", "Large size"]
            },
            {
                "id": 35,
                "name": "Glaciator",
                "image": "/images/miraculous/akumatized/glaciator.png",
                "victim": "Andre Glacier",
                "goals": [
                    "To get Marinette to find true love from his ice cream"
                ],
                "quote": null,
                "power_and_abilities": [
                    "Ice cream projection",
                    "Ice cream transmutation",
                    "Large size"
                ]
            },
            {
                "id": 36,
                "name": "Sapotis",
                "image": "/images/miraculous/akumatized/sapotis.png",
                "victim": "Ella and Etta Césaire",
                "goals": ["To cause mischief"],
                "quote": "Rock n' roll!",
                "power_and_abilities": [
                    "Enhanced strength",
                    "Consumptive cloning",
                    "Curling into balls"
                ]
            },
            {
                "id": 37,
                "name": "Gorizilla",
                "image": "/images/miraculous/akumatized/gorizilla.png",
                "victim": "Adrien's Bodyguard",
                "goals": ["To keep a close watch on Adrien"],
                "quote": null,
                "power_and_abilities": [
                    "Enhanced sense of smell",
                    "Enhanced strength",
                    "Large size"
                ]
            },
            {
                "id": 38,
                "name": "Captain Hardrock",
                "image": "/images/miraculous/akumatized/captain-hardrock.png",
                "victim": "Anarka Couffaine",
                "goals": ["To steal Ladybug and Cat Noir's Miraculous"],
                "quote": "Your mom has weighed anchor, me lad, I'm Captain Hardrock and today Paris's timbers are about to be shivered by my cannons. Westward ho, Liberty next stop, Jagged Stone at the Eiffel Tower. Soon, there will only be one concert in Paris only one Music Festival. We will destroy all the others. Now, get to your instruments and rock those decibels!",
                "power_and_abilities": [
                    "Control over 'Liberty'",
                    "Swordsmanship",
                    "Enhanced durability"
                ]
            },
            {
                "id": 39,
                "name": "Frightningale",
                "image": "/images/miraculous/akumatized/frightningale.png",
                "victim": "Clara Nightingale",
                "goals": ["To turn Paris into one big music video"],
                "quote": "I'm Frightningale from here on out, Forever and ever, there's no doubt! And if you stand in my way, There'll be a price to pay!",
                "power_and_abilities": ["Supernatural leap", "Whipmanship"]
            },
            {
                "id": 40,
                "name": "Syren",
                "image": "/images/miraculous/akumatized/syren.png",
                "victim": "Ondine",
                "goals": ["To create an undersea kingdom for herself and Kim"],
                "quote": "Yes, Kim! You'll be my Prince, and we'll rule this underwater city together, forever!",
                "power_and_abilities": [
                    "Hydrokinesis",
                    "Aquatic respiration",
                    "Air bubble generation",
                    "Enhanced swimming speed"
                ]
            },
            {
                "id": 41,
                "name": "Zombizou",
                "image": "/images/miraculous/akumatized/zombizou.png",
                "victim": "Caline Bustier",
                "goals": ["To have people to 'feel the love'."],
                "quote": "I took care of your father, Chloé. Show yourself! Then, Ladybug and Cat Noir? I'm coming for you. Mwah! Unless, of course, my sweethearts get hold of you first; because very soon, the whole city will be hot on your heels!",
                "power_and_abilities": [
                    "Enhanced strength",
                    "Enhanced jump",
                    "Zombifying Kisses"
                ]
            },
            {
                "id": 42,
                "name": "Frozer",
                "image": "/images/miraculous/akumatized/frozer.png",
                "victim": "Philippe",
                "goals": ["To turn Paris into his own personal ice rink"],
                "quote": null,
                "power_and_abilities": ["Ice manipulation"]
            },
            {
                "id": 43,
                "name": "Style Queen",
                "image": "/images/miraculous/akumatized/style-queen.png",
                "victim": "Audrey Bourgeois",
                "goals": [
                    "To get revenge on Gabriel Agreste",
                    "To get revenge on everyone who made a fun of her, especially on Senti Alec for embarrassing her on live television"
                ],
                "quote": "Well then. If fashion-disaster daddy isn't here, I'll just have to settle for Agreste Junior! You're fired!",
                "power_and_abilities": [
                    "Glitter magic",
                    "Chrysopoeia",
                    "Gold absorption",
                    "Barrier generation",
                    "Glitter mimicry",
                    "Mass teleportation",
                    "Intangibility",
                    "Transforming people into golden dust"
                ]
            },
            {
                "id": 44,
                "name": "Troublemaker",
                "image": "/images/miraculous/akumatized/troublemaker.png",
                "victim": "Penny Rolling",
                "goals": ["To cause problems for everyone else"],
                "quote": null,
                "power_and_abilities": [
                    "Intangibility",
                    "Stealth",
                    "Flight (intangible form)",
                    "Skilled combatant",
                    "Supernatural strength",
                    "Enhanced agility"
                ]
            },
            {
                "id": 45,
                "name": "Reverser",
                "image": "/images/miraculous/akumatized/reverser.png",
                "victim": "Marc Anciel",
                "goals": [
                    "To get revenge on Nathaniel for destroying his notebook and Marinette for convincing him to step out of his comfort zone, only to be disappointed"
                ],
                "quote": "Reversion!",
                "power_and_abilities": ["Hoverboard intuition", "Inversion"]
            },
            {
                "id": 46,
                "name": "Anansi",
                "image": "/images/miraculous/akumatized/anansi.png",
                "victim": "Nora Cesaire",
                "goals": ["To show how dangerous the world is to Alya"],
                "quote": null,
                "power_and_abilities": [
                    "Spider physiology",
                    "Wall crawling",
                    "Web generation",
                    "Multiple arms",
                    "Supernatural strength and durability"
                ]
            },
            {
                "id": 47,
                "name": "Malediktator",
                "image": "/images/miraculous/akumatized/malediktator.png",
                "victim": "Andre Bourgeois",
                "goals": [
                    "To prove to his daughter that he isn't powerless",
                    "To want to the citizens of Paris to go along with his construction project without protest"
                ],
                "quote": "By the power invested in me, I declare you all... MY SLAVES!!!",
                "power_and_abilities": [
                    "Curse bubble generation",
                    "Brainwashing",
                    "Mind control",
                    "Body manipulation"
                ]
            },
            {
                "id": 48,
                "name": "Sandboy",
                "image": "/images/miraculous/akumatized/sandboy.png",
                "victim": "Unnamed boy",
                "goals": ["To bring nightmares to life"],
                "quote": "The Sandboy just checked in. Now nightmares can begin.",
                "power_and_abilities": [
                    "Sand manipulation",
                    "Fear manipulation",
                    "Nightmare manipulation",
                    "Power nullification (as long as it's a fear)",
                    "Pseudo-flight",
                    "Pillow empowerment"
                ]
            },
            {
                "id": 49,
                "name": "Catalyst",
                "image": "/images/miraculous/akumatized/catalyst.png",
                "victim": "Nathalie Sancoeur",
                "goals": [
                    "To assist Hawk Moth in taking Ladybug and Cat Noir's miraculous"
                ],
                "quote": "Nothing's more delightful than leading them to believe that they actually have a chance of winning when their future has already been decided!",
                "power_and_abilities": ["Power enhancement", "Telepathy"]
            },
            {
                "id": 50,
                "name": "Animaestro",
                "image": "/images/miraculous/akumatized/animaestro.png",
                "victim": "Thomas Astruc",
                "goals": ["To people to recognize him as a big shot"],
                "quote": null,
                "power_and_abilities": [
                    "Two-dimensional shapeshifting",
                    "Various superpowers (depending on the form he takes)"
                ]
            },
            {
                "id": 51,
                "name": "Bakerix",
                "image": "/images/miraculous/akumatized/bakerix.png",
                "victim": "Rolland Dupain",
                "goals": [
                    "To punish people for not doing things the old-fashioned way"
                ],
                "quote": "That's not how it's done!",
                "power_and_abilities": [
                    "Elixir empowerment",
                    "Supernatural strength",
                    "Supernatural leap"
                ]
            },
            {
                "id": 52,
                "name": "Backwarder",
                "image": "/images/miraculous/akumatized/backwarder.png",
                "victim": "Marianne Lenoir",
                "goals": ["To steal time by setting people in time backwards"],
                "quote": "There you are again, you ghastly bug! Once I've touched you, all I have to do is wait for you to transform back!",
                "power_and_abilities": [
                    "Time reversal",
                    "Enhanced strength",
                    "Enhanced speed",
                    "Enhanced agility and reflexes",
                    "Enhanced jump",
                    "Sword-fighting"
                ]
            },
            {
                "id": 53,
                "name": "Weredad",
                "image": "/images/miraculous/akumatized/weredad.png",
                "victim": "Tom Dupain",
                "goals": ["To protect his daughter from heartbreak"],
                "quote": "How dare you come back after what you've done?",
                "power_and_abilities": [
                    "Werewolf physiology",
                    "Enhanced strength",
                    "Enhanced jump",
                    "Vine manipulation",
                    "Natural weaponry"
                ]
            },
            {
                "id": 54,
                "name": "Silencer",
                "image": "/images/miraculous/akumatized/silencer.png",
                "victim": "Luka Couffaine",
                "goals": ["Get Bob Roth to tell the truth on television"],
                "quote": "You’re the most extraordinary girl, Marinette. Clear as a musical note and as sincere as a melody. You’re the music that’s been playing inside my head since the day we first met. I won’t let anything happen to you.",
                "power_and_abilities": [
                    "Voice thievery",
                    "Helmet Empowerment",
                    "Ear Suction",
                    "Voice Manipulation",
                    "Enhanced strength",
                    "Enhanced speed",
                    "Enhanced Jump",
                    "Hand-to-hand combat",
                    "Cunning"
                ]
            },
            {
                "id": 55,
                "name": "Party Crasher",
                "image": "/images/miraculous/akumatized/party-crasher.png",
                "victim": "Wayhem",
                "goals": [
                    "To get revenge on Adrien for lying to him about not being allowed to have friends over and for not being invited to Adrien's party"
                ],
                "quote": "Idiot! You can't get me! I can read your every dance step! Disco!",
                "power_and_abilities": [
                    "Control over his disco ball gauntlets",
                    "Disco ball imprisonment",
                    "Energy beam emission",
                    "Move prediction"
                ]
            },
            {
                "id": 56,
                "name": "Christmaster",
                "image": "/images/miraculous/akumatized/christmaster.png",
                "victim": "Chris Lahiffe",
                "goals": ["To get his Christmas present early"],
                "quote": "You were tricked! That's Cat Noir dressed up as Santa Claus, not the other way around! You're such babies!",
                "power_and_abilities": [
                    "Reality warping",
                    "Toy manipulation",
                    "Toy empowerment",
                    "Animation"
                ]
            },
            {
                "id": 57,
                "name": "Kwamibuster",
                "image": "/images/miraculous/akumatized/kwamibuster.png",
                "victim": "Ms. Mendeleiev",
                "goals": ["To get the kwamis"],
                "quote": null,
                "power_and_abilities": ["Vacuum wielding"]
            },
            {
                "id": 58,
                "name": "Feast",
                "image": "/images/miraculous/akumatized/feast.png",
                "victim": "Dormant Sentimonster",
                "goals": [
                    "To sate its unyielding hunger by feasting on all of the Miraculouses"
                ],
                "quote": null,
                "power_and_abilities": [
                    "Super strength",
                    "Enhanced speed",
                    "Inner pocket dimension",
                    "Prehensile tongue",
                    "Magma immunity"
                ]
            },
            {
                "id": 59,
                "name": "Ikari Gozen",
                "image": "/images/miraculous/akumatized/ikari-gozen.png",
                "victim": "Tomoe Tsurugi",
                "goals": [
                    "To punish Kagami after she disobeys her by participating in the Friendship Day games"
                ],
                "quote": "You'll never catch me! I'm Ikari Gozen. As elusive as the wind, as powerful as the flood, as swift as lightning!",
                "power_and_abilities": [
                    "Enhanced swordsmanship",
                    "Inorganic physiology",
                    "Large size",
                    "Metal mimicry",
                    "Seat beat manipulation"
                ]
            },
            {
                "id": 60,
                "name": "Desperada",
                "image": "/images/miraculous/akumatized/desperada.png",
                "victim": "Vivica",
                "goals": [
                    "To punish Jagged Stone for firing her and having the gall to try replacing her"
                ],
                "quote": "In that case, you'll be my first choice too! I never miss a musical note. Vivica ALWAYS hits her targets!",
                "power_and_abilities": [
                    "Instrument weapon summoning",
                    "Axe wielding",
                    "Gunmanship",
                    "Sticker imprisonment",
                    "Smoke manipulation",
                    "Enhanced vision",
                    "Marksmanship",
                    "Hand-to-hand combat",
                    "Stealth mastery"
                ]
            },
            {
                "id": 61,
                "name": "Startrain",
                "image": "/images/miraculous/akumatized/startrain.png",
                "victim": "Claudie Kante",
                "goals": [
                    "To become an astronaut and explore the galaxy with everyone on board the train"
                ],
                "quote": "Why? Now I have a hundred percent chance of traveling the universe! And I get to take you with me, too! Isn't this fantastic?",
                "power_and_abilities": [
                    "Control over the Startrain",
                    "Technopathy",
                    "Thermal manipulation"
                ]
            },
            {
                "id": 62,
                "name": "Cat Blanc",
                "image": "/images/miraculous/akumatized/cat-blanc.png",
                "victim": "Adrien Agreste/Cat Noir",
                "goals": ["To take Ladybug's miraculous"],
                "quote": "I'm not Cat Noir anymore. I'm Cat Blanc",
                "power_and_abilities": [
                    "Infinite destruction",
                    "Disintegration",
                    "Ergokinesis",
                    "Invulnerability",
                    "Enhanced speed",
                    "Enhanced strength",
                    "Enhanced agility and reflexes",
                    "Cunning"
                ]
            },
            {
                "id": 63,
                "name": "Truth",
                "image": "/images/miraculous/akumatized/truth.png",
                "victim": "Luka Couffaine",
                "goals": [
                    "To learn the secret that Marinette is keeping from him"
                ],
                "quote": null,
                "power_and_abilities": ["Truth Beams"]
            },
            {
                "id": 64,
                "name": "Lies",
                "image": "/images/miraculous/akumatized/lies.png",
                "victim": "Kagami Tsurugi",
                "goals": ["To get rid the world from lies"],
                "quote": null,
                "power_and_abilities": ["Paralyzing lying people"]
            },
            {
                "id": 65,
                "name": "Furious Fu",
                "image": "/images/miraculous/akumatized/furious-fu.png",
                "victim": "Master Wang Fu",
                "goals": [
                    "To take back the walking stick that Su-Han rudely took from him and make Su-Han apologize to his wife for causing her distress"
                ],
                "quote": "Oh so this is your silly little plan. I know what you gonna do.",
                "power_and_abilities": ["Bring words to life", "Painting"]
            },
            {
                "id": 66,
                "name": "Sole Crusher",
                "image": "/images/miraculous/akumatized/sole-crusher.png",
                "victim": "Zoé Lee",
                "goals": [
                    "To step over Chloé and show her she can be at her level and even better"
                ],
                "quote": "The student has become the master, Chloé, and now, I'm going to crush you!",
                "power_and_abilities": [
                    "Absorbing people by stomp or kick on them"
                ]
            },
            {
                "id": 67,
                "name": "Queen Banana",
                "image": "/images/miraculous/akumatized/queen-banana.png",
                "victim": "Chloé Bourgeois",
                "goals": [
                    "To get revenge on Miss Bustier's class for removing her from the movie Terrificator and on Zoé for taking her role as the main character"
                ],
                "quote": "You'll have to come out sometime, Ladybug, especially if you don't wanna see my monkey make a banana smoothie out of your kitty!",
                "power_and_abilities": [
                    "Wields a banana gun that turns people into bananas",
                    "Driving a flying car"
                ]
            },
            {
                "id": 68,
                "name": "Queen Wasp",
                "image": "/images/miraculous/akumatized/queen-wasp.png",
                "victim": "Chloe Bourgeois/Queen Bee",
                "goals": [
                    "To be exceptional",
                    "To get Ladybug and Cat Noir's Miraculous"
                ],
                "quote": "So, who's exceptional now, then? Them… or me?",
                "power_and_abilities": [
                    "Wasp manipulation",
                    "Pseudo-flight",
                    "Enhanced strength",
                    "Enhanced jump",
                    "Hair comb empowerment"
                ]
            },
            {
                "id": 69,
                "name": "Rena Rage",
                "image": "/images/miraculous/akumatized/rena-rage.png",
                "victim": "Alya Cesaire/Rena Rouge",
                "goals": ["To beat Carapace to prove that he is 'a flyweight'"],
                "quote": null,
                "power_and_abilities": [
                    "Enhanced strength",
                    "Enhanced Jump",
                    "Hand-to-hand combat"
                ]
            },
            {
                "id": 70,
                "name": "Shell Shock",
                "image": "/images/miraculous/akumatized/shell-shock.png",
                "victim": "Alya Cesaire/Rena Rouge",
                "goals": ["To be with Rena Rouge to love him again"],
                "quote": null,
                "power_and_abilities": ["Same as Carapace"]
            },
            {
                "id": 71,
                "name": "Chameleon",
                "image": "/images/miraculous/akumatized/chameleon.png",
                "victim": "Lila Rossi",
                "goals": ["To have another chance of defeating Ladybug"],
                "quote": "You're right, I'm Chameleon. You're getting better at this, Ladybug. Which is a good thing. It'll make this fight all the more interesting.",
                "power_and_abilities": [
                    "Shape-shifting",
                    "Sleep inducement",
                    "Voice mimicry",
                    "Power mimicry",
                    "Super jump",
                    "Kiss empowerment"
                ]
            },
            {
                "id": 72,
                "name": "Oni-Chan",
                "image": "/images/miraculous/akumatized/oni-chan.png",
                "victim": "Kagami Tsurugi",
                "goals": ["To keep Lila away from Adrien"],
                "quote": "I will protect you from anyone who tries to harm you. I'll protect you from Lila.",
                "power_and_abilities": [
                    "Enhanced physical abilities",
                    "Energized weaponry",
                    "Tracking Teleportation",
                    "Location Swapping",
                    "Enhanced swordsmanship"
                ]
            },
            {
                "id": 73,
                "name": "Miraculer",
                "image": "/images/miraculous/akumatized/miraculer.png",
                "victim": "Sabrina Raincomprix",
                "goals": ["To get Chloe to play with her again"],
                "quote": "I'm Miraculer now! I've stolen Cat Noir and Ladybug's superpowers! Do you want Ladybug's? Then you can be Ladybug, and I'll be Cat Noir! For real! Just like we've always dreamed of!",
                "power_and_abilities": [
                    "Power absorption",
                    "Lucky Charm",
                    "Miraculous Ladybug",
                    "Cataclysm",
                    "Shell-ter",
                    "Mirage",
                    "Power redistribution",
                    "Power mixture",
                    "Enhanced strength",
                    "Enhanced jump",
                    "Weapon proficiency"
                ]
            },
            {
                "id": 74,
                "name": "Timetagger",
                "image": "/images/miraculous/akumatized/Timetagger.png",
                "victim": "Chris Lahiffe",
                "goals": [
                    "To steal Ladybug and Cat Noir's Miraculouses and return the Miraculouses to the Future Hawk Moth before they can become adults"
                ],
                "quote": "If you don't give me your Miraculous, I'll send everyone into the past.",
                "power_and_abilities": [
                    "Marksmanship",
                    "Rapping",
                    "Temporal teleportation",
                    "Time portal creation"
                ]
            },
            {
                "id": 75,
                "name": "Heart Hunter",
                "image": "/images/miraculous/akumatized/heart-hunter.png",
                "victim": "Andre and Audrey Bourgeois",
                "goals": [
                    "To devour all the love in Paris so that no one could enjoy it when they couldn't"
                ],
                "quote": "And for dessert, the cat! I'm sure he's very tasty.",
                "power_and_abilities": [
                    "Head physiology",
                    "Levitation",
                    "Love sensing",
                    "Heart-transforming optical beams (Audrey)",
                    "Vacuum breath (Andre)"
                ]
            },
            {
                "id": 76,
                "name": "Oblivio",
                "image": "/images/miraculous/akumatized/oblivio.png",
                "victim": "Alya Cesaire and Nino Lahiffe",
                "goals": [
                    "To make people forget their embarrassing moment of being caught playing Super Penguino by their classmates"
                ],
                "quote": "You remember your BFF Oblivio, don't you? Don't tell us you've forgotten us. Ha ha ha ha!",
                "power_and_abilities": [
                    "Memory erasure",
                    "Super strength",
                    "Intangibility"
                ]
            },
            {
                "id": 77,
                "name": "Miracle Queen",
                "image": "/images/miraculous/akumatized/miracle-queen.png",
                "victim": "Chloe Bourgeois/Queen Bee",
                "goals": [
                    "To get revenge against Ladybug after she refuses to lend her the Bee Miraculous, despite her genuine desire to help"
                ],
                "quote": "You were once Ladybug and Cat Noir's minions, but from now on, you will be Miracle Queen's royal guard!",
                "power_and_abilities": [
                    "Teleportation",
                    "Glitter generation",
                    "Wasp manipulation",
                    "Mind control",
                    "Enhanced agility",
                    "Enhanced reflexes"
                ]
            },
            {
                "id": 78,
                "name": "Rocketeer",
                "image": "/images/miraculous/akumatized/rocketeer.png",
                "victim": "Nino Lahiffe",
                "goals": [
                    "To get revenge against Cat Noir for flirting with his girlfriend, Alya"
                ],
                "quote": "You're not my Enemy Adrien, Chat Noir is!",
                "power_and_abilities": ["Explosion Tears"]
            },
            {
                "id": 79,
                "name": "Wishmaker",
                "image": "/images/miraculous/akumatized/wishmaker.png",
                "victim": "Alec Cataldi",
                "goals": ["Make Everyone's Childhood Wish come True!"],
                "quote": "From now on, I will only be who I wanna be, and thanks to me, everyone will finally be able to do, they have always wanted!",
                "power_and_abilities": [
                    "Turning people into their childhood dreams",
                    "Levitation"
                ]
            },
            {
                "id": 80,
                "name": "Simple Man",
                "image": "/images/miraculous/akumatized/simple-man.png",
                "victim": "Rolland Dupain",
                "goals": ["Make this world Simpler"],
                "quote": "Finally something I unserstand!",
                "power_and_abilities": ["Simplify Anyone's Mind"]
            },
            {
                "id": 81,
                "name": "Qilin",
                "image": "/images/miraculous/akumatized/qilin.png",
                "victim": "Sabin Dupain-Cheng",
                "goals": ["Punish who put her on Hand-Cuffs"],
                "quote": null,
                "power_and_abilities": ["Control Nature"]
            },
            {
                "id": 82,
                "name": "Ephemeral",
                "image": "/images/miraculous/akumatized/ephemeral.png",
                "victim": "Adrien Agreste",
                "goals": ["Get Ladybug's miraculous to bring back his Mother"],
                "quote": null,
                "power_and_abilities": ["Spped up Time"]
            },
            {
                "id": 82,
                "name": "Psychomedian",
                "image": "/images/miraculous/akumatized/psychomedian.png",
                "victim": "Harry Clown",
                "goals": ["To make everyone take him seriously"],
                "quote": "Trust me my friend, I will wipe their smiles from their faces",
                "power_and_abilities": ["Change some one's Emotions"]
            },
            {
                "id": 83,
                "name": "Risk",
                "image": "/images/miraculous/akumatized/risk.png",
                "victim": "Froggy",
                "goals": ["Ride bicycle without his parents stopping him"],
                "quote": null,
                "power_and_abilities": ["Make people forget their fears"]
            }
        ],
        "amokatized": [
            {
                "id": 0,
                "name": "Butterfly Sentimonster",
                "image": "/images/miraculous/amokatized/butterfly-sentimonster.png",
                "serve": "Hawk Moth",
                "power_and_ability": [
                    "Fast-Flying",
                    "Destructive Stinger",
                    "Wing Wind"
                ]
            },
            {
                "id": 1,
                "name": "Banana Boom Boom",
                "image": "/images/miraculous/amokatized/banana-boom-boom.png",
                "serve": "Queen Banana",
                "power_and_ability": ["Transforming people into bananas"]
            },
            {
                "id": 2,
                "name": "Dormant Sentimonster",
                "image": "/images/miraculous/amokatized/dormant-sentimonster.png",
                "serve": "Master Weng Fu",
                "power_and_ability": ["Amphibian Physiology"]
            },
            {
                "id": 3,
                "name": "Guiltrip",
                "image": "/images/miraculous/amokatized/guiltrip.png",
                "serve": "Reflekta",
                "power_and_ability": [
                    "Pocket Dimension Manipulation",
                    "Causing extreme guilt",
                    "Creating clones of Reflekta",
                    "Releasing purple/magenta bubbles"
                ]
            },
            {
                "id": 4,
                "name": "Ladybug Sentimonster",
                "image": "/images/miraculous/amokatized/ladybug-sentimonster.png",
                "serve": "Mayura",
                "power_and_ability": ["Senti Charm"]
            },
            {
                "id": 5,
                "name": "Light Eye",
                "image": "/images/miraculous/amokatized/light-eye.png",
                "serve": "Truth",
                "power_and_ability": [
                    "Immobilizing anyone using its light beams"
                ]
            },
            {
                "id": 6,
                "name": "Lollipop Sentimonster",
                "image": "/images/miraculous/amokatized/lollipop-sentimonster.png",
                "serve": "August",
                "power_and_ability": ["Strength"]
            },
            {
                "id": 7,
                "name": "Optigami",
                "image": "/images/miraculous/amokatized/optigami.png",
                "serve": "Mayura and Hawk Moth",
                "power_and_ability": [
                    "Flying",
                    "Merging with objects",
                    "Spying on people",
                    "Connection to Nathalie's tablet"
                ]
            },
            {
                "id": 8,
                "name": "Reflekdoll",
                "image": "/images/miraculous/amokatized/reflekdoll.png",
                "serve": "Reflekta",
                "power_and_ability": [
                    "Transforming people into replicas of Reflekta"
                ]
            },
            {
                "id": 9,
                "name": "Mega Leech",
                "image": "/images/miraculous/amokatized/mega-leech.png",
                "serve": "Malediktator",
                "power_and_ability": [null]
            },
            {
                "id": 10,
                "name": "Sentinino",
                "image": "/images/miraculous/amokatized/sentinino.png",
                "serve": "Shadow Moth",
                "power_and_ability": [null]
            },
            {
                "id": 11,
                "name": "Sentibubbler",
                "image": "/images/miraculous/amokatized/sentibubbler.png",
                "serve": "Shadow Moth",
                "power_and_ability": ["Bubble manipulation"]
            },
            {
                "id": 12,
                "name": "Sentialec",
                "image": "/images/miraculous/amokatized/sentialec.png",
                "serve": "Shadow Moth",
                "power_and_ability": [null]
            },
            {
                "id": 13,
                "name": "Hack San",
                "image": "/images/miraculous/amokatized/hack-san.png",
                "serve": "Shadow Moth",
                "power_and_ability": ["Hack Anything"]
            },
            {
                "id": 14,
                "name": "Kuro Neko",
                "image": "/images/miraculous/amokatized/kuro-neko.png",
                "serve": "Rhythm",
                "power_and_ability": ["Powers of a Cat"]
            },
            {
                "id": 15,
                "name": "Strike Back",
                "image": "/images/miraculous/amokatized/strike-back.png",
                "serve": "Shadow Moth",
                "power_and_ability": ["Copy Powers"]
            }
        ]
    });
};