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
 objet["enum"]["CATSectioningMode"]=0;
objet["enum"][0]="../CATOpnsSectionIDLItf/enum_CATSectioningMode_32568.htm";
objet["enum"]["CATSectioningPlaneVisuMode"]=1;
objet["enum"][1]="../CATOpnsSectionIDLItf/enum_CATSectioningPlaneVisuMode_51853.htm";
objet["enum"]["CatSectionBehavior"]=2;
objet["enum"][2]="../CATOpnsSectionIDLItf/enum_CatSectionBehavior_34718.htm";
objet["enum"]["CatSectionType"]=3;
objet["enum"][3]="../CATOpnsSectionIDLItf/enum_CatSectionType_28325.htm";
objet["interface"]["Section"]=0;
objet["interface"][0]="../CATOpnsSectionIDLItf/interface_Section_24016.htm";
objet["interface"]["SectionService"]=1;
objet["interface"][1]="../CATOpnsSectionIDLItf/interface_SectionService_31267.htm";
objet["interface"]["SectioningSettingAtt"]=2;
objet["interface"][2]="../CATOpnsSectionIDLItf/interface_SectioningSettingAtt_41564.htm";
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