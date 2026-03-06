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
 objet["enum"]["KnowledgeObjectType"]=0;
objet["enum"][0]="../KnowledgeIDLItf/enum_KnowledgeObjectType_28064.htm";
objet["enum"]["KnowledgeSetType"]=1;
objet["enum"][1]="../KnowledgeIDLItf/enum_KnowledgeSetType_22863.htm";
objet["interface"]["Angle"]=0;
objet["interface"][0]="../KnowledgeIDLItf/interface_Angle_14478.htm";
objet["interface"]["BoolParam"]=1;
objet["interface"][1]="../KnowledgeIDLItf/interface_BoolParam_17131.htm";
objet["interface"]["Check"]=2;
objet["interface"][2]="../KnowledgeIDLItf/interface_Check_14465.htm";
objet["interface"]["DesignTable"]=3;
objet["interface"][3]="../KnowledgeIDLItf/interface_DesignTable_18991.htm";
objet["interface"]["Dimension"]=4;
objet["interface"][4]="../KnowledgeIDLItf/interface_Dimension_17362.htm";
objet["interface"]["EnumParam"]=5;
objet["interface"][5]="../KnowledgeIDLItf/interface_EnumParam_17145.htm";
objet["interface"]["Formula"]=6;
objet["interface"][6]="../KnowledgeIDLItf/interface_Formula_15690.htm";
objet["interface"]["IntParam"]=7;
objet["interface"][7]="../KnowledgeIDLItf/interface_IntParam_16319.htm";
objet["interface"]["KWECorrectFunction"]=8;
objet["interface"][8]="../KnowledgeIDLItf/interface_KWECorrectFunction_29540.htm";
objet["interface"]["KnowledgeActivateObject"]=9;
objet["interface"][9]="../KnowledgeIDLItf/interface_KnowledgeActivateObject_39320.htm";
objet["interface"]["KnowledgeCollection"]=10;
objet["interface"][10]="../KnowledgeIDLItf/interface_KnowledgeCollection_31372.htm";
objet["interface"]["KnowledgeFactory"]=11;
objet["interface"][11]="../KnowledgeIDLItf/interface_KnowledgeFactory_26124.htm";
objet["interface"]["KnowledgeObject"]=12;
objet["interface"][12]="../KnowledgeIDLItf/interface_KnowledgeObject_24169.htm";
objet["interface"]["KnowledgeObjects"]=13;
objet["interface"][13]="../KnowledgeIDLItf/interface_KnowledgeObjects_25894.htm";
objet["interface"]["KnowledgeServices"]=14;
objet["interface"][14]="../KnowledgeIDLItf/interface_KnowledgeServices_27722.htm";
objet["interface"]["KnowledgeSet"]=15;
objet["interface"][15]="../KnowledgeIDLItf/interface_KnowledgeSet_20222.htm";
objet["interface"]["Law"]=16;
objet["interface"][16]="../KnowledgeIDLItf/interface_Law_13769.htm";
objet["interface"]["Length"]=17;
objet["interface"][17]="../KnowledgeIDLItf/interface_Length_15048.htm";
objet["interface"]["List"]=18;
objet["interface"][18]="../KnowledgeIDLItf/interface_List_14117.htm";
objet["interface"]["ListParameter"]=19;
objet["interface"][19]="../KnowledgeIDLItf/interface_ListParameter_21705.htm";
objet["interface"]["Parameter"]=20;
objet["interface"][20]="../KnowledgeIDLItf/interface_Parameter_17306.htm";
objet["interface"]["ParameterSet"]=21;
objet["interface"][21]="../KnowledgeIDLItf/interface_ParameterSet_20339.htm";
objet["interface"]["ParameterSets"]=22;
objet["interface"][22]="../KnowledgeIDLItf/interface_ParameterSets_21719.htm";
objet["interface"]["Parameters"]=23;
objet["interface"][23]="../KnowledgeIDLItf/interface_Parameters_18341.htm";
objet["interface"]["ParametersFactory"]=24;
objet["interface"][24]="../KnowledgeIDLItf/interface_ParametersFactory_28004.htm";
objet["interface"]["ParmsSet"]=25;
objet["interface"][25]="../KnowledgeIDLItf/interface_ParmsSet_16379.htm";
objet["interface"]["RealParam"]=26;
objet["interface"][26]="../KnowledgeIDLItf/interface_RealParam_17093.htm";
objet["interface"]["Relation"]=27;
objet["interface"][27]="../KnowledgeIDLItf/interface_Relation_16467.htm";
objet["interface"]["Relations"]=28;
objet["interface"][28]="../KnowledgeIDLItf/interface_Relations_17387.htm";
objet["interface"]["RelationsFactory"]=29;
objet["interface"][29]="../KnowledgeIDLItf/interface_RelationsFactory_26322.htm";
objet["interface"]["RelsSet"]=30;
objet["interface"][30]="../KnowledgeIDLItf/interface_RelsSet_15629.htm";
objet["interface"]["Rule"]=31;
objet["interface"][31]="../KnowledgeIDLItf/interface_Rule_14070.htm";
objet["interface"]["SetOfEquation"]=32;
objet["interface"][32]="../KnowledgeIDLItf/interface_SetOfEquation_21665.htm";
objet["interface"]["StrParam"]=33;
objet["interface"][33]="../KnowledgeIDLItf/interface_StrParam_16321.htm";
objet["interface"]["Unit"]=34;
objet["interface"][34]="../KnowledgeIDLItf/interface_Unit_14102.htm";
objet["interface"]["Units"]=35;
objet["interface"][35]="../KnowledgeIDLItf/interface_Units_14562.htm";
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