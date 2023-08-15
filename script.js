document
  .getElementById("handlebtnSumit")
  .addEventListener("click", function () {
    const email = document.getElementById("emailinput").value;
    const password = document.getElementById("passwordinput").value;
    console.log(email,password)
    if (email !== '' && password !== '') {
        window.location.href='bank.html'
    }
    else{
        alert('Please Enter the correct Password')
    }
  });


