function Columnate() {
    // apply columnate stylesheets to document
    var LoadStylesheet = function(url) {
        var c = document.createElement('link');
        c.rel = 'stylesheet';
        c.type = 'text/css';
        c.media = 'all';
        c.href = url;
        document.getElementsByTagName('head')[0].appendChild(c);
    }
  
    // callback that will replace document content with readable version
    var MakeReadable = function() {   
        var doclone = document.cloneNode(true);
        var article = new Readability(doclone).parse();
        // strip stray styling from the html tag itself
        var htmltag = document.getElementsByTagName("html")[0];
        htmltag.removeAttribute("class");
        htmltag.removeAttribute("style");
        // reset head to nothing but our stylesheets
        document.head.innerHTML = "";
        LoadStylesheet('//anoved.github.io/Columnate/columnate.css');
        LoadStylesheet('//anoved.github.io/Columnate/appearance.css');
        document.title = article.title;
        // reset body html to nothing but reformatted content  
        document.body.removeAttribute("class");
        document.body.removeAttribute("style");
        document.body.innerHTML = "<h1>"+article.title+"</h1>"+article.content;
    };

    // load readability script and set it to be applied when loaded
    cmjs = document.createElement('script');
    cmjs.type='text/javascript';
    cmjs.src='//anoved.github.io/Columnate/readability/Readability.js';
    cmjs.onreadystatechange = MakeReadable;
    cmjs.onload = MakeReadable;
    document.getElementsByTagName('head')[0].appendChild(cmjs);
};
