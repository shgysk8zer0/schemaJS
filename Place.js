import { Thing } from '@shgysk8zer0/schema/Thing.js';
import { PostalAddress } from '@shgysk8zer0/schema/PostalAddress.js';
import { GeoCoordinates } from '@shgysk8zer0/schema/GeoCoordinates.js';
import { create } from '@shgysk8zer0/schema/utils.js';

export class Place extends Thing {
	#address;
	#geo;

	constructor({
		'@type': type = 'Place',
		address,
		geo,
		...rest
	}) {
		super({ '@type': type, ...rest });

		if (typeof address === 'object') {
			this.#address = create(address, PostalAddress);
		}

		if (typeof geo === 'object') {
			this.#geo = create(geo, GeoCoordinates);
		}
	}

	toJSON() {
		return {
			...super.toJSON(),
			address: this.#address,
			geo: this.#geo,
		};
	}

	get address() {
		return this.#address;
	}
}
