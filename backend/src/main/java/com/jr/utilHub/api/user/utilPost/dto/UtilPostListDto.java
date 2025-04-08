package com.jr.utilHub.api.user.utilPost.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UtilPostListDto {
    private Long id;
    private Long masterId;
    private String content;
    private String accountId;
    private String languageType;
    private Character topYn;

    public UtilPostListDto(Long id, Long masterId, String content, String accountId, String languageType, Character topYn) {
        this.id = id;
        this.masterId = masterId;
        this.content = content;
        this.accountId = accountId;
        this.languageType = languageType;
        this.topYn = topYn;
    }
}
