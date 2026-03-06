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
 objet["enum"]["CatKinSimuChannelType"]=0;
objet["enum"][0]="../CATKinSimulationIDLItf/enum_CatKinSimuChannelType_44533.htm";
objet["interface"]["KinRecordedExcitation"]=0;
objet["interface"][0]="../CATKinSimulationIDLItf/interface_KinRecordedExcitation_47991.htm";
objet["interface"]["KinScenarioSpec"]=1;
objet["interface"][1]="../CATKinSimulationIDLItf/interface_KinScenarioSpec_36666.htm";
objet["interface"]["KinSimulationChannel"]=2;
objet["interface"][2]="../CATKinSimulationIDLItf/interface_KinSimulationChannel_45619.htm";
objet["interface"]["KinSimulationChannels"]=3;
objet["interface"][3]="../CATKinSimulationIDLItf/interface_KinSimulationChannels_47919.htm";
objet["interface"]["KinSimulationScenarioResult"]=4;
objet["interface"][4]="../CATKinSimulationIDLItf/interface_KinSimulationScenarioResult_63106.htm";
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