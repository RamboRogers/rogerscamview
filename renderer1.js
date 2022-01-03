// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//hide
'use strict'

window.$ = window.jQuery = require('jquery')
window.Bootstrap = require('bootstrap')
var refreshValue;

function refresh(node)
{
   var times = refreshValue; // gap in Milli Seconds;

   (function startRefresh()
   {
      var address;
      if(node.src.indexOf('&cb=')>-1)
       address = node.src.split('&cb=')[0];
      else
       address = node.src;
      node.src = address+"&cb="+new Date().getTime();

      node.src.reload
      setTimeout(startRefresh,times);
   })();
}

window.onload = function()
{


  // In renderer process (web page).
  const {ipcRenderer} = require('electron')

  var myCameraURLs = JSON.parse(ipcRenderer.sendSync('getConfigData', 'sendfromrender'));

  if(typeof myCameraURLs.refreshRate[0] === undefined){

  } else {
    refreshValue = myCameraURLs.refreshRate[0];
  }

  if(typeof myCameraURLs.cameras[0] === undefined){

  } else {
    document.getElementById('paneOneImg').src = myCameraURLs.cameras[0];
  }




   var nodeOne = document.getElementById('paneOneImg')


   refresh(nodeOne);

   // you can refresh as many images you want just repeat above steps
 }
