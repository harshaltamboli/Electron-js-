const{ app, BrowserWindow } = require('electron')

function createWindow(){
 const win = new BrowserWindow({

    width:600,
    height:400
    
  })
  win.loadFile('index.html')

}
// app.on('before-quit',(e)=>{
//   console.warn('call before quit app ');
//   e.preventDefault();
// })
// app.on('will-quit',(e)=>{
//   console.warn('before call will ');
//     e.preventDefault();
// })

app.on('browser-window-focus',()=>{
  console.warn("you are on top");
  
 })

app.on('browser-window-blur',()=>{
  console.warn("you are unfocus ");
  
})
//app.whenReady().then(createWindow)

app.on('ready',()=>{
  createWindow();

  console.warn("App is reay ");
console.warn(app.isReady());



})


