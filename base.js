export class Base {
	#context;
	#type;
	#name;
	#description;
	#url;
	#identifier;

	constructor({
		'@context': context = 'https://schema.org',
		'@type': type,
		name,
		description,
		identifier,
		url,
	}) {
		if (typeof context !== 'string' || typeof type !== 'string') {
			throw new TypeError('At least `@type` & `@context` are required.');
		} else {
			this.#context = context;
			this.#type = type;

			if (typeof name !== 'undefined') {
				this.name = name;
			}

			if (typeof description !==  'undefined') {
				this.description = description;
			}

			if (typeof url !== 'undefined') {
				this.url = url;
			}

			if (typeof identifier !== 'undefined') {
				this.identifier = identifier;
			}
		}
	}

	get context() {
		return this.#context;
	}

	get type() {
		return this.#type;
	}

	get identifer() {
		return this.#name;
	}

	set identifier(val) {
		if (typeof val === 'undefined' || val === null) {
			this.#identifier = undefined;
		} else if (typeof val === 'string') {
			this.#identifier = val;
		} else if (val instanceof URL) {
			this.#identifier = val.href;
		} else {
			throw new TypeError('Identifier must be a string or URL.');
		}
	}

	get name() {
		return this.#name;
	}

	set name(val) {
		if (typeof val === 'string' && val.length !== 0) {
			this.#name = val;
		} else {
			this.#name = undefined;
		}
	}

	get description() {
		return this.#description;
	}

	set description(val) {
		if (typeof val === 'string' && val.length !== 0) {
			this.#description = val;
		} else {
			this.#description = undefined;
		}
	}

	get url() {
		return this.#url;
	}

	set url(val) {
		if (typeof val === 'string' && URL.canParse(val)) {
			this.#url = val;
		} else if (val instanceof URL) {
			this.#url = val.href;
		} else {
			this.#url = undefined;
		}
	}

	[Symbol.toStringTag]() {
		return this.#type;
	}

	toJSON() {
		return {
			'@context': this.#context,
			'@type': this.#type,
			name: this.#name,
			identifier: this.#identifier,
			description: this.#description,
			url: this.#url,
		};
	}
}
