//console.log("Hola! *mensaje visible desde la consola*");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<em>Desarrolladora en Software Multiplataforma  | Desarrolladora en Front-end y Back-end Jr.</em>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<em>¡Si lo puedes imaginar, lo puedes crear!</em>')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<em>programar!</em>')
    .pauseFor(2500)
    .start();