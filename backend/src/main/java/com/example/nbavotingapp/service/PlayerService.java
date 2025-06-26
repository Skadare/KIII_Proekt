package com.example.nbavotingapp.service;

import com.example.nbavotingapp.model.Player;
import com.example.nbavotingapp.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository repository;

    @Autowired
    public PlayerService(PlayerRepository repository) {
        this.repository = repository;
    }

    public List<Player> getAllPlayers() {
        return repository.findAll();
    }

    public Optional<Player> getPlayerById(String id) {
        return repository.findById(id);
    }

    public Player createPlayer(Player player) {
        player.setVotes(0);
        return repository.save(player);
    }

    public Player updatePlayer(String id, Player updated) {
        Player p = repository.findById(id).orElseThrow(() -> new RuntimeException("Player not found"));
        p.setName(updated.getName());
        p.setTeam(updated.getTeam());
        return repository.save(p);
    }

    public void deletePlayer(String id) {
        repository.deleteById(id);
    }

    public Player upvotePlayer(String id) {
        Player p = repository.findById(id).orElseThrow(() -> new RuntimeException("Player not found"));
        p.setVotes(p.getVotes() + 1);
        return repository.save(p);
    }
}
