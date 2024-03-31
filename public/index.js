const DBR = require('../Sever.js');

      
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
}
)
document.getElementById('submitButton').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('myForm'));
    const formDataObject = Object.fromEntries(formData.entries());
    //readOne('ChatAPP', 'particapants', {firstName:"jimmy"}, true)
    console.log(formDataObject);
})
