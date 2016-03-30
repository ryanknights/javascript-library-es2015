"use strict";

function _ (el)
{
	return new Library(el);
}

/*----------  Our librarys main constructor  ----------*/

function Library (el)
{	
	var selector = document.querySelectorAll(el);

	this.el = [];

	for (var i = 0, l = selector.length; i < l; i++)
	{
		this.el.push(selector[i]);
	}

	return this;
}

Library.prototype = 
{
	version : '1.0'
}

export { _, Library }