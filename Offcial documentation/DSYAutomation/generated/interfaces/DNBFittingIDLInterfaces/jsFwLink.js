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
 objet["enum"]["DNBInterpolater"]=0;
objet["enum"][0]="../DNBFittingIDLInterfaces/enum_DNBInterpolater_37008.htm";
objet["enum"]["DNBTrackMode"]=1;
objet["enum"][1]="../DNBFittingIDLInterfaces/enum_DNBTrackMode_32284.htm";
objet["interface"]["FitTrack"]=0;
objet["interface"][0]="../DNBFittingIDLInterfaces/interface_FitTrack_31708.htm";
objet["interface"]["FitTrackTPoint"]=1;
objet["interface"][1]="../DNBFittingIDLInterfaces/interface_FitTrackTPoint_38193.htm";
objet["interface"]["FitTrackTPoints"]=2;
objet["interface"][2]="../DNBFittingIDLInterfaces/interface_FitTrackTPoints_39803.htm";
objet["interface"]["FittingService"]=3;
objet["interface"][3]="../DNBFittingIDLInterfaces/interface_FittingService_38359.htm";
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