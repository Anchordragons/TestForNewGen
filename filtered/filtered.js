import {courses} from "./data.js";
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 200];
let requiredRange3 = [50, null];
function filtered (Courses,Users) {
    const firstNull = (arr) => {
        return (arr[0] === null ? arr[0] = 0 : arr[0])
    } ///Если начальная цена курсов или пользователя равна null меняем значение на 0
    const lastNull = (arr) => {
        return (arr[1] === null ? arr[1] = Infinity : arr[1])
    } ///Если конечная цена курсов или пользователя равна null меняем значение на бесконечность
    return Courses.filter(el =>  (firstNull(el.prices) <= lastNull(Users) && lastNull(el.prices)>=firstNull(Users)));
} /// Фильтруем
console.log('Первому пользователю подойдут:\n',filtered(courses, requiredRange1));
console.log('Второму пользователю подойдут:\n',filtered(courses, requiredRange2));
console.log('Третьему пользователю подойдут:\n',filtered(courses, requiredRange3));