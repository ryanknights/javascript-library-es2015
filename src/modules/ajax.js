"use strict";

const ajaxMethods =
{
	post (url, data, success, failure)
	{
		let request = new XMLHttpRequest(),
			params  = [];

		for (let key in data)
		{
			params.push(`${key}=${data[key]}`);
		}

		params = params.join('&');

		request.open('POST', url, true);

		request.onreadystatechange = function ()
		{
			if (this.readyState === 4)
			{	
				if (this.status === 200)
				{
					if (typeof success === 'function')
					{
						success.call(this, JSON.parse(this.responseText));
					}
				}
				else
				{
					if (typeof failure === 'function')
					{
						failure.call(this, this.statusText);
					}
				}
			}
		}

		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.send(params);

		request = null;
	}
}

export { ajaxMethods };