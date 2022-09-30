const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const root = document.querySelector("#root")

let products = [
    { id: uid(), name: "peach", price: 12 },
    { id: uid(), name: "banana", price: 10 },
    { id: uid(), name: "apple", price: 5 },
]

const shop = {
    products,
    showProducts: function () {
        return this.products;
    },
    showProducts: function (arr) {
        let html = ''

        arr.forEach(item => {
            html += `
                <div class="itemProduct">
                    <h2>${item.name}</h2>
                    <h3>${item.price}</h3>
                    <button onclick="delEl('${item.id}')">Delete Item</button>
                </div>
            `
        });

        root.innerHTML = html
    },
    removeElById: function (id) {
        console.log(id)
        products = products.filter(item => item.id !== id)
        this.showProducts(products)
    }
}

shop.showProducts(products)

function delEl(id) {
    shop.removeElById(id)
}

function handleGetProduct(evt) {
    evt.preventDefault()

    const name = evt.target.elements.name.value
    const price = evt.target.elements.price.value

    products.push({ id: uid(), name, price })

    shop.showProducts(products)

    evt.target.reset();
}

/*
1. Create cart of user products.
2. Sum total price of all products of user cart (reduce).
3. Create sort and filter of products in the store.
*/