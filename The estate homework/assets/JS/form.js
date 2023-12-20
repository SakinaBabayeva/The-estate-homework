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