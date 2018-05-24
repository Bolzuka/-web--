//  Пусть класс Doubler определяет объекты, у которых есть внутреннее свойство n, доступное
// через геттер result, а также метод double, вызов которого без всяких аргументов удваивает
// значение этого свойства n. Что должен возвращать метод double чтобы реализовать
// паттерн «цепочка методов» ("method chain")? Напишите этот класс и пример вызова.

const Doubler = class {
    constructor(n = 3) {
        this.n = n; //
    }
    double() { 
        this.n *= 2; //
        return this; //
        
    }
    get result() { 
        return this.n; //
        
    }
};

const el = new Doubler();
console.log(
  el
  .double()
  .double()
  .result
); //12