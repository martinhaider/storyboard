package at.jku.ce.learn.storyboard.model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
@Table(name="aufgabe")
public class Aufgabe {

    @Id
    @Column(name="titel")
    private String titel;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="person")
    private String person;

    @Column(name="estimate")
    private int estimate;

    @Column(name="position")
    private int position;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {})
    @JoinColumn(name="spalte")
    private Spalte spalte;

    public Aufgabe(String titel, String beschreibung, String person, int estimate, int position, Spalte spalte) {
        this.titel = titel;
        this.beschreibung = beschreibung;
        this.person = person;
        this.estimate = estimate;
        this.position = position;
        this.spalte = spalte;
    }

    public String getTitel() {
        return titel;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public int getEstimate() {
        return estimate;
    }

    public void setEstimate(int estimate) {
        this.estimate = estimate;
    }

    public Spalte getSpalte() {
        return spalte;
    }

    public void setSpalte(Spalte spalte) {
        this.spalte = spalte;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}