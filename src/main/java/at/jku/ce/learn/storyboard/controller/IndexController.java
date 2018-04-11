package at.jku.ce.learn.storyboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class IndexController {

    @RequestMapping("")
    public Map<String, Object> index(){
        return new HashMap<>();
    }
}
