const staticCacheName = `jak-api-v${new Date().getTime()}`;
const urlsToCache = [
    "/",
    "/manifest.json",
    "/robots.txt",
    "/styles/style.css",
    "/scripts/script.js",
    "/favicon.ico",
    "/api/details",
    "/api/hobby",
    "/api/fav_food",
    "/fonts/OtomanopeeOne-Regular.ttf",
    "/images/MusicalInstruments/Guitar.png",
    "/images/MusicalInstruments/Harmonium.png",
    "/images/MusicalInstruments/Mandolin.png",
    "/images/MusicalInstruments/Tabla.png",
    "/images/ProgrammingLanguage/C.png",
    "/images/ProgrammingLanguage/C++.png",
    "/images/ProgrammingLanguage/CSS.png",
    "/images/ProgrammingLanguage/Go.png",
    "/images/ProgrammingLanguage/HTML.png",
    "/images/ProgrammingLanguage/Python.png",
    "/images/ProgrammingLanguage/JavaScript.png",
    "/images/ProgrammingLanguage/TypeScript.png",
    "/images/FavouriteGames/AmongUs.png",
    "/images/FavouriteGames/BrawlStars.png",
    "/images/FavouriteGames/HumanFallFlat.png",
    "/images/FavouriteGames/JellyDrift.png",
    "/images/FavouriteGames/KrunkerIo.png",
    "/images/FavouriteGames/Minecraft.png",
    "/images/FavouriteGames/ModernWarfare3.png",
    "/images/FavouriteGames/MostWanted2005.png",
    "/images/FavouriteGames/MostWanted2012.png",
    "/images/FavouriteGames/OneHandClapping.png",
    "/images/FavouriteGames/PokemonGo.png",
    "/images/FavouriteGames/ReRun.png",
    "/images/FavouriteFoods/ChilliChickenWithRice.png",
    "/images/FavouriteFoods/EggRoll.png",
    "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js",
];

self.addEventListener("install", (event) => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(
                urlsToCache.map((urlToCache) => {
                    return new Request(urlToCache, { mode: "cors" });
                })
            );
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName.startsWith("jak-api-"))
                    .filter((cacheName) => cacheName !== staticCacheName)
                    .map((cacheName) => caches.delete(cacheName))
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match("offline");
            })
    );
});
