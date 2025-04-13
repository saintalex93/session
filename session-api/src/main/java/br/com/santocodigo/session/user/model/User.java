package br.com.santocodigo.session.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table( name = "user_system" )
public class User
{

    @Id
    @GeneratedValue
    private Long id;
    @Email( message = "Formato de email inválido." )
    private String email;
    @NotBlank( message = "Senha inválida." )
    @Min( value = 8, message = "A senha deve conter pelo menos 8 caracteres." )
    private String password;

    public User()
    {
    }

    public User(
        final Long id,
        final String email,
        final String password )
    {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public Long getId()
    {
        return id;
    }

    public String getEmail()
    {
        return email;
    }

    public String getPassword()
    {
        return password;
    }

}
