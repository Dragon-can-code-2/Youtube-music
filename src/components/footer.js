export const renderFooter = () => {
    const footerWrapper = document.querySelector("#footer")
    footerWrapper.outerHTML = `
    <footer class="py-5">
        <div class="max-w-300 mx-auto">
          <p class="text-center">copyright &copy; 2026 by f8</p>
        </div>
    </footer>
    `
}