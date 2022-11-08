package com.kong_sprout.Plura.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface MainPageMapper {

    int mem_info_insert01(Map<String, Object> params);


}