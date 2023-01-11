function createPerson(name, surname, h, w)
{
    return {
        name, surname,
        fala(speech)
        {
            return `${this.name} is ${speech}.`;
        },
        hight: h,
        weight: w,
        imc()
        { 
            const indice = this.weight / (this.hight**2);
            return indice.toFixed(2);
        }
    };
}
const p1=createPerson('Emilio', 'Bresolin', 1.8, 75);
console.log(p1.fala());
console.log(p1.imc());