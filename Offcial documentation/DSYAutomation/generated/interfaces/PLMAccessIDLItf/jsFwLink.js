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
 objet["enum"]["SearchCondition"]=0;
objet["enum"][0]="../PLMAccessIDLItf/enum_SearchCondition_21384.htm";
objet["enum"]["SearchMode"]=1;
objet["enum"][1]="../PLMAccessIDLItf/enum_SearchMode_14804.htm";
objet["enum"]["SearchOperator"]=2;
objet["enum"][2]="../PLMAccessIDLItf/enum_SearchOperator_20008.htm";
objet["enum"]["SearchSortOrder"]=3;
objet["enum"][3]="../PLMAccessIDLItf/enum_SearchSortOrder_21240.htm";
objet["interface"]["DatabaseSearch"]=0;
objet["interface"][0]="../PLMAccessIDLItf/interface_DatabaseSearch_22557.htm";
objet["interface"]["IndexedSearch"]=1;
objet["interface"][1]="../PLMAccessIDLItf/interface_IndexedSearch_21263.htm";
objet["interface"]["PLMPlay"]=2;
objet["interface"][2]="../PLMAccessIDLItf/interface_PLMPlay_15439.htm";
objet["interface"]["PLMScriptService"]=3;
objet["interface"][3]="../PLMAccessIDLItf/interface_PLMScriptService_25806.htm";
objet["interface"]["PLMSearch"]=4;
objet["interface"][4]="../PLMAccessIDLItf/interface_PLMSearch_16903.htm";
objet["interface"]["PLMSearchService"]=5;
objet["interface"][5]="../PLMAccessIDLItf/interface_PLMSearchService_25596.htm";
objet["interface"]["PLMSearches"]=6;
objet["interface"][6]="../PLMAccessIDLItf/interface_PLMSearches_18962.htm";
objet["interface"]["SearchService"]=7;
objet["interface"][7]="../PLMAccessIDLItf/interface_SearchService_21409.htm";
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