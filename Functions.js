import { render } from '@testing-library/react';
import React from 'react';

const backgrounds = []

export class Functions extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            waves : [
                {id: 'Pipeline', votes: 0},
                {id: 'Backdoor', votes: 0},
                {id: 'Froggies', votes: 0},
                {id: 'Waimea', votes: 0}
            ]
        }
    }

       reset() {
           this.setState({votes: 0})
       }
        
    
       add (i) {
            let oldWaves = [...this.state.waves]
            oldWaves[i].votes++
            this.setState({waves: oldWaves})
    }
    
    render() {
    return (
        <div className='waves'>
            <h1>Vote for your favorite wave!</h1>
            {this.state.waves.map((wave, i) => 
                <div key={i} className='wave'>
                    <div className='voteCount'>
                        {wave.votes}
                    </div>
                    <div className='waveDetails'>
                        {wave.id}
                        <button onClick={this.add.bind(this, i)}>X</button> 
                    </div>
                    
                </div>
            )}
            <button onClick={this.reset.bind(this)} className='resetButton'>Reset</button>
        </div>
    )
    }
}
