

particlesJS.load('particle-js', './home/particle.json', function() {
    console.log('%ccallback - particles.js config loaded', 'color: green');
});



(function() {

    const strings = [
        "Hi, I'm Nguyen Anh Tuan.",
        " ",
        "I'm a sophomore student at Ba Ria - Vung Tau University.",
        "I'm passionate about Mobile, Desktop & Web development.",
    ];

    // Typist.start('.typing', strings, 50);

    new TypeIt(".typing", {
        strings: strings,
        speed: 25,
        loop: false,
      }).go();

})();