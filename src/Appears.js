import "./App.css"

function Appear(a, b){
    const handleReaload= ()=>{
        window.location.reload()
    }
    return(
        <>
            <img src="images/anh_YouWin.jpg" alt="You Win" className="youwin"/>
            <br/>
            <button onClick={handleReaload} className="reload">Reload</button>
        </>
    );
}
export default Appear;