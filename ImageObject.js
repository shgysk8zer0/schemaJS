import { MediaObject } from '@shgysk8zer0/schema/MediaObject.js';

export class ImageObject extends MediaObject {
	#caption;
	constructor({
		'@type': type = 'ImageObject',
		caption,
		...rest
	}) {
		super({ '@type': type, ...rest });

		if (typeof caption === 'string') {
			this.#caption = caption;
		}
	}

	toJSON() {
		return {
			...super.toJSON(),
			caption: this.#caption,
		};
	}

	get caption() {
		return this.#caption;
	}

	set caption(val) {
		if (typeof val === 'string') {
			this.#caption = val;
		} else if (typeof val === 'undefined' || val === null) {
			this.#caption = undefined;
		} else {
			throw new TypeError('Caption must be a string.');
		}
	}

	static fromURL(url) {
		if (url instanceof URL) {
			return new ImageObject({
				url: url.href,
			});
		} else if (typeof url === 'string' && URL.canParse(url)) {
			return new ImageObject({
				url: url,
			});
		} else {
			throw new TypeError('Not a valid URL.');
		}
	}
}
