
async function getValue() {

    try {
        const promiseResult = await fetch('https://dummyjson.com/docs/products');
        const data = await promiseResult.json();
        } catch (error) {
            console.log(error);
        }
}

