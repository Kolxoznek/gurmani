import fs from 'fs';
//import { v4: uuidv4 } from 'uuid';

function generateId() {
    return Math.round(Math.random * 10000)
}

// Чтение данных из файла
fs.readFile('src/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let jsonData = JSON.parse(data);

    // Добавление уникального ID к каждому элементу
    jsonData.forEach(item => {
        item.id = generateId();
    });

    // Запись модифицированных данных обратно в файл
    fs.writeFile('db_modified.json', JSON.stringify(jsonData, null, 4), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Файл успешно обновлен с добавлением уникальных ID.');
    });
});