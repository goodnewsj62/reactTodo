export default function Header ({show}){
    const formPopUp = e =>{
        show(true);
    }
    return (
        <header>
            <h2 className="logo">Todo</h2>
            <button onClick={e => formPopUp(e) }>
                <i className="fa fa-plus"></i>
            </button>
        </header>
    )
}