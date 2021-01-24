const [tabsElement] = document.getElementsByClassName('tabs__items');
const [foodElement] = document.getElementsByClassName('food');
const [basketElement] = document.getElementsByClassName('basket');
const [orderButtonElement] = document.getElementsByClassName('order-button');

const basket = new Map();

const FOOD_TYPE = {
    BASE: 'Base',
    MEAT: 'Meat',
    VEGETABLE: 'Vegetable',
    CHEESE: 'Cheese',
    SAUCES: 'Sauce',
    SPICE: 'Spice',
};

class FOOD {
    static #id = 1;

    constructor(
        name,
        price,
        calories,
        type,
    ) {
        this.id = FOOD.#id;
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.type = type;
        FOOD.#id++;
    }
}

const FOOD_LIST = [
    new FOOD('Thin', 10, 15, FOOD_TYPE.BASE),
    new FOOD('Thick', 75, 20, FOOD_TYPE.BASE),
    new FOOD('Calzone', 34, 64, FOOD_TYPE.BASE),
    new FOOD('Flaky', 97, 89, FOOD_TYPE.BASE),
    new FOOD('Salami', 67, 23, FOOD_TYPE.MEAT),
    new FOOD('Bacon', 54, 14, FOOD_TYPE.MEAT),
    new FOOD('Chicken', 54, 62, FOOD_TYPE.MEAT),
    new FOOD('Tomato', 24, 67, FOOD_TYPE.VEGETABLE),
    new FOOD('Olives', 2.4, 90, FOOD_TYPE.VEGETABLE),
    new FOOD('Onion', 8.2, 23, FOOD_TYPE.VEGETABLE),
    new FOOD('Pepper', 6.4, 73, FOOD_TYPE.VEGETABLE),
    new FOOD('Mozzarella', 0.69, 5, FOOD_TYPE.CHEESE),
    new FOOD('Parmesan', 0.5, 7, FOOD_TYPE.CHEESE),
    new FOOD('Barbecue Sauce', 4.3, 56, FOOD_TYPE.SAUCES),
    new FOOD('Tomato sauce', 0.54, 20, FOOD_TYPE.SAUCES),
    new FOOD('Creamy garlic sauce', 9.4, 49, FOOD_TYPE.SAUCES),
    new FOOD('Basil', 3.2, 40, FOOD_TYPE.SPICE),
    new FOOD('Black Pepper', 6.3, 34, FOOD_TYPE.SPICE),
];

function renderTypeFood(types, element) {
    element.innerHTML = types.map(t => `<div class="food__item" data-type=${t}>${t}</div>`).join('');
}

function renderFoodByType(type, foods, element) {
    element.innerHTML = foods
        .filter(f => f.type === type)
        .map(f => `
            <div class="tabs__block">
                <div class="item__tab">
                    <h3 class="tab__title">${f.name}</h3>
                    <p>Price: <span class="tab__price">${f.price}</span>$</p>
                    <p>Calories: <span class="tab__calories">${f.calories}</span>kcal</p>
                    <button class="add__basket" data-id="${f.id}">Add to basket</button>
                </div>
            </div>
        `)
        .join('');
}

function renderBasket(basket, foods, element) {
    const basketListContent = [...basket.entries()]
        .map(([id, count]) => `<div>${foods.find(f => Number(f.id) === Number(id)).name} : ${count}</div>`);

    const [price, calories] = [...basket.entries()].reduce((prev, [id, amount]) => {
        const f = foods.find(f => Number(f.id) === Number(id));

        return [prev[0] + f.price * amount, prev[1] + f.calories * amount];
        
    }, [0, 0]);

    const totalContent = `<div> <br> Price: ${price}$ <br> Calories: ${calories}kcal</div>`;

    element.innerHTML = [...basketListContent, totalContent].join('');
}

function addToTheBasket(id, basket) {
    if (basket.has(id)) {
        basket.set(id, basket.get(id) + 1);
    } else {
        basket.set(id, 1);
    }
}

function orderRequest(orders) {
    const body = JSON.stringify(orders);

    console.log(body);
    // fetch('https://some-url.com', {
    //     method: 'POST',
    //     body,
    // })
    //     .then(result => result.json());
}

tabsElement.addEventListener('click', ({ target }) => {
    if (target.dataset.type) {
        renderFoodByType(target.dataset.type, FOOD_LIST, foodElement);
    }
});

foodElement.addEventListener('click', ({ target }) => {
    if (target.dataset.id) {
        addToTheBasket(target.dataset.id, basket);
        renderBasket(basket, FOOD_LIST, basketElement);
    }
});

orderButtonElement.addEventListener('click', () => {
    orderRequest(Object.fromEntries(basket.entries()));
});

renderTypeFood(Object.values(FOOD_TYPE), tabsElement);
renderFoodByType(FOOD_TYPE.BASE, FOOD_LIST, foodElement);