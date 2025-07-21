import { useState, useEffect } from "react";
import axios from 'axios';
import Modalitem from './itemComponent/updateItem';

function TicketList(){
    const today = new Date().toLocaleDateString('en-CA');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(3); //selected Id used for modal

    const [idPicked, setDeleteItem]= useState("");
    const [select, setSelect]= useState("");
    const [itemName, setItemName]= useState("");
    const [itemPrice, setItemPrice]= useState("");
    const [itemComment, setItemComment]= useState("");

    // get method
    const [itemTicket, setItemTicket]= useState([]);

    // GET METHOD --------------------------------------------------------------------------
    const fetchtickets = () => { 
        axios.get("http://localhost/expense_app/expense_backend/getitem.php").then(
        response =>{
            setItemTicket(response.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    useEffect(()=>{
        fetchtickets();
    }, [])
    //--------------------------------------------- END GET METHOD ---------------------

    // Filter by today
    const todayItem = itemTicket.filter(item => item.datetime.slice(0, 10) === today);

    // ------------------------------------------- POST METHOD ---------------------
    const handleSubmit = (e)=>{
        e.preventDefault();

        const ticketData = {
            itemName:itemName,
            itemPrice:itemPrice,
            select:select,
            itemComment:itemComment
        }
        
        axios.post("http://localhost/expense_app/expense_backend/addItem.php", ticketData)
        .then(response => {
            console.log(response.data);
            alert("Item send successful");
            setItemName('');
            setItemPrice('');
            setSelect('');
            setItemComment('');
            fetchtickets(); // after submitting this activate which re-fetch the tickets
        }).catch(error => {
            console.error("Error adding expenses ", error);
            alert("Item Send Failed");
        });

    }
    // POST METHOD --------------------------------------------------------------------------


    const deleteItem = (id)=>{

        axios.delete(`http://localhost/expense_app/expense_backend/deleteitem.php?id=${id}`)
        .then(response =>{
            console.log("ID have been sent", response.data);
            fetchtickets();
        }).catch(error => {
            console.error("Error adding expenses ", error);
            alert("Item Send Failed");
        });

    }

    //send data to a modal
    const openModal = (id) =>{
        setSelectedId(id);
        setIsModalOpen(true);
    }

    const closeModal = () =>{
        setIsModalOpen(false);
        fetchtickets();
    }

    return(
        <>
            {isModalOpen && (<Modalitem id={selectedId} onRefresh={fetchtickets} closeModal={closeModal} />)}
            <div className="listContainer">
                <div className="listHeader">Item List of Today <span>{today}</span></div>
                {/* WHERE THE GET METHOD IS POSTED ------------------------------------ */}
                <div className="input-list">
                    {todayItem.length > 0 ? (
                        todayItem.map((item, index)=>{

                            const today = new Date().toISOString().slice(0, 10);
                            const date = new Date(item.datetime);
                            const date2 = new Date(item.datetime).toISOString().slice(0, 10);

                            const day = date.getDate();
                            const month = date.getMonth() + 1;
                            const monthLong = date.toLocaleString('default', {month: "long"});
                            const monthShort = date.toLocaleString('default', {month: "short"});
                            const year = date.getFullYear();

                            return(

                                <div className="itemcard" key={index}>
                                    <div className="topcard">
                                        <span className="capitalLetter">{item.entry_type}</span> : <span>{item.name}</span> <span>{monthLong} {day}, {year}</span> <button className="button itemButton float-right" onClick={() => openModal(item.ticketid)}>update</button>
                                        <button className="button itemButton float-right" onClick={() => deleteItem(item.ticketid)}>Delete</button>
                                    </div>
                                    <div className="bottomcard">
                                        <span>{item.price} ₱</span><span>up</span>
                                    </div>
                                </div>
                            )
                                
                        })
                    ) : (
                        <p>No Item Available today</p>
                    )}
                    </div>
                    {/* THE END OF GET METHOD LISTING ------------------------------------------------- */}
                    {/* THE POST METHOD FOR SUBMISSION --------------------------------------------------- */}
                <div className="addList">
                    <form className="itemTicket" onSubmit={handleSubmit}>
                        {/* 'food','bills','transportation','entertainment','electronics','repairs','replacements' */}
                        <select value={select} onChange={(e)=>setSelect(e.target.value)} className="categoryTicket">
                            <option value={''}>Categories</option>
                            <option value={'food'}>Food</option>
                            <option value={'bills'}>Bills</option>
                            <option value={'transportation'}>Transportation</option>
                            <option value={'entertainment'}>Entertainment</option>
                            <option value={'electronics'}>Electronics</option>
                            <option value={'repairs'}>Repairs</option>
                            <option value={'replacements'}>Replacements</option>
                        </select> <br />

                        <div className="itemElements">
                            <div className="inputItem">
                                <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)} placeholder="Item Name..." ></input>
                                <input type="text" value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)}  placeholder="Price..."></input>
                            </div>
                            <textarea className="comment" value={itemComment} onChange={(e)=>setItemComment(e.target.value)}/>
                        </div>
                        <button className="button ticketbutton">Add Item</button>
                    </form>
                </div>
                {/* THE END OF POST METHOD LISTING --------------------------------------------------------- */}
            </div>
        </>
    )
}

export default TicketList;