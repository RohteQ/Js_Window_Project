const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector (closeSelector);


        trigger.forEach(item => {
            //item - every trigger
            //when transfer in func some elems with same selector on everyEl addEventlistener
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = 'block';
                document.body.style.overflow = "hidden";
                // OR manipulate  classes in Bootstrap
                // document.body.classList.add('modal-open');
    
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = "";
            // OR manipulate  classes in Bootstrap
            // document.body.classList.remove('modal-open');

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = "";
                //OR  manipulate  classes in Bootstrap
                // document.body.classList.remove('modal-open');

            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;