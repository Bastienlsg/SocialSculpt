package com.life.directory.controller;

import com.life.directory.model.Profile;
import com.life.directory.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = {"http://127.0.0.1:8080", "http://localhost:4200"})
public class ProfileController {

    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public Iterable<Profile> getAllProfiles() {
        return profileService.getAllProfiles();
    }

    @GetMapping("/{id}")
    public Profile getSpecificProfile(@PathVariable Long id) {
        return profileService.getProfile(id);
    }
}
