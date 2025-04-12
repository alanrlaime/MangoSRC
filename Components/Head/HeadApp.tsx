import './HeadStyle.css'

function Head({promp}: { promp: string }) {

  return (
    <>
     <header className={promp}>
        <h1>Titulo de la pagina</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta, asperiores earum corporis iure eveniet voluptas itaque animi dolores molestias?</p>
     </header>
    </>
  )
}

export default Head