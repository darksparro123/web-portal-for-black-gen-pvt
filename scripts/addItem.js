const addItem = document.querySelector("#listing-items");
addItem.addEventListener("submit", e => {
    e.preventDefault();

    const itemName = addItem["item-name"].value;
    const itemPrice = addItem["item-price"].value;
    const itemManufacturer = addItem["item-manufacture"].value;
    const description = addItem["item-description"].value;
    const inStockAmount = addItem["in-stock-amount"].value;

    db.collection("shops").doc(auth.currentUser.email).collection("Listed Items").add({
        "item Name": itemName,
        "itemPrice": itemPrice,
        "item manufacture": itemManufacturer,
        "description": description,
        "in stock amount": inStockAmount
    }).then(() => {
        console.log("added succusfully");
        addItem.reset();
    });

});