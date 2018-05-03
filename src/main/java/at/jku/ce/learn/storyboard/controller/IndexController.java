package at.jku.ce.learn.storyboard.controller;

import at.jku.ce.learn.storyboard.model.Aufgabe;
import at.jku.ce.learn.storyboard.model.Spalte;
import at.jku.ce.learn.storyboard.service.AufgabeService;
import at.jku.ce.learn.storyboard.service.SpalteService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping("/get/all/spalte")
    public @ResponseBody List<Spalte> getAllSpalte(){

        List spalteList = spalteService.findAll();

        System.out.println("get all spalte is called!");

        return spalteList;
    }

    @RequestMapping(value = "/add/spalte", method = RequestMethod.POST)
    public @ResponseBody List<Spalte> addSpalte(@RequestBody Spalte spalte){

        if(!spalte.getName().isEmpty()){
            spalteService.create(spalte);
        }

        List spalteList = spalteService.findAll();

        return spalteList;
    }

    @RequestMapping(value = "/add/aufgabe", method = RequestMethod.POST)
    public @ResponseBody List<Spalte> addAufgabe(@RequestBody Aufgabe aufgabe){

        if(!aufgabe.getBeschreibung().isEmpty() && !aufgabe.getTitel().isEmpty() && !aufgabe.getPerson().isEmpty()){
            Spalte spalte = spalteService.findById(aufgabe.getSpalte().getName());
            spalte.getAufgabenList().add(aufgabe);
        }
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
