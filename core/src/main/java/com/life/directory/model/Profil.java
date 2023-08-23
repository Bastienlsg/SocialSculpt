package com.life.directory.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="profil")
public class Profil {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="profil_id")
    private int id;

    @Column(name="name", length=60, nullable=false)
    private String firstName;
}
