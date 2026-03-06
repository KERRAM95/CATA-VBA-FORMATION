var objet=new Array; 
     objet["class"]=new Array; 
     objet["exception"]=new Array; 
     objet["collection"]=new Array; 
     objet["notification"]=new Array; 
     objet["interface"]=new Array; 
     objet["struct"]=new Array; 
     objet["enum"]=new Array; 
     objet["define"]=new Array; 
     objet["typedef"]=new Array; 
     objet["function"]=new Array; 
 	var DSCharacteristic=new Array ; 
 objet["interface"]["Marker"]=0;
objet["interface"][0]="../PLMValidationIDLItf/interface_Marker_21488.htm";
objet["interface"]["MarkerPointing"]=1;
objet["interface"][1]="../PLMValidationIDLItf/interface_MarkerPointing_29549.htm";
objet["interface"]["MarkerText"]=2;
objet["interface"][2]="../PLMValidationIDLItf/interface_MarkerText_24703.htm";
objet["interface"]["Markers"]=3;
objet["interface"][3]="../PLMValidationIDLItf/interface_Markers_22178.htm";
objet["interface"]["Slide"]=4;
objet["interface"][4]="../PLMValidationIDLItf/interface_Slide_20890.htm";
objet["interface"]["Slides"]=5;
objet["interface"][5]="../PLMValidationIDLItf/interface_Slides_21465.htm";
objet["interface"]["VALCheck"]=6;
objet["interface"][6]="../PLMValidationIDLItf/interface_VALCheck_22550.htm";
objet["interface"]["VALChecks"]=7;
objet["interface"][7]="../PLMValidationIDLItf/interface_VALChecks_23470.htm";
objet["interface"]["VALConcern"]=8;
objet["interface"][8]="../PLMValidationIDLItf/interface_VALConcern_24483.htm";
objet["interface"]["VALConcerns"]=9;
objet["interface"][9]="../PLMValidationIDLItf/interface_VALConcerns_25633.htm";
objet["interface"]["VALContexts"]=10;
objet["interface"][10]="../PLMValidationIDLItf/interface_VALContexts_25837.htm";
objet["interface"]["VALReview"]=11;
objet["interface"][11]="../PLMValidationIDLItf/interface_VALReview_23614.htm";
objet["interface"]["VALReviews"]=12;
objet["interface"][12]="../PLMValidationIDLItf/interface_VALReviews_24649.htm";
objet["interface"]["VALValidation"]=13;
objet["interface"][13]="../PLMValidationIDLItf/interface_VALValidation_28012.htm";
objet["interface"]["VALValidationService"]=14;
objet["interface"][14]="../PLMValidationIDLItf/interface_VALValidationService_39589.htm";
function getDsCharacteristic(name,itype) { 
     var dsCh = null; 
     if (name!=null && itype!=null && itype == "class") { 
         dsCh = DSCharacteristic[name]; 
     } 
     if (dsCh == null) { 
        dsCh=itype; 
    }   
    return dsCh; 
 } 
 function locateObject(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){      
   return 1; 
 }else{ 
    return 0; 
 } 
 } 
 function openLinkNP(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){ 
     this.location=findobj; 
 } 
 }