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
 objet["enum"]["SimAxisAxisType"]=0;
objet["enum"][0]="../SMAMpaBaseIDLItf/enum_SimAxisAxisType_22408.htm";
objet["enum"]["SimAxisSystemCoordinateType"]=1;
objet["enum"][1]="../SMAMpaBaseIDLItf/enum_SimAxisSystemCoordinateType_48269.htm";
objet["enum"]["SimAxisSystemDefinitionMode"]=2;
objet["enum"][2]="../SMAMpaBaseIDLItf/enum_SimAxisSystemDefinitionMode_47699.htm";
objet["enum"]["SimDof"]=3;
objet["enum"][3]="../SMAMpaBaseIDLItf/enum_SimDof_12920.htm";
objet["enum"]["SimMappedFieldDataDataSourceType"]=4;
objet["enum"][4]="../SMAMpaBaseIDLItf/enum_SimMappedFieldDataDataSourceType_61533.htm";
objet["enum"]["SimMappedFieldDataTableColumn"]=5;
objet["enum"][5]="../SMAMpaBaseIDLItf/enum_SimMappedFieldDataTableColumn_52194.htm";
objet["enum"]["SimMappedFieldDataToleranceType"]=6;
objet["enum"][6]="../SMAMpaBaseIDLItf/enum_SimMappedFieldDataToleranceType_58735.htm";
objet["enum"]["SimPointDefinitionMode"]=7;
objet["enum"][7]="../SMAMpaBaseIDLItf/enum_SimPointDefinitionMode_35217.htm";
objet["interface"]["SimAxis"]=0;
objet["interface"][0]="../SMAMpaBaseIDLItf/interface_SimAxis_16675.htm";
objet["interface"]["SimAxisSystem"]=1;
objet["interface"][1]="../SMAMpaBaseIDLItf/interface_SimAxisSystem_22838.htm";
objet["interface"]["SimMappedFieldData"]=2;
objet["interface"][2]="../SMAMpaBaseIDLItf/interface_SimMappedFieldData_29442.htm";
objet["interface"]["SimMathAxis"]=3;
objet["interface"][3]="../SMAMpaBaseIDLItf/interface_SimMathAxis_20118.htm";
objet["interface"]["SimMathPlane"]=4;
objet["interface"][4]="../SMAMpaBaseIDLItf/interface_SimMathPlane_21116.htm";
objet["interface"]["SimMathPoint"]=5;
objet["interface"][5]="../SMAMpaBaseIDLItf/interface_SimMathPoint_21377.htm";
objet["interface"]["SimMathVector"]=6;
objet["interface"][6]="../SMAMpaBaseIDLItf/interface_SimMathVector_22658.htm";
objet["interface"]["SimPoint"]=7;
objet["interface"][7]="../SMAMpaBaseIDLItf/interface_SimPoint_17466.htm";
objet["interface"]["SimPortRegion"]=8;
objet["interface"][8]="../SMAMpaBaseIDLItf/interface_SimPortRegion_22635.htm";
objet["interface"]["SimTable"]=9;
objet["interface"][9]="../SMAMpaBaseIDLItf/interface_SimTable_17270.htm";
objet["interface"]["SimTableColumn"]=10;
objet["interface"][10]="../SMAMpaBaseIDLItf/interface_SimTableColumn_23910.htm";
objet["interface"]["SimTableColumns"]=11;
objet["interface"][11]="../SMAMpaBaseIDLItf/interface_SimTableColumns_25520.htm";
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