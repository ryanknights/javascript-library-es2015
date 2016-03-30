"use strict";

/*----------  Core Functions  ----------*/
import {_, Library} from "./modules/core.js";

/*----------  Display Methods  ----------*/
import {display} from "./modules/display.js";

/*----------  Extend our librarys prototype with above modules  ----------*/
Object.assign(Library.prototype, display);

/*----------  Assign our library call function onto the window  ----------*/

if (window._ === undefined)
{
	window._ = _;
}
