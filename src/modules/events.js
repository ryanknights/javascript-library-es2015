"use strict";

const eventMethods =
{
	on (eventName, fn)
	{	
		this.each(el => el.addEventListener(eventName, fn));

		return this;
	},

	off (eventName, fn)
	{
		this.each(el => el.removeEventListener(eventName, fn));

		return this;
	}
}

export { eventMethods };