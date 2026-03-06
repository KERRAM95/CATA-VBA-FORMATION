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
 objet["enum"]["CatGeometricType"]=0;
objet["enum"][0]="../CATSketcherIDLItf/enum_CatGeometricType_25976.htm";
objet["interface"]["Axis2D"]=0;
objet["interface"][0]="../CATSketcherIDLItf/interface_Axis2D_17595.htm";
objet["interface"]["Circle2D"]=1;
objet["interface"][1]="../CATSketcherIDLItf/interface_Circle2D_18723.htm";
objet["interface"]["ControlPoint2D"]=2;
objet["interface"][2]="../CATSketcherIDLItf/interface_ControlPoint2D_24971.htm";
objet["interface"]["Curve2D"]=3;
objet["interface"][3]="../CATSketcherIDLItf/interface_Curve2D_18141.htm";
objet["interface"]["Ellipse2D"]=4;
objet["interface"][4]="../CATSketcherIDLItf/interface_Ellipse2D_19542.htm";
objet["interface"]["Factory2D"]=5;
objet["interface"][5]="../CATSketcherIDLItf/interface_Factory2D_19657.htm";
objet["interface"]["GeometricElement"]=6;
objet["interface"][6]="../CATSketcherIDLItf/interface_GeometricElement_28938.htm";
objet["interface"]["Geometry2D"]=7;
objet["interface"][7]="../CATSketcherIDLItf/interface_Geometry2D_20557.htm";
objet["interface"]["Hyperbola2D"]=8;
objet["interface"][8]="../CATSketcherIDLItf/interface_Hyperbola2D_21302.htm";
objet["interface"]["Line2D"]=9;
objet["interface"][9]="../CATSketcherIDLItf/interface_Line2D_17548.htm";
objet["interface"]["Parabola2D"]=10;
objet["interface"][10]="../CATSketcherIDLItf/interface_Parabola2D_20282.htm";
objet["interface"]["Point2D"]=11;
objet["interface"][11]="../CATSketcherIDLItf/interface_Point2D_18153.htm";
objet["interface"]["Sketch"]=12;
objet["interface"][12]="../CATSketcherIDLItf/interface_Sketch_17953.htm";
objet["interface"]["Spline2D"]=13;
objet["interface"][13]="../CATSketcherIDLItf/interface_Spline2D_18744.htm";
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