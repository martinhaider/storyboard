package at.jku.ce.learn.storyboard.controller;

import at.jku.ce.learn.storyboard.model.Aufgabe;
import at.jku.ce.learn.storyboard.model.Spalte;
import at.jku.ce.learn.storyboard.service.AufgabeService;
import at.jku.ce.learn.storyboard.service.SpalteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class IndexController {

    @Autowired
    private SpalteService spalteService;

    @Autowired
    private AufgabeService aufgabeService;

    @RequestMapping("/get/all/aufgabe")
    public @ResponseBody List<Aufgabe> getAllAufgabe(){

        List<Aufgabe> aufgabenList = aufgabeService.findAll();

        return aufgabenList;
    }

    @RequestMapping("/get/all/spalte")
    public @ResponseBody List<Spalte> getAllSpalte(){

        List<Spalte> spalteList = spalteService.findAll();

        for(Spalte s : spalteList){
            System.out.println(s.getName() + " " + s.getPosition());
        }

        return spalteList; //"get all spalte success"; //spalteList;
    }

    @RequestMapping(value = "/add/spalte", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public void addSpalte(@RequestBody String name){

        Spalte spalteNew = new Spalte(name, 0);

        spalteService.create(spalteNew);
    }

    @RequestMapping(value = "/add/aufgabe", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    //public @ResponseBody List<Spalte> addAufgabe(@RequestBody String titel, @RequestBody String beschreibung, @RequestBody String person, @RequestBody int estimate, @RequestBody int position, @RequestBody int spalte){
    public @ResponseBody List<Spalte> addAufgabe(@RequestBody Aufgabe aufgabe){

        //System.out.println(titel + "; " + beschreibung + "; " + person + "; " + estimate + "; " + position + "; " + spalte);
        System.out.println(aufgabe.getTitel() + "; " + aufgabe.getBeschreibung());

        /*if(!aufgabe.getBeschreibung().isEmpty() && !aufgabe.getTitel().isEmpty() && !aufgabe.getPerson().isEmpty()){
            Spalte spalte = spalteService.findById(aufgabe.getSpalte().getName());
            spalte.getAufgabenList().add(aufgabe);
        }*/
        List spalteList = spalteService.findAll();

        return spalteList;
    }

    @RequestMapping(value = "/delete/spalte", method = RequestMethod.DELETE)
    public @ResponseBody List<Spalte> deleteSpalte(@RequestBody Spalte spalte){

        if(!spalte.getName().isEmpty()){
            spalteService.delete(spalte);
        }
        List spalteList = spalteService.findAll();

        return spalteList;
    }

    @RequestMapping(value = "/delete/aufgabe", method = RequestMethod.DELETE)
    public @ResponseBody List<Spalte> deleteAufgabe(@RequestBody Aufgabe aufgabe) {
        if (!aufgabe.getBeschreibung().isEmpty() && !aufgabe.getTitel().isEmpty() && !aufgabe.getPerson().isEmpty()) {
            aufgabeService.delete(aufgabe);
        }
        List spalteList = spalteService.findAll();

        return spalteList;
    }

    //TODO: implement UPDATE of spalte and aufgabe
    //TODO: delete ALL
    //TODO: there should always be at least one spalte in the database
    //TODO: test services
}
