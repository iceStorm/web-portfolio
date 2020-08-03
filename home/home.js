

particlesJS.load('particle-js', './home/particle.json', function() {
    console.log('%ccallback - particles.js config loaded', 'color: green');
});



(function() {

    const strings = [
        "Hi, I'm Nguyen Anh Tuan.",
        "I'm a full stuck developer.",
    ];

    new TypeIt(".typing", {
        strings: strings,
        speed: 25,
        loop: false,
      }).go();

})();



gsap.from("#wave", {duration: 1, opacity: 0, y: 100});
gsap.to("#wave", {duration: 1, y: 0});



// var text = $('.typing');
// var split = new SplitText(text);

// function random(min, max){
// 	return (Math.random() * (max - min)) + min;
// }

// $(split.chars).each(function(i){
// 	TweenMax.from($(this), 1.5, {
// 		opacity: 0,
// 		x: random(-500, 500),
// 		y: random(-500, 500),
// 		z: random(-500, 500),
// 		scale: .1,
// 		delay: i * .02,
// 		yoyo: true,
// 		repeat: -1,
// 		repeatDelay: 10
// 	});
// });