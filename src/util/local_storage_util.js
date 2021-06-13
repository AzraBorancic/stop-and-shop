module.exports.manageCart = (item, keyword = "add") => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let itemIndex = cart.findIndex(x => x.name === item.name);

    if (itemIndex !== -1) {
        if (keyword === "add") {
            cart[itemIndex].quantity += item.quantity;
        } else {
            cart.splice(itemIndex, 1);
        }
    } else {
        cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

module.exports.manageQuantity = (item, keyword = "increase") => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let itemIndex = cart.findIndex(x => x.name === item.name);

    if (itemIndex !== -1) {
        if (keyword === "increase") {
            cart[itemIndex].quantity += 1;
        } else {
            if (cart[itemIndex] === 1) {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].quantity -= 1;
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}