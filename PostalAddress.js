import { Thing } from '@shgysk8zer0/schema/Thing.js';

export class PostalAddress extends Thing {
	#streetAddress;
	#addressLocality;
	#addressRegion;
	#postalCode;
	#addressCountry;

	constructor({
		'@type': type = 'PostalAddress',
		streetAddress,
		addressLocality,
		addressRegion,
		postalCode,
		addressCountry,
		...rest
	}) {
		super({ '@type': type, ...rest });
		this.#streetAddress = streetAddress;
		this.#addressLocality = addressLocality;
		this.#addressRegion = addressRegion;
		this.#postalCode = postalCode;
		this.#addressCountry = addressCountry;
	}

	get streetAddress() {
		return this.#streetAddress;
	}

	get addressLocality() {
		return this.#addressLocality;
	}

	get addressRegion() {
		return this.#addressRegion;
	}

	get postalCode() {
		return this.#postalCode;
	}

	get addressCountry()  {
		return this.#addressCountry;
	}

	toJSON() {
		return {
			...super.toJSON(),
			streetAddress: this.#streetAddress,
			addressLocality: this.#addressLocality,
			addressRegion: this.#addressRegion,
			postalCode: this.#postalCode,
			addressCountry: this.#addressCountry,
		};
	}
}
