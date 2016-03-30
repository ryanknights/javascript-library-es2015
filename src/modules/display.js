"use strict";

const display =
{
	hide ()
	{
		let len = this.el.length;

		while (len--)
		{
			this.el[len].style.display = 'none';
		}

		return this;
	},

	show ()
	{
		let len = this.el.length;

		while (len--)
		{
			this.el[len].style.display = 'block';
		}
	}
}

export { display };