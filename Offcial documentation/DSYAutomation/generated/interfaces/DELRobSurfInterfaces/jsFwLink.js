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
 objet["enum"]["APPROACH_RETRACT"]=0;
objet["enum"][0]="../DELRobSurfInterfaces/enum_APPROACH_RETRACT_29400.htm";
objet["enum"]["STROKE_SIDE"]=1;
objet["enum"][1]="../DELRobSurfInterfaces/enum_STROKE_SIDE_24395.htm";
objet["enum"]["SurfaceOperationPosition"]=2;
objet["enum"][2]="../DELRobSurfInterfaces/enum_SurfaceOperationPosition_49623.htm";
objet["interface"]["SurfaceOperation"]=0;
objet["interface"][0]="../DELRobSurfInterfaces/interface_SurfaceOperation_35917.htm";
objet["interface"]["SurfaceOperationFactory"]=1;
objet["interface"][1]="../DELRobSurfInterfaces/interface_SurfaceOperationFactory_49948.htm";
objet["interface"]["SurfaceTrajectory"]=2;
objet["interface"][2]="../DELRobSurfInterfaces/interface_SurfaceTrajectory_37831.htm";
objet["interface"]["SurfaceTrajectoryFactory"]=3;
objet["interface"][3]="../DELRobSurfInterfaces/interface_SurfaceTrajectoryFactory_52590.htm";
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