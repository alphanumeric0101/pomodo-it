const electron = require('electron');
const app = require('app');
const BrowserWindow = require('browser-window');
const db = require('./model/db')

const express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path');

const expressApp = express();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

function onListening() {
  mainWindow.loadURL('http://127.0.0.1:3000');
  //mainWindow.toggleDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

    expressApp.set('port', process.env.PORT || 3000);

    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded({ extended: true }));
    expressApp.use(express.static(path.join(__dirname, './')));

    expressApp.get('/', function(req, res) {
      res.render('index');
    });

    expressApp.get('/tasks/all', db.readAllTasks);
    expressApp.post('/tasks/createTask', db.createTask);
    expressApp.delete('/tasks/deleteTask/:id', db.deleteTask);
    expressApp.put('/tasks/updateTask/:id', db.updateTask);
    
    server = http.createServer(expressApp);
    server.listen(expressApp.get('port'), function(){console.log("Listenning!")});
    server.on('listening', onListening);
    
  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
