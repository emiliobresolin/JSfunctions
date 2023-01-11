function Person(name, email){
    const id = 1001;
    this.name = name;
    this.email = email;
    this.methodo = function(){
        console.log('test1');
    };
}

const p1 = new Person('Emilio', 'emilio@mail.com');

console.log(p1.email);

p1.methodo();
