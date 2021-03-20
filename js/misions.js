let hide = true;

window.onload = () => {
    initialMenu();
}

const menuHide = () => {

    if (hide) {
        showMenu();
    } else {
        hideMenu();
    }

}

const initialMenu = () => {
    const item = document.getElementById('menu-panel');
        item.animate([{
            transform: 'translatex(0)',
            maxWidth: '260px',
            minWidth: '260px'
        },
        {
            transform: 'translatex(-260px)',
            maxWidth: '0',
            minWidth: '0'
        }
        ], {
            duration: 0,
            // easing: 'ease-in-out',
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        });
        item.classList.remove('hide');
}

const showMenu = () => {
    const item = document.getElementById('menu-panel');
        item.animate([{
                transform: 'translatex(-260px)',
                maxWidth: '0px',
                minWidth: '0px'
            },
            {
                transform: 'translatex(0)',
                maxWidth: '260px',
                minWidth: '260px'
            }
        ], {
            duration: 100,
            // easing: 'ease-in-out',
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        });
        hide = false;
}

const hideMenu = () => {
    hide = true;
        const item = document.getElementById('menu-panel');
        item.animate([{
                transform: 'translatex(0)',
                maxWidth: '260px',
                minWidth: '260px'
            },
            {
                transform: 'translatex(-260px)',
                maxWidth: '0px',
                minWidth: '0px'
            }
        ], {
            duration: 100,
            // easing: 'ease-in-out',
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        });
}