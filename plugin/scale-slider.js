/**
	* @fileoverview Scale-Slider plugin. Dependencies: JQuery, JQuery-UI (plus JQuery-UI touch event libs).
	* @author German Topalov (german.topalov@breffi.ru)
*/
$(function () {
	/**
		* @constructor
		* @param {Object} options список опций для инициализации Scale-Slider
	*/
	var ScaleSlider = function (options) {
		this.options = options || {};
		if(this instanceof ScaleSlider) {
			this.pin = options.pin;
			this.value = options.value;
			this.mask = options.mask || null;
			this.maskOffset = options.maskOffset || null;

			this.steps = options.steps;

			this.start = options.start;
			this.end = options.end;
			this.stick = options.stick;

			this.axis = options.axis;
			if(this.axis === 'x') {
				this.coords = [this.start, this.stick, this.end, this.stick];
			}
			else if(this.axis === 'y') {
				this.coords = [this.stick, this.end, this.stick, this.start];
			}
			else {
				alert('Указано некорректное направление (допустимо только "x" или "y")');
				return;
			}

			this.size = this.end - this.start;
			this.delta = this.steps / this.size;
		}

		else {
			return new ScaleSlider(this.options);
		}
	};


	ScaleSlider.prototype.build = function () {
		this.pin.draggable({
			axis: this.axis,
			containment: this.coords,
			start: function () {
				//storyCLMNavigation.blockSwipe();
			},
			drag: function () {
				var position;
				if(this.axis === 'x') {
					position = this.pin.position().left - this.start;
				}
				else {
					position = this.pin.position().top - this.start;
				}

				var step = Math.round(position * this.delta);

				if(this.mask) {
					if(this.axis === 'x') {
						this.mask.css({'width': position - this.maskOffset});
					}
					else {
						this.mask.css({'height': -(position - this.maskOffset)});
					}
				}
				this.value.text(step);

				if(typeof this.onDrag === 'function') this.onDrag(step);

			}.bind(this),

			stop: function () {
				var step = this.value.text();
				if(typeof this.onStop === 'function') this.onStop(step);
			}.bind(this)
		})
	};

	window.ScaleSlider = ScaleSlider;
});
