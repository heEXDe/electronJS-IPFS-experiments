
function choose_file() {
    /* document.getElementById('display_clicks').innerHTML = "You've clicked me!"; */
    const { dialog } = require('electron').remote;
    dialog.showOpenDialog({title: 'choose a file'});

}

function load_next_page(page_html){
    const { remote } = require('electron');
    remote.getCurrentWindow().loadFile(page_html);
    console.log('And?');
}
/*
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