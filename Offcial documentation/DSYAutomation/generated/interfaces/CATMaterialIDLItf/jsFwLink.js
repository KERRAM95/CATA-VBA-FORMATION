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
 objet["enum"]["LinearElasticDomainType"]=0;
objet["enum"][0]="../CATMaterialIDLItf/enum_LinearElasticDomainType_39351.htm";
objet["interface"]["AnalysisLinearElasticDomain"]=0;
objet["interface"][0]="../CATMaterialIDLItf/interface_AnalysisLinearElasticDomain_52202.htm";
objet["interface"]["AppliedMaterial"]=1;
objet["interface"][1]="../CATMaterialIDLItf/interface_AppliedMaterial_27165.htm";
objet["interface"]["AppliedMaterials"]=2;
objet["interface"][2]="../CATMaterialIDLItf/interface_AppliedMaterials_28890.htm";
objet["interface"]["DrawingDomain"]=3;
objet["interface"][3]="../CATMaterialIDLItf/interface_DrawingDomain_24367.htm";
objet["interface"]["ListObject"]=4;
objet["interface"][4]="../CATMaterialIDLItf/interface_ListObject_20992.htm";
objet["interface"]["MATPLMService"]=5;
objet["interface"][5]="../CATMaterialIDLItf/interface_MATPLMService_24016.htm";
objet["interface"]["Material"]=6;
objet["interface"][6]="../CATMaterialIDLItf/interface_Material_19275.htm";
objet["interface"]["MaterialBehavior"]=7;
objet["interface"][7]="../CATMaterialIDLItf/interface_MaterialBehavior_28864.htm";
objet["interface"]["MaterialBehaviorOptions"]=8;
objet["interface"][8]="../CATMaterialIDLItf/interface_MaterialBehaviorOptions_43175.htm";
objet["interface"]["MaterialBehaviors"]=9;
objet["interface"][9]="../CATMaterialIDLItf/interface_MaterialBehaviors_30704.htm";
objet["interface"]["MaterialDomain"]=10;
objet["interface"][10]="../CATMaterialIDLItf/interface_MaterialDomain_25665.htm";
objet["interface"]["MaterialDomainContent"]=11;
objet["interface"][11]="../CATMaterialIDLItf/interface_MaterialDomainContent_38228.htm";
objet["interface"]["MaterialDomains"]=12;
objet["interface"][12]="../CATMaterialIDLItf/interface_MaterialDomains_27275.htm";
objet["interface"]["MaterialGeneric"]=13;
objet["interface"][13]="../CATMaterialIDLItf/interface_MaterialGeneric_27082.htm";
objet["interface"]["Materials"]=14;
objet["interface"][14]="../CATMaterialIDLItf/interface_Materials_20195.htm";
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