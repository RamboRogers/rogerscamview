// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

const fs = require('fs');

//set config directory
const configFileName = app.getPath("userData") + '/rogerscamconf.json';
readConfigFile();

//console.log("ConfigFile:" . configFileName);

const blankConfig = '{"cameras":["http://127.0.0.1","http://127.0.0.1","http://127.0.0.1","http://127.0.0.1"],"refreshRate":["1000"]}';

// In main process.
 const {ipcMain} = require('electron')

//event from config page
ipcMain.on('getConfigData', (event, arg) => {
   //console.log(arg) // prints event
   event.returnValue = JSON.stringify(global.configData)
 })

 //event from config page
 ipcMain.on('writeConfigData', (event, arg) => {
    global.configData =  JSON.parse(arg) // prints event
    event.returnValue = 'Done';
    writeConfigFile()
    console.log("Config File Written...")
  })


//Read the config file in.
function readConfigFile () {
  console.log("Read->ConfigFile:" + configFileName);
  fs.readFile(configFileName, function (err, data) {
    if (err) {

      //IF WE CAN'T READ THE CONFIG FILE, LETS MAKE A NEW ONE!
      global.configData = JSON.parse(blankConfig.toString())

      return console.error(err);

    } else {
    console.log("Asynchronous read: " + data.toString());
      global.configData = JSON.parse(data.toString())

    //console.log(global.configData.cameras.length);
    //console.log(JSON.stringify(global.configData.cameras[0]));
  }
  });
}

function writeConfigFile () {
  fs.writeFile(configFileName, JSON.stringify(global.configData) , function (err,data) {
    if (err) {
      return console.log(err);
    }
    //console.log(data);
  });
 //CODE TO UPDATE FOR 9 CAMERAS
  try { readConfigFile()
 } finally {
   if (global.configData.cameras.length == 4){
    createWindow()
  } else if (global.configData.cameras.length > 4) {
    create9Window()
} else {
  create1Window()
}
}
}
/*
{
  "cameras": [
    "URL1",
    "URL2",
    "URL3"
  ]
}
*/

//Append ?cb=number
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, center: true})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  mainWindow.maximize();
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


let main1Window
function create1Window () {
  // Create the browser window.
  main1Window = new BrowserWindow({width: 800, height: 600, center: true })

  // and load the index.html of the app.
  main1Window.loadFile('index1.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  main1Window.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    main1Window = null
  })
}


let main9Window
function create9Window () {
  // Create the browser window.
  main9Window = new BrowserWindow({width: 800, height: 600, center: true })

  // and load the index.html of the app.
  main9Window.loadFile('9cams.html')
  main9Window.maximize();
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  main9Window.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    main9Window = null
  })
}


let configWindow
function createConfigWindow () {

  // Create the browser window.
  configWindow = new BrowserWindow({width:1000, height: 950, center: true })

  // and load the index.html of the app.
  configWindow.loadFile('configure.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  configWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    configWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', createConfigWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //if (process.platform !== 'darwin') {
    //writeConfigFile()
    app.quit()
  //}
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
