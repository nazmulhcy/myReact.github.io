import './ExpenseItems.css';
import './Expenesedates.css'
function ExpenseItems(Props){

    const month= Props.date.toLocaleString('en-US',{month:'long'})
    const day= Props.date.toLocaleString('en-US',{day:'2-digit'})
    const year= Props.date.getFullYear();
    

    return (
    <div className="expense-item">
      
      <div class='expense-date' >
        <div class='expense-date__month' > {month} </div>
        <div className='expense-date__day' >{day} </div>
        <div class='expense-date__year' >{year} </div>
        
       </div>

        <div className='expense-item__description'>
            <h2>{Props.title}</h2>
            </div>
        <div className='expense-item__price'>${Props.amount}</div>
    </div>)
}

export default ExpenseItems;