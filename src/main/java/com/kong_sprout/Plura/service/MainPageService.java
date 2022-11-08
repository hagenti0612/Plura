package com.kong_sprout.Plura.service;

import com.kong_sprout.Plura.mapper.MainPageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MainPageService {

    private final MainPageMapper mainPageMapper;

    public List<Map<String, Object>>  songList(Map<String, Object> params){
        System.out.println("MemInfoService data : "+params);
        List<Map<String, Object>> res = mainPageMapper.tb_song_dtl_select01( params);
        System.out.println("service res : " + res);
        return res;
    }

}
