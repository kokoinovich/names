function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    let names = ['Андрей', 'Коля', 'Миша', 'Олег', 'Света', 'Гриша', 'Ваня']
    let todos = ['есть ложку карицы', 'пить 100мг водки', 'кричать 10 секунд на улице', 'делать 10 приседаний']
    // Вывод в консоль ответа
    function generate() {
    console.log(`${names[getRandomNumber(0, names.length)]} будет ${todos[getRandomNumber(0, todos.length)]}`)
    }