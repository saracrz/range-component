import { useState } from 'react';
import ReactSlider from 'react-slider'
import './styles.css'

export const Range = () => {
    return (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            defaultValue={[0, 100]}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
            minDistance={10}
        />
    )
}