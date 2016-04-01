"use strict";

function _ (el)
{
	return new Library(el);
}

class Library
{	
	constructor (el)
	{
		const selector = document.querySelectorAll(el);

		this.el = [];

		for (let i = 0, l = selector.length; i < l; i++)
		{
			this.el.push(selector[i]);
		}
	}

	version : 1.0
	author  : 'Ryan Knights'
	url     : 'http://ryanknights.co.uk'

	each (fn)
	{
		for (let i = 0, l = this.el.length; i < l; i++)
		{
			fn.call(this, this.el[i], i);
		}

		return this;
	}
}

export { _, Library }