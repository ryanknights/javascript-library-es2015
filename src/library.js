"use strict";

/*----------  Core Functions  ----------*/
import {_, Library} from "./modules/core.js";

/*----------  Import Method Modules  ----------*/
import {displayMethods} from "./modules/display.js";
import {classMethods} from "./modules/class.js";


/*----------  Extend our librarys prototype with above modules  ----------*/
Object.assign(Library.prototype, displayMethods, classMethods);

/*----------  Assign our library call function onto the window  ----------*/
if (window._ === undefined)
{
	window._ = _;
}
