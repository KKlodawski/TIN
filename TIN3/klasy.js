class Animal {
    constructor(age, size) {
        this._age = age;
        this._size = size;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }
}

class Dog extends Animal{
    constructor(age, size, breed) {
        super(age, size);
        this._breed = breed;
    }
    get breed() {
        return this._breed;
    }

    set breed(value) {
        this._breed = value;
    }
}

// ================================================
console.log("Classes:");
x = new Animal(1,2);
x2 = new Dog(1,2,"abc");
console.log(`x1 : ${x.age}, ${x.size}`);
console.log(`x2 : ${x2.age}, ${x2.size}, ${x2.breed}`);
x2.breed = 5;
x2.size = 6;
x2.age = "abced";
console.log(`x2 after change : ${x2.age}, ${x2.size}, ${x2.breed}`);