// create div
var div_buttons = document.createElement("div");
var div_1 = document.createElement("div");
var div_2 = document.createElement("div");
var div_3 = document.createElement("div");
var div_4 = document.createElement("div");
// append div to start_page document
document.body.appendChild(div_buttons);
div_buttons.appendChild(div_1);
div_buttons.appendChild(div_2);
div_buttons.appendChild(div_3);
div_buttons.appendChild(div_4);
// center div_buttons
div_buttons.style.alignSelf = "center";
div_1.style.alignSelf = "center";
div_2.style.alignSelf = "center";
div_3.style.alignSelf = "center";
div_4.style.alignSelf = "center";
// create buttons
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn_ch_f = document.createElement("button");
var btn_ipfs = document.createElement("button");
var btn_h1 = document.createElement("button");
var btn_h2 = document.createElement("button");
// set text for buttons
btn1.innerHTML = "To IPFS";
btn2.innerHTML = "From IPFS";
btn_ch_f.innerHTML = "Choose file";
btn_ipfs.innerHTML = "IPFS";
btn_h1.innerHTML = "Home";
btn_h2.innerHTML = "Home";
// set id for buttons
btn1.setAttribute("id", "btn1");
btn2.setAttribute("id", "btn2");
btn_ch_f.setAttribute("id", "btn_ch_f");
btn_ipfs.setAttribute("id", "btn_ipfs");
btn_h1.setAttribute("id", "btn_h1");
btn_h2.setAttribute("id", "btn_h2");
// set onclick events for buttons
btn1.onclick = function(){add_file_page()};
btn2.onclick = function(){download_file_page()};
btn_ch_f.onclick = function(){choose_file()};
btn_ipfs.onclick = function(){ipfs_add()};
btn_h1.onclick = function(){to_home_from_add()};
btn_h2.onclick = function(){to_home_from_download()};
// append buttons for start_page
div_1.appendChild(btn1);
div_2.appendChild(btn2);

function choose_file() {
    /* document.getElementById('display_clicks').innerHTML = "You've clicked me!"; */
    const { dialog } = require('electron').remote;
    dialog.showOpenDialog({title: 'choose a file'});

}

function add_file_page(){
  // replace old buttons with the new ones
  div_1.replaceChild(btn_ch_f, btn1);
  div_2.replaceChild(btn_ipfs, btn2);
  div_3.appendChild(btn_h1);
}

// function to clean up previous page & set up elements of 'from ipfs' page
function download_file_page(){
  div_1.replaceChild(btn_h2, btn1);
  div_2.removeChild(btn2);
}

function to_home_from_add(){
  div_1.replaceChild(btn1, btn_ch_f);
  div_2.replaceChild(btn2, btn_ipfs);
  div_3.removeChild(btn_h1);
}

function to_home_from_download(){
  div_1.replaceChild(btn1, btn_h2);
  div_2.appendChild(btn2);
}

/*
function add_file_page(){
    const { remote } = require('electron');
    remote.getCurrentWindow().loadFile(page_html);
}

function ipfs_action(){
    const IPFS = require('ipfs').remote;
    const node = await IPFS.create();
    const data = 'Hello World';
    const results = node.add(data);
        for await (const { cid } of results) {
        document.getElementById('display_ipfs').innerHTML = cid.toString();
    }
    document.getElementById('display_ipfs').innerHTML = 'It worked.';
}
*/
