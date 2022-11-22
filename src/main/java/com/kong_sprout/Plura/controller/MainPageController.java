package com.kong_sprout.Plura.controller;

import com.kong_sprout.Plura.service.MainPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
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

    @PostMapping("/songRegisterImage")
    public @ResponseBody Map<String, Object> songRegisterImage(@RequestParam(value="file",required = false)  MultipartFile[] files,
                                                               @RequestParam(value="comment", required = false) String params,
                                                               @RequestPart("data") Map<String, Object> params2
    ) throws Exception {
        System.out.println("songRegisterImage files : " + files.length);
        System.out.println("songRegisterImage params : " + params);
        System.out.println("songRegisterImage params2 : " + params2);
        //mainPageService.songRegister(params);
        fileSave(files);

        return null;
    }

    //String filepath = "c:\\img\\";
    String filepath = "images\\";

    public void fileSave(MultipartFile[] files){
        String FileNames = "";

        String originFileName = files[0].getOriginalFilename();
        long fileSize = files[0].getSize();
        String safeFile = System.currentTimeMillis() + originFileName;

        File f1 = new File(filepath + safeFile);
        try {
            files[0].transferTo(f1);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("f1 path : " + f1.getAbsolutePath());


    }


}

