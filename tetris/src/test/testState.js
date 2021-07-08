import  {useState, React, useEffect} from 'react';

export default function TestUseState() {
    const [count, setCount] = useState(0); //[state's variable, function to set the variable] = useState(first state of the variable)
    // useEffect( () => {
    //     document.title = `You clicked ${count} times`;
    // });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click this shit
            </button>
        </div>
    )
}