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
 objet["enum"]["CatDescriptionLengthType"]=0;
objet["enum"][0]="../KnowHowIDLItf/enum_CatDescriptionLengthType_36877.htm";
objet["enum"]["CatOutPutFormatType"]=1;
objet["enum"][1]="../KnowHowIDLItf/enum_CatOutPutFormatType_25832.htm";
objet["enum"]["CatShowResultType"]=2;
objet["enum"][2]="../KnowHowIDLItf/enum_CatShowResultType_22398.htm";
objet["enum"]["CatSolveType"]=3;
objet["enum"][3]="../KnowHowIDLItf/enum_CatSolveType_14855.htm";
objet["enum"]["CatVisualizationType"]=4;
objet["enum"][4]="../KnowHowIDLItf/enum_CatVisualizationType_28242.htm";
objet["enum"]["CatWorkingMode"]=5;
objet["enum"][5]="../KnowHowIDLItf/enum_CatWorkingMode_17178.htm";
objet["interface"]["ExpertCheck"]=0;
objet["interface"][0]="../KnowHowIDLItf/interface_ExpertCheck_16491.htm";
objet["interface"]["ExpertCheckRuntime"]=1;
objet["interface"][1]="../KnowHowIDLItf/interface_ExpertCheckRuntime_26887.htm";
objet["interface"]["ExpertReportObject"]=2;
objet["interface"][2]="../KnowHowIDLItf/interface_ExpertReportObject_26879.htm";
objet["interface"]["ExpertReportObjects"]=3;
objet["interface"][3]="../KnowHowIDLItf/interface_ExpertReportObjects_28949.htm";
objet["interface"]["ExpertRule"]=4;
objet["interface"][4]="../KnowHowIDLItf/interface_ExpertRule_15676.htm";
objet["interface"]["ExpertRuleBase"]=5;
objet["interface"][5]="../KnowHowIDLItf/interface_ExpertRuleBase_20096.htm";
objet["interface"]["ExpertRuleBaseComponentRuntime"]=6;
objet["interface"][6]="../KnowHowIDLItf/interface_ExpertRuleBaseComponentRuntime_56593.htm";
objet["interface"]["ExpertRuleBaseComponentRuntimes"]=7;
objet["interface"][7]="../KnowHowIDLItf/interface_ExpertRuleBaseComponentRuntimes_60043.htm";
objet["interface"]["ExpertRuleBaseRuntime"]=8;
objet["interface"][8]="../KnowHowIDLItf/interface_ExpertRuleBaseRuntime_32712.htm";
objet["interface"]["ExpertRuleBasesFactory"]=9;
objet["interface"][9]="../KnowHowIDLItf/interface_ExpertRuleBasesFactory_35009.htm";
objet["interface"]["ExpertRuleBasesSet"]=10;
objet["interface"][10]="../KnowHowIDLItf/interface_ExpertRuleBasesSet_26539.htm";
objet["interface"]["ExpertRuleRuntime"]=11;
objet["interface"][11]="../KnowHowIDLItf/interface_ExpertRuleRuntime_25332.htm";
objet["interface"]["ExpertRuleSet"]=12;
objet["interface"][12]="../KnowHowIDLItf/interface_ExpertRuleSet_19009.htm";
objet["interface"]["ExpertRuleSetRuntime"]=13;
objet["interface"][13]="../KnowHowIDLItf/interface_ExpertRuleSetRuntime_30885.htm";
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