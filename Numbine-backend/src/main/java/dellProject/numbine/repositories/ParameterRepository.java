package dellProject.numbine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dellProject.numbine.beans.Parameter;

public interface ParameterRepository extends JpaRepository<Parameter,Integer>{
	
	public Parameter findByParameterName(String name);

}
