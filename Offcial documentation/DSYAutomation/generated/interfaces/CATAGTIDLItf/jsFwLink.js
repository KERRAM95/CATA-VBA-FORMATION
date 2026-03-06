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
 objet["interface"]["AGTCategoryMngt"]=0;
objet["interface"][0]="../CATAGTIDLItf/interface_AGTCategoryMngt_20276.htm";
objet["interface"]["AGTConnector"]=1;
objet["interface"][1]="../CATAGTIDLItf/interface_AGTConnector_16288.htm";
objet["interface"]["AGTConnectors"]=2;
objet["interface"][2]="../CATAGTIDLItf/interface_AGTConnectors_17668.htm";
objet["interface"]["AGTDraughtStop"]=3;
objet["interface"][3]="../CATAGTIDLItf/interface_AGTDraughtStop_18864.htm";
objet["interface"]["AGTDraughtStops"]=4;
objet["interface"][4]="../CATAGTIDLItf/interface_AGTDraughtStops_20474.htm";
objet["interface"]["AGTFireBridge"]=5;
objet["interface"][5]="../CATAGTIDLItf/interface_AGTFireBridge_16996.htm";
objet["interface"]["AGTFireBridges"]=6;
objet["interface"][6]="../CATAGTIDLItf/interface_AGTFireBridges_18491.htm";
objet["interface"]["AGTInsulation"]=7;
objet["interface"][7]="../CATAGTIDLItf/interface_AGTInsulation_17629.htm";
objet["interface"]["AGTInsulations"]=8;
objet["interface"][8]="../CATAGTIDLItf/interface_AGTInsulations_19124.htm";
objet["interface"]["AGTMaterialMngt"]=9;
objet["interface"][9]="../CATAGTIDLItf/interface_AGTMaterialMngt_20052.htm";
objet["interface"]["AGTRoot"]=10;
objet["interface"][10]="../CATAGTIDLItf/interface_AGTRoot_11467.htm";
objet["interface"]["AGTSill"]=11;
objet["interface"][11]="../CATAGTIDLItf/interface_AGTSill_11383.htm";
objet["interface"]["AGTSills"]=12;
objet["interface"][12]="../CATAGTIDLItf/interface_AGTSills_12188.htm";
objet["interface"]["Covering"]=13;
objet["interface"][13]="../CATAGTIDLItf/interface_Covering_12299.htm";
objet["interface"]["Coverings"]=14;
objet["interface"][14]="../CATAGTIDLItf/interface_Coverings_13219.htm";
objet["interface"]["Wall"]=15;
objet["interface"][15]="../CATAGTIDLItf/interface_Wall_9924.htm";
objet["interface"]["Walls"]=16;
objet["interface"][16]="../CATAGTIDLItf/interface_Walls_10384.htm";
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