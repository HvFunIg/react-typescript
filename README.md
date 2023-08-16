# Базовые возможности TypeScript
Сделано на основе [курса](https://www.youtube.com/watch?v=92qcfeWxtnY&t=118s)
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
## 2. Enum

Для перечислений вариантов создается объект типа **enum** :
```
export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	...
	variant: CardVariant;
} 
```

## 3. <T>

Здесь Т - просто свой тип (type). Так принято. Он передается в качестве параметра дженерика
```
interface ListProps<T>{
... 
}

const List: <T>(props: ListProps<T>) => React.ReactElement = props => {
...
}
```
## 4. События

Можно указывать, события какого типа нас интересуют
```
const changeHandler = (e: React.ChangeEvent) => {
	...
}
```
### Комментарии
Компоненты List и UserList - одно и то же, но написаны по-разному. Просто List нужен для более широкого использования и рендера любых компонентов.
### Запуск проекта - `npm start`
