package com.example.nbavotingapp.repository;
import com.example.nbavotingapp.model.Player;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PlayerRepository extends MongoRepository<Player, String> {
}
