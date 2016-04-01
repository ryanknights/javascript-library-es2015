"use strict";

const ajaxMethods =
{
	ajax (type, url, data)
	{	
		return new Promise((resolve, reject) =>
		{
			let request = new XMLHttpRequest(),
				params  = '';

			if (data !== undefined)
			{	
				params = [];

				for (let key in data)
				{
					params.push(`${key}=${data[key]}`);
				}

				params = params.join('&');
			}

			request.open(type, url, true);

			request.onreadystatechange = function ()
			{
				if (this.readyState === 4)
				{	
					if (this.status === 200)
					{
						resolve(JSON.parse(this.responseText));
					}
					else
					{
						reject(Error(this.statusText));
					}
				}
			}

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			request.send(params);

			request = null;
		});
	},

	post (url, data)
	{
		return this.ajax('POST', url, data);
	},

	get (url, data, success, failure)
	{
		return this.ajax('GET', url, null);
	}	
}

export { ajaxMethods };