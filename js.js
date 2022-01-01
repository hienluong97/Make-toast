
function toast({
    title = '',
    message = '',
    type = '',
    duration = '' ,
  }) {
     const main = document.getElementById('toast')
     if(main) {
         const toast = document.createElement('toast');

         const icons = {
             success : 'ti-check-box',
             warning : 'ti-help-alt',
             error: 'ti-info-alt' ,                       
         }

         const delay = (duration / 1000).toFixed(2);
         toast.classList.add('toast', `toast--${type}`);  
         toast.style.animation = `slideInleft ease 1s , fadeOut linear 1s ${delay}s forwards`;                 
         toast.innerHTML = 
         `<div class="toast__icon">
        <i class= '${icons[type]}'></i>
         </div>

         <div class="toast__body">
        <h3 class="toast__title"> ${title} </h3>
        <p class="toast__msg"> ${message} </p>
        </div>
        <div class="toast__close">
        <i class='ti-close'></i>    
        </div>` ;

        main.appendChild(toast);
       
     // auto remove Toast
        const removeToast = setTimeout(function() {
        main.removeChild(toast)},
         duration + 1000 )  

     // remove toast when click
       toast.onclick = function(e) {
           if(e.target.closest('.ti-close')) {
               main.removeChild(toast);
               clearTimeout(removeToast);
           }
       }       
    }  
}

function showSuccessToast() {
    toast({
    title:'success',
    message: 'Anyone can view your invited editor',
    type: 'success',
    duration: 5000,   
})

};
function showWarningToast() {
    toast({
    title:'warning',
    message: 'Your account was blocked',
    type: 'warning',
    duration: 5000,
})

};
function showErrorToast() {
    toast({
    title:'error',
    message: 'You can not login this app',
    type: 'error',
    duration: 8000,
})

} ;   


