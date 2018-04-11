package at.jku.ce.learn.storyboard.service;

import at.jku.ce.learn.storyboard.model.Aufgabe;
import at.jku.ce.learn.storyboard.repository.AufgabeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AufgabeService {

    @Autowired
    private AufgabeRepository aufgabeRepository;

    public void create(Aufgabe aufgabe){
        aufgabeRepository.save(aufgabe);
    }

    public void delete(Aufgabe aufgabe){
        aufgabeRepository.delete(aufgabe);
    }

    public void deleteAll(){
        aufgabeRepository.deleteAll();
    }

    public List<Aufgabe> findAll(){
        return (List)aufgabeRepository.findAll();
    }
}