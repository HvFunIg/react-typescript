import React, {FC} from 'react';

//Объект с пропсами имеет тип "CardProps, где прописаны типы"

// Если стоит ? , значит этот атрибут необязательный
interface CardProps {
    width:string;
    height?:string;
    children?: React.ReactNode
}

const Card: FC<CardProps> = 
    ({
        width, 
        height, 
        children
    }) => {  
    return (
        <div style={{width,height, border:"1px solid gray"}}>
            {children}
        </div>
    );
};

export default Card;