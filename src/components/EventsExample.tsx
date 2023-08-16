import { log } from 'console';
import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    
    //Если занесли в квадрат
    const [isDrag, setIsDrag] = useState<boolean>(false);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        console.log('Drag');
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault();
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault();
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault();
        setIsDrag(false)
        console.log("drop");
        
    }

    return (
        <div>
            <input value={value} type="text" onChange={changeHandler} placeholder='Управляемый'/>
            <input ref={inputRef} type="text"  placeholder='Неуправляемый'/>
            <button onClick={clickHandler}> Ткни меня</button>
            <div 
                onDrag={dragHandler}
                draggable 
                style={{width:200, height: 200, background:"green"}}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width:200, height: 200, background: isDrag ? "orange" : "red", marginTop:15}}></div>
        </div>
    );
};

export default EventsExample;