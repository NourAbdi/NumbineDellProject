package dellProject.numbine.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dellProject.numbine.BL.ProductBL;
import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.beans.Role;
import dellProject.numbine.beans.User;

import java.io.File;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import dellProject.numbine.BL.ProductBL;
import dellProject.numbine.BL.UserBL;

@RestController
@RequestMapping("User")
public class UserController {

	@Autowired
	UserBL userBL;
	
	@GetMapping("getProducts")
	public List<Product> getProducts(String prodName,Date sDate,Date eDate)
	{
		return userBL.getProducts(prodName,sDate,eDate);
	}
	
	@GetMapping("getReleases")
	public List<Release> getReleases(int prodId)
	{
		return userBL.getReleases(prodId);
	}
	
	@GetMapping("sortUsersByDate")
	public List<User> sortUsersByDate(String role)
	{
		return userBL.sortUsersByDate(role);
	}
	@GetMapping("sortUsersByProductName")
	public List<User> sortUsersByProductName(String role)
	{
		return userBL.sortUsersByProductName(role);
	}
	@GetMapping("sortUsersBygroupName")
	public List<User> sortUsersBygroupName(String role)
	{
		return userBL.sortUsersBygroupName(role);
	}
	@GetMapping("getUsersCountByFileCreationDate")
	public int getUsersCountByFileCreationDate(Date creationDate)
	{
		return userBL.getUsersCountByFileCreationDate(creationDate);
	}
	@GetMapping("getRoleCount")
	public Map<Role,Integer> getRoleCount()
	{
		return userBL.getRoleCount();
	}
	@GetMapping("getUserFilesByDate")
	public List<File> getUserFilesByDate(Date sDate,Date eDate)
	{
		return userBL.getUserFilesByDate(sDate, eDate);
	}
	@GetMapping("getUserFilesByProduct")
	public List<File> getUserFilesByProduct(String prodName)
	{
		return userBL.getUserFilesByProduct(prodName);
	}
	@GetMapping("getUserFilesByRelease")
	public List<File> getUserFilesByRelease(String prodName,String releaseName)
	{
		return userBL.getUserFilesByRelease(prodName, releaseName);
	}
	@GetMapping("getAllFilesByDate")
	public List<File> getAllFilesByDate(Date sDate,Date eDate)
	{
		return userBL.getAllFilesByDate(sDate, eDate);
	}
	/*@GetMapping("deleteFile")
	public void deleteFile(String fileName)
	{
	}
	*/
	@GetMapping("getactiveUsers")
	public List<User> getactiveUsers()
	{
		return userBL.getactiveUsers();
	}
	
	@GetMapping("filterUsersByRole")
	public List<User> filterUsersByRole(String role)
	{
		return userBL.filterUsersByRole(role);
	}
	
	@GetMapping("getInActiveUsers")
	public List<User> getInActiveUsers(String role)
	{
		return userBL.getInActiveUsers(role);
	}
	
	@GetMapping("deleteUser")
	public boolean deleteUser(int id)
	{
		return userBL.deleteUser(id);
	}
	
	@GetMapping("getUserInfo")
	public User getUserInfo(int id)
	{
		return userBL.getUserInfo(id);
	}
	
	@GetMapping("getProductsGroup")
	public List<String>  getProductsGroup(int id)
	{
		return userBL.getProductsGroup(id);
	}
	@GetMapping("addUser")
	public boolean addUser(String name,int phone, String password,String email,String role,String productGroup)
	{
		return userBL.addUser(name, phone, password, email, role, productGroup);
	}
	@GetMapping("updateUser")
	public void updateUser(String name,int phone, String password,String email,String role,String productGroup,boolean status)
	{
		userBL.updateUser(name, phone, password, email, role, productGroup, status);
	}
	
	@GetMapping("validate")
	public User validate(String email,String password)
	{
		return userBL.validate(email, password);
	}
	
	@GetMapping("forgotPassword")
	public void forgotPassword(String email)
	{
		userBL.forgotPassword(email);
	}
	

}
