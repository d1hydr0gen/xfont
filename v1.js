window.onload = function() 
{
    const fonts = ["serif.otf"]; // add fonts here!
  
    const elements = document.querySelectorAll('*');
    const fontClasses = [];
    elements.forEach(el => {
        const classes = el.className.split(' ');
            classes.forEach(c => {
            if (c.startsWith('font-')) {
                var fontname = c.replace('font-','');
                if(fontname!=""){
                    fontClasses.push(fontname);
                }
            }
        });
    });
    const fontClassSet = new Set(fontClasses); 
    const uniqueFontClasses = Array.from(fontClassSet);
    var styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    uniqueFontClasses.forEach( fn => {
        if(fonts.includes(fn)){
            styleElement.appendChild(document.createTextNode(" .font-" + fn.replace('.otf','') + " {   font-family: '" + fn.replace('.otf','')  + "'; src: url('/fonts/" + fn +  "' );} "));
        }
    } );
}
