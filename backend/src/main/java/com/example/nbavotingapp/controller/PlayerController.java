package com.example.nbavotingapp.controller;
import com.example.nbavotingapp.model.Player;
import com.example.nbavotingapp.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/players")
@CrossOrigin(origins = "*")
public class PlayerController {

    private final PlayerService service;

    @Autowired
    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Player> getAll() {
        return service.getAllPlayers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Player> getById(@PathVariable String id) {
        return service.getPlayerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Player create(@RequestBody Player player) {
        return service.createPlayer(player);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Player> update(@PathVariable String id, @RequestBody Player player) {
        return service.getPlayerById(id)
                .map(p -> ResponseEntity.ok(service.updatePlayer(id, player)))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.deletePlayer(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/upvote")
    public ResponseEntity<Player> upvote(@PathVariable String id) {
        try {
            Player updated = service.upvotePlayer(id);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

