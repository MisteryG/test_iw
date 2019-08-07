import React, { Component } from 'react'
import { connect } from 'react-redux'
import pr from '../../Images/pr.png'
import bender from '../../Images/bender.png'
import * as actionTypes from '../../store/actions/index'
import '../Chat/Chat.css'
var newDate = new Date();

class ChatMessages extends Component {

    // componentWillMount() {
    //     this.props.onInitChat()
    // }
    
    render() {
        console.log(this.props.messages.messages)
        const valores = this.props.messages.messages.map((dat) => 
                <section className="chat">
                    <section className="chatImg">
                        <img src={pr} className="logo"/>
                    </section>
                    <section className="chatTxt">
                        <section className="chatTitulares">
                            <p className="nombre">{dat.user.name}</p>
                            <p className="fecha">{newDate.toDateString()}</p>
                        </section>
                        <p className="mensaje">{dat.message}</p>
                    </section>
                </section>
        )
        return(
            <section className="allChat">
                {valores}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages:state.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onChatAdd: (messages) => dispatch({type:'ADDCHAT', val:messages}),
        onInitChat: () => dispatch(actionTypes.setChat())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ChatMessages)