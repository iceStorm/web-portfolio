

counter = 0.0;
getScrewShape().forEach((value, index) => {
    let delay = counter + 0.2;
    let el = value.element;

    let thumb = el.childNodes.item(1);
    thumb.style.background = `url(${thumb.getAttribute("data-img")})`;
    el.childNodes.item(3).setAttribute("target", "_blank");


    TweenMax.from(el, {
        duration: 1,
        delay: delay,
        scale: 0.0
    });

    TweenMax.to(el, {
        duration: 1,
        delay: delay,
        scale: 1,
        ease: "power2.out"
    });


    counter += 0.13;
    // console.log(el.childNodes.item(3));
});



function getScrewShape() {
    let arr = new Array(3);
    for (let i = 0; i < arr.length; i++) arr[i] = new Array(4);


    document.querySelectorAll('#projects > .cell').forEach((el, index, parent) => {
        arr[Math.floor(index / 4)][index % 4] = {element: el, index: index};
    });



    let totalElems = 12;
    let screwedArr = [];

    let top = 0;
    let right = 3;
    let bottom = 2;
    let left = 0;



    while (screwedArr.length < totalElems) {
        for (let i = left; i <= right && screwedArr.length < totalElems; i++) {
            screwedArr.push(arr[top][i]);
        }
        ++top;
    

        for (let i = top; i <= bottom && screwedArr.length < totalElems; i++) {
            screwedArr.push(arr[i][right]);
        }
        --right;


        for (let i = right; i >= left && screwedArr.length < totalElems; i--) {
            screwedArr.push(arr[bottom][i]);
        }
        --bottom;


        for (let i = bottom; i >= top && screwedArr.length < totalElems; i--) {
            screwedArr.push(arr[i][left]);
        }
        ++left;
    }


    return screwedArr;
}
