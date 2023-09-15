

function postData(){
    axios
    .post('https://crudcrud.com/api/813a845e51dd4af29877b2d83eff1829/booking',{
        email:document.getElementById("email").value,
        name:document.getElementById("name").value,
        phn:document.getElementById("phn").value

    })
    .then(res=> console.log(res))
    .catch(err=> console.error(err));

}
document.getElementById("my-form").addEventListener("submit", function(event){
    event.preventDefault();
    postData();
})

// document.getElementById("my-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting normally
//     postData();
// });