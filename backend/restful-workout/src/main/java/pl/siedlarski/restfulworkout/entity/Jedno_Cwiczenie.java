package pl.siedlarski.restfulworkout.entity;

import javax.persistence.*;

@Entity
@Table(name= "jedno_cwiczenie")
public class Jedno_Cwiczenie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_jedno_cwiczenie;
    private int seria;
    private double ciezar;
    private int powtorzenia;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cwiczenia_id")
    private Cwiczenia cwiczenia;

    public void setCwiczenia(Cwiczenia cwiczenia) {
        this.cwiczenia = cwiczenia;
    }

    public int getId_jedno_cwiczenie() {
        return id_jedno_cwiczenie;
    }

    public void setId_jedno_cwiczenie(int id_jedno_cwiczenie) {
        this.id_jedno_cwiczenie = id_jedno_cwiczenie;
    }

    public int getSeria() {
        return seria;
    }

    public void setSeria(int seria) {
        this.seria = seria;
    }

    public double getCiezar() {
        return ciezar;
    }

    public void setCiezar(double ciezar) {
        this.ciezar = ciezar;
    }

    public int getPowtorzenia() {
        return powtorzenia;
    }

    public void setPowtorzenia(int powtorzenia) {
        this.powtorzenia = powtorzenia;
    }
}
