import { SyntheticEvent, useState } from 'react';

function Home() {

    const [email, setEmail] = useState('');

    const handleSubmit = (evento: SyntheticEvent) => {
        console.log(evento);
        
    }

    const onChangeInput = (event: any) => {
        setEmail(event.target.value)
    }

    return (
       <>
       <p>Cadastre espaços para <strong>devs</strong> e encontre grandes <strong>profissionais</strong> .</p>
       <form onSubmit={handleSubmit}>
        <label htmlFor="meu-input">E-mail:*</label>

        <input 
        type="email" 
        id="email" 
        placeholder="Informe seu melhor e-mail"

        onChange={onChangeInput}

         required 
         autoComplete="off"
         />

        <button 
        type="submit" 
        className="btn"
        >Entrar
        </button>

       </form>
       </>
    )
}

export default Home;