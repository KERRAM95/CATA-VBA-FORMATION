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
 objet["interface"]["SIMPLMService"]=0;
objet["interface"][0]="../CATSimPLMIDLItf/interface_SIMPLMService_20440.htm";
objet["interface"]["SimSimulationService"]=1;
objet["interface"][1]="../CATSimPLMIDLItf/interface_SimSimulationService_32737.htm";
objet["interface"]["SimulationObject"]=2;
objet["interface"][2]="../CATSimPLMIDLItf/interface_SimulationObject_25233.htm";
objet["interface"]["SimulationReference"]=3;
objet["interface"][3]="../CATSimPLMIDLItf/interface_SimulationReference_30494.htm";
objet["interface"]["SimulationRepresentation"]=4;
objet["interface"][4]="../CATSimPLMIDLItf/interface_SimulationRepresentation_42464.htm";
objet["interface"]["SimulationResults"]=5;
objet["interface"][5]="../CATSimPLMIDLItf/interface_SimulationResults_27578.htm";
objet["interface"]["SimulationSpecifications"]=6;
objet["interface"][6]="../CATSimPLMIDLItf/interface_SimulationSpecifications_42024.htm";
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