import { Thing } from '@shgysk8zer0/schema/Thing.js';
import { Person } from '@shgysk8zer0/schema/Person.js';
import { Organization } from '@shgysk8zer0/schema/Organization.js';
import { ImageObject } from '@shgysk8zer0/schema/ImageObject.js';
import { Place } from '@shgysk8zer0/schema/Place.js';
import { create } from '@shgysk8zer0/schema/utils.js';

export class Event extends Thing {
	#eventStatus;
	#eventAttendanceMode;
	#startDate;
	#endDate;
	#organizer;
	#location;
	#image;

	constructor({
		'@type': type = 'Event',
		eventStatus = 'EventScheduled',
		eventAttendanceMode = 'OfflineEventAttendanceMode',
		startDate,
		endDate,
		organizer,
		location,
		image,
		...rest
	}) {
		super({ '@type': type, ...rest });

		if (typeof eventStatus === 'string') {
			this.#eventStatus = eventStatus;
		}

		if (typeof eventAttendanceMode === 'string') {
			this.#eventAttendanceMode = eventAttendanceMode;
		}

		if (typeof startDate !== 'undefined') {
			this.startDate = startDate;
		}

		if (typeof endDate !== 'undefined') {
			this.endDate = endDate;
		}

		if (typeof organizer !== 'undefined') {
			this.organizer = organizer;
		}

		if (typeof location !== 'undefined') {
			this.location = location;
		}

		if (typeof image !== 'undefined') {
			this.image = image;
		}
	}

	toJSON() {
		return {
			...super.toJSON(),
			eventStatus: this.#eventStatus,
			eventAttendanceMode: this.#eventAttendanceMode,
			image: this.#image,
			startDate: this.#startDate,
			endDate: this.#endDate,
			location: this.#location,
			organizer: this.#organizer,
		};
	}

	get image() {
		return this.#image;
	}

	set image(val) {
		switch(typeof val) {
			case 'string':
				this.#image = ImageObject.fromURL(val);
				break;

			case 'object':
				if (val instanceof ImageObject) {
					this.#image = val;
				} else if (val instanceof URL) {
					this.#image = ImageObject.fromURL(val);
				} else if (val !== null) {
					this.#image = create(val, ImageObject);
				} else {
					throw new TypeError('Image must be an ImageObject or URL.');
				}
				break;

			case 'undefined':
				this.#image = undefined;
				break;

			default:
				throw new TypeError(`Invalid type for image: ${typeof val}.`);
		}
	}

	get startDate() {
		return this.#startDate?.toISOString();
	}

	set startDate(val) {
		if (typeof val === 'string' || typeof val === 'number') {
			this.startDate = new Date(val);
		} else if (! (val instanceof Date)) {
			throw new TypeError('startDate must be a Date.');
		} else {
			this.#startDate = val;
		}
	}

	get endDate() {
		return this.#endDate?.toISOString();
	}

	set endDate(val) {
		if (typeof val === 'string' || typeof val === 'number') {
			this.endDate = new Date(val);
		} else if (!(val instanceof Date)) {
			throw new TypeError('endDate must be a Date.');
		} else {
			this.#endDate = val;
		}
	}

	get location() {
		return this.#location;
	}

	set location(val) {
		if (typeof val === 'undefined' || val === null) {
			this.#location = undefined;
		} else if (val instanceof Place) {
			this.#location = val;
		} else if (typeof val === 'object') {
			this.#location = create(val, Place);
		} else {
			throw new TypeError('Locaation must be a Place.');
		}
	}

	get organizer() {
		return this.#organizer;
	}

	set organizer(val) {
		if (typeof val === 'undefined' || val === null) {
			this.#organizer = undefined;
		} else if (val instanceof Organization || val instanceof Person) {
			this.#organizer = val;
		} else if (typeof val !== 'object' || !('@type' in val)) {
			throw new TypeError('Organizer must be a Person or Organization.');
		} else if (val['@type'] === 'Person') {
			this.#organizer = create(val, Person);
		} else {
			this.#organizer = create(val, Organization);
		}
	}
}
