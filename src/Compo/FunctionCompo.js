import './Style.css';
function FunctionCompo(){
    return(
        <>
        <div className="item_head Fcomp">
            <h1>This is created by using Functional Component</h1>
            <p className="external">This is done by using External CSS</p>
            <p style={{color:'blue',fontFamily:'sans-serif',fontSize:'15px'}}>This is done by using Inline CSS</p>
        </div>
        </>
    )
}
export default FunctionCompo;