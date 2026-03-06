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
 objet["enum"]["SimGenerativeSpecType"]=0;
objet["enum"][0]="../CATSimRepIDLItf/enum_SimGenerativeSpecType_31972.htm";
objet["enum"]["SimMCXDuplicateMode"]=1;
objet["enum"][1]="../CATSimRepIDLItf/enum_SimMCXDuplicateMode_27229.htm";
objet["enum"]["SimXRepRelationType"]=2;
objet["enum"][2]="../CATSimRepIDLItf/enum_SimXRepRelationType_28051.htm";
objet["interface"]["SimComposeLinkServices"]=0;
objet["interface"][0]="../CATSimRepIDLItf/interface_SimComposeLinkServices_37351.htm";
objet["interface"]["SimExcitation"]=1;
objet["interface"][1]="../CATSimRepIDLItf/interface_SimExcitation_21579.htm";
objet["interface"]["SimExcitations"]=2;
objet["interface"][2]="../CATSimRepIDLItf/interface_SimExcitations_23074.htm";
objet["interface"]["SimGenerativeSpecServices"]=3;
objet["interface"][3]="../CATSimRepIDLItf/interface_SimGenerativeSpecServices_44462.htm";
objet["interface"]["SimGenerativeSpecification"]=4;
objet["interface"][4]="../CATSimRepIDLItf/interface_SimGenerativeSpecification_47255.htm";
objet["interface"]["SimGenerativeSpecifications"]=5;
objet["interface"][5]="../CATSimRepIDLItf/interface_SimGenerativeSpecifications_50245.htm";
objet["interface"]["SimImportExportArgs"]=6;
objet["interface"][6]="../CATSimRepIDLItf/interface_SimImportExportArgs_31262.htm";
objet["interface"]["SimLinkAccess"]=7;
objet["interface"][7]="../CATSimRepIDLItf/interface_SimLinkAccess_21177.htm";
objet["interface"]["SimLinkServices"]=8;
objet["interface"][8]="../CATSimRepIDLItf/interface_SimLinkServices_24245.htm";
objet["interface"]["SimManagerSIMAccess"]=9;
objet["interface"][9]="../CATSimRepIDLItf/interface_SimManagerSIMAccess_29764.htm";
objet["interface"]["SimManagerSIMExport"]=10;
objet["interface"][10]="../CATSimRepIDLItf/interface_SimManagerSIMExport_30466.htm";
objet["interface"]["SimManagerSIMImport"]=11;
objet["interface"][11]="../CATSimRepIDLItf/interface_SimManagerSIMImport_30364.htm";
objet["interface"]["SimParameterSet"]=12;
objet["interface"][12]="../CATSimRepIDLItf/interface_SimParameterSet_24136.htm";
objet["interface"]["SimPrdRepFactory"]=13;
objet["interface"][13]="../CATSimRepIDLItf/interface_SimPrdRepFactory_25770.htm";
objet["interface"]["SimProbe"]=14;
objet["interface"][14]="../CATSimRepIDLItf/interface_SimProbe_16090.htm";
objet["interface"]["SimProbes"]=15;
objet["interface"][15]="../CATSimRepIDLItf/interface_SimProbes_17010.htm";
objet["interface"]["SimPublicationServices"]=16;
objet["interface"][16]="../CATSimRepIDLItf/interface_SimPublicationServices_37580.htm";
objet["interface"]["SimRepInitialization"]=17;
objet["interface"][17]="../CATSimRepIDLItf/interface_SimRepInitialization_33516.htm";
objet["interface"]["SimRepServices"]=18;
objet["interface"][18]="../CATSimRepIDLItf/interface_SimRepServices_22779.htm";
objet["interface"]["SimResultRepManager"]=19;
objet["interface"][19]="../CATSimRepIDLItf/interface_SimResultRepManager_30732.htm";
objet["interface"]["SimScenarioResult"]=20;
objet["interface"][20]="../CATSimRepIDLItf/interface_SimScenarioResult_27723.htm";
objet["interface"]["SimScenarioResults"]=21;
objet["interface"][21]="../CATSimRepIDLItf/interface_SimScenarioResults_29678.htm";
objet["interface"]["SimScenarioSpec"]=22;
objet["interface"][22]="../CATSimRepIDLItf/interface_SimScenarioSpec_23956.htm";
objet["interface"]["SimScenarioSpecs"]=23;
objet["interface"][23]="../CATSimRepIDLItf/interface_SimScenarioSpecs_25681.htm";
objet["interface"]["SimSequence"]=24;
objet["interface"][24]="../CATSimRepIDLItf/interface_SimSequence_18952.htm";
objet["interface"]["SimSequenceResults"]=25;
objet["interface"][25]="../CATSimRepIDLItf/interface_SimSequenceResults_29630.htm";
objet["interface"]["SimSequences"]=26;
objet["interface"][26]="../CATSimRepIDLItf/interface_SimSequences_20217.htm";
objet["interface"]["SimSpecsRepManager"]=27;
objet["interface"][27]="../CATSimRepIDLItf/interface_SimSpecsRepManager_28728.htm";
objet["interface"]["SimXRep"]=28;
objet["interface"][28]="../CATSimRepIDLItf/interface_SimXRep_15313.htm";
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