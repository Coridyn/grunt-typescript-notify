module.exports = {
	/**
	 * extend/assign method
	 * 
	 * Copy enumerable values from source(s) to target.
	 * 
	 * Implementation from:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 * 
	 * @param  {any} target      Values from sources are copied onto this object.
	 * @param  {any} ...firstSource One or more source objects.
	 * @return {any}             Returns the `target` parameter.
	 */
	extend: function(target, firstSource) {
		"use strict";
		if (target === undefined || target === null)
			throw new TypeError("Cannot convert first argument to object");
		var to = Object(target);
		for (var i = 1; i < arguments.length; i++) {
			var nextSource = arguments[i];
			if (nextSource === undefined || nextSource === null) continue;
			var keysArray = Object.keys(Object(nextSource));
			for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
				var nextKey = keysArray[nextIndex];
				var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
				if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
			}
		}
		return to;
	}
};
