package pl.siedlarski.restfulworkout.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="WYMIARY")
public class Wymiary {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ID_WYMIARY;
    @Column(name="DATA")
    private Date data;
    @Column(name="WAGA")
    private float waga;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uzytkownik_id")
    private Users user;
    private int udo;
    private int talia;
    private int lydka;
    private int klatka;
    private int brzuch;
    private int biceps;
    public Wymiary() {
    }

    public int getUdo() {
        return udo;
    }

    public void setUdo(int udo) {
        this.udo = udo;
    }

    public int getTalia() {
        return talia;
    }

    public void setTalia(int talia) {
        this.talia = talia;
    }

    public int getLydka() {
        return lydka;
    }

    public void setLydka(int lydka) {
        this.lydka = lydka;
    }

    public int getKlatka() {
        return klatka;
    }

    public void setKlatka(int klatka) {
        this.klatka = klatka;
    }

    public int getBrzuch() {
        return brzuch;
    }

    public void setBrzuch(int brzuch) {
        this.brzuch = brzuch;
    }

    public int getBiceps() {
        return biceps;
    }

    public void setBiceps(int biceps) {
        this.biceps = biceps;
    }

    public int getID_WYMIARY() {
        return ID_WYMIARY;
    }

    public void setID_WYMIARY(int ID_WYMIARY) {
        this.ID_WYMIARY = ID_WYMIARY;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public float getWaga() {
        return waga;
    }

    public void setWaga(float waga) {
        this.waga = waga;
    }


    public void setUser(Users user) {
        this.user = user;
    }
}
