package dellProject.numbine.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dellProject.numbine.BL.ParameterBL;
import dellProject.numbine.beans.Parameter;
import dellProject.numbine.beans.Value;

@RestController
@RequestMapping("Parameter")
public class ParameterController {

	@Autowired
	ParameterBL ParameterBL;

	@GetMapping("getAllParameters")
	public List<Parameter> getAllParameters(int productId) {
		return ParameterBL.getAllParameters(productId);
	}

	@GetMapping("deleteParam")
	public boolean deleteParam(int productId, int paramId) {
		return ParameterBL.deleteParam(productId, paramId);
	}

	
	@GetMapping("addNewParam")
	public boolean addNewParam(String paramName, String paramDescription, List<String> paramValues) {
		return ParameterBL.addNewParam(paramName, paramDescription, paramValues);
	}
	@GetMapping("updateParam")
	public boolean updateParam( int paramId, String paramName, String paramDescription, List<Value> paramValues) {
		return ParameterBL.updateParam(paramId, paramName, paramDescription, paramValues);
	}

}
