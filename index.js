$(document).ready(function() {


    document.querySelectorAll('header ul li a').forEach((el, key, parent) => {
        el.onclick = function(event) {
            event.preventDefault();


            resetActivePageIndicator();
            el.classList.toggle('active-page');

            let boxRect = el.getClientRects().item(0);
            // console.log(boxRect);

            $('#nav-indicator').css('left', boxRect.left + boxRect.width / 2);
            loadPage(el.getAttribute("href"));
        }
    });



    let navHeight = document.querySelector('header').clientHeight;
    console.log(navHeight);
    $('#middle').css('paddingTop', navHeight);
});



function resetActivePageIndicator() {
    $('header ul li a').each(function(index, el) {
        if ($(el).hasClass('active-page')) {
            $(el).removeClass('active-page');
        }
    });
}

function initActivePageIndicator() {
    document.querySelectorAll('header ul li a')[0].click();
}

function updateActivePageIndicator(e) {
    let activeTag = document.querySelectorAll('header ul li a.active-page')[0];
    let clientRects = activeTag.getClientRects().item(0);

    window.history.replaceState("", "", activeTag.getAttribute('href'));

    $('#nav-indicator').css('left', clientRects.left + clientRects.width / 2);
}




function loadPage(hash) {
    console.log(hash);
    let path = `${hash.split('#')[1]}/${hash.split('#')[1]}.html`;

    $('main').toggleClass('animated');
    setTimeout(() => {
            
        $('main').load(path, () => {
            $('main').toggleClass('animated');
        });
        
    }, 750);

}
