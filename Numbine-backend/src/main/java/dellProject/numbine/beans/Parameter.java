package dellProject.numbine.beans;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Parameters")
public class Parameter {
	@Id
	@GeneratedValue
	private int id;

	@Column(name = "parameter_name")
	private String parameterName;

	private boolean status;
	private String description;

	

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "parameter")
	private List<Value> values;

	public Parameter(int id, String parameterName, boolean status, String description, List<Product> products,
			List<Value> values) {
		super();
		this.id = id;
		this.parameterName = parameterName;
		this.status = true;
		this.description = description;
		this.values = values;
	}

	public Parameter() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getParameterName() {
		return parameterName;
	}

	public void setParameterName(String parameterName) {
		this.parameterName = parameterName;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}



	public List<Value> getValues() {
		return values;
	}

	public void setValues(List<Value> values) {
		this.values = values;
	}

	@Override
	public int hashCode() {
		return Objects.hash(description, id, parameterName, status, values);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Parameter other = (Parameter) obj;
		return Objects.equals(description, other.description) && id == other.id
				&& Objects.equals(parameterName, other.parameterName) && status == other.status
				&& Objects.equals(values, other.values);
	}

	@Override
	public String toString() {
		return "Parameter [id=" + id + ", parameterName=" + parameterName + ", status=" + status + ", description="
				+ description + ", values=" + values + "]";
	}

}
