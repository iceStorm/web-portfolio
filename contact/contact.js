

function submitForm() {
    alert(5);
    return false;
}



(function() {

    // const strings = [
    //     "I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either."
    // ];

    // new TypeIt("span", {
    //     // strings: strings,
    //     speed: 20,
    //     loop: false,
    //   }).go();

})();




// TweenMax.from('#normal', {
//     scale: 0,
//     duration: 0.5
// });
// TweenMax.to('#normal', {
//     scale: 1,
//     duration: 1.25,
//     ease: "expo.inOut"
// });

// TweenMax.from('#map', {
//     scale: 0,
//     duration: 0.5
// });
// TweenMax.to('#map', {
//     scale: 1,
//     duration: 1
// });



TweenMax.from('#txtName', {
    y: 100,
    opacity: 0,
    delay: 0.1
});
TweenMax.to('#txtName', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.1,
    ease: "slow(0.7, 0.7, false)"
});



TweenMax.from('#txtEmail', {
    y: 100,
    opacity: 0,
    delay: 0.3
});
TweenMax.to('#txtEmail', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.3,
    ease: "slow(0.7, 0.7, false)"
});



TweenMax.from('#txtSubject', {
    y: 100,
    opacity: 0,
    delay: 0.5
});
TweenMax.to('#txtSubject', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.5,
    ease: "slow(0.7, 0.7, false)"
});



TweenMax.from('#txtMessage', {
    y: 100,
    opacity: 0,
    delay: 0.7
});
TweenMax.to('#txtMessage', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.7,
    ease: "slow(0.7, 0.7, false)"
});



TweenMax.from('#btn-send', {
    y: 100,
    opacity: 0,
    delay: 0.9
});
TweenMax.to('#btn-send', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.9,
    ease: "slow(0.7, 0.7, false)"
});



TweenMax.from('#btn-open-map', {
    y: 100,
    opacity: 0,
    delay: 0.9
});
TweenMax.to('#btn-open-map', {
    y: 0,
    opacity: 1,
    duration: 0.75,
    delay: 0.9,
    ease: "slow(0.7, 0.7, false)"
});
