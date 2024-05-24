import { CreativeWork } from '@shgysk8zer0/schema/CreativeWork.js';

export class MediaObject extends CreativeWork {
	#height;
	#width;

	constructor({
		'@type': type = 'MediaObject',
		height,
		width,
		...rest
	}) {
		super({ '@type': type, ...rest});
		this.height = height;
		this.width = width;
	}

	toJSON() {
		return {
			...super.toJSON(),
			height: this.#height,
			width: this.#width,
		};
	}

	get height() {
		return this.#height;
	}

	set height(val) {
		if (typeof val === 'string') {
			this.height = parseInt(val);
		} else if (typeof val !== 'number' || Number.isNaN(val)) {
			throw new TypeError('Height must be a number.');
		} else {
			this.#height  = val;
		}
	}

	get width() {
		return this.#width;
	}

	set width(val) {
		if (typeof val === 'string') {
			this.width = parseInt(val);
		} else if (typeof val !== 'number' || Number.isNaN(val)) {
			throw new TypeError('Width must be a number.');
		} else {
			this.#width = val;
		}
	}
}
