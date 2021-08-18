package dellProject.numbine.repositories;

import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;

import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.beans.Role;
import dellProject.numbine.beans.User;

public interface UserRepository extends JpaRepository<User,Integer>{
//	public User getUserByEmail(String email);
//	public List<Product> getProducts(String prodName,Date sDate,Date eDate);
//	public List<Release> getReleases(int prodId);
//	public List<User> sortUsersByDate(String role);
//	public List<User> sortUsersByProductName(String role);
//	//public List<User> sortUsersBygroupName(String role);
//	public int getUsersCountByFileCreationDate(Date creationDate);
//	public Map<Role,Integer> getRoleCount();
//	public List<File> getUserFilesByDate(Date sDate,Date eDate);
//	public List<File> getUserFilesByProduct(String prodName);
//	public List<File> getUserFilesByRelease(String prodName,String releaseName);
//	public List<File> getAllFilesByDate(Date sDate,Date eDate);
//	//public void deleteFile(String fileName);
//	public List<User> getactiveUsers();
//	public List<User> filterUsersByRole(String role);
//	//public List<User> getInActiveUsers(String role);
//	public boolean deleteUser(int id);
//	public User getUserInfo(int id);
//	public List<String>  getProductsGroup(int id);
////	public boolean addUser(String name,int phone, String password,String email,String role,String productGroup);
//	public void updateUser(String name,int phone, String password,String email,String role,String productGroup,boolean status);
//	public User validate(String email,String password);
//	public void forgotPassword(String email);
}
