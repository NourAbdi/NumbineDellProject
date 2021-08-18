package dellProject.numbine.BL;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dellProject.numbine.beans.Product;
import dellProject.numbine.beans.Release;
import dellProject.numbine.repositories.ProductRepository;
import dellProject.numbine.repositories.ReleaseRepository;
@Service
public class ReleaseBL {

	@Autowired
	ProductRepository ProductRepo;
	@Autowired
	ReleaseRepository ReleaseRepo;
	
	
	public List<Release> getAllReleases(int productId){
		Product product = ProductRepo.findById(productId).get();
		List<Release> release =new ArrayList<Release>();
		 release.addAll(product.getReleases());
		 return release;
	}
	public boolean updateRelease(int productId, String releaseName, String version, boolean status) {
		Product product = ProductRepo.findById(productId).get();
		List<Release> releases =product.getReleases();
	
		for(Release rel:  releases) {
			if (rel.getReleaseName().equals(releaseName)) {
				rel.setVersion(version);
				rel.setStatus(status);
				return true;
			}
				
		}
		return false;
	}
	
	public boolean addNewRelease(int productId, String releaseName, String version, boolean status) {
		Product product = ProductRepo.findById(productId).get();
		if (product == null) {
			return false;
		}
		List<Release> releases =product.getReleases();
		Release release = new Release();
		release.setProduct(product);
		release.setReleaseName(releaseName);
		release.setStatus(status);
		release.setVersion(version);	
		product.addRelease(release);
		
		return true;
		
	}


	
	
	
	
}
