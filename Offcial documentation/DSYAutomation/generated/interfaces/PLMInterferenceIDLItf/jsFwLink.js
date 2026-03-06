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
 objet["enum"]["CatInterferenceComparison"]=0;
objet["enum"][0]="../PLMInterferenceIDLItf/enum_CatInterferenceComparison_52244.htm";
objet["enum"]["CatInterferenceComputeQuantifier"]=1;
objet["enum"][1]="../PLMInterferenceIDLItf/enum_CatInterferenceComputeQuantifier_72724.htm";
objet["enum"]["CatInterferenceGroupComputationType"]=2;
objet["enum"][2]="../PLMInterferenceIDLItf/enum_CatInterferenceGroupComputationType_83625.htm";
objet["enum"]["CatInterferenceGroupComputationType2"]=3;
objet["enum"][3]="../PLMInterferenceIDLItf/enum_CatInterferenceGroupComputationType2_85375.htm";
objet["enum"]["CatInterferenceIntermediateRepresentation"]=4;
objet["enum"][4]="../PLMInterferenceIDLItf/enum_CatInterferenceIntermediateRepresentation_107281.htm";
objet["enum"]["CatInterferenceResultStatus"]=5;
objet["enum"][5]="../PLMInterferenceIDLItf/enum_CatInterferenceResultStatus_58047.htm";
objet["enum"]["CatInterferenceResultType"]=6;
objet["enum"][6]="../PLMInterferenceIDLItf/enum_CatInterferenceResultType_52248.htm";
objet["enum"]["CatInterferenceResultUserType"]=7;
objet["enum"][7]="../PLMInterferenceIDLItf/enum_CatInterferenceResultUserType_63294.htm";
objet["enum"]["CatInterferenceSpecificationType"]=8;
objet["enum"][8]="../PLMInterferenceIDLItf/enum_CatInterferenceSpecificationType_72345.htm";
objet["enum"]["CatInterferenceSpecificationTypeEngCnx"]=9;
objet["enum"][9]="../PLMInterferenceIDLItf/enum_CatInterferenceSpecificationTypeEngCnx_92430.htm";
objet["interface"]["InterferenceGroupObjects"]=0;
objet["interface"][0]="../PLMInterferenceIDLItf/interface_InterferenceGroupObjects_52363.htm";
objet["interface"]["InterferenceResult"]=1;
objet["interface"][1]="../PLMInterferenceIDLItf/interface_InterferenceResult_39873.htm";
objet["interface"]["InterferenceResults"]=2;
objet["interface"][2]="../PLMInterferenceIDLItf/interface_InterferenceResults_41943.htm";
objet["interface"]["InterferenceServices"]=3;
objet["interface"][3]="../PLMInterferenceIDLItf/interface_InterferenceServices_43552.htm";
objet["interface"]["InterferenceSimulation"]=4;
objet["interface"][4]="../PLMInterferenceIDLItf/interface_InterferenceSimulation_48143.htm";
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