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
 objet["enum"]["DELRscDataEntityType"]=0;
objet["enum"][0]="../DELRobotSimulationIDLItf/enum_DELRscDataEntityType_47237.htm";
objet["enum"]["DELRscForType"]=1;
objet["enum"][1]="../DELRobotSimulationIDLItf/enum_DELRscForType_35436.htm";
objet["enum"]["DELRscLoopType"]=2;
objet["enum"][2]="../DELRobotSimulationIDLItf/enum_DELRscLoopType_36874.htm";
objet["enum"]["DELRscMoveParameter"]=3;
objet["enum"][3]="../DELRobotSimulationIDLItf/enum_DELRscMoveParameter_45171.htm";
objet["interface"]["DeviceMotionActivity"]=0;
objet["interface"][0]="../DELRobotSimulationIDLItf/interface_DeviceMotionActivity_50829.htm";
objet["interface"]["ResourceTask"]=1;
objet["interface"][1]="../DELRobotSimulationIDLItf/interface_ResourceTask_37393.htm";
objet["interface"]["ResourceTask2"]=2;
objet["interface"][2]="../DELRobotSimulationIDLItf/interface_ResourceTask2_37993.htm";
objet["interface"]["RobotMotionActivity"]=3;
objet["interface"][3]="../DELRobotSimulationIDLItf/interface_RobotMotionActivity_48905.htm";
objet["interface"]["RobotRRSConnection"]=4;
objet["interface"][4]="../DELRobotSimulationIDLItf/interface_RobotRRSConnection_46294.htm";
objet["interface"]["RscAssignment"]=5;
objet["interface"][5]="../DELRobotSimulationIDLItf/interface_RscAssignment_38885.htm";
objet["interface"]["RscBreak"]=6;
objet["interface"][6]="../DELRobotSimulationIDLItf/interface_RscBreak_33321.htm";
objet["interface"]["RscCondition"]=7;
objet["interface"][7]="../DELRobotSimulationIDLItf/interface_RscCondition_37554.htm";
objet["interface"]["RscConst"]=8;
objet["interface"][8]="../DELRobotSimulationIDLItf/interface_RscConst_33528.htm";
objet["interface"]["RscCustomInstruction"]=9;
objet["interface"][9]="../DELRobotSimulationIDLItf/interface_RscCustomInstruction_51168.htm";
objet["interface"]["RscDataEntity"]=10;
objet["interface"][10]="../DELRobotSimulationIDLItf/interface_RscDataEntity_38770.htm";
objet["interface"]["RscFor"]=11;
objet["interface"][11]="../DELRobotSimulationIDLItf/interface_RscFor_32055.htm";
objet["interface"]["RscGoto"]=12;
objet["interface"][12]="../DELRobotSimulationIDLItf/interface_RscGoto_32734.htm";
objet["interface"]["RscInstruction"]=13;
objet["interface"][13]="../DELRobotSimulationIDLItf/interface_RscInstruction_40463.htm";
objet["interface"]["RscLocalVar"]=14;
objet["interface"][14]="../DELRobotSimulationIDLItf/interface_RscLocalVar_36037.htm";
objet["interface"]["RscLoop"]=15;
objet["interface"][15]="../DELRobotSimulationIDLItf/interface_RscLoop_32730.htm";
objet["interface"]["RscPulse"]=16;
objet["interface"][16]="../DELRobotSimulationIDLItf/interface_RscPulse_33476.htm";
objet["interface"]["RscReturn"]=17;
objet["interface"][17]="../DELRobotSimulationIDLItf/interface_RscReturn_34441.htm";
objet["interface"]["RscRunInternalTask"]=18;
objet["interface"][18]="../DELRobotSimulationIDLItf/interface_RscRunInternalTask_46348.htm";
objet["interface"]["RscRunServiceTask"]=19;
objet["interface"][19]="../DELRobotSimulationIDLItf/interface_RscRunServiceTask_44512.htm";
objet["interface"]["RscSequence"]=20;
objet["interface"][20]="../DELRobotSimulationIDLItf/interface_RscSequence_36239.htm";
objet["interface"]["RscWait"]=21;
objet["interface"][21]="../DELRobotSimulationIDLItf/interface_RscWait_32701.htm";
objet["interface"]["SPMOperation"]=22;
objet["interface"][22]="../DELRobotSimulationIDLItf/interface_SPMOperation_37498.htm";
objet["interface"]["TagFactory"]=23;
objet["interface"][23]="../DELRobotSimulationIDLItf/interface_TagFactory_35388.htm";
objet["interface"]["TagGroup"]=24;
objet["interface"][24]="../DELRobotSimulationIDLItf/interface_TagGroup_33531.htm";
objet["interface"]["TagGroupFactory"]=25;
objet["interface"][25]="../DELRobotSimulationIDLItf/interface_TagGroupFactory_41738.htm";
objet["interface"]["TagModelServices"]=26;
objet["interface"][26]="../DELRobotSimulationIDLItf/interface_TagModelServices_43055.htm";
objet["interface"]["TagPoint"]=27;
objet["interface"][27]="../DELRobotSimulationIDLItf/interface_TagPoint_33502.htm";
objet["interface"]["TaskManager"]=28;
objet["interface"][28]="../DELRobotSimulationIDLItf/interface_TaskManager_36171.htm";
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