$(document).ready(function() {


    document.querySelectorAll('header ul li a').forEach((el, key, parent) => {
        el.onclick = function(event) {
            // event.preventDefault();


            resetActivePageIndicator();
            el.classList.toggle('active-page');

            let boxRect = el.getClientRects().item(0);
            // console.log(boxRect);

            $('#nav-indicator').css('left', boxRect.left + boxRect.width / 2);
            scrollToSection(el.getAttribute("href"));
        }
    });



    let navHeight = document.querySelector('header').clientHeight;
    document.querySelectorAll('section').forEach((el, key, parent) => {

        if (el.getAttribute("id") == "home") {
            // el.style.paddingBottom = `${navHeight}px`;
            // navHeight += 30;
            return;
        }

        el.style.paddingTop = `${navHeight}px`;
    });

});



function resetActivePageIndicator() {
    $('header ul li a').each(function(index, el) {
        if ($(el).hasClass('active-page')) {
            $(el).removeClass('active-page');
        }
    });
}

function initActivePageIndicator() {
    // document.querySelectorAll('header ul li a')[0].click();
}

function updateActivePageIndicator(e) {
    let activeTag = document.querySelectorAll('header ul li a.active-page')[0];
    let clientRects = activeTag.getClientRects().item(0);

    $('#nav-indicator').css('left', clientRects.left + clientRects.width / 2);
}




function scrollToSection(hash) {
    console.log(hash, $(hash).offset().top);

    // $('main').animate({
    //     scrollTop: $(hash).offset().top
    // },
    // 750, 'swing', () => {
    //     console.log('Finish scroll');
    // });
    
}



function loadPageSections() {
    document.querySelectorAll('section').forEach((el, key, parent) => {
        let id = el.getAttribute("id");
        $(`#${id}`).load(`${id}/${id}.html`);
    });

    console.log('Load sections content completed');
}