function createMap() {
	//var docBody = document.body;
	//var docTab  = document.getElementById("mapTab");
	var i = 0;
	var j = 0;
	var k = 0;

	var xmlMap = new Object();
	var xmlToc = new Object();
	/* 3D Modeling Apps */
	/* 2D Layout for 3D Design */
	xmlMap.xdl = "../CAAScd2dlFor3DDesign/CAAScd2dl.xml";
	xmlToc.xdl = "../CAAScd2dlFor3DDesign/CAAScd2dlToc.htm";
	/* 3D Tolerance & Annotation*/
	xmlMap.Tpi = "../CAAScdTpiFTA/CAAScdTpi.xml";
	xmlToc.Tpi = "../CAAScdTpiFTA/CAAScdTpiToc.htm";
	/* Assembly Design */
	xmlMap.Aui = "../CAAScdAssDesign/CAAScdAss.xml";
	xmlToc.Aui = "../CAAScdAssDesign/CAAScdAssToc.htm";
	/* Accommodation Design */
	xmlMap.Agt = "../CAAScdAgtAccommodation/CAAScdAgt.xml";
	xmlToc.Agt = "../CAAScdAgtAccommodation/CAAScdAgtToc.htm";
	/* Circuit Board Design */
	xmlMap.Cci = "../CAAScdPcbCircuitBoard/CAAScdPcb.xml";
	xmlToc.Cci = "../CAAScdPcbCircuitBoard/CAAScdPcbToc.htm";
	/* Design Optimization */
	xmlMap.Opt = "../CAAScdOptimizer/CAAScdOpt.xml";
	xmlToc.Opt = "../CAAScdOptimizer/CAAScdOptToc.htm";
	/* Drafting */
	xmlMap.Dri = "../CAAScdDriDrafting/CAAScdDri.xml";
	xmlToc.Dri = "../CAAScdDriDrafting/CAAScdDriToc.htm";
	/* Flexible Circuit Board Design */
	xmlMap.Fma = "../CAAScdFcbCircuitBoard/CAAScdFcb.xml";
	xmlToc.Fma = "../CAAScdFcbCircuitBoard/CAAScdFcbToc.htm";
	/* Generative Shape Design */
	xmlMap.Gsi = "../CAAScdGenerativeShapeDesign/CAAScdGsi.xml";
	xmlToc.Gsi = "../CAAScdGenerativeShapeDesign/CAAScdGsiToc.htm";
	/* Knowledge Basics */
	xmlMap.Kni = "../CAAScdKnowledge/CAAScdKni.xml";
	xmlToc.Kni = "../CAAScdKnowledge/CAAScdKniToc.htm";
	/* Know-how Apps Components */
	xmlMap.Dpc = "../CAAScdDpcAutDesignProcess/CAAScdDpc.xml";
	xmlToc.Dpc = "../CAAScdDpcAutDesignProcess/CAAScdDpcToc.htm";
	/* Know-how Reuse */
	xmlMap.Khw = "../CAAScdKnowHow/CAAScdKhw.xml";
	xmlToc.Khw = "../CAAScdKnowHow/CAAScdKhwToc.htm";
	/* Mechanical Systems Design / Experience */
	xmlMap.Kin = "../CAAScdKin/CAAScdKin.xml";
	xmlToc.Kin = "../CAAScdKin/CAAScdKinToc.htm";
	/* Part Design */
	xmlMap.Pri = "../CAAScdPriPartDesign/CAAScdPri.xml";
	xmlToc.Pri = "../CAAScdPriPartDesign/CAAScdPriToc.htm";
	/* Simulation Platform */
	xmlMap.Sim = "../CAAScdSimulation/CAAScdSim.xml";
	xmlToc.Sim = "../CAAScdSimulation/CAAScdSimToc.htm";
	/* Sketcher */
	xmlMap.Ski = "../CAAScdSkiSketcher/CAAScdSki.xml";
	xmlToc.Ski = "../CAAScdSkiSketcher/CAAScdSkiToc.htm";
	/* Space Allocation */
	xmlMap.Spl = "../CAAScdSpaceAllocation/CAAScdSpaceAllocation.xml";
	xmlToc.Spl = "../CAAScdSpaceAllocation/CAAScdSpaceAllocationToc.htm";
	/* Space Reference System */
	xmlMap.Srs = "../CAAScdSrsSpaceReferenceSystem/CAAScdSrs.xml";
	xmlToc.Srs = "../CAAScdSrsSpaceReferenceSystem/CAAScdSrsToc.htm";
	/* Structure Design */
	xmlMap.Sdd = "../CAAScdSddSDDesign/CAAScdSdd.xml";
	xmlToc.Sdd = "../CAAScdSddSDDesign/CAAScdSddToc.htm";
	/* Structure Functional Design */
	xmlMap.Sfd = "../CAAScdSfdSFDesign/CAAScdSfd.xml";
	xmlToc.Sfd = "../CAAScdSfdSFDesign/CAAScdSfdToc.htm";
	/* Buildings Space Planning */
	xmlMap.Swu = "../CAAScdSwu/CAAScdSwu.xml";
	xmlToc.Swu = "../CAAScdSwu/CAAScdSwuToc.htm";

	/* Design Review */
	xmlMap.Drw = "../CAAScdVPMDigitalReview/CAAScdVPMDigitalReview.xml";
	xmlToc.Drw = "../CAAScdVPMDigitalReview/CAAScdVPMDigitalReviewToc.htm";
	/* Design Synthesis */
	xmlMap.Anm = "../CAAScdVPMDigitalValidation/CAAScdVPMDigitalValidation.xml";
    xmlToc.Anm = "../CAAScdVPMDigitalValidation/CAAScdVPMDigitalValidationToc.htm";
    /* Mechanical Interference Check */
	xmlMap.Itf = "../CAAScdITFCheck/CAAScdITF.xml";
	xmlToc.Itf = "../CAAScdITFCheck/CAAScdITFToc.htm";	

	/* Contents and Simulation Apps */
	/* Manufacturing Assembly Evaluation */
	xmlMap.Fit = "../CAAScdFit/CAAScdFit.xml";
	xmlToc.Fit = "../CAAScdFit/CAAScdFitToc.htm";
	/* Material Definition */
	xmlMap.Mat = "../CAAScdMat/CAAScdMat.xml";
	xmlToc.Mat = "../CAAScdMat/CAAScdMaterialToc.htm";
	/* Robot Programming */
	xmlMap.Olp = "../CAAScdOlpOfflineProg/CAAScdOlp.xml";
	xmlToc.Olp = "../CAAScdOlpOfflineProg/CAAScdOlpToc.htm";
	/* Multiphysics Common Services */
	xmlMap.Mp1 = "../CAAScdFeaSimulation/CAAScdFeaCommon.xml";
	xmlToc.Mp1 = "../CAAScdFeaSimulation/CAAScdFeaCommonToc.htm";
	/* Multiphysics Modeling */
	xmlMap.Mp2 = "../CAAScdFeaModeling/CAAScdFeaModeling.xml";
	xmlToc.Mp2 = "../CAAScdFeaModeling/CAAScdFeaModelingToc.htm";
	/* Multiphysics Scenario */
	xmlMap.Mp3 = "../CAAScdFeaScenario/CAAScdFeaScenario.xml";
	xmlToc.Mp3 = "../CAAScdFeaScenario/CAAScdFeaScenarioToc.htm";
	/* Multiphysics Results */
	xmlMap.Mp4 = "../CAAScdFeaResults/CAAScdFeaResults.xml";
	xmlToc.Mp4 = "../CAAScdFeaResults/CAAScdFeaResultsToc.htm";
	/* Simulation Interchange Model */
	xmlMap.Sma = "../CAAScdSimResult/CAAScdSimResult.xml";
	xmlToc.Sma = "../CAAScdSimResult/CAAScdSimResultToc.htm";

	var tdList  = document.getElementsByTagName("td");
//	alert('length = '+tdList.length);

	while (i<tdList.length) {
//		var num = tdList[i].id.substring(2, tdList[i].id.length);
//		if (i<11)
//			alert('i = '+i+' - num = '+num);
		var tdId = tdList[i].id;
		if (tdId != "") {
			//alert ('tdId = '+tdId+'\n'+xmlMap[tdId]);
			var testNode = null;
			var ms = "yes";
			try {
				testNode = loadXML(xmlMap[tdId]).getElementsByTagName('Root')[0];
				while (testNode.firstChild != null) { // To force the exception to be thrown
					break;
				}
			} catch(e) { ms = "no"; }
			//alert('ms = '+ms);
			if (ms == "no") { // If the product is not installed, display gray images
				//alert('Not installed = '+tdId);
				tdList[i].className = "mapDimmed";
			} else {
				tdList[i].className = "mapDimmed";
				var tocLink = document.createElement("A");
				tocLink.innerHTML = tdList[i].innerHTML;
				tdList[i].innerHTML = "";
				tocLink.href = xmlToc[tdId];
				tocLink.className = "map";
				var prompt = document.getElementById("prompt"+tdId).innerHTML;
				tocLink.innerHTML = tocLink.innerHTML+'<em><span></span>'+prompt+'</em>';
				tdList[i].appendChild(tocLink);
			}
		}
		i++;
	}
}
