
// =======================================================================
// === Highlight Functions
// === Copyright © Dassault Systemes / Santanu BISWAS (June 11 2007)
// =======================================================================
// === This Javascript Library contains functions used by the HTML files
// === to highlight the Search Criteria of the doc portal.
// === Basically, this library contains functions to:
// ===  - Filter the Search Key word,
// ===  - Highlight it in the page.
// =======================================================================
// HISTORY :
// 2007 06 11 HFJ Used to highlight search key word.
// =======================================================================

/*---------------------------------------------------------------- */

var buf = "";
var word = "";
var wordarray = new Array();
// HFJ for highlithing quoted word.
var quotedFlag = false;
var quotedTerm = "";

// =======================================================================
function highlightSearchTerms(treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag)
{
// activate frequents articles
 if(parent.parent.CAAPreprod) setFrequentArticle([document.title,document.location.href]);
	
// add hyperlinks on vb sample Datas
 addSampleDataLinks();
	
  //alert(" OM ");
  getCriteria();

  //alert("OJGSom");

  // HFJ for highlithing quoted word.
  if(quotedFlag)
  {
    //alert(quotedFlag);
    var quotedWordindex = quotedTerm.indexOf(" ");
    quotedTerm = quotedTerm.substring(quotedWordindex+1)
    quotedSearchArray = quotedTerm;
    //alert("quotedTerm"+quotedTerm);
  }
  else
  { 
    var searchArrayone = wordarray      
    if(searchArrayone.length != 0)
    {
      //alert(" Inside give value ");
      searchArray = searchArrayone
    }
    else
    {
       //alert(" Please give the criteria for search.");
       return true;
    }
  }

  if (!document.body || typeof(document.body.innerHTML) == "undefined")
  {
    if (warnOnFailure)
    {
      alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
    }
    return false;
  }
  
  var bodyText = document.body.innerHTML;
  // HFJ for highlithing quoted word. 
  if(quotedFlag)
  {
    //alert(quotedFlag);
    bodyText = doHighlight(bodyText, quotedSearchArray, highlightStartTag, highlightEndTag);
  }
  else
  { 
    for (var i = 0; i < searchArray.length; i++) 
    {
      //alert(quotedFlag);
      if (searchArray[i].length==0)
      {
        //alert("null value "+i);
        //return;
      }
      else
      {
         bodyText = doHighlight(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
      }
    }
  }
     
  document.body.innerHTML = bodyText;
  return true;
}

// =======================================================================
function getCriteria()
{
  var init_failed = "Initialization failed";
  if(window.location.search != "") buf = window.location.search;
  //alert("buf   : " + buf );

  if ( buf.charAt(0) == "?" )
  {
    word = buf
          
    var wordindex = word.lastIndexOf("=");
    word = word.substring(wordindex+1)
 
    /*  //HFJ UTF-8 URLdecoder mainly for Japanese search Highlight.
    word = utf8_URLDecoder(word); */

    //HFJ for onle the quoted keyword string to get highlight
    //alert("word   : " + word );
    if(word.indexOf("%22")==0)
    { 
      quotedFlag = true;
      word = word.substring(0,word.lastIndexOf("%22")); //hfj for the brand link click highlight correction.
      word = word.replace("%22","").replace("%22",""); // hfj for quoted string highlight

      //HFJ UTF-8 URLdecoder mainly for Japanese search Highlight.
      word = utf8_URLDecoder(word);

      var quotedWordarray = new Array();
      quotedWordarray = word.split("+");
      var quotedWord = ""; 
      for(i=0;i<quotedWordarray.length;i++)
      {
        quotedWord = quotedWord + " " + quotedWordarray[i];
      }	
      quotedTerm = quotedWord;
      return quotedTerm;
      //return wordarray
    }
    else
    {
      //HFJ UTF-8 URLdecoder mainly for Japanese search Highlight.
      word = utf8_URLDecoder(word);

      wordarray = word.split("+");
      return wordarray
    }
    //return wordarray
  }
  else
  {
    //alert (init_failed);
  }
}

// =======================================================================
function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag))
  {
    highlightStartTag = "<font style='color:blue; background-color:#9BFFFF;'>";
    highlightEndTag = "</font>";
  }
  
  // find all occurences of the search term in the given text,
  // and add some "highlight" tags to them (we're not using a
  // regular expression search, because we want to filter out
  // matches that occur within HTML tags and script blocks, so
  // we have to do a little extra validation)
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
   
  while (bodyText.length > 0)
  {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0)
    {
      newText += bodyText;
      bodyText = "";
    }
    else
    {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i))
      {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i))
        {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  return newText;
 }

// =======================================================================
//HFJ for Japanese search Highlight using UTF-8 decoder.
function utf8_URLDecoder(urlString)  
{
  // Write data back into window above
  var Data = unescape(urlString);//unescape(obj.value);
     
  var plaintxt = "";
  var i=0;
  var c=c1=c2=0;

  while(i<Data.length)
  { 
    c = Data.charCodeAt(i);
    // all chars from 0-127 => 1byte
    if (c<128)
    {
      plaintxt += String.fromCharCode(c);
      i++;
    }
    // all chars from 127 to 2047 => 2byte
    else if((c>191) && (c<224))
    {
      c2 = Data.charCodeAt(i+1);
      plaintxt += String.fromCharCode(((c&31)<<6) | (c2&63));
      i+=2;
    }
    // all chars from 2048 to 66536 => 3byte
    else
    {
      c2 = Data.charCodeAt(i+1); c3 = Data.charCodeAt(i+2);
      plaintxt += String.fromCharCode(((c&15)<<12) | ((c2&63)<<6) | (c3&63));
      i+=3;
    }
  }

  // Write data back into window above
  return  plaintxt;
}

// managament of frequent articles
function localStorageComp(){   // Check browser support
  if ((typeof(Storage) !== "undefined") && (window.localStorage))
    return true;
  else
    return false;
}
function getFrequentArticles(){
  if(localStorageComp() && window.localStorage.getItem("frequentArticles")){
    var frequentArticles=JSON.parse(window.localStorage.getItem("frequentArticles"));
    return frequentArticles;
  }
  else {
    return [];
  }
}
function isInFrequentArticles(urlArticle, frequentArticles){
  for(i=0; i<frequentArticles.length; i++){
    if(frequentArticles[i][1].toString()===urlArticle.toString())
      return i;
  }
  return -1;
}
function setFrequentArticle(pArticle){
  if(! localStorageComp()) return;
  var url=pArticle[1];
  if(url.indexOf('CAADoc404') > -1) return;
  var  i = url.indexOf('/Doc/');
  if (i >= 0) {
    i =i +5;  // skip '/Doc/'
  } else {
    i = url.indexOf('/doconline/');
    if (i >=0) {
       i = i + 11; // skip '/doconline/'
    } else {
      var  i = url.indexOf('.doc/');
      if (i <0) return;
      i =i +5;  // skip '.doc/'
    }
  }

  pArticle[1]=url.substring(i);
  var frequentArticles=getFrequentArticles();
  var iStatus = isInFrequentArticles(pArticle[1], frequentArticles);
  if (iStatus < 0) {
    if(frequentArticles.length==15) frequentArticles.pop(); // always remove the last one
    pArticle.push(1); // add count to article structure
  }
  else {
    pArticle.push(frequentArticles[iStatus][2]+1); // retrieve & increment count
    frequentArticles.splice(iStatus, 1);  // remove it from list  
  }

  // put is ahead of any url with similar count in frozen list or ahead of challenger list
  var i=0;
  while ((i<7) && (i<frequentArticles.length)) {
    if (frequentArticles[i][2]<=pArticle[2]) break;
    i++;
    }
  frequentArticles.splice(i, 0, pArticle);
  localStorage.setItem("frequentArticles", JSON.stringify(frequentArticles));
}
// should not be here as it knows from where it will be called in the file tree !
function getFrequentArticlesHTML(){
  var frequentArticlesHTML="";
  if(localStorageComp()){
    getFrequentArticles().forEach(function(currentValue){
      frequentArticlesHTML+="<a href=../../"+currentValue[1].toString()+" title="+currentValue[1]+" > - "+currentValue[0].toString()+"</a><br>";
    });
  }
  else{
    frequentArticlesHTML="Your oooold browser is not compatible with localStorage";
  }
  return frequentArticlesHTML;
}

function addSampleDataLinks()
{
  if ((window.top.location.protocol === 'https:') || (window.top.location.protocol === 'http:')) {
    var divs = document.querySelectorAll('div.vb_sample_data');
    for (var i = 0; i < divs.length; i++) { 
      var div = divs[i];

      var text = div.textContent.trim();

      var link = document.createElement('a');
      link.href = 'samples/'+text;
      link.textContent = text;

      div.innerHTML = '';
      div.appendChild(link);
    };
  }
}
