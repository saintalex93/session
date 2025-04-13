package br.com.santocodigo.session.login.service;

import java.util.UUID;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.santocodigo.session.login.rest.RestLogin;
import br.com.santocodigo.session.user.model.User;
import br.com.santocodigo.session.user.service.UserService;

@Service
public class LoginService
{

    @Autowired
    private UserService userService;

    public UUID login(
        final RestLogin restLogin )
        throws BadRequestException
    {
        final User user = userService.findByEmailAndPassword( restLogin.email(), restLogin.password() );
        if( user == null ) {
            throw new BadRequestException( "User not found." );
        }
        return UUID.randomUUID();
    }

}
