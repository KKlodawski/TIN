class exampleClass {
    constructor(exampleVar1, exampleVar2) {
        this._exampleVar1 = exampleVar1;
        this._exampleVar2 = exampleVar2;
    }
    get exampleVar1() {
        return this._exampleVar1;
    }

    set exampleVar1(value) {
        this._exampleVar1 = value;
    }

    get exampleVar2() {
        return this._exampleVar2;
    }

    set exampleVar2(value) {
        this._exampleVar2 = value;
    }
}

class exampleClass2 extends exampleClass{
    constructor(exampleVar1, exampleVar2, exampleVar3) {
        super(exampleVar1, exampleVar2);
        this._exampleVar3 = exampleVar3;
    }
    get exampleVar3() {
        return this._exampleVar3;
    }

    set exampleVar3(value) {
        this._exampleVar3 = value;
    }
}

// ================================================
console.log("Classes:");
x = new exampleClass(1,2);
x2 = new exampleClass2(1,2,3);
console.log(`${x.exampleVar1}, ${x.exampleVar2}`);
console.log(`${x2.exampleVar1}, ${x2.exampleVar2}, ${x2.exampleVar3}`);
x2.exampleVar3 = 5;
x2.exampleVar2 = 6;
x2.exampleVar1 = 7;
console.log(`${x2.exampleVar1}, ${x2.exampleVar2}, ${x2.exampleVar3}`);