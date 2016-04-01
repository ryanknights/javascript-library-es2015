"use strict";

class Library
{	
	constructor (selector)
	{
		this.el = Array.from(document.querySelectorAll(selector));
	}

	version : 1.0
	author  : 'Ryan Knights'
	url     : 'http://ryanknights.co.uk'

	each (fn)
	{	
		this.el.forEach(fn, this);

		return this;
	}
}

function _ (el)
{
	return new Library(el);
}

export { _, Library }