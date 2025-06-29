package br.com.santocodigo.session.login.controller;

import java.util.UUID;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.santocodigo.session.login.rest.RestLogin;
import br.com.santocodigo.session.login.service.LoginService;

@RestController
@RequestMapping( path = "login" )
public class LoginController
{

    @Autowired
    private LoginService service;

    @PostMapping
    public UUID login(
        @RequestBody final RestLogin restLogin )
        throws BadRequestException
    {
        return service.login( restLogin );
    }

}
