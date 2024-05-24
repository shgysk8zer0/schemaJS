import { Base } from '@shgysk8zer0/schema/base.js';

export class Thing extends Base {
	constructor({
		'@type': type = 'Thing',
		// image,
		...rest
	}) {
		super({ '@type': type, ...rest });
	}
}
