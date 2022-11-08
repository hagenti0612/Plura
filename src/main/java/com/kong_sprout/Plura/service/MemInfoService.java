package com.kong_sprout.Plura.service;

import com.kong_sprout.Plura.mapper.MemInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class MemInfoService {

    private final MemInfoMapper MmmInfoMapper;

    public int memberCreate(Map<String, Object> params){
        System.out.println("MemInfoService data : "+params);
        return MmmInfoMapper.mem_info_insert01( params);
    }

    public Map<String, Object> memberLogin(Map<String, Object> params){
        System.out.println("MemInfoService data : "+params);
        return MmmInfoMapper.mem_info_select01( params);
    }

}
