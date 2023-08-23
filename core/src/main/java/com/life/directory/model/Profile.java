package com.life.directory.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="profile")
public class Profile {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="profile_id")
    private Long id;

    @Column(name="name", length=60, nullable=false)
    private String firstName;
}
