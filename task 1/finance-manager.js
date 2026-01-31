// === БАЗОВЫЙ СИНТАКСИС JS: ФИНАНСОВЫЙ МЕНЕДЖЕР ===

let balance = 10000;
const currency = "RUB";
let transactions = [];

// Примеры начальных транзакций
transactions = [
    { id: 1, type: "расход", category: "еда", amount: 500, date: "2024-01-15", description: "Обед в кафе" },
    { id: 2, type: "доход", category: "зарплата", amount: 30000, date: "2024-01-10", description: "Зарплата за январь" },
    { id: 3, type: "расход", category: "транспорт", amount: 1200, date: "2024-01-12", description: "Такси до работы" },
    { id: 4, type: "расход", category: "развлечения", amount: 2500, date: "2024-01-14", description: "Кино" }
];

// Функция для отображения текущего баланса
function showBalance() {
    console.log(`\n💰 ТЕКУЩИЙ БАЛАНС: ${balance} ${currency}`);
}

// Функция для добавления транзакции
function addTransaction(type, category, amount, description) {
    const newId = transactions.length > 0 
        ? Math.max(...transactions.map(t => t.id)) + 1 
        : 1;
    
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    
    const newTransaction = {
        id: newId,
        type: type,
        category: category,
        amount: amount,
        date: dateString,
        description: description
    };
    
    transactions.push(newTransaction);
    
    if (type === "доход") {
        balance += amount;
    } else if (type === "расход") {
        balance -= amount;
    }
    
    console.log(`✅ Транзакция добавлена: ${description}`);
    showBalance();
}

// Функция для просмотра всех транзакций
function showAllTransactions() {
    console.log("\n📋 ВСЕ ТРАНЗАКЦИИ:");
    console.log("=".repeat(60));
    
    if (transactions.length === 0) {
        console.log("Транзакций нет");
    } else {
        transactions.forEach(transaction => {
            const typeSymbol = transaction.type === "доход" ? "+" : "-";
            console.log(`${transaction.date} | ${transaction.type.padEnd(6)} ${transaction.category.padEnd(15)}: ${typeSymbol}${transaction.amount} ${currency} (${transaction.description})`);
        });
    }
    
    console.log("=".repeat(60));
}

// Функция для фильтрации транзакций по типу
function filterTransactionsByType(type) {
    console.log(`\n🔍 ТРАНЗАКЦИИ (${type.toUpperCase()}):`);
    
    const filtered = transactions.filter(t => t.type === type);
    
    if (filtered.length === 0) {
        console.log("Транзакций не найдено");
    } else {
        filtered.forEach(transaction => {
            console.log(`${transaction.date} | ${transaction.category}: ${transaction.amount} ${currency} (${transaction.description})`);
        });
    }
    
    return filtered;
}

// Функция для подсчёта суммы по категории
function getTotalByCategory(category) {
    let total = 0;
    
    transactions.forEach(transaction => {
        if (transaction.category === category) {
            if (transaction.type === "доход") {
                total += transaction.amount;
            } else {
                total -= transaction.amount;
            }
        }
    });
    
    console.log(`\n📊 Общая сумма по категории "${category}": ${total} ${currency}`);
    return total;
}

// Функция для проверки возможности совершить трату
function canAfford(amount) {
    if (balance >= amount) {
        console.log(`✅ Можно совершить трату. Достаточно средств (${balance} ${currency} ≥ ${amount} ${currency})`);
        return true;
    } else {
        console.log(`❌ Нельзя совершить трату. Недостаточно средств (${balance} ${currency} < ${amount} ${currency})`);
        return false;
    }
}

// Функция для поиска транзакций по ключевому слову в описании
function searchTransactions(keyword) {
    console.log(`\n🔎 Поиск: "${keyword}"`);
    let found = false;
    
    const lowerKeyword = keyword.toLowerCase();
    
    transactions.forEach(transaction => {
        if (transaction.description.toLowerCase().includes(lowerKeyword)) {
            console.log(`${transaction.date} | ${transaction.type} ${transaction.category}: ${transaction.amount} ${currency} (${transaction.description})`);
            found = true;
        }
    });
    
    if (!found) {
        console.log("Транзакций не найдено.");
    }
    
    return found;
}

// Главная функция для тестирования
function runTests() {
    console.log("🚀 ЗАПУСК ФИНАНСОВОГО МЕНЕДЖЕРА");
    console.log("=".repeat(60));

    showBalance();

    // Добавляем новые транзакции
    addTransaction("расход", "еда", 1200, "Продукты на неделю");
    addTransaction("доход", "фриланс", 8000, "Заказ на фрилансе");
    addTransaction("расход", "развлечения", 3500, "Ресторан");

    // Показываем все транзакции
    showAllTransactions();

    // Фильтруем
    filterTransactionsByType("расход");

    // Считаем по категории
    getTotalByCategory("развлечения");

    // Поиск
    searchTransactions("продукты");
    searchTransactions("зарплата");

    // Проверяем возможность траты
    console.log("\n💳 Проверка возможности траты:");
    canAfford(5000);
    canAfford(50000);

    console.log("\n✅ Тестирование завершено!");
}

runTests();
