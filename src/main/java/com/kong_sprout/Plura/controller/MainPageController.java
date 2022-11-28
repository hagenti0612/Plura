package com.kong_sprout.Plura.controller;

import com.kong_sprout.Plura.service.MainPageService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    String filepath = "c:\\img\\";
//    String filepath = "images\\";

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

    //img파일 썸네일
    @GetMapping("showImg")
    @ResponseBody
    public ResponseEntity<byte[]> getFile(@RequestParam(value="filename", required = true) String filename){
        File file=new File(filepath+File.separatorChar + filename);
        System.out.println("file : "+file.getAbsolutePath());
        ResponseEntity<byte[]> result=null;
        try {
            HttpHeaders headers=new HttpHeaders();
            headers.add("Content-Type", Files.probeContentType(file.toPath()));
            result=new ResponseEntity<>(FileCopyUtils.copyToByteArray(file),headers,HttpStatus.OK );
        }catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    String filepath2 = "C:\\img\\song\\";
    @GetMapping("findSong")
    public void process(@RequestParam(value="filename", required = true) String filename,
    HttpServletResponse resp
    ) throws Exception {
        try {
            // 서비스를 통해 첨부파일 가져오기


            //경로에 있는 파일 찾기
            File f = new File(filepath2, filename);

            System.out.println("file : "+f.getAbsolutePath());
            if (!f.isFile()) {
                throw new Exception("해당 첨부파일이 존재하지 않습니다.");
            }
            // 다운로드를 위한 헤더 생성
            resp.setHeader("Content-Type", "application/octet-stream;");
            resp.setHeader("Content-Disposition", "attachment;filename=\"" + filename + "\";");
            resp.setHeader("Content-Transfer-Encoding", "binary;");
            resp.setContentLength((int) f.length()); // 진행율
            resp.setHeader("Pragma", "no-cache;");
            resp.setHeader("Expires", "-1;");
            // 저장된 파일을 응답객체의 스트림으로 내보내기,  resp의 outputStream에  해당파일을 복사
            FileUtils.copyFile(f, resp.getOutputStream());
            resp.getOutputStream().close();

        }catch (IOException e) {
            resp.reset();
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // 500
        }
    }

    //정상적인 다운로드가 안될 경우 메시지 처리
    private void printMessage(HttpServletResponse resp, String msg) throws Exception {
        resp.setCharacterEncoding("utf-8");
        resp.setHeader("Content-Type", "text/html; charset=UTF-8");
        PrintWriter out = resp.getWriter();
        //target이 지정되지 않은 경우 history.back() 으로 처리
        out.println("<script type='text/javascript'>");
        out.println(" alert('" + msg + "');");
        out.println(" self.close();");
        out.println("</script>");
        out.println("<h4>첨부파일 문제 " + msg + "</h4>");
        out.println("<button onclick='self.close()'>닫기</button>");
    }

}

