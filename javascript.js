
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''); 
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", ''); 
    }
}
start();
 

let appData = { 
budget: money, 
expenses: {}, 
optionalExpenses: {}, 
income: [], 
timeData: time, 
savings: true, 
optionalExpenses: {},
chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
            b = prompt("Во сколько обойдется?", '');
            
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 && b[0] != b[1]) {
                console.log("done");
                appData.expenses[a] = b;
            } else { i--;
    
        }
    }
},
detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);

},
detectLevel: function() {
    if(appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
},
chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов", ''), 
            b = prompt("Во сколько обойдется?", '');
            
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i] = b;
            } else { i--;
    
        }
    }
},
checkSavings: function() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
            
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
    }
},
chooseIncome: function() {
    for (let i = 1; i < 2; i++) {
        let items = prompt("Дополнительные доходы", '');     
        if ((isNaN(items)) && (typeof(items)) != null && items != '' && items.length < 50) {
            appData.income = items.split(', ');
            } else { i--;
        }
    appData.income.push(prompt('что то еще?', ''));     
    appData.income.sort();
    appData.income.forEach(function(items, i, income) {
        alert('Способы доп. заработка:' + i + ' : ' + items);
    });
    }
}
};


// for(i = 0; i < 1; i++) {
//     let i = prompt('Виды дополнительного дохода? (Через запятую)', '');
//     if ((typeoff(items)) != null || isNam(items) || (typeoff(items)) != '' && (typeof(items)) === 'string') {
//         console.log(items);
//     }
//     else  {
//         i--;
// }
//     }
// for (let i = 1; i < 2; i++) {
//     let a = prompt("Виды дополнительного дохода? (Через запятую)", '');
//             if ((typeof(a)) === 'string' && (typeof(a)) != null a != '' && a.length < 100) {
//             console.log("done");
//             appData.optionalExpenses[i] = b;
//         } else { i--;
//     }
// }