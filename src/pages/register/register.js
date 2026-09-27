import init from "../../services/register";

export const renderRegister = () => {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <div class="relative z-10 container mx-auto max-w-100">
            <div>
                <form action="" class="auth-form active-form mt-50 p-10 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 hidden-form">

                    <h2 class="text-white font-semibold text-center text-xl mb-6">
                        ĐĂNG KÝ
                    </h2>

                    <div class="mx-auto py-5 text-white">

                        <div class="mb-3">
                            <label for="name" class="block mb-1">
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value="Ten"
                                class="w-full px-4 py-2 rounded bg-white/70 focus:bg-white text-gray-800"
                                placeholder="Name"
                            >
                        </div>

                        <div class="mb-3">
                            <label for="Email" class="block mb-1">
                                Email
                            </label>

                            <input
                                id="email"
                                type="text"
                                value="dia-chi-email"
                                class="w-full px-4 py-2 rounded bg-white/70 focus:bg-white text-gray-800"
                                placeholder="Email"
                            >
                        </div>

                        <div class="mb-3">
                            <label for="password" class="block mb-1">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value="mat-khau"
                                class="w-full px-4 py-2 rounded bg-white/70 focus:bg-white text-gray-800"
                                placeholder="Password"
                            >
                        </div>

                        <div class="mb-3">
                            <label for="password-confirm" class="block mb-1">
                                Password-confirm
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                value="mat-khau"
                                class="w-full px-4 py-2 rounded bg-white/70 focus:bg-white text-gray-800"
                                placeholder="Confirm Password"
                            >
                        </div>
                        <h5 id="msg" class="text-red-500 font-bold"></h5>
                        <button
                            type="submit"
                            id="loginSubmitButton"
                            class="block w-full mt-8 px-4 py-2 bg-black/80 text-white rounded-xl hover:bg-red-400 transition cursor-pointer disabled:bg-black/20"
                        >
                            Đăng nhập
                        </button>

                    </div>
                </form>
            </div>
        </div>
    `;

    init()
};