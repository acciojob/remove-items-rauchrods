//your JS code here. If required.
let selecttag = document.querySelector("#colorSelect");

function removecolor(){
    let color =selecttag.value;
     let mainstr = selecttag.innerHTML;

     mainstr = mainstr.replace(`<option>${color}</option>`,"");

     selecttag.innerHTML = mainstr;
    // console.log(mainstr);
    
}