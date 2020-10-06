var mountain0 = {
    name: "kilimanjaro",
    height: 19341
};
var mountain1 = {
    name: "everest",
    height: 29029
};
var mountain2 = {
    name: "denali",
    height: 20310
};
var mountains = [
    mountain0, mountain1, mountain2
];
//mountains.sort(function (a, b) { return a - b });
function findNameOfTallestMountain(mountains) {
    var num = 0;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var tallest = mountains_1[_i];
        if (tallest.height > num) {
            num = tallest.height;
        }
    }
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height === num) {
            console.log(mountains[i].name);
            return "the tallest mountain is " + mountains[i].name;
        }
    }
}
var weapon0 = {
    name: "club",
    price: 10
};
var weapon1 = {
    name: "sword",
    price: 30
};
var weapon2 = {
    name: "flail",
    price: 20
};
var products = [
    weapon0, weapon1, weapon2
];
function calcAverageProductPrice(products) {
    var sum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var num = products_1[_i];
        sum = num.price + sum;
    }
    ;
    var avg = sum / products.length;
    console.log(avg);
    return avg;
}
;
var carpart0 = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};
var carpart1 = {
    product: {
        name: "sensor",
        price: 12.50
    },
    quantity: 4
};
var carpart2 = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};
var inventory = [
    carpart0, carpart1, carpart2
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var num = inventory_1[_i];
        total += (num.product.price * num.quantity);
    }
    console.log(total);
    return total;
}
;
//# sourceMappingURL=app.js.map