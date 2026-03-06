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
 objet["enum"]["AccuracyType"]=0;
objet["enum"][0]="../DELResourceBuilderIDLItf/enum_AccuracyType_34055.htm";
objet["enum"]["DELRscControllerDataContext"]=1;
objet["enum"][1]="../DELResourceBuilderIDLItf/enum_DELRscControllerDataContext_63610.htm";
objet["enum"]["DELRscControllerGenericProfilesType"]=2;
objet["enum"][2]="../DELResourceBuilderIDLItf/enum_DELRscControllerGenericProfilesType_89005.htm";
objet["enum"]["DELRscJointType"]=3;
objet["enum"][3]="../DELResourceBuilderIDLItf/enum_DELRscJointType_37912.htm";
objet["enum"]["DELRscMotionControllerType"]=4;
objet["enum"][4]="../DELResourceBuilderIDLItf/enum_DELRscMotionControllerType_61379.htm";
objet["enum"]["DELRscSimulationStatus"]=5;
objet["enum"][5]="../DELResourceBuilderIDLItf/enum_DELRscSimulationStatus_51726.htm";
objet["enum"]["DELRscSimulationVisualizationUpdate"]=6;
objet["enum"][6]="../DELResourceBuilderIDLItf/enum_DELRscSimulationVisualizationUpdate_89825.htm";
objet["enum"]["MotionBasis"]=7;
objet["enum"][7]="../DELResourceBuilderIDLItf/enum_MotionBasis_32775.htm";
objet["interface"]["RobotRRSParameters"]=0;
objet["interface"][0]="../DELResourceBuilderIDLItf/interface_RobotRRSParameters_45902.htm";
objet["interface"]["RscAccuracyProfile"]=1;
objet["interface"][1]="../DELResourceBuilderIDLItf/interface_RscAccuracyProfile_45971.htm";
objet["interface"]["RscApplicativeProfile"]=2;
objet["interface"][2]="../DELResourceBuilderIDLItf/interface_RscApplicativeProfile_51966.htm";
objet["interface"]["RscApplicativeProfilesGroup"]=3;
objet["interface"][3]="../DELResourceBuilderIDLItf/interface_RscApplicativeProfilesGroup_67066.htm";
objet["interface"]["RscApplicativeProfilesMgr"]=4;
objet["interface"][4]="../DELResourceBuilderIDLItf/interface_RscApplicativeProfilesMgr_61180.htm";
objet["interface"]["RscControllerAttributes"]=5;
objet["interface"][5]="../DELResourceBuilderIDLItf/interface_RscControllerAttributes_57253.htm";
objet["interface"]["RscControllerAttributesAccess"]=6;
objet["interface"][6]="../DELResourceBuilderIDLItf/interface_RscControllerAttributesAccess_72550.htm";
objet["interface"]["RscGenericProfilesMgr"]=7;
objet["interface"][7]="../DELResourceBuilderIDLItf/interface_RscGenericProfilesMgr_51667.htm";
objet["interface"]["RscHomePositions"]=8;
objet["interface"][8]="../DELResourceBuilderIDLItf/interface_RscHomePositions_42957.htm";
objet["interface"]["RscIOSignalsExchange"]=9;
objet["interface"][9]="../DELResourceBuilderIDLItf/interface_RscIOSignalsExchange_49297.htm";
objet["interface"]["RscKinematicsRelations"]=10;
objet["interface"][10]="../DELResourceBuilderIDLItf/interface_RscKinematicsRelations_54510.htm";
objet["interface"]["RscMotionController"]=11;
objet["interface"][11]="../DELResourceBuilderIDLItf/interface_RscMotionController_48379.htm";
objet["interface"]["RscMotionGroup"]=12;
objet["interface"][12]="../DELResourceBuilderIDLItf/interface_RscMotionGroup_39771.htm";
objet["interface"]["RscMotionProfile"]=13;
objet["interface"][13]="../DELResourceBuilderIDLItf/interface_RscMotionProfile_42608.htm";
objet["interface"]["RscObjFrameProfile"]=14;
objet["interface"][14]="../DELResourceBuilderIDLItf/interface_RscObjFrameProfile_45652.htm";
objet["interface"]["RscSimulation"]=15;
objet["interface"][15]="../DELResourceBuilderIDLItf/interface_RscSimulation_38452.htm";
objet["interface"]["RscToolProfile"]=16;
objet["interface"][16]="../DELResourceBuilderIDLItf/interface_RscToolProfile_39523.htm";
objet["interface"]["RscTransform"]=17;
objet["interface"][17]="../DELResourceBuilderIDLItf/interface_RscTransform_37181.htm";
objet["interface"]["RscUserProfilesMgr"]=18;
objet["interface"][18]="../DELResourceBuilderIDLItf/interface_RscUserProfilesMgr_45879.htm";
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