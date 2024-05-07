/* Функция для обработки клика на кнопку "Купить" */
function handleBuyButtonClick(event) {
    // Проверяем, что клик был совершен именно на кнопке "Купить"
    if (event.target.classList.contains('buy-button')) {
      // Получаем ID продукта
      var productId = event.target.closest('.buy-button').id;
      // Перенаправляем на страницу buypage.html с параметром ID продукта
      window.location.href = 'buypage.html?product=' + productId;
    }
}
// Добавляем обработчик события клика на всю страницу
document.addEventListener('click', handleBuyButtonClick);