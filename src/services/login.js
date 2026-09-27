import { api } from "../libs/axios";
import { saveToken } from "../utils/auth";

const init = async () => {
    const form = document.querySelector("form");
    const button = document.querySelector("#loginSubmitButton")
    const buttonTextInit = button.innerText;
    const msg = document.querySelector("#msg");
    msg.innerText = "";
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value

        button.disabled = true;
        button.innerText = "Loading..."

        const token = await sendRequestLogin({ email, password })
        if (!token) {
            msg.innerText = "Tài khoản hoặc mật khẩu không đúng"
        } else {
            saveToken(token)
            window.location.href = "/"
        }

        button.disabled = false;
        button.innerText = buttonTextInit;


    };

    const sendRequestLogin = async (loginData) => {
        try {
            const response = await api.post("/auth/login", loginData)
            return response.data;
        } catch (error) {
            return false;
        }
    }

    form.addEventListener("submit", handleSubmit);
};

export default init;