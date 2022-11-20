package com.kong_sprout.Plura.controller;

import com.kong_sprout.Plura.mapper.MemInfoMapper;
import com.kong_sprout.Plura.service.MemInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MemInfoController {
//test1 주석입니다. 주석입니다. 주석입니다. 주석입니다.

    private final MemInfoService memInfoService;

    @RequestMapping("/memberCreate")
    public @ResponseBody Map<String, Object> memberCreate(@RequestBody Map<String, Object> params) throws Exception{
        System.out.println("BaseDataController data : " + params);
        memInfoService.memberCreate(params);

        return params;
    }

    @RequestMapping("/memberLogin")
    public @ResponseBody Map<String, Object> memberLogin(@RequestBody Map<String, Object> params) throws Exception{
        System.out.println("BaseDataController data : " + params);
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("result", memInfoService.memberLogin(params));

        return responseData;
    }

}
