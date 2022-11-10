const API_BASE = 'https://fakestoreapi.com/products';

const product = {
    title: 'iPhone 5',
    price: 100500,
    description: 'Telephone',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)

}


fetch(API_BASE, options)
.then((responce)=>responce.json())
.then((data) => {
    console.log(data);
})