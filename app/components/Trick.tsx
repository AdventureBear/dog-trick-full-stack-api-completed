import {useState} from "react";

function Trick({name, description, category}: {name:string, description: string, category: string}) {

    const [flipped, setFlipped] = useState(false)
    return (
        <div onClick={()=>setFlipped(!flipped)}>
            {!flipped &&
                <div  className='card'>
                    <p className='badge'>{category}</p>
                    <h2>{name}</h2>


                </div>}

            {flipped &&
                <div  className='card-back'>
                    <p>{description}</p>
                </div>
            }
        </div>
    )
}

export default Trick
