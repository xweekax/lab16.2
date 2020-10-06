interface Mountain {
    name: String;
    height: Number;
}

let mountain0: Mountain = {
    name: "kilimanjaro",
    height: 19341
}
let mountain1: Mountain = {
    name: "everest",
    height: 29029
}
let mountain2: Mountain = {
    name: "denali",
    height: 20310
}

let mountains: Mountain[] = [
    mountain0, mountain1, mountain2
];
//mountains.sort(function (a, b) { return a - b });

function findNameOfTallestMountain(mountains) {
    let num = 0;

    for (let tallest of mountains) {
        if (tallest.height > num) {
            num = tallest.height;
        }
    }
    for (let i = 0; i < mountains.length; i++) {
        if (mountains[i].height === num) {
            console.log(mountains[i].name);
            return "the tallest mountain is " + mountains[i].name;
        }
    }
}

//******This is where product begins*******//

interface Product {
    name: string;
    price: number;
}


let weapon0: Product = {
    name: "club",
    price: 10
};

let weapon1: Product = {
    name: "sword",
    price: 30
};

let weapon2: Product = {
    name: "flail",
    price: 20
};

let products: Product[] = [
    weapon0, weapon1, weapon2
];

function calcAverageProductPrice(products) {
    let sum=0
    for (let num of products) {
        sum = num.price + sum
    };
    let avg = sum / products.length
    console.log(avg);
    return avg
};

//*******Begin Inventory********//

interface InventoryItem /*extends Product*/ {
    product: Product;
    quantity: number;
}

let carpart0: InventoryItem = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};
let carpart1: InventoryItem = {
    product: {
        name: "sensor",
        price: 12.50
    },
    quantity: 4
};
let carpart2: InventoryItem = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};

let inventory: InventoryItem[] = [
    carpart0, carpart1, carpart2
];

function calcInventoryValue(inventory) {
    let total = 0
    for (let num of inventory) {
        total+=(num.product.price*num.quantity)
    }
    console.log(total);
    return total
};


