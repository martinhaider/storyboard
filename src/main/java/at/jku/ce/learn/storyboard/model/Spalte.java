package at.jku.ce.learn.storyboard.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="spalte")
public class Spalte {

    @Id
    @Column(name="name")
    private String name;

    @Column(name="position")
    private int position;

    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    private List<Aufgabe> aufgabenList;

    public Spalte(String name, int position) {
        this.name = name;
        this.position = position;
    }

    public Spalte(String name, int position, List<Aufgabe> aufgabenList) {
        this.name = name;
        this.position = position;
        this.aufgabenList = aufgabenList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public List<Aufgabe> getAufgabenList() {
        return aufgabenList;
    }

    public void setAufgabenList(List<Aufgabe> aufgabenList) {
        this.aufgabenList = aufgabenList;
    }
}