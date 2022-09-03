import { useState,useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import './Toss.css';

const Toss = () => {

    const options = [
        { value: 'H', label: 'Heads' },
        { value: 'T', label: 'Tails' }
      ];

    const [selectedOption, setSelectedOption] = useState('');
    const [previousOption, setPreviousOption] = useState(selectedOption.value);
    const [ID,setID] = useState('');
    const [isEmpty,setIsEmpty] = useState(true);
    const navigate = useNavigate();

    const selectStyles = {
            option: (styles) => ({
              ...styles,
              cursor: 'pointer',
            }),
            control: (styles) => ({
              ...styles,
              cursor: 'pointer',
            })
        }

    const handleSubmit=(e)=>{
        if(isEmpty){
            e.preventDefault();
            alert('Please select a value from the dropdown');
        }
        else{
            navigate('/toss');
        }
    }

    useEffect(() =>{
        
        if(!(typeof selectedOption === 'string')){

            setIsEmpty(false);
            if(selectedOption.value !== previousOption){
                
                const column= document.createElement('div');
                column.setAttribute('id', `odd${Math.random()+Math.random()}`);
                setID(column.id);
                column.innerHTML= `<div>${selectedOption.value}</div>`;
                const container= document.getElementById('container');
                container.appendChild(column);
                setPreviousOption(selectedOption.value);
            }
            else{
                
                const sameColumn= document.getElementById(ID);
                console.log(ID)
                const para= document.createElement('div');
                para.innerHTML = selectedOption.value;
                sameColumn.appendChild(para);
                setPreviousOption(selectedOption.value);
            }
        }
    },[selectedOption])
    return ( 
        <div className="toss" >
            <form>
                <Select
                    options={options}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Select Value"
                    className="select"
                    styles={selectStyles}
                />
                <div className="container" id="container"> </div>
                <div><button className="submit" onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button></div>
            </form>
        </div>
     );
}
 
export default Toss;