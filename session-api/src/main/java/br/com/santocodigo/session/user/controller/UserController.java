package br.com.santocodigo.session.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.santocodigo.session.user.model.User;
import br.com.santocodigo.session.user.service.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping( path = "user" )
public class UserController
{

    @Autowired
    private UserService userService;

    @GetMapping
    public User findUserByEmailAndPassowrd(
        @RequestParam( name = "email" ) final String email,
        @RequestParam( name = "password" ) final String password )
    {
        return userService.findByEmailAndPassword( email, password );
    }

    @PostMapping
    public User create(
        @RequestBody @Valid final @NonNull User user )
    {
        return userService.create( user );
    }

}
