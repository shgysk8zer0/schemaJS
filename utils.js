/**
 * Creates a new object using the provided constructor.
 *
 * @param {Object} obj - An object containing properties for the new object.
 * @param {Function} constructor - A class constructor function.
 * @returns {Object|null} The created object or null if invalid input is provided.
 *
 * @throws {TypeError} - Thrown if the constructor is not a function or if the obj is not an object or a null value.
 */
export function create(obj, constructor) {
	if (! (constructor instanceof Function)) {
		throw new TypeError('Constructor must be a class constructor.');
	} else if (typeof obj === 'undefined') {
		return null;
	} else if (typeof obj !== 'object') {
		throw new TypeError(`Invalid type. Requires an object or ${constructor.name}`);
	} else if (obj instanceof constructor) {
		return obj;
	} else if (obj === null) {
		return null;
	} else {
		return new constructor(obj);
	}
}

export const isInstanceoOf = (obj, constructor) => Function.prototype[Symbol.hasInstance].call(constructor, obj);
