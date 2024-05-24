import { Base } from '@shgysk8zer0/schema/base.js';
// import { ImageObject } from '@shgysk8zer0/schema/ImageObject.js';
import { create } from '@shgysk8zer0/schema/utils.js';

export class Thing extends Base {
	// #image;

	constructor({
		'@type': type = 'Thing',
		// image,
		...rest
	}) {
		super({ '@type': type, ...rest });

		// if (typeof image !== 'undefined') {
		// 	this.image = image;
		// }
	}

	// get image() {
	// 	return this.#image;
	// }

	// set image(val) {
	// 	if (val instanceof ImageObject) {
	// 		this.#image = val;
	// 	} else if (typeof val === 'object') {
	// 		this.#image = create(val, ImageObject);
	// 	} else if (typeof val === 'string') {
	// 		this.#image = ImageObject.fromURL(val);
	// 	} else if (typeof val === 'undefined' || val === null) {
	// 		this.#image = undefined;
	// 	} else {
	// 		throw new TypeError('Image must be an ImageObject or URL.');
	// 	}
	// }

	toJSON() {
		return {
			...super.toJSON(),
			// image: this.#image,
		};
	}
}
