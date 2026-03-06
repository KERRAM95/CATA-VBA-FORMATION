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
 objet["interface"]["SsmCuttingFamily"]=0;
objet["interface"][0]="../CATSdeIDLItf/interface_SsmCuttingFamily_22129.htm";
objet["interface"]["SsmCuttingFamilys"]=1;
objet["interface"][1]="../CATSdeIDLItf/interface_SsmCuttingFamilys_23969.htm";
objet["interface"]["SsmCuttingInput"]=2;
objet["interface"][2]="../CATSdeIDLItf/interface_SsmCuttingInput_20791.htm";
objet["interface"]["SsmCuttingInputs"]=3;
objet["interface"][3]="../CATSdeIDLItf/interface_SsmCuttingInputs_22516.htm";
objet["interface"]["SsmCuttingSet"]=4;
objet["interface"][4]="../CATSdeIDLItf/interface_SsmCuttingSet_17695.htm";
objet["interface"]["SsmDelimitedMoldedSurface"]=5;
objet["interface"][5]="../CATSdeIDLItf/interface_SsmDelimitedMoldedSurface_40079.htm";
objet["interface"]["SsmDesignSpace"]=6;
objet["interface"][6]="../CATSdeIDLItf/interface_SsmDesignSpace_18724.htm";
objet["interface"]["SsmManufacturingSpace"]=7;
objet["interface"][7]="../CATSdeIDLItf/interface_SsmManufacturingSpace_31271.htm";
objet["interface"]["SsmMoldedSurfaceLmt"]=8;
objet["interface"][8]="../CATSdeIDLItf/interface_SsmMoldedSurfaceLmt_26911.htm";
objet["interface"]["SsmParameters"]=9;
objet["interface"][9]="../CATSdeIDLItf/interface_SsmParameters_17914.htm";
objet["interface"]["SsmSpace"]=10;
objet["interface"][10]="../CATSdeIDLItf/interface_SsmSpace_12358.htm";
objet["interface"]["SsmSpaceConceptNode"]=11;
objet["interface"][11]="../CATSdeIDLItf/interface_SsmSpaceConceptNode_26838.htm";
objet["interface"]["SsmSpaceConceptNodes"]=12;
objet["interface"][12]="../CATSdeIDLItf/interface_SsmSpaceConceptNodes_29023.htm";
objet["interface"]["SsmSpaceConceptRoot"]=13;
objet["interface"][13]="../CATSdeIDLItf/interface_SsmSpaceConceptRoot_27355.htm";
objet["interface"]["SsmSpaceConceptRoots"]=14;
objet["interface"][14]="../CATSdeIDLItf/interface_SsmSpaceConceptRoots_29540.htm";
objet["interface"]["SsmSpaceFolder"]=15;
objet["interface"][15]="../CATSdeIDLItf/interface_SsmSpaceFolder_18791.htm";
objet["interface"]["SsmSpaceInput"]=16;
objet["interface"][16]="../CATSdeIDLItf/interface_SsmSpaceInput_17731.htm";
objet["interface"]["SsmSpaceManager"]=17;
objet["interface"][17]="../CATSdeIDLItf/interface_SsmSpaceManager_20159.htm";
objet["interface"]["SsmSpaceRoot"]=18;
objet["interface"][18]="../CATSdeIDLItf/interface_SsmSpaceRoot_16399.htm";
objet["interface"]["SsmSpaceSystem"]=19;
objet["interface"][19]="../CATSdeIDLItf/interface_SsmSpaceSystem_19166.htm";
objet["interface"]["SsmSpaceSystems"]=20;
objet["interface"][20]="../CATSdeIDLItf/interface_SsmSpaceSystems_20776.htm";
objet["interface"]["SsmSpaces"]=21;
objet["interface"][21]="../CATSdeIDLItf/interface_SsmSpaces_13278.htm";
objet["interface"]["SsmToolSet"]=22;
objet["interface"][22]="../CATSdeIDLItf/interface_SsmToolSet_14207.htm";
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