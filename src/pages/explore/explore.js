import { getCategoryList, getExploreVideoList, getNewReleasesList } from "../../services/services";

export const init = async () => {
    const renderNewRelease = async () => {
        const newRelease = await getNewReleasesList()
        return newRelease;
    }
    const renderMoodAndGenres = async () => {
        const categories = await getCategoryList()
        return categories;
    }
    const renderNewVideo = async () => {
        const newvideo = await getExploreVideoList()
        return newvideo;
    }

    const app = document.querySelector("#app");
    app.innerHTML = '';


    const section = document.createElement("div")
    section.className = "p-4 text-white"

    const renderMenuExploreEl = () => {
        const sectionMenu = document.createElement("div")
        sectionMenu.className = "flex flex-col md:flex-row gap-4"

        const banPhatHanh = document.createElement("a")
        banPhatHanh.href = "/new-releases"
        banPhatHanh.className = "flex items-center gap-3 px-6 px-6 md:px-3 xl:px-6 py-4 bg-white/10 rounded-xl text-md lg:text-lg xl:text-xl font-bold hover:bg-white/20 transition cursor-pointer w-full md:w-1/3"
        banPhatHanh.innerText = "Bản phát hành mới"
        const bangXepHang = document.createElement("a")
        bangXepHang.href = "/charts"
        bangXepHang.className = "flex items-center gap-3 px-6 md:px-3 xl:px-6 py-4 bg-white/10 rounded-xl text-md lg:text-lg xl:text-xl font-bold hover:bg-white/20 transition cursor-pointer w-full md:w-1/3"
        bangXepHang.innerText = "Bảng xếp hạng"
        const tamTrangVaTheLoai = document.createElement("a")
        tamTrangVaTheLoai.href = "/moods-and-genres"
        tamTrangVaTheLoai.className = "flex items-center gap-3 px-6 md:px-3 xl:px-6 py-4 bg-white/10 rounded-xl text-md lg:text-lg xl:text-xl font-bold hover:bg-white/20 transition cursor-pointer w-full md:w-1/3"
        tamTrangVaTheLoai.innerText = "Tâm trạng và thể loại"

        sectionMenu.append(banPhatHanh, bangXepHang, tamTrangVaTheLoai)

        section.append(sectionMenu)

        app.append(section)
    }

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
                "w-60 md:w-80 lg:w-[340px] xl:w-[400px] -mb-6 cursor-pointer shrink-0 block group";

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
            artist.innerText = "Various Artists";

            item.append(imageDiv, name, artist);

            div.append(item);
        });

        app.append(albumDiv);
    };

    const renderMoodAndGenresEl = (item) => {
        const albumDiv = document.createElement("div");

        albumDiv.className = "mt-30";

        const h1 = document.createElement("h1");

        h1.innerText = "Tâm trạng và thể loại";

        h1.className =
            "text-[22px] md:text-[32px] lg:text-[45px] text-white font-bold mb-4";

        albumDiv.append(h1);

        const div = document.createElement("div");

        div.className =
            "hscroll-inner flex gap-6 overflow-x-auto pb-10 lg:pb-14 scrollbar scroll-smooth";

        albumDiv.append(div);

        console.log(item);

        // Mỗi cột chứa 4 item
        for (let i = 0; i < item.length; i += 4) {

            const column = document.createElement("div");

            column.className =
                "flex flex-col shrink-0 w-40 md:w-48 lg:w-52 xl:w-61 gap-4";

            // Lấy tối đa 4 item cho mỗi cột
            const columnItems = item.slice(i, i + 4);

            columnItems.forEach((e) => {

                const link = document.createElement("a");

                link.href = `/categories/${e.slug}`;

                link.className =
                    "h-12 rounded-lg flex items-center text-white text-sm font-semibold cursor-pointer bg-[#292929]";

                // Thanh màu bên trái
                const color = document.createElement("div");

                color.className =
                    "h-full w-2 rounded-l-[999px] rounded-tr-[30px] rounded-br-[30px]";

                color.style.backgroundColor = e.color;

                // Tên category
                const name = document.createElement("div");

                name.className =
                    "w-full flex-1 flex items-center justify-center px-2 truncate";

                name.innerText = e.name;

                link.append(color, name);

                column.append(link);
            });

            div.append(column);
        }

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
    const moodandgenres = await renderMoodAndGenres()
    const newvideo = await renderNewVideo()

    renderMenuExploreEl()
    rendernewReleaseEl(newReleases)
    renderMoodAndGenresEl(moodandgenres)
    renderNewVideoEl(newvideo)
}