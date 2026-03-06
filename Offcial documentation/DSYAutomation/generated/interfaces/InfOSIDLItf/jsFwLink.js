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
 objet["enum"]["CatFileSelectionMode"]=0;
objet["enum"][0]="../InfOSIDLItf/enum_CatFileSelectionMode_24871.htm";
objet["interface"]["File"]=0;
objet["interface"][0]="../InfOSIDLItf/interface_File_9154.htm";
objet["interface"]["FileComponent"]=1;
objet["interface"][1]="../InfOSIDLItf/interface_FileComponent_16905.htm";
objet["interface"]["FileSystem"]=2;
objet["interface"][2]="../InfOSIDLItf/interface_FileSystem_13382.htm";
objet["interface"]["Files"]=3;
objet["interface"][3]="../InfOSIDLItf/interface_Files_9614.htm";
objet["interface"]["Folder"]=4;
objet["interface"][4]="../InfOSIDLItf/interface_Folder_10131.htm";
objet["interface"]["Folders"]=5;
objet["interface"][5]="../InfOSIDLItf/interface_Folders_10821.htm";
objet["interface"]["MacrosSettingAtt"]=6;
objet["interface"][6]="../InfOSIDLItf/interface_MacrosSettingAtt_21068.htm";
objet["interface"]["SettingControllers"]=7;
objet["interface"][7]="../InfOSIDLItf/interface_SettingControllers_25102.htm";
objet["interface"]["SystemConfiguration"]=8;
objet["interface"][8]="../InfOSIDLItf/interface_SystemConfiguration_26869.htm";
objet["interface"]["TextStream"]=9;
objet["interface"][9]="../InfOSIDLItf/interface_TextStream_13279.htm";
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