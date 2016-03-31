"use strict";

const displayMethods =
{
	hide ()
	{	
		this.each(el => el.style.display = 'none');

		return this;
	},

	show ()
	{
		this.each(el => el.style.display = 'block');

		return this;
	}
}

export { displayMethods };