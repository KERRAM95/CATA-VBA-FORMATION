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
 objet["enum"]["DELSpotAccuracyProfileAndAccelerationMoves"]=0;
objet["enum"][0]="../DELSpotWeldingAsIsItf/enum_DELSpotAccuracyProfileAndAccelerationMoves_109785.htm";
objet["enum"]["DELSpotMovingTipClearanceMoves"]=1;
objet["enum"][1]="../DELSpotWeldingAsIsItf/enum_DELSpotMovingTipClearanceMoves_65922.htm";
objet["enum"]["DELSpotProfileApproachDir"]=2;
objet["enum"][2]="../DELSpotWeldingAsIsItf/enum_DELSpotProfileApproachDir_51755.htm";
objet["enum"]["DELSpotProfileMoves"]=3;
objet["enum"][3]="../DELSpotWeldingAsIsItf/enum_DELSpotProfileMoves_39201.htm";
objet["enum"]["DELSpotStationaryTipClearanceMoves"]=4;
objet["enum"][4]="../DELSpotWeldingAsIsItf/enum_DELSpotStationaryTipClearanceMoves_79268.htm";
objet["interface"]["SpotWeldProfile"]=0;
objet["interface"][0]="../DELSpotWeldingAsIsItf/interface_SpotWeldProfile_35241.htm";
objet["interface"]["SpotWeldProfiles"]=1;
objet["interface"][1]="../DELSpotWeldingAsIsItf/interface_SpotWeldProfiles_36966.htm";
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