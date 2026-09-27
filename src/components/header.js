import { api } from "../libs/axios";
import logo from "../images/logo.png";
import { clearToken } from "../utils/auth";

export const renderHeader = () => {

    let user = null;
    let isAuthenticated = false;

    const getProfile = async () => {
        try {
            const response = await api.get("/auth/me");
            user =  response.data;
            isAuthenticated = true;
        } catch (error) {
            console.dir(error)
            isAuthenticated = false;
            user = null;
        }
        renderProfile();
    };

    const renderProfile = () => {
        const profileEl = document.querySelector("#user-button")
        if (isAuthenticated) {
            profileEl.innerHTML = `
                    <div>
                        <a href="/login" data-navigo class="flex gap-3">
                            <i class="fa-regular fa-user text-2xl"></i>
                            <span class="text-[16px] text-gray-300 group-hover:text-white">
                                ${user.name}
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="#" class="logoutButton hover:cursor-pointer hover:bg-white/90 transition-all bg-white text-black px-4 py-2 rounded-3xl text-md font-semibold">
                            Đăng xuất
                        </a>
                    </div>
                    `
        } else {
            profileEl.innerHTML = `
                    <a href="/login" data-navigo class="flex gap-3">
                        <button class="hover:cursor-pointer hover:bg-white/90 transition-all bg-white text-black px-4 py-2 rounded-3xl text-md font-semibold">Đăng nhập</button>
                    </a>
                    <a href="/register" data-navigo class="flex gap-3">
                        <button class="hover:cursor-pointer hover:bg-white/90 transition-all bg-white text-black px-4 py-2 rounded-3xl text-md font-semibold">Đăng ký</button>
                    </a>
                    `
        }

    }

    const handleLogOut = (e) => {
        e.preventDefault()
        clearToken()
        window.location.reload()
    }

    const addEvent = () => {
        const profileEl = document.querySelector("#user-button")
        profileEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('logoutButton')) {
                handleLogOut(e)
            }
        })
    }

    const headerWrapper = document.querySelector("#header")
    headerWrapper.innerHTML = `
    <header>
        <nav class="fixed top-0 left-0 right-0 z-50 w-full bg-[#030303]">
            <div class="text-white flex items-center justify-between px-2 h-18 sm:px-6">
                <div class="flex items-center gap-1 lg:gap-6 md:mr-[5%]">
                    <button>
                        <i class="fa-solid fa-bars text-3xl"></i>
                    </button>
                    <a href="/" data-navigo class="flex items-center gap-2">
                        <img src="${logo}" alt="logo" class="w-12 h-12 object-contain"/>
                        <span class="text-xl font-semibold tracking-tight">Music</span>
                    </a>
                </div>
                <div class="flex grow items-center justify-end gap-4 md:justify-between">
                    <div class="hidden md:flex items-center bg-[#292929]/80 backdrop-blur-sm px-4 py-1.5 lg:py-2.5 rounded w-[290px] lg:w-[470px] relative">
                        <i class="fa-solid fa-magnifying-glass w-5 h-5 text-gray-300"></i>
                        <input type="text" placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ,..." class="bg-transparent outline-none px-3 w-full text-md text-white placeholder-gray-400"/>
                        <button class="absolute right-3 text-gray-300 hover:text-white transition"><i class="fa-solid fa-xmark text-lg"></i></button>
                        <div class="absolute left-0 right-0 top-full bg-[#121212] text-white rounded-lg shadow-lg mt-1 z-9999 hidden">
                            <div class="p-3 text-sm text-gray-300">
                                HIEUTHUHAI - Exit Sign (prod. by Kewtiie) ft. marzuz [Official Lyric Video]
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 lg:gap-5 lg:mr-10">
                        <button class="hidden">
                            <i class="fa-solid fa-magnifying-glass text-xl text-gray-300"></i>
                        </button>
                        <button class="hidden sm:flex p-3 text-sm text-white hover:cursor-pointer hover:bg-white/20 font-medium rounded-full transition">
                            <i class="fa-brands fa-chromecast text-2xl text-gray-300"></i>
                        </button>
                        <button class="hidden sm:flex p-3 text-sm text-white hover:cursor-pointer hover:bg-white/20 font-medium rounded-full transition">
                            <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
                        </button>
                        <div class="user flex gap-5" id="user-button">
                            <i class="animate-spin fa-solid fa-spinner"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <aside class="pt-8 hidden lg:flex flex-col w-22 h-full bg-[#030303] backdrop-blur-xl
                text-white fixed top-16 left-0 z-20">
        <nav class="">
            <a href="/" data-navigo class="flex flex-col items-center gap-1 p-3">
                <i class="fa-regular fa-house text-2xl"></i>
                <span class="text-[11px] text-gray-300 group-hover:text-white">
                    Trang chủ
                </span>
            </a>
            <a href="/explore" data-navigo class="flex flex-col items-center gap-1 p-3">
                <i class="fa-regular fa-compass text-2xl"></i>
                <span class="text-[11px] text-gray-300 group-hover:text-white">
                    Khám phá
                </span>
            </a>
            <a href="/" data-navigo class="flex flex-col items-center gap-1 p-3">
            <i class="fa-regular fa-bookmark text-2xl"></i>
                <span class="text-[11px] text-gray-300 group-hover:text-white">
                   Thư viện
                </span>
            </a>
            <div class="">
                <hr class="my-3 ww-full border-white/20" />
                <a href="/" data-navigo class="flex flex-col items-center gap-1 p-3">
                    <i class="fa-regular fa-user text-2xl"></i>
                    <span class="text-[11px] text-gray-300 group-hover:text-white">
                        Đăng nhập
                    </span>
                </a>
            </div>
        </nav>
    </aside>
    `

    getProfile()
    addEvent()
}