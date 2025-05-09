package com.jr.codeHub.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "TABLE_UTIL_POST_LANGUAGE_TYPE")
public class UtilPostLanguageType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // 새로운 식별자 필드 추가

    private String languageType;

    private String color;
}
