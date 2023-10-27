const tableBody = document.getElementById('table-body');
const pagination = document.getElementById('pagination');
let data = [];

// Функция для загрузки данных из указанного источника
const loadData = async () => {
    const response = await fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
    data = await response.json();
    // Вызываем функцию отображения таблицы, передавая номер страницы
    renderTable(1);
}
// Функция для отображения таблицы
const renderTable = (page) => {
    const itemsPerPage = 100;
    // Вычисляем индекс первого элемента на странице
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    tableBody.innerHTML = '';
    // Проходимся в цикле по массиву данных
    for (const item of paginatedData) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.tel}</td>
            <td>${item.address}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
        `
        ;
        // Добавляем строку в тело таблицы
        tableBody.appendChild(row);
    }
    // Вычисляем общее количество страниц
    const totalPages = Math.ceil(data.length / itemsPerPage); 
    // Создаем пустую строку для пагинации
    let paginationHTML = '';
    // Проходимся в цикле по количеству страниц
    for (let i = 1; i <= totalPages; i++) {
        // Добавляем кнопку с номером страницы и обработчиком события onclick
        paginationHTML += `<button onclick="renderTable(${i})">${i}</button>`;
    }

    pagination.innerHTML = paginationHTML;
}
// Функция для сортировки таблицы по выбранному столбцу
const sortTable = (columnIndex) => {
    data.sort((a, b) => {
        // Получаем значения ключей для сравнения из текущих элементов массива
        const keyA = a[Object.keys(a)[columnIndex]];
        const keyB = b[Object.keys(b)[columnIndex]];

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    renderTable(1); 
}

window.onload = loadData;