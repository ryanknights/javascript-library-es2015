"use strict";

const eventMethods =
{
	on (eventName, fn)
	{	
		this.each((el) =>
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
		this.each((el) =>
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