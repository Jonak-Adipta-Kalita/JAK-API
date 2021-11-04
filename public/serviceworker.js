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
    "/images/hobby/musicalInstruments/Guitar.png",
    "/images/hobby/musicalInstruments/Harmonium.png",
    "/images/hobby/musicalInstruments/Mandolin.png",
    "/images/hobby/musicalInstruments/Tabla.png",
    "/images/hobby/programming/languages/C.png",
    "/images/hobby/programming/languages/C++.png",
    "/images/hobby/programming/languages/CSS.png",
    "/images/hobby/programming/languages/Go.png",
    "/images/hobby/programming/languages/HTML.png",
    "/images/hobby/programming/languages/Python.png",
    "/images/hobby/programming/languages/JavaScript.png",
    "/images/hobby/programming/languages/TypeScript.png",
    "/images/hobby/favouriteGames/AmongUs.png",
    "/images/hobby/favouriteGames/BrawlStars.png",
    "/images/hobby/favouriteGames/HumanFallFlat.png",
    "/images/hobby/favouriteGames/JellyDrift.png",
    "/images/hobby/favouriteGames/KrunkerIo.png",
    "/images/hobby/favouriteGames/Minecraft.png",
    "/images/hobby/favouriteGames/ModernWarfare3.png",
    "/images/hobby/favouriteGames/MostWanted2005.png",
    "/images/hobby/favouriteGames/MostWanted2012.png",
    "/images/hobby/favouriteGames/OneHandClapping.png",
    "/images/hobby/favouriteGames/PokemonGo.png",
    "/images/hobby/favouriteGames/ReRun.png",
    "/images/favouriteFoods/ChilliChickenWithRice.png",
    "/images/favouriteFoods/EggRoll.png",
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
