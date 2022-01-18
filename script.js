const KEY_CODE_REMOVE = 32;

document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelectorAll('[data-role="button"]')[0];
    
    function clickHandler() {
        if (!content.classList.contains('content--clicked')) {
            content.classList.add('content--clicked');
        };
    };

    function keyDownHandler(event) {
        if (event.keyCode === KEY_CODE_REMOVE) {
            content.remove();
        };
    };

    content.addEventListener('click', clickHandler);

    document.addEventListener('keydown', keyDownHandler);
});
