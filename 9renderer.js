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

  if(typeof myCameraURLs.cameras[1] === undefined){

  } else {
    document.getElementById('paneTwoImg').src = myCameraURLs.cameras[1];
  }

  if(typeof myCameraURLs.cameras[2] === undefined){

  } else {
    document.getElementById('paneThreeImg').src = myCameraURLs.cameras[2];
  }

  if(typeof myCameraURLs.cameras[3] === undefined){

  } else {
    document.getElementById('paneFourImg').src = myCameraURLs.cameras[3];
  }

  if(typeof myCameraURLs.cameras[4] === undefined){

  } else {
    document.getElementById('paneFiveImg').src = myCameraURLs.cameras[4];
  }
  if(typeof myCameraURLs.cameras[5] === undefined){

  } else {
    document.getElementById('paneSixImg').src = myCameraURLs.cameras[5];
  }
  if(typeof myCameraURLs.cameras[6] === undefined){

  } else {
    document.getElementById('paneSevenImg').src = myCameraURLs.cameras[6];
  }
  if(typeof myCameraURLs.cameras[7] === undefined){

  } else {
    document.getElementById('paneEightImg').src = myCameraURLs.cameras[7];
  }
  if(typeof myCameraURLs.cameras[8] === undefined){

  } else {
    document.getElementById('paneNineImg').src = myCameraURLs.cameras[8];
  }
 

   var nodeOne = document.getElementById('paneOneImg')
   var nodeTwo = document.getElementById('paneTwoImg');
   var nodeThree = document.getElementById('paneThreeImg');
   var nodeFour = document.getElementById('paneFourImg');
   var nodeFive = document.getElementById('paneFiveImg');
   var nodeSix = document.getElementById('paneSixImg');
   var nodeSeven = document.getElementById('paneSevenImg');
   var nodeEight = document.getElementById('paneEightImg');
   var nodeNine = document.getElementById('paneNineImg');

   refresh(nodeOne);
   refresh(nodeTwo);
   refresh(nodeThree);
   refresh(nodeFour);
   refresh(nodeFive);
   refresh(nodeSix);
   refresh(nodeSeven);
   refresh(nodeEight);
   refresh(nodeNine);
   
   // you can refresh as many images you want just repeat above steps
 }
