package at.jku.ce.learn.storyboard.repository;

import at.jku.ce.learn.storyboard.model.Spalte;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Query;

@Transactional
public interface SpalteRepository extends CrudRepository<Spalte, Long> {
    Spalte findById(int id);

    //TODO: @Query("SELECT s FROM spalte WHERE s.name LIKE :#{spalteName}")
    //Spalte findByName(@Param("spalteName") String spalteName);
}
