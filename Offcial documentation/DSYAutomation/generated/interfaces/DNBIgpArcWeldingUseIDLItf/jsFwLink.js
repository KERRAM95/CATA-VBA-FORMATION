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
 objet["enum"]["InsertMode"]=0;
objet["enum"][0]="../DNBIgpArcWeldingUseIDLItf/enum_InsertMode_33508.htm";
objet["interface"]["ArcOperation"]=0;
objet["interface"][0]="../DNBIgpArcWeldingUseIDLItf/interface_ArcOperation_38962.htm";
objet["interface"]["ArcOperationFactory"]=1;
objet["interface"][1]="../DNBIgpArcWeldingUseIDLItf/interface_ArcOperationFactory_50081.htm";
objet["interface"]["ArcWTSManager"]=2;
objet["interface"][2]="../DNBIgpArcWeldingUseIDLItf/interface_ArcWTSManager_39631.htm";
objet["interface"]["ArcWeldCSPProfiles"]=3;
objet["interface"][3]="../DNBIgpArcWeldingUseIDLItf/interface_ArcWeldCSPProfiles_47247.htm";
objet["interface"]["ArcWeldProfile"]=4;
objet["interface"][4]="../DNBIgpArcWeldingUseIDLItf/interface_ArcWeldProfile_41276.htm";
objet["interface"]["ArcWeldProfileFactory"]=5;
objet["interface"][5]="../DNBIgpArcWeldingUseIDLItf/interface_ArcWeldProfileFactory_53851.htm";
objet["interface"]["ArcWeldProfileSection"]=6;
objet["interface"][6]="../DNBIgpArcWeldingUseIDLItf/interface_ArcWeldProfileSection_53708.htm";
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