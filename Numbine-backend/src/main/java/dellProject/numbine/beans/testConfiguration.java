package dellProject.numbine.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "test_configuration")
public class testConfiguration {
	@Id
	@GeneratedValue
	@Column(name = "test_configuration_id")
	private int id;

	private String testConfigurationName;

	public testConfiguration(int id, String testConfigurationName) {
		super();
		this.id = id;
		this.testConfigurationName = testConfigurationName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTestConfigurationName() {
		return testConfigurationName;
	}

	public void setTestConfigurationName(String testConfigurationName) {
		this.testConfigurationName = testConfigurationName;
	}

	@Override
	public String toString() {
		return "testConfiguration [id=" + id + ", testConfigurationName=" + testConfigurationName + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((testConfigurationName == null) ? 0 : testConfigurationName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		testConfiguration other = (testConfiguration) obj;
		if (id != other.id)
			return false;
		if (testConfigurationName == null) {
			if (other.testConfigurationName != null)
				return false;
		} else if (!testConfigurationName.equals(other.testConfigurationName))
			return false;
		return true;
	}

}
