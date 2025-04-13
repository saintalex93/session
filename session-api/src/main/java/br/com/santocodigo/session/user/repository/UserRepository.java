package br.com.santocodigo.session.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.santocodigo.session.user.model.User;

@Repository
public interface UserRepository
    extends
        JpaRepository<User,Long>
{

    User findByEmailAndPassword(
        String email,
        String password );

}
