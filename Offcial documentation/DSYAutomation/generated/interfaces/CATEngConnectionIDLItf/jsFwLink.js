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
 objet["enum"]["CatAssemblyConstraintMode"]=0;
objet["enum"][0]="../CATEngConnectionIDLItf/enum_CatAssemblyConstraintMode_54015.htm";
objet["enum"]["CatAssemblyConstraintOption"]=1;
objet["enum"][1]="../CATEngConnectionIDLItf/enum_CatAssemblyConstraintOption_60178.htm";
objet["enum"]["CatAssemblyConstraintType"]=2;
objet["enum"][2]="../CATEngConnectionIDLItf/enum_CatAssemblyConstraintType_54658.htm";
objet["enum"]["CatEngConnectionDirection"]=3;
objet["enum"][3]="../CATEngConnectionIDLItf/enum_CatEngConnectionDirection_54079.htm";
objet["enum"]["CatEngConnectionType"]=4;
objet["enum"][4]="../CATEngConnectionIDLItf/enum_CatEngConnectionType_42652.htm";
objet["interface"]["AssemblyConstraint"]=0;
objet["interface"][0]="../CATEngConnectionIDLItf/interface_AssemblyConstraint_42247.htm";
objet["interface"]["AssemblyConstraints"]=1;
objet["interface"][1]="../CATEngConnectionIDLItf/interface_AssemblyConstraints_44317.htm";
objet["interface"]["EngConnection"]=2;
objet["interface"][2]="../CATEngConnectionIDLItf/interface_EngConnection_34044.htm";
objet["interface"]["EngConnections"]=3;
objet["interface"][3]="../CATEngConnectionIDLItf/interface_EngConnections_35539.htm";
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