import React from 'react';
import Spinner from '../ui/spinner'
import CharacterItem from './characteritem';

const CharacterGrid = ({items, isLoading}) => {
return isLoading ? (<Spinner/>) 
: <section className='cards'>
    {items.map(item => (
        (<CharacterItem key={item.char_id} item = {item}/>)
     ))}
</section>
}

export default CharacterGrid;