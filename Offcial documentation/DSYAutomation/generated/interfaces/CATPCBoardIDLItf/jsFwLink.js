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
 objet["enum"]["CatElectronicType"]=0;
objet["enum"][0]="../CATPCBoardIDLItf/enum_CatElectronicType_25707.htm";
objet["interface"]["PCBArea"]=0;
objet["interface"][0]="../CATPCBoardIDLItf/interface_PCBArea_16352.htm";
objet["interface"]["PCBBoard"]=1;
objet["interface"][1]="../CATPCBoardIDLItf/interface_PCBBoard_17125.htm";
objet["interface"]["PCBComponent"]=2;
objet["interface"][2]="../CATPCBoardIDLItf/interface_PCBComponent_21418.htm";
objet["interface"]["PCBHoleAndPattern"]=3;
objet["interface"][3]="../CATPCBoardIDLItf/interface_PCBHoleAndPattern_28306.htm";
objet["interface"]["PCBObject"]=4;
objet["interface"][4]="../CATPCBoardIDLItf/interface_PCBObject_18000.htm";
objet["interface"]["PCBService"]=5;
objet["interface"][5]="../CATPCBoardIDLItf/interface_PCBService_18981.htm";
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