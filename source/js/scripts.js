document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.querySelector(".language-selector");
  const currentLanguage = document.querySelector(".current-language");
  const languageDropdown = document.querySelector(".language-dropdown");

  if (languageSelector && currentLanguage && languageDropdown) {
    currentLanguage.addEventListener("click", function () {
      languageDropdown.classList.toggle("show");
    });

    // 点击页面其他地方关闭下拉菜单
    document.addEventListener("click", function (event) {
      if (!languageSelector.contains(event.target)) {
        languageDropdown.classList.remove("show");
      }
    });
  }
});
