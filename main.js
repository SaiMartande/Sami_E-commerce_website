var carts = document.querySelectorAll('.add-cart');
var carts2 = document.querySelectorAll('.cart');


for(let i=0; i < carts.length ; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

for(let i=0; i < carts2.length ; i++){
    carts2[i].addEventListener('click', () => {
        cartNumbers();
        // cart();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumber');

    if(productNumbers) {
        document.querySelector('.badge').textContent = productNumbers;
    }
}

function cartNumbers(){
    // console.log("The product selected", product);
    let productNumbers = localStorage.getItem('cartNumber');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.badge').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumber',1);

        document.querySelector('.badge').textContent = 1;
    } 

    var pname = document.getElementsByClassName("pname");
    var price = document.getElementsByClassName("p-price");

    var text ;
    var p2;
    var rateSlice;

    // To store the name of product
    for(let i=0;i<=pname.length;i++){
        var naam = pname[i];
        text = naam.textContent;    
   
        localStorage.setItem('name',text);
        // To store the price of product
        for(let j=0;j<=price.length;j++){
            var p1 = price[j];
            p2 = p1.textContent;
            
            
            rateSlice = p2.slice(3,3);
        }
        localStorage.setItem('price1',rateSlice);
    }
    
    let name2 = localStorage.getItem('name');
    document.getElementsByClassName('i-product').textContent = name2;
    
}

onLoadCartNumbers();

// to save the details of product
function cart(){
    var img = document.getElementsByClassName("main-img");
    
    var quantity = document.getElementsByClassName("qty").value;
    var total ;

}