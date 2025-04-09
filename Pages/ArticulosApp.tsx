import HeadApp from "../Components/Head/HeadApp";

function ArticuloApp() {
    console.log(ArticuloApp.name)
    return ( 
        <>
        <HeadApp promp={ArticuloApp.name}/>
        <h1>Articulos</h1>
        </>
     );
}

export default ArticuloApp;