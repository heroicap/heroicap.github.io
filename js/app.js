//Deteccion de uso de SW
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}