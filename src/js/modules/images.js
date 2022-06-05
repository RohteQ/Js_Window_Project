const images = () => {
    
    const body = document.querySelector('body');
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');
    imgPopup.classList.add('popupImg');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    


    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.width = '500px';
            bigImg.style.height = '500px';
            document.body.classList.add('popupImg-Open');
        }

        if (target && target.matches('div.popupImg')) {
            
            imgPopup.style.display = 'none';
            document.body.classList.remove('popupImg-Open');
        }
    });
};

export default images;