import { AiFillHome } from "react-icons/ai";

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, deletar, alterar}){
    return( 
        <form>
            <div className="body">
                <div className="Sidebar"></div>

                <div className="formulario">
                    
                    <header className="header">
                        <div className="container">
                            <img src="mercado.png" alt="imagem" className="logoimagem"></img>
                        </div>
                    </header>

                    <p className="formulariotitulo">Formulario</p>

                    <p className="barrabotoes">
                        
                        {
                            botao
                            ?
                            <input type="button" value="Cadastrar" onClick={cadastrar} className="btn-primary" />
                            :
                            <div>
                                <input type="button" value="Alterar" onClick={alterar} className="btn-warning" />
                                <input type="button" value="Remover" onClick={deletar} className="btn-danger" />
                                <input type="button" value="Cancelar" onClick={cancelar} className="btn-secondary" />
                            </div>
                        }
                    </p>

                    <p className="textbox">
                        <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" />
                        <input type="text" value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" />
                        <input type="number" value={obj.preco} onChange={eventoTeclado} name="preco" placeholder="Preço" className="form-control"/>
                        <input type="number" value={obj.ano} onChange={eventoTeclado} name="ano" placeholder="Ano" className="form-control"/>
                    </p>

                   
                        
                </div>
            </div>
            
        </form>
    )
}

export default Formulario;