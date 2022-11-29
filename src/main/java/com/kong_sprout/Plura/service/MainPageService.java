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

    public List<Map<String, Object>> songList(Map<String, Object> params) {
        System.out.println("mainPageService data : " + params);
        List<Map<String, Object>> res = mainPageMapper.tb_song_dtl_select01(params);
        System.out.println("service res : " + res);

        return res;
    }

    public int songRegister(Map<String, Object> params) {
        System.out.println("mainPageService data : " + params);

        return mainPageMapper.tb_song_dtl_insert01(params);
    }

    public int songRegister2(Map<String, Object> params) {
        System.out.println("mainPageService data : " + params);

        return mainPageMapper.tb_song_dtl_insert02(params);
    }

}
