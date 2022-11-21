package com.kong_sprout.Plura.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface MemInfoMapper {

    int mem_info_insert01(Map<String, Object> params);
    Map<String, Object> mem_info_select01(Map<String, Object> params);

}