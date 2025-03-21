package com.jr.utilHub.api.user.utilPost.projection;

import org.springframework.beans.factory.annotation.Value;

public interface UtilPostListProjection {
    Long getId();
    String getTitle();
    String getDescription();

    @Value("#{target.languageType.languageType}")
    String getLanguageType();

    @Value("#{target.languageType.color}")
    String getColor();

    @Value("#{target.user.userName}")
    String getUserName();
}
