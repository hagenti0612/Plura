package com.kong_sprout.Plura.controller;

import com.kong_sprout.Plura.service.MainPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MainPageController {

    private final MainPageService mainPageService;

    @RequestMapping("/songList")
    public @ResponseBody Map<String, Object> songList(@RequestBody Map<String, Object> params) throws Exception {
        System.out.println("MainPageController data : " + params);

        List<Map<String, Object>> res = mainPageService.songList(params);
        Map<String, Object> responseData = new HashMap<>();
        System.out.println("MainPageController res : " + res);
        responseData.put("sondList", res);

        return responseData;
    }

    @RequestMapping("/songRegister")
    public @ResponseBody Map<String, Object> songRegister(@RequestBody Map<String, Object> params) throws Exception {
        System.out.println("MainPageController data : " + params);
        mainPageService.songRegister(params);

        return params;
    }

}
