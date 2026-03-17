# Student Object Demo

Простой пример объекта `Student` на JavaScript, демонстрирующий создание объекта, добавление методов и изменение состояния.

## Описание

В коде создаётся объект `Student` с полями:
- `id` – уникальный идентификатор на основе текущего времени (`Date.now()`),
- `name` – имя ("Sergey"),
- `prefix` – префикс ("Ser"),
- `status` – статус ("active"),
- метод `getStatus()`, возвращающий текущий статус.

Затем объект выводится в консоль (первый снимок). После этого добавляется метод `deactivate()`, который изменяет статус на "inactive". Вызов этого метода и повторный вывод показывают изменение объекта (второй снимок).

## Код

```javascript
const Student = {
    id: Date.now(),
    name: "Sergey",
    prefix: "Ser",
    status: "active",
    getStatus() {
        return this.status;
    }
};

console.log(Student); // Первый вывод

const SNAPSHOT_STEP = "{id: 1773741202220, name: 'Sergey', prefix: 'Ser', status: 'active', getStatus: [Function: getStatus]}";

Student.deactivate = function() {
    this.status = "inactive";
};

Student.deactivate();

console.log(Student); // Второй вывод

const SNAPSHOT_STEP2 = "{id: 1773741348580, name: 'Sergey', prefix: 'Ser', status: 'inactive', getStatus: [Function: getStatus], deactivate: [Function (anonymous)]}";
```

## Вывод в консоль

### Первый шаг (после создания объекта)
```
{id: 1773741202220, name: 'Sergey', prefix: 'Ser', status: 'active', getStatus: [Function: getStatus]}
```

### Второй шаг (после добавления метода `deactivate` и его вызова)
```
{id: 1773741348580, name: 'Sergey', prefix: 'Ser', status: 'inactive', getStatus: [Function: getStatus], deactivate: [Function (anonymous)]}
```

Обратите внимание: во втором выводе появился новый метод `deactivate`, а поле `status` изменилось на `"inactive"`.

## Запуск

Для запуска кода можно использовать:
- **Node.js**: сохраните код в файл `task_3.js` и выполните `node task_3.js`.
- **Консоль браузера**: скопируйте код и вставьте в консоль разработчика (F12).
