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

        const name = document.querySelector("#name").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirmPassword").value

        button.disabled = true;
        button.innerText = "Loading..."

        const user = await sendRequestRegister({ name, email, password, confirmPassword })
        if (!user) {
            msg.innerText = "Register Fail. Please try again!"
        } else {
            window.location.href = "/login"
        }

        button.disabled = false;
        button.innerText = buttonTextInit;


    };

    const sendRequestRegister = async (registerData) => {
        try {
            const response = await api.post("/auth/register", registerData)
            return response.data;
        } catch (error) {
            return false;
        }
    }

    form.addEventListener("submit", handleSubmit);
};

export default init;