import type { NextApiRequest, NextApiResponse } from "next";
import { JAK } from "../../typings";

/**
 * @swagger
 * /api/jak:
 *   get:
 *     description: Get the Data about JAK
 *     summary: Get JAK Data
 *     responses:
 *       200:
 *          description: JAK Data
 */
export default (
    req: NextApiRequest,
    res: NextApiResponse<JAK | { error: string }>
) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
    res.status(200).json({
        hobby: [
            {
                id: 0,
                value: "Gaming",
                games: [
                    {
                        id: 0,
                        platform: "Mobile",
                        value: "Pokemon Go",
						description: "Join Trainers around the world and play Pokémon GO together in new and exciting ways.",
						link: "https://pokemongolive.com/en/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/PokemonGo.png",
                    },
                    {
                        id: 1,
                        platform: "Mobile",
                        value: "Brawl Stars",
						description: "Time to BRAWL! Team up with your friends and get ready for epic multiplayer MAYHEM!",
						link: "https://supercell.com/en/games/brawlstars/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/brawl-stars.png",
                    },
                    {
                        id: 2,
                        platform: "Mobile",
                        value: "Among Us",
						description: "Among Us is a party game of teamwork and betrayal. Crewmates work together to complete tasks before one or more Impostors can kill everyone aboard.",
						link: "https://www.innersloth.com/games/among-us/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/among-us.png",
                    },
                    {
                        id: 3,
                        platform: "Personal Computer",
                        value: "Need For Speed: Most Wanted 2005",
						description: "Need for Speed: Most Wanted is a 2005 open-world racing video game.",
						link: "https://www.ea.com/games/need-for-speed/need-for-speed-most-wanted-2005",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/need-for-speed-most-wanted-2005.png",
                    },
                    {
                        id: 4,
                        platform: "Personal Computer",
                        value: "Need For Speed: Most Wanted 2012",
						description: "To be Most Wanted, you’ll need to outrun the cops, outdrive your friends, and outsmart your rivals. With a relentless police force gunning to take you down, you’ll need to make split second decisions.",
						link: "https://www.ea.com/en-gb/games/need-for-speed/need-for-speed-most-wanted-2012",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/need-for-speed-most-wanted-.png",
                    },
                    {
                        id: 5,
                        platform: "Personal Computer",
                        value: "Krunker.io",
						description: "Krunker is a online multiplayer Shooting Game!!",
						link: "https://krunker.io/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/krunker-io.png",
                    },
                    {
                        id: 6,
                        platform: "Personal Computer",
                        value: "Call of Duty: Modern Warfare 3",
						description: "Modern Warfare 3 delivers a multiplayer experience that continues to raise the bar by focusing on fast-paced, gun-on-gun combat, along with innovative features that support and enhance a large variety of play-styles. Killstreaks have been redesigned, new game modes are being introduced, and a gun progression system evolves your weapons over time.",
						link: "https://www.callofduty.com/mw3",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/call-of-duty-modern-warfare-3.png",
                    },
                    {
                        id: 7,
                        platform: "Personal Computer",
                        value: "Re Run",
						description: "Re Run is a Fighting game created by Dani",
						link: "https://danidev.itch.io/rerun",
                        imageURL: "/images/jak/hobby/favouriteGames/re-run.png",
                    },
                    {
                        id: 8,
                        platform: "Personal Computer",
                        value: "Human Fall Flat",
						description: "In Human: Fall Flat you play as a wobbly human who keeps dreaming about surreal places filled with puzzles where he's yet to find the exit.",
						link: "https://505games.com/games/human-fall-flat/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/human-fall-flat.png",
                    },
                    {
                        id: 9,
                        platform: "Personal Computer",
                        value: "One Hand Clapping",
						description: "One Hand Clapping is a relaxing, inspiring puzzle platformer that focuses on vocal input to progress through its vibrant world.",
						link: "https://handy-games.com/en/games/one-hand-clapping/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/one-hand-clapping.png",
                    },
                    {
                        id: 10,
                        platform: "Personal Computer",
                        value: "Jelly Drift",
						description: "Jelly Drift is a Car Racing game made by Dani!",
						link: "https://danidev.itch.io/jelly-drift",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/jelly-drift.png",
                    },
                    {
                        id: 11,
                        platform: "Personal Computer",
                        value: "Minecraft",
						description: "In Minecraft, players explore a blocky, procedurally generated 3D world with virtually infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures, earthworks and simple machines. Depending on game mode, players can fight computer-controlled mobs, as well as cooperate with or compete against other players in the same world. Game modes include a survival mode, in which players must acquire resources to build the world and maintain health, and a creative mode, where players have unlimited resources and access to flight. Players can modify the game to create new gameplay mechanics, items, and assets.",
						link: "https://www.minecraft.net/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/minecraft.png",
                    },
                    {
                        id: 12,
                        platform: "Personal Computer",
                        value: "Scribbl.io",
						description: "Skribbl.io is a free multiplayer drawing and guessing game. Draw and guess words with your friends and people all around the world!!",
						link: "https://skribbl.io/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/scribbl-io.png",
                    },
                    {
                        id: 13,
                        platform: "Personal Computer",
                        value: "Ducklings.io",
						description: "It's time to relax, you're a duck now. Swim around and rescue as many ducklings as possible. Dodge the reckless boats, they will hurt you!!",
						link: "https://ducklings.io/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/ducklings-io.png",
                    },
                    {
                        id: 14,
                        platform: "Personal Computer",
                        value: "Hole.io",
						description: "Absorb everyone into your black hole in the new game!!",
						link: "https://hole-io.com/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/hole-io.png",
                    },
                    {
                        id: 15,
                        platform: "Personal Computer",
                        value: "Agar.io",
						description: "Agar.io is a massively multiplayer online action game created by Brazilian developer Matheus Valadares. Players control one or more circular cells in a map representing a Petri dish!!",
						link: "https://www.agar.io/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/agar-io.png",
                    },
                    {
                        id: 16,
                        platform: "Personal Computer",
                        value: "Paper.io",
						description: "Invade as many lands as possible and become the biggest on the server!!",
						link: "	https://paper-io.com/",
                        imageURL:
                            "/images/jak/hobby/favouriteGames/paper.png",
                    },
                ],
            },
            {
                id: 1,
                value: "Programming",
                languages: [
                    {
                        id: 0,
                        value: "Python",
                        website: "https://www.python.org/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/Python.png",
                    },
                    {
                        id: 1,
                        value: "HTML",
                        website: "https://html.com/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/HTML.png",
                    },
                    {
                        id: 2,
                        value: "JavaScript",
                        website: "https://www.javascript.com/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/JavaScript.png",
                    },
                    {
                        id: 3,
                        value: "CSS",
                        website: "https://css.com/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/CSS.png",
                    },
                    {
                        id: 4,
                        value: "TypeScript",
                        website: "https://www.typescriptlang.org/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/TypeScript.png",
                    },
                    {
                        id: 5,
                        value: "Go",
                        website: "https://golang.org/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/Go.png",
                    },
                    {
                        id: 6,
                        value: "C",
                        website: "https://www.chobby/programming.com/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/C.png",
                    },
                    {
                        id: 7,
                        value: "C++",
                        website: "https://isocpp.org/",
                        imageURL:
                            "/images/jak/hobby/programming/languages/C++.png",
                    },
                ],
                frameworks: [
                    {
                        id: 0,
                        value: "Django",
                        website: "https://www.djangoproject.com/",
                        languages: ["Python"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Django.png",
                    },
                    {
                        id: 1,
                        value: "React",
                        website: "https://reactjs.org/",
                        languages: ["JavaScript"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/React.png",
                    },
                    {
                        id: 2,
                        value: "React Native",
                        website: "https://reactnative.dev/",
                        languages: ["JavaScript"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/ReactNative.png",
                    },
                    {
                        id: 3,
                        value: "Next",
                        website: "https://nextjs.org/",
                        languages: ["JavaScript"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Next.png",
                    },
                    {
                        id: 4,
                        value: "Bootstrap",
                        website: "https://getbootstrap.com/",
                        languages: ["CSS"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Bootstrap.png",
                    },
                    {
                        id: 5,
                        value: "Tailwind",
                        website: "https://tailwindcss.com/",
                        languages: ["CSS"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Tailwind.png",
                    },
                    {
                        id: 6,
                        value: "Svelte",
                        website: "https://svelte.dev/",
                        languages: ["JavaScript"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Svelte.png",
                    },
                    {
                        id: 7,
                        value: "OpenCV",
                        website: "https://opencv.org/",
                        languages: ["Python", "C++"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/OpenCV.png",
                    },
                    {
                        id: 8,
                        value: "Raylib",
                        website: "https://www.raylib.com/",
                        languages: ["C", "C++"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Raylib.png",
                    },
                    {
                        id: 9,
                        value: "Pygame",
                        website: "https://www.pygame.org/",
                        languages: ["Python"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Pygame.png",
                    },
                    {
                        id: 10,
                        value: "SDL",
                        website: "https://www.libsdl.org/",
                        languages: ["C", "C++", "C#", "Python"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/SDL.png",
                    },
                    {
                        id: 11,
                        value: "Arcade",
                        website: "https://api.arcade.academy/",
                        languages: ["Python"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Arcade.png",
                    },
                    {
                        id: 12,
                        value: "Ursina",
                        website: "https://www.ursinaengine.org/",
                        languages: ["Python"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Ursina.png",
                    },
                    {
                        id: 13,
                        value: "Panda3D",
                        website: "https://www.panda3d.org/",
                        languages: ["Python", "C++"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Panda3D.png",
                    },
                    {
                        id: 14,
                        value: "Electron",
                        website: "https://www.electronjs.org/",
                        languages: ["JavaScript"],
                        imageURL:
                            "/images/jak/hobby/programming/frameworks/Electron.png",
                    },
                ],
            },
            {
                id: 2,
                value: "Playing Instruments",
                instruments: [
                    {
                        id: 0,
                        value: "Mandolin",
                        imageURL:
                            "/images/jak/hobby/musicalInstruments/Mandolin.png",
                    },
                    {
                        id: 1,
                        value: "Guitar",
                        imageURL:
                            "/images/jak/hobby/musicalInstruments/Guitar.png",
                    },
                    {
                        id: 2,
                        value: "Tabla",
                        imageURL:
                            "/images/jak/hobby/musicalInstruments/Tabla.png",
                    },
                    {
                        id: 3,
                        value: "Harmonium",
                        imageURL:
                            "/images/jak/hobby/musicalInstruments/Harmonium.png",
                    },
                    {
                        id: 4,
                        value: "Keyboard",
                        imageURL:
                            "/images/jak/hobby/musicalInstruments/Keyboard.png",
                    },
                    {
                        id: 4,
                        value: "Congo",
                        imageURL:
                            "/images/jak/hobby/musicalInstruments/Congo.png",
                    },
                ],
            },
        ],

        fav_food: [
            {
                id: 0,
                value: "Chilli Chicken with Rice",
                imageURL:
                    "/images/jak/favouriteFoods/ChilliChickenWithRice.png",
                ingredients: [
                    "Rice",
                    "Chicken",
                    "Bell Pepper (Capsicum)",
                    "Soy Sauce",
                    "Chilli Pepper",
                    "Garlic",
                    "Salt",
                    "Onion",
                    "Ginger",
                    "Spring Onion",
                    "Corn Flour",
                ],
            },
            {
                id: 2,
                value: "Egg Roll",
                imageURL: "/images/jak/favouriteFoods/EggRoll.png",
                ingredients: [
                    "Egg",
                    "Soy Sauce",
                    "Cabbage",
                    "Carrot",
                    "Onion",
                    "Spring Onion",
                ],
            },
        ],

        social_medias: [
            {
                id: 0,
                value: "Github",
                imageURL: "/images/jak/socialMedias/Github.png",
                link: "https://github.com/Jonak-Adipta-Kalita",
                username: "Jonak-Adipta-Kalita",
            },
            {
                id: 1,
                value: "Spotify",
                imageURL: "/images/jak/socialMedias/Spotify.png",
                link: "https://open.spotify.com/user/31cypdycu52u6rj3bsfcldmqrlji",
                username: "Jonak",
            },
            {
                id: 2,
                value: "YouTube",
                imageURL: "/images/jak/socialMedias/YouTube.png",
                link: "https://www.youtube.com/channel/UC6IPfVhkqfcfBZCko6Q9mnQ",
                username: "BeastNight TV",
            },
            {
                id: 3,
                value: "Discord",
                imageURL: "/images/jak/socialMedias/Discord.png",
                link: "https://discord.gg/S3UfGkW",
                username: "xxJonakAdiptaxx#2464",
            },
            {
                id: 4,
                value: "Instagram",
                imageURL: "/images/jak/socialMedias/Instagram.png",
                link: "https://www.instagram.com/xxjonakadiptaxx/?hl=en",
                username: "xxjonakadiptaxx",
            },
            {
                id: 5,
                value: "Twitter",
                imageURL: "/images/jak/socialMedias/Twitter.png",
                link: "https://twitter.com/AdiptaJonak",
                username: "AdiptaJonak",
            },
            {
                id: 6,
                value: "Reddit",
                imageURL: "/images/jak/socialMedias/Reddit.png",
                link: "https://www.reddit.com/user/BeastNight_TV",
                username: "u/BeastNight_TV",
            },
            {
                id: 7,
                value: "Steam",
                imageURL: "/images/jak/socialMedias/Steam.png",
                link: "https://steamcommunity.com/profiles/76561199052472963/",
                username: "xxJonakAdiptaxx",
            },
        ],
    });
};
