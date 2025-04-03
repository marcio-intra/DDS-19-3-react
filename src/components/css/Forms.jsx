import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "./../css/Forms.module.css";

const Forms = (props) => {
  const {
    register, 
    handleSubmit, 
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: props?.nome || "",
      email: props?.email || "",
      senha: props?.senha || ""
    }
  });
  
  const onSubmit = (data) => {
    console.log("Dados:", data);
  };
  
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={styles.formulario}
      >
        <label>
          <span>Nome:</span>
          <input
            {...register("nome", {
              required: "O nome é obrigatório",
              maxLength: {
                value: 20,
                message: "O nome deve ter menos de 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "O nome só pode conter letras e espaços",
              },
            })}
            placeholder="Nome"
          />
          {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        </label>

        <label>
          <span>Email:</span>
          <input
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </label>
        
        <label>
          <span>Senha:</span>
          <input
            type="password"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "A senha deve ter menos de 20 caracteres",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
              },
            })}
            placeholder="Senha"
          />
          {errors.senha && (
            <p className={styles.error}>{errors.senha.message}</p>
          )}
        </label>
        
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            {...register("confirmarSenha", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("senha") || "As senhas não coincidem",
            })}
            placeholder="Confirmar Senha"
          />
          {errors.confirmarSenha && (
            <p className={styles.error}>{errors.confirmarSenha.message}</p>
          )}
        </label>
        
        {/* Outros campos do formulário permanecem iguais */}
        <label>
          <span>Descrição:</span>
          <textarea {...register("descricao")} placeholder="Descrição" />
        </label>
        
        <label>
          <span>Tipo:</span>
          <select {...register("tipo")} defaultValue="tipo1">
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
          </select>
        </label>
        
        {/* ... outros campos ... */}
        
        <button type="submit" className={styles.botao}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Forms;