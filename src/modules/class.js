"use strict";

const classMethods =
{
	addClass (className)
	{
		this.each((el) =>
		{
			if (el.classList)
			{
				el.classList.add(className);
			}
			else
			{
				el.className += ' ' + className;
			}
		});

		return this;
	},

	removeClass (className)
	{	
		this.each((el) =>
		{
			if (el.classList)
			{
				el.classList.remove(className);
			}
			else
			{
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		});

		return this;
	},

	hasClass (className)
	{	
		return this.el.some((el) =>
		{
			if (el.classList)
			{
				return el.classList.contains(className);
			}
			else
			{
				return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);	
			}	
		});
	},

	toggleClass (className)
	{	
		const action = this.hasClass(className)? 'removeClass' : 'addClass';

		this[action](className);

		return this;
	}
}

export { classMethods };