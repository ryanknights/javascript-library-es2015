"use strict";

const classMethods =
{
	addClass (className)
	{
		this.each(el => el.classList.add(className));

		return this;
	},

	removeClass (className)
	{	
		this.each(el => el.classList.remove(className));

		return this;
	},

	hasClass (className)
	{	
		return this.el.some(el => el.classList.contains(className));
	},

	toggleClass (className)
	{	
		const action = this.hasClass(className)? 'removeClass' : 'addClass';

		this[action](className);

		return this;
	}
}

export { classMethods };