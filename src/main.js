import "./style.css"
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { router } from "./libs/router";

renderHeader()

router.resolve();

renderFooter()

// router.on('/product', ({ params }) => {
//     console.log("product")
//     console.log(params?.q)
// });
// router.on('/product/:id', ({ data: { id } }) => {
//     console.log("product", id)
// });
// router.on('*', () => {
//     console.log("page not found")
// });


// const links = document.querySelectorAll('a[data-link]')
// // console.log(links)

// links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const pathname = e.target.getAttribute("href");
//         window.history.pushState(null, "", pathname)
//     })
// });
