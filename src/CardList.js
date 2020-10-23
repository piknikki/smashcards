import React from 'react';
import Card from './Card';

export default function CardList({ cards }) {
    return (
        <div className="card-grid">
            {cards.map(card => {
                return <Card className="card" card={card} key={card.id}/>
            })}

        </div>
    )
}