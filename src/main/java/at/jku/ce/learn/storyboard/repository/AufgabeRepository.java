package at.jku.ce.learn.storyboard.repository;

import at.jku.ce.learn.storyboard.model.Aufgabe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface AufgabeRepository extends CrudRepository<Aufgabe, Long> {

}
