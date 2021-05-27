document.getElementById('purchase-game').onclick = function(){
    let clientName = document.getElementById('user-name');
    let email = document.getElementById('e-mail');
    let message = ' thanks for order, activation key has been sent to your email'

    document.Username = clientName;
    
    showMessage(clientName, email, message);
    console.log(clientName);
    console.log(email);
}
function showMessage(clientName,email, message){
    let messageField = document.getElementById('shopping-block');

    let successfulOut = 
    `   <div>
            <div class="username" id="user-name"><strong>${clientName.value}</strong></div>        
            <div class="message">${message}</div>
        </div> 
    `;

    if(!email.value && !clientName.value)
        alert("Please, enter your name and email");
    else if(!clientName.value)
        alert("Please, enter your name");
    else if(!email.value)
        alert("Please, enter your email")
    else
    {
        document.getElementById('pre-purchase-block').style.display="none";  
        messageField.innerHTML += successfulOut;
    }
}