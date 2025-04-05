import styles from './LoginStyle.module.css';

function LoginApp() {
    function informacion(event: any) {
        event.preventDefault();
        let a: any = (document.getElementById("username") as HTMLInputElement).value;
        let b: any = (document.getElementById("password") as HTMLInputElement).value;
        alert("Usuario: " + a + " Contraseña: " + b);
    }


    return (  
        <>
        <div className={styles.formulario}>
            <h1>Iniciar Sesion</h1>
            <form>
                <label><b>Nombre de Usuario:</b></label>
                <input type="text" name="username" id='username'/>
                <label><b>Contraseña:</b></label>
                <input type="password" name="password" id='password'/>
                <p className='p-smile'>Olvido su contraseña, <a href="">haga click aqui</a>.</p>
                <button onClick={informacion}>Iniciar</button>
            </form>
        </div>
        </>
    );
}

export default LoginApp;