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
 objet["enum"]["DELDRApproachDirection"]=0;
objet["enum"][0]="../DELSpotWeldingIDLItf/enum_DELDRApproachDirection_42296.htm";
objet["enum"]["DELDRProfileCycle"]=1;
objet["enum"][1]="../DELSpotWeldingIDLItf/enum_DELDRProfileCycle_32133.htm";
objet["enum"]["DELDRProfileMoves"]=2;
objet["enum"][2]="../DELSpotWeldingIDLItf/enum_DELDRProfileMoves_32508.htm";
objet["enum"]["DELDRProfilePrecycle"]=3;
objet["enum"][3]="../DELSpotWeldingIDLItf/enum_DELDRProfilePrecycle_37957.htm";
objet["enum"]["DELDRProfileType"]=4;
objet["enum"][4]="../DELSpotWeldingIDLItf/enum_DELDRProfileType_30798.htm";
objet["enum"]["DELSpotRivetApproachDirection"]=5;
objet["enum"][5]="../DELSpotWeldingIDLItf/enum_DELSpotRivetApproachDirection_60675.htm";
objet["enum"]["DELSpotRivetProfileMoves"]=6;
objet["enum"][6]="../DELSpotWeldingIDLItf/enum_DELSpotRivetProfileMoves_47387.htm";
objet["interface"]["SpotDRAction"]=0;
objet["interface"][0]="../DELSpotWeldingIDLItf/interface_SpotDRAction_28231.htm";
objet["interface"]["SpotDRAction2"]=1;
objet["interface"][1]="../DELSpotWeldingIDLItf/interface_SpotDRAction2_28831.htm";
objet["interface"]["SpotDRActionFactory"]=2;
objet["interface"][2]="../DELSpotWeldingIDLItf/interface_SpotDRActionFactory_39350.htm";
objet["interface"]["SpotDRManufacturingFastener"]=3;
objet["interface"][3]="../DELSpotWeldingIDLItf/interface_SpotDRManufacturingFastener_58253.htm";
objet["interface"]["SpotDRManufacturingFastenerFactory"]=4;
objet["interface"][4]="../DELSpotWeldingIDLItf/interface_SpotDRManufacturingFastenerFactory_80292.htm";
objet["interface"]["SpotDRManufacturingPattern"]=5;
objet["interface"][5]="../DELSpotWeldingIDLItf/interface_SpotDRManufacturingPattern_55821.htm";
objet["interface"]["SpotDRManufacturingPatternFactory"]=6;
objet["interface"][6]="../DELSpotWeldingIDLItf/interface_SpotDRManufacturingPatternFactory_77132.htm";
objet["interface"]["SpotDROperation"]=7;
objet["interface"][7]="../DELSpotWeldingIDLItf/interface_SpotDROperation_32536.htm";
objet["interface"]["SpotDROperationFactory"]=8;
objet["interface"][8]="../DELSpotWeldingIDLItf/interface_SpotDROperationFactory_45839.htm";
objet["interface"]["SpotDRProfile"]=9;
objet["interface"][9]="../DELSpotWeldingIDLItf/interface_SpotDRProfile_29489.htm";
objet["interface"]["SpotDRProfileFactory"]=10;
objet["interface"][10]="../DELSpotWeldingIDLItf/interface_SpotDRProfileFactory_41336.htm";
objet["interface"]["SpotDRSequence"]=11;
objet["interface"][11]="../DELSpotWeldingIDLItf/interface_SpotDRSequence_30838.htm";
objet["interface"]["SpotDRSequence2"]=12;
objet["interface"][12]="../DELSpotWeldingIDLItf/interface_SpotDRSequence2_31538.htm";
objet["interface"]["SpotDRSequenceFactory"]=13;
objet["interface"][13]="../DELSpotWeldingIDLItf/interface_SpotDRSequenceFactory_43413.htm";
objet["interface"]["SpotRivetProfile"]=14;
objet["interface"][14]="../DELSpotWeldingIDLItf/interface_SpotRivetProfile_34166.htm";
objet["interface"]["SpotRivetProfileFactory"]=15;
objet["interface"][15]="../DELSpotWeldingIDLItf/interface_SpotRivetProfileFactory_48197.htm";
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