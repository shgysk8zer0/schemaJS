import { Thing } from '@shgysk8zer0/schema/Thing.js';

export class CreativeWork extends Thing {
	constructor({
		'@type': type = 'CreativeWork',
		...rest
	}) {
		super({ '@type': type, ...rest });
	}
}
