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
 objet["enum"]["Cat3DColorInheritanceMode"]=0;
objet["enum"][0]="../DraftingIDLItf/enum_Cat3DColorInheritanceMode_39398.htm";
objet["enum"]["CatAreaFillType"]=1;
objet["enum"][1]="../DraftingIDLItf/enum_CatAreaFillType_19827.htm";
objet["enum"]["CatDftGenRepresentationPolicy"]=2;
objet["enum"][2]="../DraftingIDLItf/enum_CatDftGenRepresentationPolicy_51980.htm";
objet["enum"]["CatDrawingViewType"]=3;
objet["enum"][3]="../DraftingIDLItf/enum_CatDrawingViewType_25136.htm";
objet["enum"]["CatFilletRepresentation"]=4;
objet["enum"][4]="../DraftingIDLItf/enum_CatFilletRepresentation_36233.htm";
objet["enum"]["CatGenRepresentationMode"]=5;
objet["enum"][5]="../DraftingIDLItf/enum_CatGenRepresentationMode_37868.htm";
objet["enum"]["CatGenViewRasterMode"]=6;
objet["enum"][6]="../DraftingIDLItf/enum_CatGenViewRasterMode_28495.htm";
objet["enum"]["CatHiddenLineMode"]=7;
objet["enum"][7]="../DraftingIDLItf/enum_CatHiddenLineMode_22611.htm";
objet["enum"]["CatImageViewMode"]=8;
objet["enum"][8]="../DraftingIDLItf/enum_CatImageViewMode_21160.htm";
objet["enum"]["CatPictureFormat"]=9;
objet["enum"][9]="../DraftingIDLItf/enum_CatPictureFormat_21756.htm";
objet["enum"]["CatPictureType"]=10;
objet["enum"][10]="../DraftingIDLItf/enum_CatPictureType_18780.htm";
objet["enum"]["CatPointsProjectionMode"]=11;
objet["enum"][11]="../DraftingIDLItf/enum_CatPointsProjectionMode_35406.htm";
objet["enum"]["CatProjViewType"]=12;
objet["enum"][12]="../DraftingIDLItf/enum_CatProjViewType_20135.htm";
objet["enum"]["CatRepresentationMode"]=13;
objet["enum"][13]="../DraftingIDLItf/enum_CatRepresentationMode_31061.htm";
objet["enum"]["CatSheetGenViewsPosMode"]=14;
objet["enum"][14]="../DraftingIDLItf/enum_CatSheetGenViewsPosMode_34778.htm";
objet["enum"]["CatSheetProjectionMethod"]=15;
objet["enum"][15]="../DraftingIDLItf/enum_CatSheetProjectionMethod_37886.htm";
objet["enum"]["CatThreadLinkedTo"]=16;
objet["enum"][16]="../DraftingIDLItf/enum_CatThreadLinkedTo_22761.htm";
objet["enum"]["CatThreadType"]=17;
objet["enum"][17]="../DraftingIDLItf/enum_CatThreadType_17194.htm";
objet["enum"]["CatWireframeMode"]=18;
objet["enum"][18]="../DraftingIDLItf/enum_CatWireframeMode_21300.htm";
objet["enum"]["RasterLevelOfDetail"]=19;
objet["enum"][19]="../DraftingIDLItf/enum_RasterLevelOfDetail_26289.htm";
objet["interface"]["DrawingAreaFill"]=0;
objet["interface"][0]="../DraftingIDLItf/interface_DrawingAreaFill_22600.htm";
objet["interface"]["DrawingAreaFills"]=1;
objet["interface"][1]="../DraftingIDLItf/interface_DrawingAreaFills_24325.htm";
objet["interface"]["DrawingComponent"]=2;
objet["interface"][2]="../DraftingIDLItf/interface_DrawingComponent_25000.htm";
objet["interface"]["DrawingComponents"]=3;
objet["interface"][3]="../DraftingIDLItf/interface_DrawingComponents_26840.htm";
objet["interface"]["DrawingDefineGenView"]=4;
objet["interface"][4]="../DraftingIDLItf/interface_DrawingDefineGenView_31309.htm";
objet["interface"]["DrawingGenService"]=5;
objet["interface"][5]="../DraftingIDLItf/interface_DrawingGenService_26117.htm";
objet["interface"]["DrawingGenView"]=6;
objet["interface"][6]="../DraftingIDLItf/interface_DrawingGenView_21477.htm";
objet["interface"]["DrawingGenViewProperties"]=7;
objet["interface"][7]="../DraftingIDLItf/interface_DrawingGenViewProperties_41363.htm";
objet["interface"]["DrawingPageSetup"]=8;
objet["interface"][8]="../DraftingIDLItf/interface_DrawingPageSetup_24632.htm";
objet["interface"]["DrawingPicture"]=9;
objet["interface"][9]="../DraftingIDLItf/interface_DrawingPicture_21827.htm";
objet["interface"]["DrawingPictures"]=10;
objet["interface"][10]="../DraftingIDLItf/interface_DrawingPictures_23437.htm";
objet["interface"]["DrawingRoot"]=11;
objet["interface"][11]="../DraftingIDLItf/interface_DrawingRoot_18029.htm";
objet["interface"]["DrawingService"]=12;
objet["interface"][12]="../DraftingIDLItf/interface_DrawingService_21659.htm";
objet["interface"]["DrawingSheet"]=13;
objet["interface"][13]="../DraftingIDLItf/interface_DrawingSheet_19016.htm";
objet["interface"]["DrawingSheets"]=14;
objet["interface"][14]="../DraftingIDLItf/interface_DrawingSheets_20396.htm";
objet["interface"]["DrawingThread"]=15;
objet["interface"][15]="../DraftingIDLItf/interface_DrawingThread_20131.htm";
objet["interface"]["DrawingThreads"]=16;
objet["interface"][16]="../DraftingIDLItf/interface_DrawingThreads_21626.htm";
objet["interface"]["DrawingView"]=17;
objet["interface"][17]="../DraftingIDLItf/interface_DrawingView_17949.htm";
objet["interface"]["DrawingViews"]=18;
objet["interface"][18]="../DraftingIDLItf/interface_DrawingViews_19214.htm";
objet["interface"]["PrintArea"]=19;
objet["interface"][19]="../DraftingIDLItf/interface_PrintArea_15765.htm";
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