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
 objet["enum"]["CATKinMechanismCommandType"]=0;
objet["enum"][0]="../CATKinMechanismIDLItf/enum_CATKinMechanismCommandType_53859.htm";
objet["interface"]["KinCommand"]=0;
objet["interface"][0]="../CATKinMechanismIDLItf/interface_KinCommand_28141.htm";
objet["interface"]["KinCommands"]=1;
objet["interface"][1]="../CATKinMechanismIDLItf/interface_KinCommands_29291.htm";
objet["interface"]["KinDressup"]=2;
objet["interface"][2]="../CATKinMechanismIDLItf/interface_KinDressup_28442.htm";
objet["interface"]["KinJoints"]=3;
objet["interface"][3]="../CATKinMechanismIDLItf/interface_KinJoints_27421.htm";
objet["interface"]["KinMechanism"]=4;
objet["interface"][4]="../CATKinMechanismIDLItf/interface_KinMechanism_30445.htm";
objet["interface"]["KinSubCommand"]=5;
objet["interface"][5]="../CATKinMechanismIDLItf/interface_KinSubCommand_31457.htm";
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