
function cart(){
    var img = document.getElementsByClassName("main-img");
    var pname = document.getElementsByClassName("pname");
    var price = document.getElementsByClassName("p-price");
    var quantity = document.getElementsByClassName("qty").value;
    var total ;

    // To store the name of product
    for(let i=0;i<=pname.length;i++){
        var naam = pname[i];
        var text = naam.textContent;
        
        localStorage.setItem('name',text);
    }

}