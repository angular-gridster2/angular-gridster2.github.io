let passActive = false;

export function togglePwdUtil(ele) {



    passActive = !passActive;


    const PWD = document.querySelectorAll(ele);

    PWD.forEach((item) => {
        if (passActive == true) {
            item.setAttribute('type', 'text');
        } else {
            item.setAttribute('type', 'password');
        }
    });
}