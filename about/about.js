


// TweenMax.to("#info-avatar", 1 / 4, {y:-50, ease:Power2.easeOut});
// TweenMax.to("#info-avatar", 1 / 2, {y:0, ease:Bounce.easeOut, delay:1 / 4});


TweenMax.to("#info-avatar", 1, {scale: 0, ease:Power2.easeOut});
TweenMax.to("#info-avatar", 1, {scale: 1, ease:Bounce.easeOut, delay:1 / 4});


document.querySelectorAll('.skill-bar-experience').forEach((el, index, parent) => {
    let width = el.children.item(1);
    // console.log(width.innerHTML);

    
    TweenMax.from(el.firstElementChild, 2, {
        width: "0%",
        delay: index / 10,
        ease: "slow(0.9, 0.7, false)"
    });

    TweenMax.to(el.firstElementChild, 2, {
        width: width,
        delay: index / 10,
        ease: "slow(0.9, 0.7, false)"
    });

});