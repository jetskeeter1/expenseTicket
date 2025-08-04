import axios from 'axios';
import { useEffect, useState } from 'react';

function Modal({id, closeModal}){

    const [itemName, setItemName]= useState("");
    const [itemPrice, setItemPrice]= useState("");
    const [itemComment, setItemComment]= useState("");

    useEffect(()=>{
        if(id){

            axios.get(`http://localhost/expense_app/expense_backend/getmodal.php?id=${id}`).then(
            response =>{
                console.log("Modal Data: ", response.data);
                const item = response.data;
                setItemName(item.name || "");
                setItemPrice(item.price || "");
                setItemComment(item.comment || "");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        } 
    }, [])

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const dataItem = {
            id,
            itemName,
            itemPrice,
            itemComment,
        }

        axios.post(`http://localhost/expense_app/expense_backend/updateItem.php`, dataItem)
        .then(response => {
            console.log(response.data);
            closeModal();
        })
        .catch(error => { console.error("Item ID Not Found", error)});
    }

    const close = () =>{
        closeModal();
    }

        return (
            <div className='modalbackground' >
                <button className='button modalbutton' onClick={close}>X</button>
                <div className="modal">
                    <div className='topHeader'>Ticket Update</div> <br />
                     <form className="itemTicket" onSubmit={handleSubmit} >
                        <div className="itemElements">
                            <div className="inputItem">
                                <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)} placeholder="Item Name..." ></input>
                                <input type="text" value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)}  placeholder="Price..."></input>
                            </div>
                            <textarea className="comment" value={itemComment} onChange={(e)=>setItemComment(e.target.value)}/>
                        </div>
                        <button className="button ticketbutton">Update</button>
                    </form>
                </div>
            </div>
        )
}

export default Modal;