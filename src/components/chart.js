import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
    if (data.length == 0)
        return 0;

    let result = 0;
    for (let d of data) {
        result += d;
    }

    return Math.round(result / data.length);
}

export default ({data, color}) =>  {
    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(data)}</div>
        </div>
    );
}