package br.com.santocodigo.session.authentication.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( path = "authentication" )
public class AuthenticationController
{

    @PostMapping( path = "is-valid-token" )
    public boolean isValidToken(
        @RequestBody final String token )
    {
        return true;
    }

}
