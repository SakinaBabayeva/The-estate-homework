const products=document.getElementById('products');
const pages=document.getElementById('page');

let page=1;
let limit=3;
let db;






async function getProducts(){
let skip=(page-1)*limit;
const response= await axios.get (`https://65680f8f9927836bd97407de.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
const data=response.data;
db=data;
db.map(item=>{
 const box=document.createElement ('div');
box.className='boxDiv col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 ';
box.innerHTML=`
<p>${item.title}</p>
<img src='${item.image}'  alt=''>
<button onclick ='addToBasket(${item.id})'>Add to basket</button>


`;

 products.appendChild(box);
 
});
page++;
}

pages.addEventListener('click',getProducts)
function addToBasket(id){
let cart=JSON.parse (localStorage.getItem('cart')) || []
cart.push (db.find(item => item.id==id))
localStorage.setItem('cart',JSON.stringify(cart))
}

const inp=document.getElementById("inp");
const search=document.getElementById("search");
const searchDiv=document.getElementById("searchDiv");
function getSearch() {
    products.style.display="none"
    pages.style.display="none"
    searchDiv.style.display="block"
    axios.get('https://65680f8f9927836bd97407de.mockapi.io/products')
    .then(res=>{
        db=res.data
       
        let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        console.log(filteredData);
        filteredData.map(item => {
                const box = document.createElement('div')
                box.className = 'myBox col-xl-12 col-lg-12 col-md- 12 col-sm-12 col-12'
                box.innerHTML = `
           <div class="myBoxdiv">
           <img src="${item.image}" alt="">
          
           <p>${item.title}</p>
           </div>

            `;
                searchDiv.appendChild(box);
            });
        });
};
 search.addEventListener('click', getSearch)

   


const formGroupExampleInput = document.getElementById("formGroupExampleInput")
const formGroupExampleInput1 = document.getElementById("formGroupExampleInput1")
const formGroupExampleInput2 = document.getElementById("formGroupExampleInput2")
const formGroupExampleInput3 = document.getElementById("formGroupExampleInput3")
const formreg = document.getElementById("formreg")

function axiosPost(e) {
    e.preventDefault();
    axios.post("https://65680f8f9927836bd97407de.mockapi.io/products", {
        name: formGroupExampleInput.value,
        title: formGroupExampleInput1.value,
        price: formGroupExampleInput2.value,
        description: formGroupExampleInput3.value,

    }).then(res => {
        console.log(res.data);
        formreg.reset()
    })
}



formreg.addEventListener('submit', axiosPost);