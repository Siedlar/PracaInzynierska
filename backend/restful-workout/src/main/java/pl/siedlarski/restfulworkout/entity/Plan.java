package pl.siedlarski.restfulworkout.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name= "plan")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int plan_id;
    private Date data;
    private int czas_trwania;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uzytkownik_id")
    private Users user;
    @OneToMany(mappedBy = "plan" ,cascade =CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Cwiczenia> listaCwiczen;
    public int getPlan_id() {
        return plan_id;
    }

    public List<Cwiczenia> getListaCwiczen() {
        return listaCwiczen;
    }

    @Override
    public String toString() {
        return "Plan{" +
                "plan_id=" + plan_id +
                ", data=" + data +
                ", czas_trwania=" + czas_trwania +
                ", user=" + user +
                ", listaCwiczen=" + listaCwiczen +
                '}';
    }

    public void setListaCwiczen(List<Cwiczenia> listaCwiczen) {
        this.listaCwiczen = listaCwiczen;
    }

    public void setPlan_id(int plan_id) {
        this.plan_id = plan_id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public int getCzas_trwania() {
        return czas_trwania;
    }

    public void setCzas_trwania(int czas_trwania) {
        this.czas_trwania = czas_trwania;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
