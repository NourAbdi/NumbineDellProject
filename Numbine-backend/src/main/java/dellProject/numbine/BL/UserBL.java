package dellProject.numbine.BL;

import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.beans.Role;
import dellProject.numbine.beans.User;
import dellProject.numbine.repositories.UserRepository;

@Service
public class UserBL {
//	@Autowired
//	UserRepository repo;

	public List<Product> getProducts(String prodName, Date sDate, Date eDate) {
		return null;
	}

	public List<Release> getReleases(int prodId) {
		return null;
	}

	public List<User> sortUsersByDate(String role) {
		return null;
	}

	public List<User> sortUsersByProductName(String role) {
		return null;
	}

	public List<User> sortUsersBygroupName(String role) {
		return null;
	}

	public int getUsersCountByFileCreationDate(Date creationDate) {
		return -1;
	}

	public Map<Role, Integer> getRoleCount() {
		return null;
	}

	public List<File> getUserFilesByDate(Date sDate, Date eDate) {
		return null;
	}

	public List<File> getUserFilesByProduct(String prodName) {
		return null;
	}

	public List<File> getUserFilesByRelease(String prodName, String releaseName) {
		return null;
	}

	public List<File> getAllFilesByDate(Date sDate, Date eDate) {
		return null;
	}

//	public void deleteFile(String fileName) {
//	}

	public List<User> getactiveUsers() {
		return null;
	}

	public List<User> filterUsersByRole(String role) {
		return null;
	}

	public List<User> getInActiveUsers(String role) {
		return null;
	}

	public boolean deleteUser(int id) {
		return false;
	}

	public User getUserInfo(int id) {
		return null;
	}

	public List<String> getProductsGroup(int id) {
		return null;
	}

	public boolean addUser(String name, int phone, String password, String email, String role, String productGroup) {
		return false;
	}

	public void updateUser(String name, int phone, String password, String email, String role, String productGroup,
			boolean status) {
	}

	public User validate(String email, String password) {
//		User user = repo.getUserByEmail(email);
//		if (user != null) {
//			if (user.getPassword().equals(password)) {
//				return user;
//			}
//		}
//
		return null;
	}

	public void forgotPassword(String email) {

	}
}
