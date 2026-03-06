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
 objet["enum"]["CATMeasurableContextType"]=0;
objet["enum"][0]="../CATOpnsMeasureIDLItf/enum_CATMeasurableContextType_47739.htm";
objet["enum"]["CATMeasurableModeOfCalc"]=1;
objet["enum"][1]="../CATOpnsMeasureIDLItf/enum_CATMeasurableModeOfCalc_43228.htm";
objet["enum"]["CATMeasurableType"]=2;
objet["enum"][2]="../CATOpnsMeasureIDLItf/enum_CATMeasurableType_32801.htm";
objet["enum"]["CATOpnsMeasureDistanceType"]=3;
objet["enum"][3]="../CATOpnsMeasureIDLItf/enum_CATOpnsMeasureDistanceType_52308.htm";
objet["enum"]["CATOpnsMeasureEdgeType"]=4;
objet["enum"][4]="../CATOpnsMeasureIDLItf/enum_CATOpnsMeasureEdgeType_42191.htm";
objet["enum"]["CATOpnsMeasureExtensionMode"]=5;
objet["enum"][5]="../CATOpnsMeasureIDLItf/enum_CATOpnsMeasureExtensionMode_55104.htm";
objet["enum"]["CATOpnsMeasureItemType"]=6;
objet["enum"][6]="../CATOpnsMeasureIDLItf/enum_CATOpnsMeasureItemType_42591.htm";
objet["enum"]["CATOpnsMeasureSurfaceType"]=7;
objet["enum"][7]="../CATOpnsMeasureIDLItf/enum_CATOpnsMeasureSurfaceType_49736.htm";
objet["enum"]["CATResultCalcType"]=8;
objet["enum"][8]="../CATOpnsMeasureIDLItf/enum_CATResultCalcType_32567.htm";
objet["interface"]["MeasurableAxisSystem"]=0;
objet["interface"][0]="../CATOpnsMeasureIDLItf/interface_MeasurableAxisSystem_41837.htm";
objet["interface"]["MeasurableBetween"]=1;
objet["interface"][1]="../CATOpnsMeasureIDLItf/interface_MeasurableBetween_35833.htm";
objet["interface"]["MeasurableCircle"]=2;
objet["interface"][2]="../CATOpnsMeasureIDLItf/interface_MeasurableCircle_33941.htm";
objet["interface"]["MeasurableCone"]=3;
objet["interface"][3]="../CATOpnsMeasureIDLItf/interface_MeasurableCone_30958.htm";
objet["interface"]["MeasurableCurve"]=4;
objet["interface"][4]="../CATOpnsMeasureIDLItf/interface_MeasurableCurve_32707.htm";
objet["interface"]["MeasurableCylinder"]=5;
objet["interface"][5]="../CATOpnsMeasureIDLItf/interface_MeasurableCylinder_37690.htm";
objet["interface"]["MeasurableInContext"]=6;
objet["interface"][6]="../CATOpnsMeasureIDLItf/interface_MeasurableInContext_39645.htm";
objet["interface"]["MeasurableLine"]=7;
objet["interface"][7]="../CATOpnsMeasureIDLItf/interface_MeasurableLine_30982.htm";
objet["interface"]["MeasurablePlane"]=8;
objet["interface"][8]="../CATOpnsMeasureIDLItf/interface_MeasurablePlane_32430.htm";
objet["interface"]["MeasurablePoint"]=9;
objet["interface"][9]="../CATOpnsMeasureIDLItf/interface_MeasurablePoint_32769.htm";
objet["interface"]["MeasurableService"]=10;
objet["interface"][10]="../CATOpnsMeasureIDLItf/interface_MeasurableService_35848.htm";
objet["interface"]["MeasurableSphere"]=11;
objet["interface"][11]="../CATOpnsMeasureIDLItf/interface_MeasurableSphere_34168.htm";
objet["interface"]["MeasurableSurface"]=12;
objet["interface"][12]="../CATOpnsMeasureIDLItf/interface_MeasurableSurface_35704.htm";
objet["interface"]["MeasurableVolume"]=13;
objet["interface"][13]="../CATOpnsMeasureIDLItf/interface_MeasurableVolume_34373.htm";
objet["interface"]["Measure"]=14;
objet["interface"][14]="../CATOpnsMeasureIDLItf/interface_Measure_23999.htm";
objet["interface"]["MeasureBetween"]=15;
objet["interface"][15]="../CATOpnsMeasureIDLItf/interface_MeasureBetween_31256.htm";
objet["interface"]["MeasureItem"]=16;
objet["interface"][16]="../CATOpnsMeasureIDLItf/interface_MeasureItem_27437.htm";
objet["interface"]["MeasureService"]=17;
objet["interface"][17]="../CATOpnsMeasureIDLItf/interface_MeasureService_31250.htm";
objet["interface"]["MeasureSettingAtt"]=18;
objet["interface"][18]="../CATOpnsMeasureIDLItf/interface_MeasureSettingAtt_35912.htm";
objet["interface"]["Measures"]=19;
objet["interface"][19]="../CATOpnsMeasureIDLItf/interface_Measures_24804.htm";
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