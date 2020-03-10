const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2) =>{
    console.log('Sum value num ',(num1+num2));
});

eventEmitter.emit('tutorial',1,2);
 
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;

    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('PedroCode');
let christina = new Person('Christina');

christina.on('name', ()=> {
    console.log('my name is '+ christina.name);
});

pedro.on('name', () => {
    console.log('my name is '+ pedro.name);
});

pedro.emit('name');
christina.emit('name');