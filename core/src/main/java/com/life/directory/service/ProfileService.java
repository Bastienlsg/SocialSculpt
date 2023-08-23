package com.life.directory.service;

import com.life.directory.model.Profile;
import com.life.directory.repository.ProfileRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Iterable<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    public Profile getProfile(Long id) {
        Optional<Profile> optionalProfile = profileRepository.findById(id);

        return optionalProfile.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Profile not found for ID: " + id));
    }
}
