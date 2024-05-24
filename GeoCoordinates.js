import { Thing } from '@shgysk8zer0/schema/Thing.js';

export class GeoCoordinates extends Thing {
	#latitude;
	#longitude;
	#elevation;

	constructor({
		'@type': type = 'GeoCoordinates',
		latitude,
		longitude,
		elevation,
		...rest
	}) {
		super({ '@type': type, ...rest });
		this.latitude = latitude;
		this.longitude = longitude;
		this.elevation = elevation;
	}

	get elevation() {
		return this.#elevation;
	}

	set elevation(val) {
		switch (typeof val) {
			case 'undefined':
				this.#elevation = undefined;
				break;

			case 'string':
				this.elevation = parseFloat(val);
				break;

			case 'number':
				if (Number.isNaN(val)) {
					throw new TypeError('Invalid number given.');
				} else {
					this.#elevation = val;
				}
				break;

			case 'object':
				if (val === null) {
					this.elevation = undefined;
				} else {
					throw new TypeError('Elevation must be a number.');
				}
				break;

			default:
				throw new TypeError('Elevation must be a number.');
		}
	}

	get latitude() {
		return this.#latitude;
	}

	set latitude(val) {
		switch (typeof val) {
			case 'undefined':
				this.#latitude = undefined;
				break;

			case 'string':
				this.latitude = parseFloat(val);
				break;

			case 'number':
				if (Number.isNaN(val)) {
					throw new TypeError('Invalid number given.');
				} else {
					this.#latitude = val;
				}
				break;

			case 'object':
				if (val === null) {
					this.#latitude = undefined;
				} else {
					throw new TypeError('Latitude must be a number.');
				}
				break;

			default:
				throw new TypeError('Latitude must be a number.');
		}
	}

	get longitude() {
		return this.#longitude;
	}

	set longitude(val) {
		switch (typeof val) {
			case 'undefined':
				this.#longitude = undefined;
				break;

			case 'string':
				this.longitude = parseFloat(val);
				break;

			case 'number':
				if (Number.isNaN(val)) {
					throw new TypeError('Invalid number given.');
				} else {
					this.#longitude = val;
				}
				break;

			case 'object':
				if (val === null) {
					this.#longitude = undefined;
				} else {
					throw new TypeError('Longitude must be a number.');
				}
				break;

			default:
				throw new TypeError('Longitude must be a number.');
		}
	}
	toJSON() {
		return {
			...super.toJSON(),
			latitude: this.#latitude,
			longitude: this.#longitude,
			elevation:  this.#elevation,
		};
	}
}
