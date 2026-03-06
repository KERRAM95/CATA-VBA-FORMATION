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
 objet["enum"]["CtmBaseAxisOrientation"]=0;
objet["enum"][0]="../DELCurveTrajectoryInterfaces/enum_CtmBaseAxisOrientation_64677.htm";
objet["enum"]["CtmCurveType"]=1;
objet["enum"][1]="../DELCurveTrajectoryInterfaces/enum_CtmCurveType_47262.htm";
objet["enum"]["CtmRakeLocation"]=2;
objet["enum"][2]="../DELCurveTrajectoryInterfaces/enum_CtmRakeLocation_51191.htm";
objet["enum"]["DNBTrajectoryType"]=3;
objet["enum"][3]="../DELCurveTrajectoryInterfaces/enum_DNBTrajectoryType_54762.htm";
objet["interface"]["CtmContour"]=0;
objet["interface"][0]="../DELCurveTrajectoryInterfaces/interface_CtmContour_48269.htm";
objet["interface"]["CtmContourFromCurves"]=1;
objet["interface"][1]="../DELCurveTrajectoryInterfaces/interface_CtmContourFromCurves_63498.htm";
objet["interface"]["CtmContourFromPoints"]=2;
objet["interface"][2]="../DELCurveTrajectoryInterfaces/interface_CtmContourFromPoints_63580.htm";
objet["interface"]["CtmContourFromSurfaces"]=3;
objet["interface"][3]="../DELCurveTrajectoryInterfaces/interface_CtmContourFromSurfaces_67509.htm";
objet["interface"]["CtmCurveOrienter"]=4;
objet["interface"][4]="../DELCurveTrajectoryInterfaces/interface_CtmCurveOrienter_56064.htm";
objet["interface"]["CtmCurveSampler"]=5;
objet["interface"][5]="../DELCurveTrajectoryInterfaces/interface_CtmCurveSampler_54357.htm";
objet["interface"]["CtmCurveSamplerDistance"]=6;
objet["interface"][6]="../DELCurveTrajectoryInterfaces/interface_CtmCurveSamplerDistance_69444.htm";
objet["interface"]["CtmCurveSamplerNumber"]=7;
objet["interface"][7]="../DELCurveTrajectoryInterfaces/interface_CtmCurveSamplerNumber_65215.htm";
objet["interface"]["CtmCurveSamplerSpeed"]=8;
objet["interface"][8]="../DELCurveTrajectoryInterfaces/interface_CtmCurveSamplerSpeed_62829.htm";
objet["interface"]["CtmPath"]=9;
objet["interface"][9]="../DELCurveTrajectoryInterfaces/interface_CtmPath_45471.htm";
objet["interface"]["CtmPathMgt"]=10;
objet["interface"][10]="../DELCurveTrajectoryInterfaces/interface_CtmPathMgt_47878.htm";
objet["interface"]["CtmSafePath"]=11;
objet["interface"][11]="../DELCurveTrajectoryInterfaces/interface_CtmSafePath_48812.htm";
objet["interface"]["CurveTrajectory"]=12;
objet["interface"][12]="../DELCurveTrajectoryInterfaces/interface_CurveTrajectory_54722.htm";
objet["interface"]["CurveTrajectoryFactory"]=13;
objet["interface"][13]="../DELCurveTrajectoryInterfaces/interface_CurveTrajectoryFactory_68025.htm";
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