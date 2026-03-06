function xrefToc(element, val) {
  //return xref('../CAAScdBase/CAAScdTocXrefs.htm', val);
  // -- retrieve or create div to display
   var xrefWindow=document.getElementById('xrefWindow');
  if ( ! xrefWindow ) {
	  xrefWindow=document.createElement("div");
	  xrefWindow.id='xrefWindow';
	  xrefWindow.style.position="fixed";
          xrefWindow.style.background="#fefefe";
          xrefWindow.style.width="auto";
          // div.style.max-width="15%";
          xrefWindow.style.height="auto";
          // div.style.max-height="85%";
          xrefWindow.style.border="1px solid #ddd";
          xrefWindow.style.padding="5px";
          xrefWindow.style.color="#333";
          xrefWindow.style.overflow="auto";
  }
  else {
	  xrefWindow.style.visibility="visible";
	  xrefWindow.innerHTML="";
  }
  xrefWindow.style.top=element.offsetTop.toString()+'px'; // "50px";
  xrefWindow.style.left=element.offsetLeft.toString()+'px';

  // -- Data
  var xtable  = { 
   HybridShape:        [ 3, 5], 
   Parameter:          [ 0, 1, 3, 6], 
   Relation:           [ 0, 2, 3, 6], 
   GeometricElement:   [ 0, 3, 4, 6], 
   Sketch:             [ 3, 5],
   TocApplication:     [ 3, 0, 8],
   Service:            [ 9, 10, 19, 13, 20],
   DPCOperations:      [ 3, 5, 7],
   Editor:             [11, 12, 8],
   SFDEndcut:          [13, 15, 16, 18],
   SFDOpening:         [13, 15, 16, 18],
   SFDSlot:            [13, 15, 16, 18],
   SFDBreak:           [13, 15, 16],
   SFDStdCtrParms:     [13, 14, 18],
   SFDStdStrParms:     [13, 14, 18],
   SFDStiffener:       [13, 17],
   SFDStiffenerFree:   [13, 17],
   VPMReference:       [21, 22],
   SimAxisSystem:      [23, 24, 25, 26, 27],
   SimMaterialOptions: [28, 29],
   SimFeatures:        [30, 31, 32]
   };
var tocs = [ 
   "../CAAScdDriDrafting/CAADriTocDrawing.htm", 
   "../CAAScdOptimizer/CAAScdOptTocOptimizations.htm", 
   "../CAAScdKnowledge/CAAKniTocParameter.htm", 
   "../CAAScdMechMod/CAAMmrTocPart.htm", 
   "../CAAScdSkiSketcher/CAAMmrTocSketch.htm", 
   "../CAAScdPriPartDesign/CAAPriTocShapes.htm", 
   "../CAAScd2dlFor3DDesign/CAA2dlToc2DLayout.htm",
   "../CAAScdGenerativeShapeDesign/CAAScdGsiTocHybridShape.htm",
   "../CAAScdProduct/CAAScdPstTocProductStructure.htm",
   "../CAAScdVPMDigitalReview/CAAScdTocVPMDigitalReview.htm",
   "../CAAScdPcbCircuitBoard/CAAScdPcbTocPCB.htm",
   "../CAAScdMechMod/CAAMmrObjPart.htm",
   "../CAAScdDriDrafting/CAADriObjDrawingRoot.htm",
   "../CAAScdSfdSFDesign/CAAScdSfdTocSFDesign.htm",
   "../CAAScdSfdSFDesign/CAAScdSfdTocStrOpenings.htm",
   "../CAAScdSfdSFDesign/CAAScdSfdTocSfdStiffener.htm",
   "../CAAScdSfdSFDesign/CAAScdSfdTocSfdStiffenerOnFreeEdge.htm",
   "../CAAScdSfdSFDesign/CAAScdSfdTocStrBreak.htm",
   "../CAAScdSddSDDesign/CAAScdSddTocSDDesign.htm",
   "../CAAScdFcbCircuitBoard/CAAScdFcbTocFCB.htm",
   "../CAAScdVPMDigitalValidation/CAAScdTocVPMDigitalValidation.htm",
   "../CAAScdAssDesign/CAAScdAssTocAssembly.htm",
   "../CAAScdFeaModeling/CAAScdFeaTocModeling.htm",
   "../CAAScdFeaModeling/CAAScdFeaObjSimMCXProperties.htm",
   "../CAAScdFeaModeling/CAAScdFeaObjSimAbstractions.htm",
   "../CAAScdFeaModeling/CAAScdFeaObjSimProperties.htm",
   "../CAAScdFeaModeling/CAAScdFeaObjSimConnectorSection.htm",
   "../CAAScdFeaScenario/CAAScdFeaObjSimFeatures.htm",
   "../CAAScdMat/CAAScdMatTocMaterial.htm",
   "../CAAScdMat/CAAScdMatObjSimMaterialDomain.htm",
   "../CAAScdFeaScenario/CAAScdFeaTocScenario.htm",
   "../CAAScdFeaScenario/CAAScdFeaObjSimSteps.htm",
   "../CAAScdFeaScenario/CAAScdFeaObjSimLinearLoadCases.htm"
   ];
var titles  = [ 
   "Drafting Object Model Map",
   "Optimizations Object Model Map",
   "Parameters Object Model Map",
   "Part Object Model Map",
   "Sketcher Object Model Map",
   "Shape Object Model Map",
   "2D Layout for 3D Design Object Model Map",
   "Generative Shape Design Object Model Map",
   "Product Object Model Map",
   "Design Review Object Model Map",
   "Circuit Board Design Object Model Map",
   "Part Object",
   "DrawingRoot Object",
   "Structure Functional Design Object Model Map",
   "StrOpenings Object Model Map",
   "StrStiffenerMngt Object Model Map",
   "SfdStiffenerOnFreeEdge Object Model Map",
   "StrBreak Object Model Map",
   "Structure Detail Design Object Model Map",
   "Flexible Circuit Board Object Model Map",
   "Digital Validation Object Model Map",
   "Assembly Design Object Model Map",
   "Multiphysics Model Creation Object Model Map",
   "SimMCXProperties Collection",
   "SimAbstractions Collection",
   "SimProperties Collection",
   "SimConnectorSection Object",
   "Simulation Feature Objects",
   "Material Definition Object Model Map",
   "SimMaterialDomain Object",
   "Multiphysics Scenario Creation Object Model Map",
   "SimSteps Collection",
   "SimLinearLoadCases Collection"
   ];

  // -- Create Div content
  var ltab=xtable[val];
  var lsam=tocs;
  var ltit=titles;

  var tbl     = document.createElement("table"); 
  var tblBody = document.createElement("tbody");

  row = document.createElement("tr");
  cell = document.createElement("td");    
  cell.className='tech';
  cell.innerHTML='<a name="TechArt"></a><strong><em>Object Models found ('+val+')</em></strong>&nbsp;<button onclick="javascript:xrefWindow.style.visibility=\'hidden\'">X</button>';
  row.appendChild(cell);
  tblBody.appendChild(row);

  // rows creation
  for (var ii=0; ii<ltab.length; ii++) {
     row = document.createElement("tr");
     cell = document.createElement("td");    
     cell.innerHTML='<a href="'+lsam[ltab[ii]]+'">'+ltit[ltab[ii]]+'</a>';
     row.appendChild(cell);
     tblBody.appendChild(row);
    }
  tbl.appendChild(tblBody);
  xrefWindow.appendChild(tbl);
  document.body.appendChild(xrefWindow);
}
