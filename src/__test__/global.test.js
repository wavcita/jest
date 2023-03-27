const { rejects } = require("assert");
const { resolve } = require("path");

const text="hola mundo";

const fruits = ['pera', 'manzana', 'banana']

test('Debe contener un texto', () => {
    expect(text).toMatch(/mundo/);
});

test('tenemos banana?', ()=>{
    expect(fruits).toContain('pera');
});

test('mayor que', ()=>{
    expect(10).toBeGreaterThan(9);
});

test('verdadero',()=>{
    expect(true).toBeTruthy();
});

const reverseString = (str, callback)=>{
    callback(str.split("").reverse().join(""))
};

test('probar callback',() =>{
    reverseString('hola',(str)=>{
        expect(str).toBe('aloh');
    });
});

const reverseString2 = str => {
    return new Promise((resolve,reject) =>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test('probar promesa',() => {
    return reverseString2('hola')
    .then(string =>{
        expect(string).toBe('aloh');
    });
});