	var hdrTab  = new Array();
	var hdr     = new Array();
	var code    = new Array();
	var curhdr  = new Array();
	var curcode = new Array();

	var n = 0; // Count of samples in file


function initCode () {
	var samples;
	if (document.getElementsByClassName) {
		samples = document.getElementsByClassName('codeSample');
	}
	else  // for chm browser support (very old IE version)
	{
		samples = new Array();
		var nn = document.all.length;
		for (var ii=0; ii<nn; ii++) {
			if (! document.all[ii].className.match(/codeSample/)) continue;
			samples.push(document.all[ii]);
		}
	}
	n = samples.length;


	for (var i=0; i<n; i++) {
		var sChildren = samples[i].childNodes;
		var nbLang = 0;
		var nbLang2= 0;
		hdr    [i] = new Array();
		code   [i] = new Array();
		var lChildren = new Array();
		var dChildren = new Array();
		for (var j=0; j<sChildren.length; j++) {
			//alert('j = '+j+' - element is: '+sChildren[j].nodeName);
			if (sChildren[j].nodeName == 'TABLE') {
				sChildren[j].id = 'hdrTab'+i;
				hdrTab[i] = sChildren[j];
				hdrTab[i].className = 'codeHeader';
				var tabChild = sChildren[j].childNodes
				for (var j1=0; j1<tabChild.length; j1++) {
			//alert('j1 = '+j1+' - element is: '+tabChild[j1].nodeName);
					if (tabChild[j1].nodeName == 'TBODY') {
						var tabBodyChild = tabChild[j1].childNodes;
						for (var j2=0; j2<tabBodyChild.length; j2++) {
			//alert('j2 = '+j2+' - element is: '+tabBodyChild[j2].nodeName);
							if (tabBodyChild[j2].nodeName == 'TR') {
								lChildren = tabBodyChild[j2].childNodes;
								for (var k=0; k<lChildren.length; k++) {
			//alert('k = '+k+' - element is: '+lChildren[k].nodeName);
									if (lChildren[k].nodeName == 'TH') {
			//alert('nbLang = '+nbLang+' - element is: '+lChildren[k].innerHTML);
									
										if (lChildren[k].innerHTML == '&nbsp;') {
											lChildren[k].id = 'hdr'+'Null-'+i;
											hdr[i]['Null'] = lChildren[k].id;
										} else {
											lChildren[k].id = 'hdr'+lChildren[k].innerHTML+'-'+i;
											hdr[i][lChildren[k].innerHTML] = lChildren[k];
										}
										if (nbLang == 0) {
											lChildren[k].className = 'tabselected';
											lChildren[k].onclick=switchLanguage;
											curhdr[i] = lChildren[k];
											dChildren[nbLang] = lChildren[k];
										} else if (lChildren[k].innerHTML == '&nbsp;') {
											lChildren[k].className = 'tab0';
										} else {
											lChildren[k].className = 'tab';
											lChildren[k].onclick=switchLanguage;
											dChildren[nbLang] = lChildren[k];
										}
										nbLang++;
									}
								}
							}
						}
					}
				}
			}
			else if (sChildren[j].nodeName == 'DIV') {
				sChildren[j].id = 'code'+dChildren[nbLang2].innerHTML+'-'+i;
				code   [i][dChildren[nbLang2].innerHTML] = sChildren[j];
				if (nbLang2 == 0) {
					code[i][dChildren[nbLang2].innerHTML].className = 'VBcode';
					curcode[i] = code[i][dChildren[nbLang2].innerHTML];
				} else {
					code[i][dChildren[nbLang2].innerHTML].className = 'VBcodeHidden';
				}
				nbLang2++;
			}
		}
	}
}
function switchLanguage(evt) {
	evt = (evt ? evt : window.event);
	var target = evt.target || evt.srcElement; // for chm browser support
	if (target != null) {
		var id = target.id;
		var lang;
		var i;
		var xxx = id.split('-');
		lang = xxx[0].substring(3, xxx[0].length);
		i = xxx[1];
		//alert ('Selected tab: '+lang+ ' i='+i);
		for (var j=0; j<n; j++) {
			// Selected language exists in j code samples and is not current
			if (hdr[j][lang] != null && hdr[j][lang] != curhdr[j]) {
				hdr[j][lang].className     = 'tabselected';
				code[j][lang].className    = 'VBcode';
				curhdr[j].className        = 'tab';
				curcode[j].className       = 'VBcodeHidden';
				curhdr[j]                  = hdr[j][lang];
				curcode[j]                 = code[j][lang];
			} else {
				// No change. No sample for selected language
				//alert("No change - j="+j+" - lang="+lang);
			}
		}
	}
}
