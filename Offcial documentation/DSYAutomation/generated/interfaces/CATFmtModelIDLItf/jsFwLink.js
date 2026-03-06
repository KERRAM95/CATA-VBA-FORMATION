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
 objet["enum"]["SimMeshEntityType"]=0;
objet["enum"][0]="../CATFmtModelIDLItf/enum_SimMeshEntityType_27583.htm";
objet["enum"]["SimMeshingRuleAttr"]=1;
objet["enum"][1]="../CATFmtModelIDLItf/enum_SimMeshingRuleAttr_29018.htm";
objet["interface"]["SimAbstractions"]=0;
objet["interface"][0]="../CATFmtModelIDLItf/interface_SimAbstractions_27515.htm";
objet["interface"]["SimAutomatedSpecifications"]=1;
objet["interface"][1]="../CATFmtModelIDLItf/interface_SimAutomatedSpecifications_50397.htm";
objet["interface"]["SimBehaviors"]=2;
objet["interface"][2]="../CATFmtModelIDLItf/interface_SimBehaviors_23279.htm";
objet["interface"]["SimConnectionProperties"]=3;
objet["interface"][3]="../CATFmtModelIDLItf/interface_SimConnectionProperties_43311.htm";
objet["interface"]["SimFemFeatureInitialization"]=4;
objet["interface"][4]="../CATFmtModelIDLItf/interface_SimFemFeatureInitialization_53369.htm";
objet["interface"]["SimFemRoot"]=5;
objet["interface"][5]="../CATFmtModelIDLItf/interface_SimFemRoot_20865.htm";
objet["interface"]["SimGroup"]=6;
objet["interface"][6]="../CATFmtModelIDLItf/interface_SimGroup_19215.htm";
objet["interface"]["SimGroups"]=7;
objet["interface"][7]="../CATFmtModelIDLItf/interface_SimGroups_20135.htm";
objet["interface"]["SimInteractions"]=8;
objet["interface"][8]="../CATFmtModelIDLItf/interface_SimInteractions_27502.htm";
objet["interface"]["SimMCXProperties"]=9;
objet["interface"][9]="../CATFmtModelIDLItf/interface_SimMCXProperties_28778.htm";
objet["interface"]["SimMeshElement"]=10;
objet["interface"][10]="../CATFmtModelIDLItf/interface_SimMeshElement_25624.htm";
objet["interface"]["SimMeshEntity"]=11;
objet["interface"][11]="../CATFmtModelIDLItf/interface_SimMeshEntity_24524.htm";
objet["interface"]["SimMeshIsolatedNode"]=12;
objet["interface"][12]="../CATFmtModelIDLItf/interface_SimMeshIsolatedNode_33485.htm";
objet["interface"]["SimMeshNode"]=13;
objet["interface"][13]="../CATFmtModelIDLItf/interface_SimMeshNode_21683.htm";
objet["interface"]["SimMeshPart"]=14;
objet["interface"][14]="../CATFmtModelIDLItf/interface_SimMeshPart_21861.htm";
objet["interface"]["SimMeshParts"]=15;
objet["interface"][15]="../CATFmtModelIDLItf/interface_SimMeshParts_23126.htm";
objet["interface"]["SimMeshQuality"]=16;
objet["interface"][16]="../CATFmtModelIDLItf/interface_SimMeshQuality_25915.htm";
objet["interface"]["SimMeshServices"]=17;
objet["interface"][17]="../CATFmtModelIDLItf/interface_SimMeshServices_27200.htm";
objet["interface"]["SimMeshSet"]=18;
objet["interface"][18]="../CATFmtModelIDLItf/interface_SimMeshSet_20772.htm";
objet["interface"]["SimMeshSpecification"]=19;
objet["interface"][19]="../CATFmtModelIDLItf/interface_SimMeshSpecification_36029.htm";
objet["interface"]["SimMeshSpecifications"]=20;
objet["interface"][20]="../CATFmtModelIDLItf/interface_SimMeshSpecifications_38329.htm";
objet["interface"]["SimMeshTopology"]=21;
objet["interface"][21]="../CATFmtModelIDLItf/interface_SimMeshTopology_27486.htm";
objet["interface"]["SimMethod"]=22;
objet["interface"][22]="../CATFmtModelIDLItf/interface_SimMethod_19921.htm";
objet["interface"]["SimMethodSet"]=23;
objet["interface"][23]="../CATFmtModelIDLItf/interface_SimMethodSet_22954.htm";
objet["interface"]["SimNumbering"]=24;
objet["interface"][24]="../CATFmtModelIDLItf/interface_SimNumbering_23137.htm";
objet["interface"]["SimProperties"]=25;
objet["interface"][25]="../CATFmtModelIDLItf/interface_SimProperties_24632.htm";
objet["interface"]["SimSeamWeld"]=26;
objet["interface"][26]="../CATFmtModelIDLItf/interface_SimSeamWeld_21686.htm";
objet["interface"]["SimSpecializedFEMFactory"]=27;
objet["interface"][27]="../CATFmtModelIDLItf/interface_SimSpecializedFEMFactory_43694.htm";
objet["interface"]["SimTopologySpecification"]=28;
objet["interface"][28]="../CATFmtModelIDLItf/interface_SimTopologySpecification_45278.htm";
objet["interface"]["SimTopologySpecifications"]=29;
objet["interface"][29]="../CATFmtModelIDLItf/interface_SimTopologySpecifications_48038.htm";
objet["interface"]["SimVisualization"]=30;
objet["interface"][30]="../CATFmtModelIDLItf/interface_SimVisualization_29196.htm";
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