import {
    getMoodsList,
    getNewReleasesList,
    getQuickPickList,
    getTodayHits,
}
    from "../../services/services";


export const init = async () => {
    const renderMoods = async () => {
        const moods = await getMoodsList()
        return moods;
    }

    const renderQuickPick = async () => {
        const quickpick = await getQuickPickList();
        return quickpick;
    }

    const renderFeatured = async () => {
        const featured = await getTodayHits();
        return featured;
    }

    const app = document.querySelector("#app");
    app.innerHTML = '';

    const renderMoodsEl = (moods) => {
        const moodDiv = document.createElement("div");
        moodDiv.className = "flex gap-5 mb-10"
        moods.forEach(e => {
            console.log(e)
            const p = document.createElement("a");
            p.href = `/moods/${e.slug}`
            p.innerText = e.name;
            p.className = "bg-black text-white px-4 py-2 rounded-xl hover:bg-black/20"
            moodDiv.append(p);
        });
        app.append(moodDiv)
    }

    const renderMoodsH1El = (moods) => {
        const slug = window.location.pathname.split("/").pop();
        const mood = moods.find((e) => e.slug === slug);
        const moodDiv = document.createElement("div");
        moodDiv.className = " text-white font-bold text-[45px] mb-10"
        const h1 = document.createElement("h1")
        h1.innerText = `${mood.name}`
        const p = document.createElement("p")
        p.className = "font-normal text-lg pt-3"
        p.innerText = `Curated playlists for ${mood.name}`

        moodDiv.append(h1, p);
        app.append(moodDiv)
    }

    const renderQuickPickEl = (quickpick) => {
        const quickPickDiv = document.createElement("div");
        quickPickDiv.className = "mb-10 max-w-300"
        const h1 = document.createElement("h1");
        h1.innerText = "Quick Picks";
        h1.className = "text-4xl font-bold pb-4 text-white";
        quickPickDiv.append(h1);
        quickpick.forEach(e => {
            const item = document.createElement("a");
            item.href = `/playlists/details/${e.slug}`
            item.className = "flex items-center gap-4 mb-4 hover:bg-white/20";
            const img = document.createElement("img");
            img.src = e.thumbnails[0];
            img.className = "w-12 h-12 object-cover rounded";
            const info = document.createElement("div");
            const title = document.createElement("p");
            title.innerText = e.title;
            title.className = "font-bold text-white";
            const artist = document.createElement("p");
            artist.innerText =
                e.artists.join(", ") + " · " + e.popularity + " lượt nghe";
            artist.className = "text-gray-400";
            info.append(title, artist);
            item.append(img, info);
            quickPickDiv.append(item);

        });

        app.append(quickPickDiv);
    }

    const renderFeaturedEl = (featured) => {
        const albumDiv = document.createElement("div");
        albumDiv.className = "mb-10";

        const h1 = document.createElement("h1");
        h1.innerText = "Featured";
        h1.className = "text-4xl font-bold pb-4 text-white";

        albumDiv.append(h1);

        const div = document.createElement("div");
        div.className =
            "hscroll-inner flex gap-6 overflow-x-auto pb-10 lg:pb-14 scrollbar scroll-smooth";

        albumDiv.append(div);

        console.log(featured);

        featured.forEach(e => {
            const item = document.createElement("a");

            item.href = `/playlists/details/${e.slug}`;
            item.className =
                "w-40 lg:h-60 lg:w-[220px] cursor-pointer shrink-0 block group";

            const imageDiv = document.createElement("div");
            imageDiv.className = "relative";

            const img = document.createElement("img");
            img.src = e.thumbnails[0];
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
            name.innerText = e.title;

            const artist = document.createElement("p");
            artist.className = "text-gray-400 text-sm truncate";
            artist.innerText = "Various Artists";

            item.append(imageDiv, name, artist);

            div.append(item);
        });

        app.append(albumDiv);
    }



    const moods = await renderMoods()
    const quickpick = await renderQuickPick()
    const featured = await renderFeatured()

    renderMoodsEl(moods)
    renderMoodsH1El(moods)
    renderQuickPickEl(quickpick)
    renderFeaturedEl(featured)

}