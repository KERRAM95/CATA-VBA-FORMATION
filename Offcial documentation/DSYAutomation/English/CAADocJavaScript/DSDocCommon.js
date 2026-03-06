// =======================================================================
// === Common Functions
// === Copyright © Dassault Systemes / Pierre SMEYERS (Jan 30 2006)
// =======================================================================
// === This Javascript Library contains general functions for the online
// === doc runtime infrastructure.
// =======================================================================
/**
 * The name of the main navigation frame (that displays the documentation pages)
 */
var MAIN_FRAMENAME = "mainsm";
/*
 * For search and settings
 */ 
var CAAMLevel="3DEXPERIENCER2026x";
var CAATLevel="R428";
// =======================================================================
/**
 * Message for debugging purpose.
 */
function DebugMessage(msg)
{
//	alert(msg);
//	window.status = "[DBG]:"+msg;
}

// =======================================================================
/**
 * Enrich String class with trim() method
 */
String.prototype.trim = function()
{
	var i1=0;
	while(i1 < this.length && this.charAt(i1) == ' ')
		i1++;
	var i2=this.length-1;
	while(i2 > i1 && this.charAt(i2) == ' ')
		i2--;
	if(i1 == i2)
		return "";
	if(i1 == 0 && i2 == this.length-1)
		return this;
	return this.substr(i1, (i2-i1));
}

// =======================================================================
/**
 * Enrich String class with ensWith() method
 */
String.prototype.endsWith = function(s)
{
	if (typeof s != 'string')
		throw('IllegalArgumentException: String.endsWith() is expecting a string argument.');
	var start = this.length - s.length;
	if(start < 0) return false;
	return this.substr(start) == s;
}

// =======================================================================
/**
 * Enrich String class with startsWith() method
 */
String.prototype.startsWith = function(s)
{
	if (typeof s != 'string')
		throw('IllegalArgumentException: String.startsWith() is expecting a string argument.');
	if(this.length < s.length) return false;
	return this.substr(0, s.length) == s;
}

// =======================================================================
/**
 * Extracts arguments from the given location object.
 * Arguments are passed in a URL with the grammar:
 * http://server/the/path/to/the/file?arg1=val1&arg2=val2&...
 */
function extractParamsFromLocation(locationObj)
{
	var args = new Array();
	var varAndVals = locationObj.search.substr(1).split("&");
	for(var i=0; i<varAndVals.length; i++)
	{
		var v = varAndVals[i].split("=");
		args[unescape(v[0])] = unescape(v[1]);
	}
	// V2E : IR-225631V6R2014 & IR-2256306R2014 
	// added one more parameter for element ID to directly show the scrolled page.
	if(locationObj.hash){
		
		args["ElemID"] = locationObj.hash;
	}
	
	return args;
}

// =======================================================================
/**
* JFS 2014 Nov 21
* Extracts parameters string from the initial parameters array.
*/
function extractParamsFromArgs(args)
{
	var arguments="?contextscope=";
	if (args["contextscope"] == null) {
		arguments = arguments + "onpremise";
	} else {
		arguments = arguments + args["contextscope"];
	}
	// "dsdoc" parameters
	if (args["collapse"] != null) {
	 arguments = arguments + "&collapse=" + args["collapse"];
	}
	if (args["MyApps"] != null) {
	 arguments = arguments + "&MyApps=" + args["MyApps"];
	}
	if (args["MyAppsURL"] != null) {
	 arguments = arguments + "&MyAppsURL=" + args["MyAppsURL"];
	}
	if (args["login"] != null) {
	 arguments = arguments + "&login=" + args["login"];
	}
	// *help.dsone.3ds.com and help.3ds.com parameters
	if (args["V"] != null) {
	 arguments = arguments + "&V=" + args["V"];
	}
	if (args["L"] != null) {
	 arguments = arguments + "&L=" + args["L"];
	}
	if (args["P"] != null) {
	 arguments = arguments + "&P=" + args["P"];
	}
	// internal anchor must be kept after the parameters
	if (args["ElemID"] != null) {
	 arguments = arguments + args["ElemID"];
	}
	/*alert("arguments="+arguments);*/

	return arguments;
}

// =======================================================================
/**
 * Returns the first father node with given tag name.
 * This function pops the DOM hirearchy and returns the parent node with the given tag name.
 */
function getFatherNode(nodeType, node)
{
	var obj = node;
	while(obj != null && (obj.nodeName == null || obj.nodeName != nodeType))
			obj = obj.parentNode;
	return obj;
}

// =======================================================================
/**
 * Returns the first father node with the given tag name and a non-null ID.
 */
function getFatherNodeWithId(nodeType, node)
{
	var obj = node;
	while(obj != null)
	{
		if(obj.nodeName && obj.nodeName == nodeType && obj.id != null && obj.id != "")
			return obj;
		obj = obj.parentNode;
	}
	return obj;
}

// =======================================================================
/**
 * Loads a file and returns its content.
 */
function loadFile(url, type)
{
	var req = null;
	if (window.ActiveXObject) req = new ActiveXObject("Microsoft.XMLHTTP");
	else if (window.XMLHttpRequest) req = new XMLHttpRequest();
	if (req == null) throw new Error("XMLHttpRequest not supported.");
	
	/*
	if(req.overrideMimeType)
	{
		if(type == "xml")
			req.overrideMimeType("text/xml");
		else if(type == "html")
			req.overrideMimeType("text/html");
		else
		{
			type = "txt";
			req.overrideMimeType("text/plain");
		}
	}
	*/
	
	/*
	// --- async mode
	req.open("GET", url, true);
	req.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
//			setTimeout(this.responseText, 0);
			alert();
		}
	};
	*/
	// --- sync mode
	req.open("GET", url, false);
	
	req.send(null);
	// --- treat errors
//	if (req.readyState != 4 || req.status != 200)
//		alert("Warning: Http Request readystate="+req.readyState+", status="+req.status+" ("+req.statusText+")");
	
	if(type == "txt")
		return req.responseText;
	return req.responseXML;
}

// =======================================================================
/**
 * This function loads the given xml file and returns its root node.
 * VERSION CAA-SPECIFIC
 */
function loadXML(xmlUrl)
{
//alert('xmlUrl = '+xmlUrl);
//	return loadFile(xmlUrl, "xml");
/*
  if (window.top.ActivateIMode!=1) {
    var exp=new RegExp("^Pr[io]","g");
    if (xmlUrl.match(exp)) return '';
  }
*/
	var ref = new RegExp("\/generated","g");
	if (parent.parent.CAAScope=="External" && !(xmlUrl.match(ref))) {
		var exp=new RegExp("^Pr[io]","g");  // Filter protected/private contents in external scope
		if (xmlUrl.match(exp)) return '';
		exp = null;
		exp=new RegExp("\/Pr[io]","g");
		if (xmlUrl.match(exp)) return '';
		exp = null;
		exp=new RegExp("CAA3XDMLISO","g");
		if (xmlUrl.match(exp)) return '';
	}
/*
	else if (parent.parent.CAAScope=="Internal") {
		var exp=new RegExp("CAACenPLMIDE","g"); // Filter external contents in internal scope
		if (xmlUrl.match(exp)) return '';
		exp=new RegExp("CAACppTechArticles","g");
		if (xmlUrl.match(exp)) return '';
		exp=new RegExp("CAAWatWebTestAutomation","g");
		if (xmlUrl.match(exp)) return '';
		exp=new RegExp("CAAiamRESTRef","g");
		if (xmlUrl.match(exp)) return '';
		exp=new RegExp("CAA3DDriveREST","g");
		if (xmlUrl.match(exp)) return '';
	}
*/
	
 	if ('ActiveXObject' in window) {
		var path = parent.parent.document.URL;
		var xmlNode = null;
		if (path.match("http://") || path.match("https://")) {
			var req = new ActiveXObject("Msxml2.XMLHTTP");
			req.open("GET", xmlUrl, false, null, null);
			req.send("");
			while (req.readyState != 4) {
			}
			xmlNode = req.responseXML;
		} else {
			xmlNode = new ActiveXObject("Msxml2.DOMDocument");
			xmlNode.async = false;
			xmlNode.load(xmlUrl);
		}
		return xmlNode;
	} else {
		var req = new XMLHttpRequest();
		req.overrideMimeType("text/xml");
		req.open("GET", xmlUrl, false);
		req.send(null);
		return req.responseXML;
	}
}

// =======================================================================
/**
 * Returns the postion of obj relatively to the given parent (optional).
 */
function getAbsPos(obj, relativeToObj)
{
	var topOffset = 0;
	var leftOffset = 0;
	if(relativeToObj == null) relativeToObj = document.body;
	// --- IE, Netscape>=7, mozilla, ...
	while(true)
	{
		topOffset += obj.offsetTop;
		leftOffset += obj.offsetLeft;
		obj = obj.offsetParent;
		if(!obj) break;
		if(relativeToObj && relativeToObj == obj) break;
		topOffset -= obj.scrollTop;
		leftOffset -= obj.scrollLeft;
	}
	return [leftOffset, topOffset];
}

// =======================================================================
/**
 * Searches the root node for nodes with given arguments.
 */
function searchNodesWithCriterias(rootNode, tagName)
{
	if(rootNode == null)
		return null;
	var results = new Array();
	var nodes = rootNode.getElementsByTagName(tagName);
	for(var i=0; i<products.length; i++)
	{
		var matches = true;
		for(var j=2; j<arguments.length; j+=2)
		{
			var value = nodes[i].getAttribute(arguments[i]);
			if(value != arguments[i+1])
			{
				matches = false;
				break;
			}
		}
		if(matches)
			results.push(nodes[i]);
	}
	return results;
}

// =======================================================================
/**
 * Determines whether if the given window is loaded or not (if it has a body).
 */
function isWindowLoaded(winObj)
{
	try {
		return winObj != null && winObj.document != null && winObj.document.body != null;
	} catch(e) {
		return false;
	}
}

// =======================================================================
// HFJ for Checkvisibility
function loadFile_mod(url, type)
{
	var xmlhttp; 
	try {  
		xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');   
	} catch (e) {
	 try {   
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');    
	} catch (e2) {
		try {  
			xmlhttp = new XMLHttpRequest();  
		} catch (e3) {
		xmlhttp = false;
		}
		}
	}

	if (xmlhttp == null) throw new Error("XMLHttpRequest not supported.");

	xmlhttp.open("GET", url, false);
	xmlhttp.send(null);

	if(type == "txt")
		return xmlhttp.responseText;
	return xmlhttp.responseXML;
}

// =======================================================================
// CHECK RUNTIME VISIBILITY
// JFS+V2E 2012 Feb 16
// =======================================================================
var CRTV_array_loaded = 0;
var CRTV_array = new Array();

function mycheckVisibility(stringToFind) {
	if (CRTV_array_loaded == 0) {
//alert(" load CRTV_array");
		CRTV_array = loadFile_mod("InstalledList.txt", "txt");
		CRTV_array = CRTV_array.toLowerCase();
		CRTV_array_loaded = 1;
//alert(" CRTV_array loaded");
	}
	if (CRTV_array.match("^" + stringToFind.toLowerCase()))
		return true;
	if (CRTV_array.match("\n" + stringToFind.toLowerCase()))
		return true;
//alert(stringToFind + " not found");
	return false;
}

function checkRTVisibility() {
	var arguments = checkRTVisibility.arguments;
	testVar = document.getElementsByTagName("div");
	for (var i = 0; i < arguments.length; i++) {
		if (mycheckVisibility(arguments[i])) {
//alert(arguments[i] + " is visible");
			for (j = 0; j < testVar.length; j++) {
				if (testVar[j].className == arguments[i]) {
					testVar[j].style.visibility = 'inherit';
				}
			}
		} else {
//alert(arguments[i] + " is NOT visible");
			for (j = 0; j < testVar.length; j++) {
				if (testVar[j].className == arguments[i]) {
					testVar[j].style.display = 'none';
				}
			}
		}
	}
}

/*_______________________________________ class management utitlities________________________________________________________*/

function toggleClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

function addClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
		element.className = classString;
    }
}

function removeClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex != -1) {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		element.className = classString;
    }
}

function hasClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        return false;
    } else {
		return true;
	}
}
