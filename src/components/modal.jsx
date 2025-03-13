const Modal = ({t, setShowModal,deleteTitle})=> {
    return(
    <div className="modal">
    <p className="modalTitle"> do you want to delete {t.title}</p>
    <div className="modalBtns">
    <button className="yesBTN" onClick={()=>deleteTitle(t.id)}>ha</button>
    <button className="noBtn" onClick={()=> setShowModal(false)}>yoq</button>
    </div>
    </div>
)
}

export default Modal