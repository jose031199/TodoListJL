import Toastify from 'toastify-js'
export const showMessage = (message,messageType)=>{
    Toastify({
        text : message,
        duration: 3000,
        gravity:'top',
        position:'center',
        stopOnFocus: true,
        backgroundColor:messageType!=='error'?'rgba(71, 215, 31, 0.76)':'rgba(224, 47, 23, 0.76)'
    }).showToast();
}