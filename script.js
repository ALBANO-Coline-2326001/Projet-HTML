document.getElementById("theme").addEventListener("click", function() {
    css=document.getElementById("css");
    if (css.href.endsWith("styledark.css")) {
        css.href="styleclair.css";
    } else {
        css.href="styledark.css";
    }
});
