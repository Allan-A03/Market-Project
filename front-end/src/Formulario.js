import { AiFillHome } from "react-icons/ai";

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, deletar, alterar}){
    return( 
        <form>
            <div style={{
                position: 'fixed',
                width: '100px',
                height: '100vh',
                backgroundColor: '#2e6798',
            }}>
                <AiFillHome size={50} style={{display:'flex', 
                    justifyContent:'center', 
                    alignContent:'center', 
                    width:'100px', 
                    height:'60px',
                    backgroundColor:'#0e3658', 
                    marginTop:'12px', color:'white'}}/>
            </div>

            <div style={{marginLeft: '100px'}}>
                <header className="header">
                    <div className="container">
                        <img src="mercado.png" alt="imagem" className="logoimagem" ></img>
                        <p className="formulariotitulo">Formulario</p>
                    </div>
        
                </header>

                <h1 className="formulario">
                    <p>
                        <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" />
                        <input type="text" value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" />
                        <input type="number" value={obj.preco} onChange={eventoTeclado} name="preco" placeholder="Preço" className="form-control"/>
                        <input type="number" value={obj.ano} onChange={eventoTeclado} name="ano" placeholder="Ano" className="form-control"/>
                        {
                            botao 
                            ?
                            <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
                            :
                            <div>
                                <input type="button" value="Alterar" onClick={alterar} className="btn btn-warning" />
                                <input type="button" value="Remover" onClick={deletar} className="btn btn-danger" />
                                <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary" />
                            </div>
                        }
                        
                    </p>
                    
                </h1>
            </div>
            
        </form>
    )
}

export default Formulario;