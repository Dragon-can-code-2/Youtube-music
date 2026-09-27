import { getExploreVideoList, getNewReleasesList } from "../../services/services";

export const init = async () => {
    const renderNewRelease = async () => {
        const newRelease = await getNewReleasesList()
        return newRelease;
    }

    const renderNewVideo = async () => {
        const newvideo = await getExploreVideoList()
        return newvideo;
    }

    const app = document.querySelector("#app");
    app.innerHTML = '';


    const section = document.createElement("div")
    section.className = "p-4 text-white"

    const rendernewReleaseEl = (newVideo) => {
        const albumDiv = document.createElement("div");
        albumDiv.className = "mt-30";

        const h1 = document.createElement("h1");
        h1.innerText = "Khám phá albums mới";
        h1.className = "text-4xl font-bold pb-4 text-white";

        albumDiv.append(h1);

        const div = document.createElement("div");
        div.className =
            "hscroll-inner flex gap-6 overflow-x-auto pb-10 lg:pb-14 scrollbar scroll-smooth";

        albumDiv.append(div);

        console.log(newVideo);

        newVideo.forEach(e => {
            const item = document.createElement("a");

            item.href = `/videos/details/${e.id}`;
            item.className =
                "w-40 lg:h-60 lg:w-[220px] cursor-pointer shrink-0 block group";

            const imageDiv = document.createElement("div");
            imageDiv.className = "relative";

            const img = document.createElement("img");
            img.src = e.thumb;
            img.className =
                "rounded-xl w-full h-40 lg:h-[220px] object-cover mb-2";

            const bg = document.createElement("div");
            bg.className =
                "absolute inset-0 bg-white/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200";

            const player = document.createElement("div");
            player.className =
                "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-100";

            const playerBtn = document.createElement("i");
            playerBtn.className =
                "fa-solid fa-play text-white text-4xl";

            player.append(playerBtn);

            imageDiv.append(img, bg, player);

            const name = document.createElement("h3");
            name.className = "mb-2 text-white font-medium truncate";
            name.innerText = e.name;

            const artist = document.createElement("p");
            artist.className = "text-gray-400 text-sm truncate";
            artist.innerText = e.albumType;

            item.append(imageDiv, name, artist);

            div.append(item);
        });

        app.append(albumDiv);
    };

    const renderNewVideoEl = (newVideo) => {
        const albumDiv = document.createElement("div");
        albumDiv.className = "mt-30";

        const h1 = document.createElement("h1");
        h1.innerText = "Video nhạc mới";
        h1.className = "text-4xl font-bold pb-4 text-white";

        albumDiv.append(h1);

        const div = document.createElement("div");
        div.className =
            "hscroll-inner flex gap-6 overflow-x-auto pb-10 lg:pb-14 scrollbar scroll-smooth";

        albumDiv.append(div);

        console.log(newVideo);

        newVideo.forEach(e => {
            const item = document.createElement("a");

            item.href = `/albums/details/${e.id}`;
            item.className =
                "w-60 md:w-80 lg:w-[340px] xl:w-[400px] -mb-6 cursor-pointer shrink-0 block group";

            const imageDiv = document.createElement("div");
            imageDiv.className = "relative";

            const img = document.createElement("img");
            img.src = e.thumb;
            img.className =
                "rounded-xl w-full h-40 lg:h-[220px] object-cover mb-2";

            const bg = document.createElement("div");
            bg.className =
                "absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-200";

            const player = document.createElement("div");
            player.className =
                "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-100";

            const playerBtn = document.createElement("i");
            playerBtn.className =
                "fa-solid fa-play text-white text-4xl";

            player.append(playerBtn);

            imageDiv.append(img, bg, player);

            const name = document.createElement("h3");
            name.className = "text-white font-medium truncate my-2";
            name.innerText = e.name;

            const views = document.createElement("p");
            views.className = "text-gray-400 text-sm truncate";
            views.innerText =
                Intl.NumberFormat("vi-VN", {
                    notation: "compact"
                }).format(e.views) + " lượt xem";

            item.append(imageDiv, name, views);

            div.append(item);
        });

        app.append(albumDiv);
    };

    const newReleases = await renderNewRelease()
    const newvideo = await renderNewVideo()

    rendernewReleaseEl(newReleases)
    renderNewVideoEl(newvideo)
}