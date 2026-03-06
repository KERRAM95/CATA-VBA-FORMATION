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
 objet["enum"]["SimGeneralMultiScalarFieldVariationType"]=0;
objet["enum"][0]="../SMAMpaFoundationIDLItf/enum_SimGeneralMultiScalarFieldVariationType_99086.htm";
objet["enum"]["SimGeneralVectorFieldVariationType"]=1;
objet["enum"][1]="../SMAMpaFoundationIDLItf/enum_SimGeneralVectorFieldVariationType_80926.htm";
objet["enum"]["SimGenericVectorFieldVariationType"]=2;
objet["enum"][2]="../SMAMpaFoundationIDLItf/enum_SimGenericVectorFieldVariationType_80909.htm";
objet["enum"]["SimInitializationServiceSimulationMethod"]=3;
objet["enum"][3]="../SMAMpaFoundationIDLItf/enum_SimInitializationServiceSimulationMethod_104499.htm";
objet["enum"]["SimScalarFieldVariationType"]=4;
objet["enum"][4]="../SMAMpaFoundationIDLItf/enum_SimScalarFieldVariationType_59144.htm";
objet["enum"]["SimSymmetricTensorFieldVariationType"]=5;
objet["enum"][5]="../SMAMpaFoundationIDLItf/enum_SimSymmetricTensorFieldVariationType_88394.htm";
objet["enum"]["SimVectorFieldVariationType"]=6;
objet["enum"][6]="../SMAMpaFoundationIDLItf/enum_SimVectorFieldVariationType_59317.htm";
objet["interface"]["SimAnalysisCase"]=0;
objet["interface"][0]="../SMAMpaFoundationIDLItf/interface_SimAnalysisCase_36520.htm";
objet["interface"]["SimAnalysisCases"]=1;
objet["interface"][1]="../SMAMpaFoundationIDLItf/interface_SimAnalysisCases_38245.htm";
objet["interface"]["SimExecutionService"]=2;
objet["interface"][2]="../SMAMpaFoundationIDLItf/interface_SimExecutionService_43734.htm";
objet["interface"]["SimFeatureHistory"]=3;
objet["interface"][3]="../SMAMpaFoundationIDLItf/interface_SimFeatureHistory_40478.htm";
objet["interface"]["SimFeatureStates"]=4;
objet["interface"][4]="../SMAMpaFoundationIDLItf/interface_SimFeatureStates_38432.htm";
objet["interface"]["SimFeatures"]=5;
objet["interface"][5]="../SMAMpaFoundationIDLItf/interface_SimFeatures_31665.htm";
objet["interface"]["SimGeneralAnalysisCase"]=6;
objet["interface"][6]="../SMAMpaFoundationIDLItf/interface_SimGeneralAnalysisCase_49351.htm";
objet["interface"]["SimGeneralMultiScalarField"]=7;
objet["interface"][7]="../SMAMpaFoundationIDLItf/interface_SimGeneralMultiScalarField_58470.htm";
objet["interface"]["SimGeneralVectorField"]=8;
objet["interface"][8]="../SMAMpaFoundationIDLItf/interface_SimGeneralVectorField_47105.htm";
objet["interface"]["SimGenericVectorField"]=9;
objet["interface"][9]="../SMAMpaFoundationIDLItf/interface_SimGenericVectorField_47088.htm";
objet["interface"]["SimGlobalElementTypeAssignment"]=10;
objet["interface"][10]="../SMAMpaFoundationIDLItf/interface_SimGlobalElementTypeAssignment_71347.htm";
objet["interface"]["SimInitializationService"]=11;
objet["interface"][11]="../SMAMpaFoundationIDLItf/interface_SimInitializationService_54863.htm";
objet["interface"]["SimKeywordEdit"]=12;
objet["interface"][12]="../SMAMpaFoundationIDLItf/interface_SimKeywordEdit_35175.htm";
objet["interface"]["SimLinearLoadCase"]=13;
objet["interface"][13]="../SMAMpaFoundationIDLItf/interface_SimLinearLoadCase_39106.htm";
objet["interface"]["SimLinearLoadCases"]=14;
objet["interface"][14]="../SMAMpaFoundationIDLItf/interface_SimLinearLoadCases_41061.htm";
objet["interface"]["SimLoadSet"]=15;
objet["interface"][15]="../SMAMpaFoundationIDLItf/interface_SimLoadSet_30270.htm";
objet["interface"]["SimLocalElementTypeAssignment"]=16;
objet["interface"][16]="../SMAMpaFoundationIDLItf/interface_SimLocalElementTypeAssignment_68340.htm";
objet["interface"]["SimLocalElementTypeAssignments"]=17;
objet["interface"][17]="../SMAMpaFoundationIDLItf/interface_SimLocalElementTypeAssignments_71675.htm";
objet["interface"]["SimScalarField"]=18;
objet["interface"][18]="../SMAMpaFoundationIDLItf/interface_SimScalarField_34836.htm";
objet["interface"]["SimScenarioManager"]=19;
objet["interface"][19]="../SMAMpaFoundationIDLItf/interface_SimScenarioManager_41434.htm";
objet["interface"]["SimSpaceTimeField"]=20;
objet["interface"][20]="../SMAMpaFoundationIDLItf/interface_SimSpaceTimeField_39220.htm";
objet["interface"]["SimStep"]=21;
objet["interface"][21]="../SMAMpaFoundationIDLItf/interface_SimStep_27970.htm";
objet["interface"]["SimSteps"]=22;
objet["interface"][22]="../SMAMpaFoundationIDLItf/interface_SimSteps_28775.htm";
objet["interface"]["SimStructuralAnalysisCase"]=23;
objet["interface"][23]="../SMAMpaFoundationIDLItf/interface_SimStructuralAnalysisCase_56842.htm";
objet["interface"]["SimSymmetricTensorField"]=24;
objet["interface"][24]="../SMAMpaFoundationIDLItf/interface_SimSymmetricTensorField_51855.htm";
objet["interface"]["SimThermalAnalysisCase"]=25;
objet["interface"][25]="../SMAMpaFoundationIDLItf/interface_SimThermalAnalysisCase_49400.htm";
objet["interface"]["SimUserSubroutine"]=26;
objet["interface"][26]="../SMAMpaFoundationIDLItf/interface_SimUserSubroutine_40392.htm";
objet["interface"]["SimVectorField"]=27;
objet["interface"][27]="../SMAMpaFoundationIDLItf/interface_SimVectorField_35009.htm";
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