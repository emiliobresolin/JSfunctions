function func () 
{
    console.log(arguments[0]);
}
func('value', 0, 'abrey', 500.55);
//
function som()
{
    let total = 0;
    for (let argument of arguments)
    {
        total += argument;
    }
    console.log(total);
}
som(1,2,3,4,5,6,7,8,9,1,1,1,1,1,2,2,2,);
//
function ex1(a,b,c,d,e,f)
{
    console.log(a,b,c,d,e,f);
}
ex1(1,2,3);
//
function ex2(a,b,c=15)
{
    b = b || 0;
    console.log(a+b+c);
}
ex2(2);
//
function ex10 ({name, surname, age})
{
    console.log(name, surname, age);
}
ex10({name:'Emilio', surname:'Bresolin',age: 32});
//

//acumulador de resto
function conta(opertador,acumulador,...numeros)
{
    for(let numero of numeros)
    {
        if(opertador==='+') acumulador+=numero;
        if(opertador==='-')acumulador -= numero;
        if(opertador==='*')acumulador *= numero;
        if(opertador==='/')acumulador /= numero;
    }
    console.log(acumulador);
}
conta('*', 2,20,30,40,50);
conta('/', 2,20,30,40,50);
//
console.log('multiplicador------->');
function criaMulti (multiplicador)
{
    return function(n)
    {
        return n * multiplicador;
    };
}
const duplica = criaMulti(2);
const triplica = criaMulti(3);
const quadriplica = criaMulti(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
