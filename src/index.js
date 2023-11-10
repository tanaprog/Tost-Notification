// const button1 = document.getElementById('btn1');
// const button2 = document.getElementById('btn2');
// const button3 = document.getElementById('btn3');
let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-circle-check"></i> Succeessfully submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

// button1.addEventListener('click', showToast(successMsg));
// button2.addEventListener('click', showToast(errorMsg));
// button3.addEventListener('click', showToast(invalidMsg));

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000)
}