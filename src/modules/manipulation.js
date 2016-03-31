"use strict";

const manipulationMethods =
{
	after (htmlString)
	{
		this.each(el => el.insertAdjacentHTML('afterend', htmlString));

		return this;
	},

	before (htmlString)
	{
		this.each(el => el.insertAdjacentHTML('beforebegin', htmlString));

		return this;
	},

	append (appendEl)
	{
		this.each(el => el.appendChild(appendEl));

		return this;
	},

	prepend (prependEl)
	{
		this.each(el => el.insertBefore(prependEl, el.firstChild));

		return this;
	}
}

export { manipulationMethods };