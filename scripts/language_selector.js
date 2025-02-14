hexo.extend.helper.register(
  "language_list",
  function () {
    const languages = hexo.theme.config.languages; // 从 _config.yml 获取语言配置
    const currentLanguage = this.page.lang || this.config.language; // 获取当前页面语言，如果页面没有指定，则使用默认语言
    let html = '<ul class="language-list">';
    for (const code in languages) {
      const isActive = code === currentLanguage;
      //const url = this.url_for(languages[code].url + this.page.path); // 按当前的URL生成链接，现在不这样使用，直接跳转回相关语言的首页
      const url = this.url_for(`${this.config.url}/${code==='en' ? "" : code + "/"}`)
      // console.log(code, this.config.url, `${this.config.url}/${code==='en' ? "" : code + "/"}`)
      const className = isActive ? "language-item active" : "language-item";
      html += `<li class="${className}"><a href="${url}">${languages[code].name}</a></li>`;
    }
    html += "</ul>";
    return html;
  },
  { safe: true }
);

hexo.extend.helper.register("current_language", function () {
  const languages = hexo.theme.config.languages;
  const currentLanguage = this.page.lang || this.config.language;
  return languages[currentLanguage].name;
});
