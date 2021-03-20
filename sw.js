// Ciclo de vida del SW

self.addEventListener('install', event => {

    // Descargar assets 
    // Creamos un cache
    console.log('SW: Instalando SW');

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);

    });
    event.waitUntil(instalacion);


});


// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW2: Activo y listo para controlar la app');


});


// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // Aplicar estrategias del cache


    if (event.request.url.includes('/api/')) {
        const errorResp = new Response(`{
            ok: false,
            msg: 'Usuario o contraseña incorrecto, favor reintentar'
        }`,{
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('SW:', event.request.url);
        const resp = fetch(event.request)
            .catch(() => {
                
            });
            event.responseWith(resp);
    }
    

});

// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);

});


// PUSH: Manejar las push notifications
self.addEventListener('push', event => {

    console.log('Notificacion recibida');


});