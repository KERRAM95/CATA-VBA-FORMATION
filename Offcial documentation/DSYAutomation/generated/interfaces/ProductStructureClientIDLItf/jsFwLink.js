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
 objet["interface"]["ParentVPMRepInstances"]=0;
objet["interface"][0]="../ProductStructureClientIDLItf/interface_ParentVPMRepInstances_62148.htm";
objet["interface"]["Shape3D"]=1;
objet["interface"][1]="../ProductStructureClientIDLItf/interface_Shape3D_42450.htm";
objet["interface"]["Shape3Ds"]=2;
objet["interface"][2]="../ProductStructureClientIDLItf/interface_Shape3Ds_43255.htm";
objet["interface"]["VPMInstance"]=3;
objet["interface"][3]="../ProductStructureClientIDLItf/interface_VPMInstance_46373.htm";
objet["interface"]["VPMInstances"]=4;
objet["interface"][4]="../ProductStructureClientIDLItf/interface_VPMInstances_47638.htm";
objet["interface"]["VPMOccurrence"]=5;
objet["interface"][5]="../ProductStructureClientIDLItf/interface_VPMOccurrence_48833.htm";
objet["interface"]["VPMOccurrences"]=6;
objet["interface"][6]="../ProductStructureClientIDLItf/interface_VPMOccurrences_50328.htm";
objet["interface"]["VPMPublication"]=7;
objet["interface"][7]="../ProductStructureClientIDLItf/interface_VPMPublication_50306.htm";
objet["interface"]["VPMPublications"]=8;
objet["interface"][8]="../ProductStructureClientIDLItf/interface_VPMPublications_51916.htm";
objet["interface"]["VPMReference"]=9;
objet["interface"][9]="../ProductStructureClientIDLItf/interface_VPMReference_47446.htm";
objet["interface"]["VPMRepInstance"]=10;
objet["interface"][10]="../ProductStructureClientIDLItf/interface_VPMRepInstance_50046.htm";
objet["interface"]["VPMRepInstances"]=11;
objet["interface"][11]="../ProductStructureClientIDLItf/interface_VPMRepInstances_51656.htm";
objet["interface"]["VPMRepOccurrence"]=12;
objet["interface"][12]="../ProductStructureClientIDLItf/interface_VPMRepOccurrence_53142.htm";
objet["interface"]["VPMRepOccurrences"]=13;
objet["interface"][13]="../ProductStructureClientIDLItf/interface_VPMRepOccurrences_54982.htm";
objet["interface"]["VPMRepReference"]=14;
objet["interface"][14]="../ProductStructureClientIDLItf/interface_VPMRepReference_51389.htm";
objet["interface"]["VPMRootOccurrence"]=15;
objet["interface"][15]="../ProductStructureClientIDLItf/interface_VPMRootOccurrence_54906.htm";
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