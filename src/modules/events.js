"use strict";

const eventMethods =
{
	on (eventName, fn)
	{	
		this.el.forEach((el) =>
		{
			if (el.addEventListener)
			{
				el.addEventListener(eventName, fn);
			}
			else
			{
				el.attachEvent('on' + eventName, () =>
				{
					fn.call(el);
				});
			}
		});

		return this;
	},

	off (eventName, fn)
	{
		this.el.forEach((el) =>
		{
			if (el.removeEventListener)
			{
				el.removeEventListener(eventName, fn);
			}
			else
			{
				el.detachEvent('on' + eventName, fn);
			}
		});

		return this;
	}
}

export { eventMethods };