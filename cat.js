class Cat {
    constructor(name, owner, age, breed, food, sex) {
        this.name = name;
        this.owner = owner;
        this.age = age;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

function addObject() {
    const name = document.querySelector('.name').value;
    console.log(name);
    const owner = document.querySelector('.owner').value;
    console.log(owner);
    const age = document.querySelector('.age').value;
    console.log(age);
    const breed = document.querySelector('.changeBreed').value;
    console.log(breed);

    let food;
    const dryFood = document.querySelector('.dry').checked;
    if (dryFood == true) {
        food = 'сухой корм';
    };

    const wetFood = document.querySelector('.wet').checked;
    if (wetFood == true) {
        if (food != null) {
            food = `${food} + влажный корм`;
        }
    };

    const naturalFood = document.querySelector('.natural').checked;
    if (naturalFood == true) {
        if (food != null) {
            food = `${food} + натуральный корм`;
            console.log('влажный корм');
        }
    };

    console.log(food);

    let sex;
    const male = document.querySelector('.male').checked;
    if (male == true) {
        sex = 'самец';
        console.log(sex);
    };

    const female = document.querySelector('.female').checked;
    if (female == true) {
        sex = 'самка';
        console.log('самка');
    };

    let cat = new Cat(name, owner, age, breed, food, sex);
    console.log(cat);
}

document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());