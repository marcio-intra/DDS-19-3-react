import { useForm } from 'react-hook-form'
import styles from "./../css/Forms.module.css"

const NewForms = () => {
const {
  register, 
  handleSubmit, 
  formState: { errors },
} = useForm();

const onSubmit = (data) => {
  console.log("Dados:", data)
};

const onError = (errors) => {
  console.log("Erros:", errors)
};


  return (
    <div>
        <form styles={styles.formulario} onSubmit={handleSubmit(onSubmit, onError)}>
        <h2>Formulário</h2>
            <label>
              <span>Nome</span>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Nome completo'
                {...register("nome", {
                  required: "O nome é obrigatório",
                  minLength: {
                      value: 2, 
                      message: "O nome deve ter pelo menos 2 caracteres"
                  },
                  maxLength: {
                      value: 20, 
                      message: "O nome deve ter até 20 caracteres"
                  },
                  pattern:{
                      value: /^[A-Za-z\s]+$/i,
                      message: "O nome só pode conter letras",
                  }
              })}
              />
              {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
            </label>
            <br />
            <label>
              <span>E-mail</span>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='usuario@dominio.com.br'
                {...register("email", {
                  required: "O nome é obrigatório",
                  pattern:{
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "E-mail inválido!",
                  },
                  validate: (value) => value.includes("@") || "E-mail inválido!",
              })}
              />
              {errors.email && <p className={styles.error}>{errors.nome.message}</p>}
            </label>
            <br />
            <label>
              <span>Senha</span>
              <input 
                type="password" 
                name="key" 
                id="key" 
                placeholder='@Senha*1234'
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
                    message: "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
                  },
                })}
                />
              {errors.senha && <p className={styles.error}>{errors.nome.message}</p>}
            </label>
            <br />
            <input 
              type="submit" 
              value="Enviar" 
              style={{backgroundColor: "black", color: 'white'}} 
            />
        </form>
    </div>
  )
}

export default NewForms;