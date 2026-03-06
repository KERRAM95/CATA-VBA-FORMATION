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
 objet["interface"]["DrManufacturingFastener"]=0;
objet["interface"][0]="../DELDrillRivetFeatureUseItf/interface_DrManufacturingFastener_63393.htm";
objet["interface"]["DrManufacturingPattern"]=1;
objet["interface"][1]="../DELDrillRivetFeatureUseItf/interface_DrManufacturingPattern_61321.htm";
objet["interface"]["DrManufacturingProduct"]=2;
objet["interface"][2]="../DELDrillRivetFeatureUseItf/interface_DrManufacturingProduct_61350.htm";
objet["interface"]["DrPatternGroup"]=3;
objet["interface"][3]="../DELDrillRivetFeatureUseItf/interface_DrPatternGroup_46486.htm";
objet["interface"]["DrPatternGroupFactory"]=4;
objet["interface"][4]="../DELDrillRivetFeatureUseItf/interface_DrPatternGroupFactory_59061.htm";
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