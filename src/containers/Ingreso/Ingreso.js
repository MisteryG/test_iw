import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/index'
import bender from '../../Images/bender.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import '../Ingreso/Ingreso.css'

var newDate = new Date ();

class InsertMessages extends Component {

    constructor(props) {
        super(props);
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    } 

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    keyPress(e) {
        if(e.keyCode == 13){
        //    console.log('value', e.target.value);
           let valIngresar = {
                user: {
                    name: "Bender",
                    username: "bender",
                    id: 1
                },
                receiver_id: 2,
                message: e.target.value
            }
            this.setState({value:''});
            this.props.onChatAdd(valIngresar);
        }
    }

    render() {
        return (
            <section className="barMessages">
                <section className="barImg">
                    <img src={bender} className="logo"/>
                </section>
                <section className="barBusqueda">
                    <input type='text' placeholder='Busca personas y canales'
                    value={this.state.value} onKeyDown={this.keyPress}
                    onChange={this.handleChange}/>
                </section>
                <section className="barIcon">
                    <a href="./"><FontAwesomeIcon icon={faPaperclip}/></a>
                    <a href="./"><FontAwesomeIcon icon={faSmile}/></a>
                    <a href="./"><FontAwesomeIcon icon={faPaperPlane}/></a>
                </section>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages:state.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChatAdd: (messages) => dispatch(actionTypes.addChat(messages))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(InsertMessages)