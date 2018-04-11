package at.jku.ce.learn.storyboard.repository;

import at.jku.ce.learn.storyboard.model.Spalte;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface SpalteRepository extends CrudRepository<Spalte, Long> {
}
