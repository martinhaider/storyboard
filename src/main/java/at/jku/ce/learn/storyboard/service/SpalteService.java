package at.jku.ce.learn.storyboard.service;

import at.jku.ce.learn.storyboard.model.Spalte;
import at.jku.ce.learn.storyboard.repository.SpalteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpalteService {

    @Autowired
    private SpalteRepository spalteRepository;

    public void create(Spalte spalte){
        spalteRepository.save(spalte);
    }

    public void delete(Spalte spalte){
        spalteRepository.delete(spalte);
    }

    public void deleteAll(){
        spalteRepository.deleteAll();
    }

    public List<Spalte> findAll(){
        return (List)spalteRepository.findAll();
    }
}