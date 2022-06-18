function Home() {
    return (
       <>
       <p>Cadastre espaços para <strong>devs</strong> e encontre grandes <strong>profissionais</strong> .</p>
       <form action="">
        <label htmlFor="meu-input">E-mail:*</label>
        <input type="email" id="email" placeholder="Informe seu melhor e-mail" required autoComplete="off"/>
        <button type="submit" className="btn">Entrar</button>
       </form>
       </>
    )
}

export default Home;