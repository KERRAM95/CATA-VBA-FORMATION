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
 objet["interface"]["RfgGridFace"]=0;
objet["interface"][0]="../CATSrsIDLItf/interface_RfgGridFace_14937.htm";
objet["interface"]["RfgService"]=1;
objet["interface"][1]="../CATSrsIDLItf/interface_RfgService_14343.htm";
objet["interface"]["SrsBoundingBox"]=2;
objet["interface"][2]="../CATSrsIDLItf/interface_SrsBoundingBox_19077.htm";
objet["interface"]["SrsCentreLine"]=3;
objet["interface"][3]="../CATSrsIDLItf/interface_SrsCentreLine_17625.htm";
objet["interface"]["SrsCoordinateConverter"]=4;
objet["interface"][4]="../CATSrsIDLItf/interface_SrsCoordinateConverter_34234.htm";
objet["interface"]["SrsGridFace"]=5;
objet["interface"][5]="../CATSrsIDLItf/interface_SrsGridFace_14973.htm";
objet["interface"]["SrsGridFaces"]=6;
objet["interface"][6]="../CATSrsIDLItf/interface_SrsGridFaces_16238.htm";
objet["interface"]["SrsGridSet"]=7;
objet["interface"][7]="../CATSrsIDLItf/interface_SrsGridSet_14239.htm";
objet["interface"]["SrsGridSets"]=8;
objet["interface"][8]="../CATSrsIDLItf/interface_SrsGridSets_15389.htm";
objet["interface"]["SrsInstantiateService"]=9;
objet["interface"][9]="../CATSrsIDLItf/interface_SrsInstantiateService_31665.htm";
objet["interface"]["SrsMidShip"]=10;
objet["interface"][10]="../CATSrsIDLItf/interface_SrsMidShip_14237.htm";
objet["interface"]["SrsPart"]=11;
objet["interface"][11]="../CATSrsIDLItf/interface_SrsPart_11906.htm";
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