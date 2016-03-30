"use strict";

const displayMethods =
{
	hide ()
	{	
		this.el.forEach(el => el.style.display = 'none');

		return this;
	},

	show ()
	{
		this.el.forEach(el => el.style.display = 'block');

		return this;
	}
}

export { displayMethods };