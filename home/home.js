$(document).ready(function() {


    document.querySelectorAll('header ul li a').forEach((el, i) => {
        el.onclick = function(event) {
            event.preventDefault();

            resetActivePage();
            el.classList.toggle('active-page');

            let boxRect = el.getClientRects().item(0);
            console.log(boxRect);

            $('#nav-indicator').css('left', boxRect.left + boxRect.width / 2);
            loadPage(el.getAttribute("href"));
        }
    });


});



function resetActivePage() {
    $('header ul li a').each(function(index, el) {
        if ($(el).hasClass('active-page')) {
            $(el).removeClass('active-page');
        }
    });
}

function initActivePageIndicator() {
    document.querySelectorAll('header ul li a')[0].click();
}



function loadPage(url) {
    if (location.href == url) return;


    // window.history.replaceState(url, '', url);

    
    $('#middle').load(`${url}/${url}.html`, function(responseTxt, statusTxt, xhr){
        
    });
}



function updateActivePageIndicator(e) {
    let activeTag = document.querySelectorAll('header ul li a.active-page')[0];
    let clientRects = activeTag.getClientRects().item(0);

    $('#nav-indicator').css('left', clientRects.left + clientRects.width / 2);
}