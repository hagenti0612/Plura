package com.kong_sprout.Plura.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface MainPageMapper {

    List<Map<String, Object>> tb_song_dtl_select01(Map<String, Object> params);

    int tb_song_dtl_insert01(Map<String, Object> params);

    int tb_song_dtl_insert02(Map<String, Object> params);

}