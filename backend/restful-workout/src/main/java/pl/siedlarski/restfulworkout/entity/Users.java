package pl.siedlarski.restfulworkout.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name= "uzytkownicy")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int uzytkownik_id;
    @Column(name = "IMIE")
    private String imie;
    @Column(name = "NAZWISKO")
    private String nazwisko;
    @Column(name = "LOGIN")
    @NotNull(message = "Login nie moze byc pusty")
    private String login;
    @Column(name = "PASSWORD")
    @NotNull
    private String password;
    @Column(name = "OPIS")
    private String opis;
    @OneToMany(mappedBy = "user" ,cascade =CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Wymiary> listaWymiarow;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public Users() {
    }

    public int getUzytkownik_id() {
        return uzytkownik_id;
    }

    public void setUzytkownik_id(int uzytkownik_id) {
        this.uzytkownik_id = uzytkownik_id;
    }

    public String getImie() {
        return imie;
    }

    public void setImie(String imie) {
        this.imie = imie;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public void setNazwisko(String nazwisko) {
        this.nazwisko = nazwisko;
    }

    public List<Wymiary> getListaWymiarow() {
        return listaWymiarow;
    }

    public void setListaWymiarow(List<Wymiary> listaWymiarow) {
        this.listaWymiarow = listaWymiarow;
    }

    @Override
    public String toString() {
        return "Users{" +
                "uzytkownik_id=" + uzytkownik_id +
                ", imie='" + imie + '\'' +
                ", nazwisko='" + nazwisko + '\'' +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", opis='" + opis + '\'' +
                ", listaWymiarow=" + listaWymiarow +
                '}';
    }
}