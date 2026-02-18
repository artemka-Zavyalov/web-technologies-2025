class Pizza {

    static PIZZA_TYPES = {
        "Маргарита": { price: 500, calories: 300 },
        "Пепперони": { price: 800, calories: 400 },
        "Баварская": { price: 700, calories: 450 },
    };

    static SIZE_TYPES = {
        "Большая": {
            price: 200,
            calories: 200,
            key: "large"
        },
        "Маленькая": {
            price: 100,
            calories: 100,
            key: "small"
        },
    };

    static TOPPINGS = {
        "сливочная моцарелла": {
            price: {
                small: 50,
                large: 50
            },
            calories: 20
        },

        "сырный борт": {
            price: {
                small: 150,
                large: 300
            },
            calories: 50
        },

        "чедер и пармезан": {
            price: {
                small: 150,
                large: 300
            },
            calories: 50
        }
    };


    constructor(type, size) {

        if (!Pizza.PIZZA_TYPES[type])
            throw new Error("Неизвестный тип пиццы");

        if (!Pizza.SIZE_TYPES[size])
            throw new Error("Неизвестный размер");

        this.type = type;
        this.size = size;
        this.toppings = [];
    }


    addTopping(topping) {

        if (!Pizza.TOPPINGS[topping])
            throw new Error("Неизвестная добавка");

        if (!this.toppings.includes(topping))
            this.toppings.push(topping);
    }


    removeTopping(topping) {

        this.toppings = this.toppings.filter(t => t !== topping);
    }


    getPrice() {

        const basePrice =
            Pizza.PIZZA_TYPES[this.type].price +
            Pizza.SIZE_TYPES[this.size].price;

        const sizeKey = Pizza.SIZE_TYPES[this.size].key;

        const toppingsPrice = this.toppings.reduce((sum, topping) => {

            const toppingData = Pizza.TOPPINGS[topping];

            return sum + toppingData.price[sizeKey];

        }, 0);

        return basePrice + toppingsPrice;
    }


    getCalories() {

        const baseCalories =
            Pizza.PIZZA_TYPES[this.type].calories +
            Pizza.SIZE_TYPES[this.size].calories;

        const toppingsCalories = this.toppings.reduce(

            (sum, topping) =>
                sum + Pizza.TOPPINGS[topping].calories,

            0
        );

        return baseCalories + toppingsCalories;
    }

}



document.getElementById('pizzaType').addEventListener('change', () => {

    document
        .getElementById('sizeDiv')
        .classList
        .remove('hidden');

});



document.getElementById('size').addEventListener('change', () => {

    document
        .getElementById('toppingsDiv')
        .classList
        .remove('hidden');

    document
        .getElementById('calculateBtn')
        .classList
        .remove('hidden');

});



document.getElementById('calculateBtn').addEventListener('click', () => {

    const pizzaType =
        document.getElementById('pizzaType').value;

    const size =
        document.getElementById('size').value;


    if (!pizzaType || !size) {

        alert("Выберите пиццу и размер");

        return;
    }


    const pizza = new Pizza(pizzaType, size);


    document
        .querySelectorAll('#toppingsDiv input[type=checkbox]')
        .forEach(checkbox => {

            if (checkbox.checked)
                pizza.addTopping(checkbox.value);

        });


    const price = pizza.getPrice();

    const calories = pizza.getCalories();


    document.getElementById('result').innerText =
        `Цена: ${price} рублей\nКалорийность: ${calories} Ккал`;

});
