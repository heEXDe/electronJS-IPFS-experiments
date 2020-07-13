const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('http://localhost:5001'); // (the default in Node.js)
const BufferList = require('bl/BufferList')
var cid = "future cid"

// ipfs file adding
async function ipfs_add()
{
  try
  {
    //console.log(await ipfs.files.stat('/'));
  //var fileInput = document.getElementById("fileItem");
  //var files = fileInput.files;
  //var a = await ipfs.files.write('/' + files[0].name, files[0].content);
  // options for the dialog box
  let options = {
    title: 'choose a file',
    properties: ['openFile','multiSelections']
  };
  // open dialog box
  var files = dialog.showOpenDialog(options);
  // what to do with the selected file/files
  files.then(result => {
    var file_paths = result.filePaths;
    for (var i = 0; i < result.filePaths.length; i++) {
      fs.readFile(file_paths[i], 'utf-8', (err, data) => {
        //console.log(data)
        //console.log(result.filePaths[i]);
        ipfs_add_file(data)
      })
    }
  })//.catch(err => {console.log(err);});
  } catch (err) {console.error(err);}
}

async function ipfs_add_file(str){
  for await (const res of ipfs.add(str)) {
    console.log(String(res.cid))
    cid = String(res.cid)
    //ipfs_get(cid)
  }
}

async function ipfs_get(ipfs_cid){
  for await (const file of ipfs.get(ipfs_cid)) {
    //console.log(file.path)
    if (!file.content) continue;
    const content = new BufferList()
    for await (const chunk of file.content) {
      content.append(chunk)
    }
    console.log(content.toString())
  }
}
