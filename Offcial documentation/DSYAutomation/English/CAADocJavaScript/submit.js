// Global variables
var NS4 = false;
var NS7 = false;
var IE  = false;

//alert(navigator.appName);
//alert(navigator.appVersion);

if (navigator.appName == "Netscape")
{
	NSVer = navigator.appVersion;
	NSVer = NSVer.substring(0,1);
	if (NSVer >= 5) {
		NS7 = true; // Mozilla
	} else {
		NS4 = true; // Netscape
	}
	window.defaultstatus="CAA Version 5";
} else {
	IE = true;  // Internet Explorer
}

// Link withtout prereq: to be used cautiously
function CAAlinkOutOfPreqs(iMod)
{
	url = '../' + iMod;
	if (NS7) {
		// Mozilla
		window.parent.frames["CAAPage"].location = url;
	} else {
		// Netscape or IE
		// alert("Netscape or IE");
		//window.open(url, "CAAP age");
		window.open(url, "_self");
	}
}

// Link to a URL
function CAAlinkUrl(iUrl)
{
	window.open(iUrl, "_blank");
}


function CAAlink(iLanguage, iFramework, iObjectType, iInterface, iMethod)
{

/*	alert("iLanguage = "+iLanguage+
		  "\niFramework = "+iFramework+
		  "\niObjectType = "+iObjectType+
		  "\niInterface = "+iInterface+
		  "\nMethod = "+iMethod);
*/

	var url, dir, name;
	if (iLanguage == "CPP") {
		dir = "../../generated/refman/";
	} else if (iLanguage == "IDL") {
		dir = "../../generated/interfaces/";
	}

	if (!iFramework) {
		url = dir + "_index/main.htm";
	} else {
		if (iFramework == "Deprecated") { // Link to the deprecation page
			if (iLanguage == "CPP") {
				url = dir + "_index/Deprecated.htm";
			} else if (iLanguage == "IDL") {
				url = dir + "_index/CAADeprecatedIdx.htm";
			}
		} else if (iFramework == "HOME") {  // Link to the static home page
			url = dir + "_index/main.htm";
		} else if (iFramework == "TREE") {  // Link to the class hierarchy page
			url = dir + "_index/tree.htm";
		} else if (iFramework == "INDEX") { // Link to the master index page
			if (iLanguage == "CPP") {
				url = dir + "_index/HomeIdx.htm";
			} else if (iLanguage == "IDL") {
				url = dir + "_index/CAAHomeIdx.htm";
			}
		} else { 
			if (!iObjectType && !iInterface) {
				url = dir + iFramework + ".htm";
			} else {
				url = dir + iFramework + ".htm";
				var xmlFileName = null;
				xmlFileName = dir + iFramework + "/CAA" + iFramework + "Toc.xml";
				//alert ("XML file = "+xmlFileName);
				var newNode = null;
				try {
					//alert ("Try XML file = "+xmlFileName);
				    var xmlNode = null;
 					if(IE) {
						// --- Internet Explorer
						//var xmlNode = new ActiveXObject("Microsoft.XMLDOM");
						var xmlNode = new ActiveXObject("Msxml2.DOMDocument");
						xmlNode.async = false;
						xmlNode.load(xmlFileName);
					} else if (NS7) {
						// --- Mozilla
						var req = new XMLHttpRequest();
						req.overrideMimeType("text/xml");
						req.open("GET", xmlFileName, false);
						req.send(null);
						xmlNode = req.responseXML;
					}
					newNode = xmlNode.getElementsByTagName('Root')[0];
					var i = 0;
					var found = "no";
					while(newNode.firstChild != null)
					{
						i++;
						var curchild = newNode.firstChild;
						newNode.removeChild(curchild);
						if(curchild.nodeType == 1 && curchild.nodeName != "parsererror") {
							var type = "";
							if (curchild.getAttribute("type")=="collection" ||
								curchild.getAttribute("type")=="exception" ||
								curchild.getAttribute("type")=="notification") {
								type = "class";
							} else {
								type = curchild.getAttribute("type");
							}
							if (iObjectType && iInterface && curchild.nodeName=="ITEM" && type==iObjectType) {
								//alert("Type = "+iObjectType+" -- Name = "+iInterface);
								var motif = iObjectType+"_"+iInterface;
								motif = motif.replace(/\(/,"\\("); // To match parentheses in collections
								motif = motif.replace(/\)/,"\\)"); 
								//alert("motif = "+motif);
								while(curchild.firstChild != null)
								{
									//alert("Dans while - curchild.firstChild.nodeName = "+curchild.firstChild.nodeName);
									var curGrandChild = curchild.firstChild;
									//alert("i = "+i+" -- curGrandChild.nodeType = "+curGrandChild.nodeType+" -- nodeName = "+curGrandChild.nodeName+" -- name = "+curGrandChild.getAttribute("href"));
									curchild.removeChild(curGrandChild);

									//if (curGrandChild.getAttribute('href').match(exp)) {
									if (curGrandChild.nodeType == 1 && curGrandChild.getAttribute('href').search(motif)!=-1) {
									//alert("i = "+i+" -- href = "+curGrandChild.getAttribute('href'));
										url = url.replace(/\.htm/,"");
										var urlTemp = curGrandChild.getAttribute('href');
										urlTemp = urlTemp.replace(/\.htm/,""); // To take _function* files ending with .htm into account
										url = url + "/" + urlTemp + ".htm";
										//url = url + "/" + curGrandChild.getAttribute('href') + ".htm";
										if (iMethod) {
											url = url + "#" + iMethod;
										}
										//alert ("url = "+url);
										found = "yes";
										break;
									}
								}
								if (found=="yes") { break; }
							}
							//alert ("type = "+curchild.getAttribute('type')+" -- name = "+curchild.getAttribute('name')+" -- id = "+curchild.getAttribute('id'));
							//node.insertBefore(curchild, importNode);
						}
					}
				} catch(e) {
					// --- import XML not found
					alert ("import XML file "+xmlFileName+" not found");
				}
			}
		}
	}
//window.open(url, "CAAPage");
//window.open(url, window.name);
	if (NS7) {
    // Mozilla
		//window.parent.frames["CAAPage"].location = url;
    		window.open(url, "_self");
	} else if (IE) {
		// IE
		// alert("Netscape or IE");
		//window.open(url, "CAAPage");
		//window.open(url, window.name);
    		window.open(url, "_self");
	}
}

function CAAlinkJava(iPackage, iInterface, iMethod)
{
  var url, dir;
  dir = "../../docs/api/com/dassault_systemes/";

  if (!iPackage)
  {
    url = "../../docs/api/index.html";
  }
  else
  {
    if (iPackage == "Deprecated")
    {
      url = "../../docs/api/deprecated-list.html";
    }
    else
    {
      if (!iInterface)
      {
        url = dir + iPackage + ".html";
      }
      else
      {
        if (!iMethod)
        {
          url = dir + iPackage + "/" + iInterface + ".html";
        }
        else
        {
          url = dir + iPackage + "/" + iInterface + ".html#" + iMethod;
        }
      }
    }
  }
//  window.open(url, "CAAPage");
//  window.open(url, window.name);
  if (NS7)
  {
    // Mozilla
//	alert("Mozilla");
    window.parent.frames["CAAPage"].location = url;
  }
  else
  {
    // Netscape or IE
//	alert("Netscape or IE");
//    window.open(url, "CAAPage");
    window.open(url, window.name);
  }
}

// Link to a URL but open a new window
function CAAlinkUrlNewWin(iUrl)
{
  window.open(iUrl, "_new");
}

function insertLinkToTop()
{
	document.writeln('<table>');
	document.writeln('<tr>');
	document.writeln('<td width="100%"><hr class="top"></td>');
	document.writeln('<td><a href="#Top" class="top"><img src="../CAAIcons/images/butix_top.gif" alt="Top"></a></td>');
	document.writeln('</tr>');
	document.writeln('</table>');
}

function insertCopyright()
{
	document.writeln('<p class="copyright"><strong>3D</strong>EXPERIENCE R2020x &#169; 2019 Dassault Syst&#232;mes.<br>');
	document.writeln('<a href="../CAADocQuickRefs/CAADocSpecialNotices.htm">Legal Notices</a></p>');
}

function insertRepository()
{
	document.writeln('PLM1');
	//document.writeln('EV5');
}

/**
 * Same function as for tree + catch
 */
function CAAloadFileContent(url, iStop)
{
	var req = null;
	if (window.XMLHttpRequest) req = new XMLHttpRequest();
	else if (window.ActiveXObject) req = new ActiveXObject("Microsoft.XMLHTTP");
	if (req == null) throw new Error("XMLHttpRequest not supported.");
	
	// --- sync mode
	req.open("GET", url, false);

	try {	
	req.send(null);
	}
	catch (err) {
		if (! iStop)  {
			return CAAloadFileContent('../CAADocJavaScript/FileNotInstalled.htm', 'Y');
			}
		else	{
			throw new Error("File Not Found");
			}
      }
	return req.responseText;
}

/** 
  * Encapsulation of Load ...
  */
function CAAsafeLinkOutOfPreqs (url) {
	//fram = window.parent.frames["Content"];
	txto= CAAloadFileContent(url);
	window.document.write(txto);
	}

// To enlarge images
function showImg(image, width, height) {
  var W=width+20;
  var H=height+20;
  window.open(image, '_blank', 'width='+W+', height='+H+', toolbar=no, scrollbar=no, resizable=no, menubar=no');
}
