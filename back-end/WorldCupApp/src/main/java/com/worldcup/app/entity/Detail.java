package com.worldcup.app.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Detail implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
	@Getter @Setter
	@Column(name="detail_id")
	private Long id;
	@Getter @Setter
	private int bute;
	@Getter @Setter
	private int penalty;
	@Getter @Setter
	private int cartonJaune;
	@Getter @Setter
	private int cartonRouge;
	@Getter @Setter
	private int possession;
	@Getter @Setter
	private int corner;
	@Getter @Setter
	private int coupFranc;
	@Getter @Setter
	private int touche;
	@ManyToOne
	@JoinColumn(name = "equipe_id")
	private Equipe equipe;
	@ManyToOne
	@JoinColumn(name = "mach_id")
	private Mach mach;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getBute() {
		return bute;
	}
	public void setBute(int bute) {
		this.bute = bute;
	}
	public int getPenalty() {
		return penalty;
	}
	public void setPenalty(int penalty) {
		this.penalty = penalty;
	}
	public int getCartonJaune() {
		return cartonJaune;
	}
	public void setCartonJaune(int cartonJaune) {
		this.cartonJaune = cartonJaune;
	}
	public int getCartonRouge() {
		return cartonRouge;
	}
	public void setCartonRouge(int cartonRouge) {
		this.cartonRouge = cartonRouge;
	}
	public int getPossession() {
		return possession;
	}
	public void setPossession(int possession) {
		this.possession = possession;
	}
	public int getCorner() {
		return corner;
	}
	public void setCorner(int corner) {
		this.corner = corner;
	}
	public int getCoupFranc() {
		return coupFranc;
	}
	public void setCoupFranc(int coupFranc) {
		this.coupFranc = coupFranc;
	}
	public int getTouche() {
		return touche;
	}
	public void setTouche(int touche) {
		this.touche = touche;
	}
	public Equipe getEquipe() {
		return equipe;
	}
	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}
	public Mach getMach() {
		return mach;
	}
	public void setMach(Mach mach) {
		this.mach = mach;
	}

	
	
	
}
