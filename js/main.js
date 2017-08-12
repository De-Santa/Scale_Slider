$(function () {
	var slider_1 = $('[data-slider="slider_1"]');

	var slider_1_options = {
		pin: slider_1.find('.scale-slider__pin'),
		value: slider_1.find('.scale-slider__value'),
		mask: slider_1.find('.scale-slider__scale-mask'),
		maskOffset: 15,
		steps: 70,
		axis: 'x',
		start: 82,
		end: 465,
		stick: 121
	};

	var scaleSlider_1 = new ScaleSlider(slider_1_options);

	scaleSlider_1.build();

	scaleSlider_1.onDrag = function (currentStep) {

	};

	scaleSlider_1.onStop = function (currentStep) {
		console.log(currentStep);
	};

	var slider_2 = $('[data-slider="slider_2"]');

	var slider_2_options = {
		pin: slider_2.find('.scale-slider__pin'),
		value: slider_2.find('.scale-slider__value'),
		mask: slider_2.find('.scale-slider__scale-mask'),
		maskOffset: 0,
		steps: 30,
		axis: 'x',
		start: 82,
		end: 480,
		stick: 421
	};

	var scaleSlider_2 = new ScaleSlider(slider_2_options);

	scaleSlider_2.build();

	scaleSlider_2.onDrag = function (currentStep) {

	};

	scaleSlider_2.onStop = function (currentStep) {
		console.log(currentStep);
	};


	var slider_3 = $('[data-slider="slider_3"]');

	var slider_3_options = {
		pin: slider_3.find('.scale-slider__pin'),
		value: slider_3.find('.scale-slider__value'),
		steps: 100,
		axis: 'x',
		start: 65,
		end: 486,
		stick: 621
	};

	var scaleSlider_3 = new ScaleSlider(slider_3_options);

	scaleSlider_3.build();

	scaleSlider_3.onDrag = function (currentStep) {

	};

	scaleSlider_3.onStop = function (currentStep) {
		console.log(currentStep);
	};


	var slider_4 = $('[data-slider="slider_4"]');

	var slider_4_options = {
		pin: slider_4.find('.scale-slider__pin'),
		value: slider_4.find('.scale-slider__value'),
		mask: slider_4.find('.scale-slider__scale-mask'),
		maskOffset: 15,
		steps: 200,
		axis: 'y',
		start: 572,
		end: 181,
		stick: 819
	};

	var scaleSlider_4 = new ScaleSlider(slider_4_options);

	scaleSlider_4.build();

	scaleSlider_4.onDrag = function (currentStep) {

	};

	scaleSlider_4.onStop = function (currentStep) {
		console.log(currentStep);
	};
});