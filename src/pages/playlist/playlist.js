import { getPlaylistDetailList } from "../../services/playlist";

export const init = async (match) => {

    const slug = match.data.slug;

    console.log("slug:", slug);

    const renderPlayListDetail = async () => {

        const playlistDetail = await getPlaylistDetailList(slug);

        return playlistDetail;
    };

    const renderPlayListDetailEl = (results) => {

        const div = document.createElement("div");

        div.className = "lg:col-span-1";

        div.innerHTML = `
            <div class="sticky top-24 text-white flex flex-col gap-5 items-center">
                <img
                    src="${results.thumbnails}"
                    class="w-80 h-80 lg:w-100 lg:h-100 rounded-xl object-cover shadow-lg"
                >
                <h1 class="text-[20px] xl:text-[28px] font-bold text-center">
                    ${results.title}
                </h1>
                <p class="text-white/70 text-lg text-center">
                    ${results.title}
                </p>
                <div class="text-[14px] xl:text-base text-white/80 text-center flex flex-col gap-2">
                    <div class="flex items-center justify-center">
                        <span>50 bài hát</span>
                        <span class="mx-2">•</span>
                        <span>3 giờ 26 phút</span>
                    </div>
                    <p>
                        Các nghệ sĩ: Various Artists
                    </p>
                </div>
            </div>
        `;
        return div;
    };

    const renderPlayListDetailTrackEl = (results) => {
        const div = document.createElement("div");
        div.className = "flex flex-col gap-2";
        results.tracks.slice(0, 50).forEach((song, index) => {
            const a = document.createElement("a");
            a.setAttribute("data-navigo", "");
            a.href = `/songs/details/${song.id}`;
            a.className =
                "flex items-center gap-4 py-3 px-4 text-white hover:bg-white/10 cursor-pointer transition group";
            a.innerHTML = `
                <div class="w-6 text-center">
                    ${index + 1}
                </div>
                <div class="relative">
                    <img
                        src="${song.thumbnails[0]}"
                        class="w-12 h-12 rounded-lg object-cover"
                    >
                    <div
                        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-200"
                    ></div>
                    <div
                        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200"
                    >
                        <i class="fa-solid fa-play text-white text-sm"></i>
                    </div>
                </div>
                <div class="flex flex-col justify-between flex-1">
                    <div class="font-semibold">
                        ${song.title}
                    </div>
                    <div class="text-sm text-white/60">
                       Various Artists
                    </div>
                </div>
                <div class="text-sm text-white/50">
                    3:56
                </div>
            `;

            div.append(a);
        });

        return div;
    };

    const results = await renderPlayListDetail();

    const app = document.querySelector("#app");

    app.innerHTML = "";

    const container = document.createElement("div");

    container.className =
        "grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:px-8 lg:px-0 gap-x-4";

    const playlistDetailEl = renderPlayListDetailEl(results);

    const playlistTrackEl = renderPlayListDetailTrackEl(results);

    container.append(
        playlistDetailEl,
        playlistTrackEl
    );

    app.append(container);
};