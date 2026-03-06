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
 objet["enum"]["CatImportFromDrawingOption"]=0;
objet["enum"][0]="../Drafting2DLIDLItf/enum_CatImportFromDrawingOption_46537.htm";
objet["enum"]["CatView2DModeVisu"]=1;
objet["enum"][1]="../Drafting2DLIDLItf/enum_CatView2DModeVisu_25848.htm";
objet["enum"]["CatViewSide"]=2;
objet["enum"][2]="../Drafting2DLIDLItf/enum_CatViewSide_17985.htm";
objet["enum"]["CatViewType"]=3;
objet["enum"][3]="../Drafting2DLIDLItf/enum_CatViewType_18228.htm";
objet["enum"]["CatVisuBackgroundMode"]=4;
objet["enum"][4]="../Drafting2DLIDLItf/enum_CatVisuBackgroundMode_33970.htm";
objet["enum"]["CatVisuIn3DMode"]=5;
objet["enum"][5]="../Drafting2DLIDLItf/enum_CatVisuIn3DMode_22135.htm";
objet["interface"]["Layout2DFactory"]=0;
objet["interface"][0]="../Drafting2DLIDLItf/interface_Layout2DFactory_26154.htm";
objet["interface"]["Layout2DRoot"]=1;
objet["interface"][1]="../Drafting2DLIDLItf/interface_Layout2DRoot_21988.htm";
objet["interface"]["Layout2DServices"]=2;
objet["interface"][2]="../Drafting2DLIDLItf/interface_Layout2DServices_27644.htm";
objet["interface"]["Layout2DSheet"]=3;
objet["interface"][3]="../Drafting2DLIDLItf/interface_Layout2DSheet_23060.htm";
objet["interface"]["Layout2DSheets"]=4;
objet["interface"][4]="../Drafting2DLIDLItf/interface_Layout2DSheets_24555.htm";
objet["interface"]["Layout2DView"]=5;
objet["interface"][5]="../Drafting2DLIDLItf/interface_Layout2DView_21899.htm";
objet["interface"]["Layout2DViews"]=6;
objet["interface"][6]="../Drafting2DLIDLItf/interface_Layout2DViews_23279.htm";
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