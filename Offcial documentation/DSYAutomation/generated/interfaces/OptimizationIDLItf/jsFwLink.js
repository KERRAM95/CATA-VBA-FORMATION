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
 objet["enum"]["CatAlgorithmType"]=0;
objet["enum"][0]="../OptimizationIDLItf/enum_CatAlgorithmType_28126.htm";
objet["enum"]["CatOptimizationType"]=1;
objet["enum"][1]="../OptimizationIDLItf/enum_CatOptimizationType_33736.htm";
objet["interface"]["ConstraintSatisfaction"]=0;
objet["interface"][0]="../OptimizationIDLItf/interface_ConstraintSatisfaction_43020.htm";
objet["interface"]["FreeParameter"]=1;
objet["interface"][1]="../OptimizationIDLItf/interface_FreeParameter_26634.htm";
objet["interface"]["FreeParameters"]=2;
objet["interface"][2]="../OptimizationIDLItf/interface_FreeParameters_28129.htm";
objet["interface"]["Optimization"]=3;
objet["interface"][3]="../OptimizationIDLItf/interface_Optimization_25651.htm";
objet["interface"]["OptimizationConstraint"]=4;
objet["interface"][4]="../OptimizationIDLItf/interface_OptimizationConstraint_43334.htm";
objet["interface"]["OptimizationConstraints"]=5;
objet["interface"][5]="../OptimizationIDLItf/interface_OptimizationConstraints_45864.htm";
objet["interface"]["Optimizations"]=6;
objet["interface"][6]="../OptimizationIDLItf/interface_Optimizations_27031.htm";
objet["interface"]["OptimizationsFactory"]=7;
objet["interface"][7]="../OptimizationIDLItf/interface_OptimizationsFactory_38878.htm";
objet["interface"]["OptimsSet"]=8;
objet["interface"][8]="../OptimizationIDLItf/interface_OptimsSet_22230.htm";
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