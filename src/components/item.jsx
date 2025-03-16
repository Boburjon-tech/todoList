import { useState } from "react";
import Modal from "./modal";


function Item({t,deleteTitle}) {
const [showModal, setShowModal] = useState(false);
 
return (
    <>
    {showModal &&<Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t}/>}
    <li className="item" key={t.id}>
                <p className="itemTitle">{t.title}</p>
                <button className="deleteButton" onClick={()=> setShowModal(true)}>delete</button>
                
                </li> 
   </>
) 
} 
export default Item;