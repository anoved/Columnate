function Columnate() {
    // remove external stylesheets from document
    var lc = document.getElementsByTagName('link');
    for (var i = lc.length - 1; i >= 0; i--) {
        if (lc[i].rel == "stylesheet") {
            lc[i].remove();
        }
    }

    // remove internal stylesheets from document
    var ic = document.getElementsByTagName('style');
    for (var k = ic.length - 1; k >= 0; k-- ) {
        ic[k].remove();
    }

    // apply columnate stylesheets to document
    var LoadStylesheet = function(url) {
        var c = document.createElement('link');
        c.rel = 'stylesheet';
        c.type = 'text/css';
        c.media = 'all';
        c.href = url;
        document.getElementsByTagName('head')[0].appendChild(c);
    }
    LoadStylesheet('//anoved.github.io/Columnate/columnate.css');
    LoadStylesheet('//anoved.github.io/Columnate/appearance.css');
  
    // callback that will replace document content with readable version
    var MakeReadable = function() {   
        var doclone = document.cloneNode(true);
        var article = new Readability(doclone).parse();
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
