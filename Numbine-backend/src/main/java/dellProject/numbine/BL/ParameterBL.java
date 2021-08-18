package dellProject.numbine.BL;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dellProject.numbine.beans.Parameter;
import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.User;
import dellProject.numbine.beans.Value;
import dellProject.numbine.repositories.ParameterRepository;
import dellProject.numbine.repositories.ProductRepository;

@Service
public class ParameterBL {

	@Autowired
	ProductRepository ProductRepo;
	@Autowired
	ParameterRepository ParameterRepo;

	public List<Parameter> getAllParameters(int productId) {
		Product product = ProductRepo.findById(productId).get();
		return product.getParameters();

	}

	public boolean deleteParam(int productId, int paramId) {
		Product product = ProductRepo.findById(productId).get();
		if (product == null) {
			return false;
		}
		List<Parameter> params = product.getParameters();
		for (Parameter par : params) {
			if (par.getId() == paramId) {
				params.remove(par);
				return true;
			}
		}
		return false;

	}
	
	public List<Parameter> getAllParameters(){
		List<Product> products = ProductRepo.findAll();
		Set<Parameter> Parameters=new HashSet<>();
		for(Product product: products) {			
			Parameters.addAll(product.getParameters());
		}
		return  new ArrayList<>(Parameters);
	}
	
	public boolean addNewParam(String paramName, String paramDescription, List<String> paramValues) {
		Parameter parameter = ParameterRepo.findByParameterName(paramName);
		if (parameter != null) {
			return false;
		}
		ParameterRepo.save(parameter);
		return true;
		
	}
	public boolean updateParam( int paramId, String paramName, String paramDescription, List<Value> paramValues) {
		Parameter param = ParameterRepo.findByParameterName(paramName);
		if (param==null) {
			return false;
		}
		param.setDescription(paramDescription);
		param.setValues(paramValues);
		
		return true;
	}
}
