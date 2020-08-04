

particlesJS.load('particle-js', './home/particle.json', function() {
    console.log('%ccallback - particles.js config loaded', 'color: green');
});



(function() {

    const strings = [
        "Hi !",
        "",
        "I'm Nguyen Anh Tuan.",
        "I'm a full-sides developer.",
    ];

    // new TypeIt(".typing", {
    //     strings: strings,
    //     speed: 25,
    //     loop: false,
    //   }).go();


    (function() {
        elementId = document.getElementById("typing");

        let speed = 50;
        let cCounter = 0;
        let mStrings = Array.from(strings).join('\n');
        console.log(mStrings);


        setTimeout(function type() {
            if (cCounter < mStrings.length) {
                let currChar = mStrings[cCounter++];
                let nextChar = currChar;
                let currSpeed = speed;

                switch (currChar) {
                    case ' ': {
                        nextChar = '&nbsp;';
                        break;
                    }
                    case '\n': {
                        nextChar = '<br>';
                        currSpeed += 150;
                        break;
                    }
                }

                $(elementId).append(nextChar);
                setTimeout(type, currSpeed);
            }
        }, 350);
    })();

})();



gsap.from("#wave", {duration: 1, opacity: 0, y: 100});
gsap.to("#wave", {duration: 1, y: 0});


