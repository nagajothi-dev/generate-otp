var btn = document.querySelector('.btn')
var otp = document.querySelector('.OTP')


btn.addEventListener('click',function(event){
    var randomotp = Math.floor(1000 + Math.random() * 9000)
    console.log(randomotp)
    
    otp.textContent = randomotp

})