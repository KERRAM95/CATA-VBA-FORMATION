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
 objet["interface"]["DrillingRivetingOperation"]=0;
objet["interface"][0]="../MachiningOperationUseItf/interface_DrillingRivetingOperation_63828.htm";
objet["interface"]["ManufacturingComputePMAParameters"]=1;
objet["interface"][1]="../MachiningOperationUseItf/interface_ManufacturingComputePMAParameters_85916.htm";
objet["interface"]["ManufacturingFastenerOffset"]=2;
objet["interface"][2]="../MachiningOperationUseItf/interface_ManufacturingFastenerOffset_68797.htm";
objet["interface"]["ManufacturingInstructionSet"]=3;
objet["interface"][3]="../MachiningOperationUseItf/interface_ManufacturingInstructionSet_69527.htm";
objet["interface"]["ManufacturingInstructionSetAction"]=4;
objet["interface"][4]="../MachiningOperationUseItf/interface_ManufacturingInstructionSetAction_87529.htm";
objet["interface"]["ManufacturingInstructionSetParam"]=5;
objet["interface"][5]="../MachiningOperationUseItf/interface_ManufacturingInstructionSetParam_83998.htm";
objet["interface"]["ManufacturingMachinableAreaMngt"]=6;
objet["interface"][6]="../MachiningOperationUseItf/interface_ManufacturingMachinableAreaMngt_78972.htm";
objet["interface"]["ManufacturingParameter"]=7;
objet["interface"][7]="../MachiningOperationUseItf/interface_ManufacturingParameter_56451.htm";
objet["interface"]["ManufacturingSeqMotionParameters"]=8;
objet["interface"][8]="../MachiningOperationUseItf/interface_ManufacturingSeqMotionParameters_84297.htm";
objet["interface"]["ManufacturingUserParam"]=9;
objet["interface"][9]="../MachiningOperationUseItf/interface_ManufacturingUserParam_56057.htm";
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