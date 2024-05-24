import { Thing } from '@shgysk8zer0/schema/Thing.js';
import { Place } from '@shgysk8zer0/schema/Place.js';
import { ImageObject } from '@shgysk8zer0/schema/ImageObject.js';
import { create } from '@shgysk8zer0/schema/utils.js';

export class Organization extends Thing {
	#location;
	#image;

	constructor({
		'@type': type = 'Organization',
		location,
		image,
		...rest
	}) {
		super({ '@type': type, ...rest });

		if (typeof location === 'object') {
			this.#location = create(location, Place);
		}

		if  (typeof image !== 'undefined') {
			this.#image = create(image, ImageObject);
		}
	}

	get image() {
		return this.#image;
	}

	get location() {
		return this.#location;
	}

	toJSON() {
		return {
			...super.toJSON(),
			location: this.#location,
			image: this.#image,
		};
	}
}
