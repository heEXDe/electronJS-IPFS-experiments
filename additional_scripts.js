
// get two first buttons
var btn1 = document.getElementById("btn_1");
var btn2 = document.getElementById("btn_2");

// create buttons
var btn_ch_f = document.createElement("button");
var btn_ipfs = document.createElement("button");
var btn_h1 = document.createElement("button");
var btn_h2 = document.createElement("button");

// set text for buttons
btn_ch_f.innerHTML = "Choose file";
btn_ipfs.innerHTML = "IPFS";
btn_h1.innerHTML = "Home";
btn_h2.innerHTML = "Home";

// set id for buttons
btn_ch_f.setAttribute("id", "btn_ch_f");
btn_ipfs.setAttribute("id", "btn_ipfs");
btn_h1.setAttribute("id", "btn_h1");
btn_h2.setAttribute("id", "btn_h2");

// set onclick events for buttons
btn_ch_f.onclick = function(){choose_file()};
btn_ipfs.onclick = function(){ipfs_add()};
btn_h1.onclick = function(){to_home_from_add()};
btn_h2.onclick = function(){to_home_from_download()};

function choose_file() {
  //require file system module to handle files
  var fs = require('fs');
  // options for dialog box
  let options = {
    title: 'choose a file',
    properties: ['openFile','multiSelections']
  };
  // require module for futher access to the dialog box
  const { dialog } = require('electron').remote;
  // open dialog box
  var file = dialog.showOpenDialog(options);
  // what to do with the selected file/files
  file.then(result => {
    console.log(result.filePaths[0]);
    var file_path = result.filePaths[0];
    fs.readFile(file_path, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }).catch(err => {console.log(err);});
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
