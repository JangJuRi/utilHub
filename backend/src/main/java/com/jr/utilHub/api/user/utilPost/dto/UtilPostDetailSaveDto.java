package com.jr.utilHub.api.user.utilPost.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UtilPostDetailSaveDto {
    private Long id;
    private Long masterId;
    private String languageType;
    private String content;
}
