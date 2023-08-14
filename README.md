# Базовые возможности TypeScript

## 1. Типизация
Пропсам можно присвоить интерфейс, где указано, какой тип у каждого из атрибутов.

- Если атрибут необязательный, то после него ставится знак вопроса  **?**
- Для дочерних компонентов надо также указать тип

```
interface CardProps {
    width:string;
    height?:string;
    children?: React.ReactNode
} 
```
```
const Card = ({width, height}: CardProps) => { 
    ...
}
```

Либо объявить, что компонент является React.FunctionComponent (React.FC)

```
const Card: React.FC<CardProps> = 
    ({
        width, 
        height, 
        children
    }) => {
        ...
}  
```
### Запуск проекта - `npm start`
