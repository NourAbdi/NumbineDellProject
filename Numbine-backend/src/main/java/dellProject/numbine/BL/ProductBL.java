package dellProject.numbine.BL;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.beans.User;
import dellProject.numbine.repositories.ProductRepository;

@Service
public class ProductBL {

	
	
	@Autowired
	ProductRepository repo;

	
	public Product findById(int productId) {
		return repo.findById(productId).get();
	}
	
	public boolean addProduct(Product p) {
		// check if product with same name already exists
		Product product = repo.findByProductName(p.getProductName());
		if (product != null) {
			return false;
		}
		repo.save(p);
		return true;

	}

	public List<Product> getAllProducts() {
		return repo.findAll();
	}

	public void updateProduct(int productId,String name, boolean status) {
		Optional<Product> product = repo.findById(productId);
		if (product != null) {
			Product product1 = product.get();
			//need to set all feilds
			repo.save(product1);
		}
	}

	public void deleteProduct(int productId) {
		Product product = findById(productId);
		if (product != null) {
			repo.save(product);
		}
	}

	public List<Release> getAllReleases(int productId) {
		Product product = findById(productId);
		List<Release> releases=null;
		if (product != null) {
			releases = product.getReleases();
		}
		return releases;
	}
	
	public List<User> getAllUsers(int productId){
		Product product = findById(productId);
		return product.getUsers();
	}
	
	public List<User> getAllUsersNotInProduct(int productId){
		List<Product> products= repo.findAll();
		Set<User> users = new HashSet<>();
		for(Product product: products) {
			users.addAll(product.getUsers());
		}
		Product myProduct = findById(productId);
		Set<User> myUsers = new HashSet<>();
		myUsers.addAll(myProduct.getUsers());
		for(User user:users) {
			if(myUsers.contains(user)) {
				users.remove(user);
			}
		}
		return new ArrayList<>(users);
	}
	
	public boolean updateProductUserList(int productId,List<User> users) {
		Product product = findById(productId);
		product.setUsers(users);
		repo.save(product);
		return true;
	}

}
