# AI REPORT
## Task_1: Function Analysis
### Student Name: Ruslan Kochetov

const deepClone = (obj){
    if (obj === undefined){
    throw new Error("Входные данные не предоставлены")
}


if (obj === null || typeof obj !== 'object'){
    return obj;
}

if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

const result = Array.isArray(obj) ? [] : {};

for (const key in obj){
    if (Object.prototype.hasOwnProperty.call(obj, key)){
        result[key] = deepClone(obj[key]);
    }
}
return result
};


# Анализ Утилитарной функции: DeepClone
# Функция `deepClone(obj)` — утилита для создания полной рекурсивной копии объекта или массива.

### Какую проблему она решает?
- Проблему "мутации по ссылке". В JavaScript объекты передаются по ссылке, поэтому изменение копии часто портит оригинал. Поверхностное копирование (`Object.assign`) не защищает вложенные объекты.

## В каких контекстах она используется? 
- При работе с иммутабельными (неизменяемыми) данными, в Redux-подобных хранилищах состояния и при глубоком сравнении объектов.

## Как она решает проблему?
- Она создает новый пустой контейнер и рекурсивно копирует каждое значение. Если значение само является объектом, функция вызывает себя снова, пока не дойдет до примитивов.
