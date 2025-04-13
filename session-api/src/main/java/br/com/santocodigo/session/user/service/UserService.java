package br.com.santocodigo.session.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import br.com.santocodigo.session.user.model.User;
import br.com.santocodigo.session.user.repository.UserRepository;

@Service
public class UserService
{

    @Autowired
    private UserRepository repository;

    public User findByEmailAndPassword(
        final String email,
        final String password )
    {
        return repository.findByEmailAndPassword( email, password );
    }

    public User create(
        final @NonNull User user )
    {
        return repository.save( user );
    }

}
