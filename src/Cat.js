import React from 'react';

function Cat({match}) {
    return(
        <div>Meow, {match.params.cat}.</div>
    );
}

export default Cat;