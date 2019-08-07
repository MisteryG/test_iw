import React, { Component } from 'react'
import { connect } from 'react-redux'
import pr from '../../Images/pr.png'
import bender from '../../Images/bender.png'

class ChatMessages extends Component {

    render() {
        const valores = this.props.messages.messages.map((dat) => 
                <section className="chat">
                    <p className="nombre">{dat.user.name}</p>
                    <img src={pr} className="logo"/>
                    <p className="mensaje">{dat.message}</p>
                </section>
        )
        return(
            <section>
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
        onInitChat:() => dispatch({type:'INITCHAT'})
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ChatMessages)