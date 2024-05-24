import { Event } from '@shgysk8zer0/schema';
// const { Event }  = require('@shgysk8zer0/schema');

const log = what => {
	if (typeof what === 'object') {
		console.log(JSON.stringify(what, null, 4));
	} else {
		console.log(what);
	}
};

const event = new Event({
	'@type': 'SocialEvent',
	name: 'Test Event',
	startDate: Date.now(),
	endDate: Date.now() + 3_600_000,
	description: 'Test Event Description',
	identifier: crypto.randomUUID(),
	image: {
		url: 'https://cdn.kernvalley.us/img/raster/missing-image.png',
		height: 480,
		width: 640,
	},
	organizer: {
		'@type': 'Organization',
		name: 'KernValley.US',
		url: 'https://kernvalley.us',
		location: {
			address: {
				streetAddress: '11113 Kernville Blvd',
				addressLocality: 'Kernville',
				addressRegion: 'CA',
				postalCode: 93238,
				addressCountry: 'US',
			}
		}
	},
	location: {
		name: 'Kernville Cowork',
		address: {
			streetAddress: '11113 Kernville Rd',
			addressLocality: 'Kernville',
			addressRegion: 'CA',
			postalCode: 93238,
			addressCountry: 'US',
		},
		geo: {
			latitude: 35.755178420760394,
			longitude: -118.44120025634767,
		},
	},
});

const resp = Response.json(event);
resp.json().then(log, console.error);
