document.addEventListener('DOMContentLoaded', function() {
  /* Функционал навигационного меню */
    var categoryButtons = document.getElementsByClassName('category-button');
    var productList = document.getElementById('productlist');
    var productElements = productList.children;
    var n, m; // Объявляем переменные n и m
  
    for (var i = 0; i < productElements.length; i++) {
      if (i >= 0 && i <= 2) {
        productElements[i].style.display = 'block';
      } else {
        productElements[i].style.display = 'none';
      }
    }
  
    // Обработчик события клика на кнопке категории
    function handleCategoryClick(event) {
      var selectedCategory = event.target.getAttribute('data-category');
      filterProducts(selectedCategory);
    }
  
    // Функция фильтрации товаров по выбранной категории и отображения потомков с заданным диапазоном
    function filterProducts(category) {
      // Скрываем все потомки
      for (var i = 0; i < productElements.length; i++) {
        productElements[i].style.display = 'none';
      }
      
      if (category == "category1") {
        n = 1;
        m = 3;
      } else if (category == "category2") {
        n = 4;
        m = 6;
      }
      else if (category=="category3") {
        n = 7;
        m = 9;
      }
    
      else if (category=="category4") {
        n = 10;
        m = 12;
      }
    
      else if (category=="category5") {
        n = 13;
        m = 15;
      }
  
      if (category != "category1" && category != "category2" && category != "category3" && category != "category4" && category != "category5") {
        n = 1;
        m = 15;
      }
  
      // Отображаем потомков с заданным диапазоном
      for (var j = n - 1; j < m; j++) {
        if (productElements[j]) {
          productElements[j].style.display = 'block';
        }
      }
    }
  
    // Добавляем обработчик события клика на каждую кнопку категории
    Array.from(categoryButtons).forEach(function (button) {
      button.addEventListener('click', handleCategoryClick);
    });
  });
