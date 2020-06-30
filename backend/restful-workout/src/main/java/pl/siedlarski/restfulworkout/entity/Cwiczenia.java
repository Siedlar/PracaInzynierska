package pl.siedlarski.restfulworkout.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name= "cwiczenia")
public class Cwiczenia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int cwiczenia_id;
    private String nazwacwiczenia;
    private String czesc_ciala;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="plan_id")
    private Plan plan;
    @OneToMany(mappedBy = "cwiczenia" ,cascade =CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Jedno_Cwiczenie> listaCwiczen;
    public int getCwiczenia_id() {
        return cwiczenia_id;
    }

    public List<Jedno_Cwiczenie> getListaCwiczen() {
        return listaCwiczen;
    }

    public void setListaCwiczen(List<Jedno_Cwiczenie> listaCwiczen) {
        this.listaCwiczen = listaCwiczen;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }

    public void setCwiczenia_id(int cwiczenia_id) {
        this.cwiczenia_id = cwiczenia_id;
    }

    public String getNazwacwiczenia() {
        return nazwacwiczenia;
    }

    public void setNazwacwiczenia(String nazwacwiczenia) {
        this.nazwacwiczenia = nazwacwiczenia;
    }

    public String getCzesc_ciala() {
        return czesc_ciala;
    }

    public void setCzesc_ciala(String czesc_ciala) {
        this.czesc_ciala = czesc_ciala;
    }

    @Override
    public String toString() {
        return "Cwiczenia{" +
                "cwiczenia_id=" + cwiczenia_id +
                ", nazwacwiczenia='" + nazwacwiczenia + '\'' +
                ", czesc_ciala='" + czesc_ciala + '\'' +
                ", plan=" + plan +
                ", listaCwiczen=" + listaCwiczen +
                '}';
    }
}
