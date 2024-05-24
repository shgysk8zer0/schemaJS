import { Thing } from '@shgysk8zer0/schema/Thing.js';

export class Person extends Thing {
	constructor({
		'@type': type = 'Person',
		...rest
	}) {
		super({ '@type': type, ...rest });
	}
}
