
import React, { Component } from 'react';
import { Viro3DObject, ViroNode } from 'react-viro';
import models from "../../res/models";

const scale = [0.01, 0.01, 0.01];

export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.animation = { name: 'Take 001', run: false };
        this.state.visible = false;
        this.state.bodyColor = global.bodyColor;
        this.count = 5 + global.accessories.purchased.length;
    }

    onLoadEnd = () => {
        this.count--;
        if (this.count == 0) {
            this.setState(() => (
                {
                    animation: { name: 'Take 001', run: true },
                    visible: true,
                }
            ))

            this.intervalId = setInterval(() => {
                this.setState(() => (
                    {
                        animation: { name: 'Take 001', run: false },
                    }
                ))
                this.setState(() => (
                    {
                        animation: { name: 'Take 001', run: true },
                    }
                ))
            }
                , 8400);
        }
    }


    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        let accessories = [];

        // TODO: THIS IS HACK, FIX THIS
        for (let i in global.accessories.purchased) {
            let id = global.accessories.purchased[i];
            let visible = global.accessories.equipped.includes(id) && this.state.visible;
            accessories.push(<Viro3DObject lightReceivingBitMask={1} key={id} source={models.accessories[id].model} type="VRX" scale={scale} animation={this.state.animation} visible={visible} onLoadEnd={this.onLoadEnd} />)
        }
        return (
            <ViroNode>
                <Viro3DObject lightReceivingBitMask={2} source={models.characters[this.props.index].face} type="VRX" scale={scale} animation={this.state.animation} visible={this.state.visible} onLoadEnd={this.onLoadEnd} />
                <Viro3DObject lightReceivingBitMask={4} source={models.characters[this.props.index].body} type="VRX" scale={scale} animation={this.state.animation} visible={this.state.visible} onLoadEnd={this.onLoadEnd} />
                <Viro3DObject lightReceivingBitMask={8} source={models.characters[this.props.index].shoes} type="VRX" scale={scale} animation={this.state.animation} visible={this.state.visible} onLoadEnd={this.onLoadEnd} />

                <Viro3DObject lightReceivingBitMask={1} source={models.characters[this.props.index].bottom} type="VRX" scale={scale} animation={this.state.animation} visible={this.state.visible} onLoadEnd={this.onLoadEnd} />

                <Viro3DObject lightReceivingBitMask={1} source={models.characters[this.props.index].others} type="VRX" scale={scale} animation={this.state.animation} resources={models.characters[this.props.index].text} visible={this.state.visible} onLoadEnd={this.onLoadEnd} />
                {accessories}
            </ViroNode>
        );
    }
}

module.exports = Character;