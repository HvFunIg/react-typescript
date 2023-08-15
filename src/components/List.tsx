import React from 'react';

interface ListProps<T>{
    items: T[];
    renderItem: (item: T) => React.ReactNode    //Компонент для рендера
}

const List: <T>(props: ListProps<T>) => React.ReactElement = props => {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    );
};

export default List;