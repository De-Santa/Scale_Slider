# Scale_Slider
scale-slider.js - это JQuery UI плагин, предоставляющий возможность быстро создавать слайдер с заданным числовым диапазоном.
* Плагин рекомендуется использовать исключительно в рамках презентаций для [StoryCLM](https://github.com/storyclm/storyCLM.js). 
* Для работы плагина необходимо подключение следующих библиотек: jquery, jquery-ui, jquery.ui.touch-punch, jquery.touchwipe.
* Плагин рассчитывает координаты относительно объекта window. Поэтому контейнер с содержимым слайда <b>не должен</b> быть отцентрован с помощью CSS свойства margin: 0 auto;
## Принцип работы
Scale_Slider позволяет быстро создавать сложные диапазонные слайдеры, использующие кастомный дизайн, маску и снятие пользовательских метрик. Плагин рассчитан на HTML разметку, которая получается в результатет парсинга макета с помощью приложения AllToWeb, внесения глобальных изменений в разметку не требуется. Перемещение слайдера может производится осям X и Y, в зависимости от настроек.
![alt text](https://github.com/De-Santa/Scale_Slider/blob/master/git-screen.JPG "Scale_Slider")
## Текущая версия
0.1
## Подключение
```javascript
<script src="js/scale-slider.js"></script>
```
## Настройка и инициализация
Для инициализации слайдера необходимо подготовить объект с настройками и вызвать конструктор ScaleSlider с данным объектом в качестве аргумента.
* Настройки
```javascript
// Пример настроек
var options = {
  pin: $('.pin'), // "Ползунок", элемент который требуется перемещать по слайдеру
  value: $('.value'), // Контейнер с текущим числовым значением слайдера
  mask: $('.mask'), // Опционально, контейнер с маской для заполнения шкалы слайдера при перемешении ползунка
  maskOffset: 15, // Опционально, смещение проявления маски относительно ползунка (px)
  steps: 70, // Количество сегментов слайдера
  axis: 'x', // Ось перемещения слайдера ('x' или 'y') 
  start: 82, // Координата откуда начинается перемещение ползунка (px)
  end: 465, // Координата где заканчивается перемещение ползунка (px)
  stick: 121 // Координата фиксации ползунка по противоположной оси (px)
};
```
* Инициализация и вывод слайдера на экран
```javascript
// Пример инициализации и рендера
var slider = new ScaleSlider(options);
slider.build();
```
## API
В результате инициализации слайдера станут доступны следующие EventListeners
### .onDrag = function(currentStep)
  * срабатывает при перемещении ползунка
  * currentStep - текущее значение слайдера
```javascript
slider.onDrag = function (currentStep) {
  console.log(currentStep)
};
```
### .onStop = function(currentStep)
  * срабатывает при завершении тач-события по ползунку
  * currentStep - текущее значение слайдера
```javascript
slider.onStop = function (currentStep) {
  console.log(currentStep)
};
```
## Пример использования
```javascript
var options = {
  pin: $('.pin'),
  value: $('.value'),
  mask: $('.mask'),
  maskOffset: 15,
  steps: 70,
  axis: 'x',
  start: 82,
  end: 465,
  stick: 121
};

var slider = new ScaleSlider(options);

slider.build();

slider.onDrag = function (currentStep) {
  console.log(currentStep)
};

slider.onStop = function (currentStep) {
  console.log(currentStep)
};
```
