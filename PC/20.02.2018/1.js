let Pobj= require("./o3.js").o3;


function fun(Obj) {
    let newPobj = Reflect.getPrototypeOf(Obj);     //вот тут берем первый прототип
            let array = [];                                               //вот тут создаем пустой массив
    
            while (newPobj != null) {                              
                array.push(newPobj.name);                          
                newPobj = Reflect.getPrototypeOf(newPobj);    //взять прототип прототипа и снова проверить на null
            }
        
            return array; 
}

console.log(fun(Pobj));
