import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {

    state={
        isLoggedIn:false,
        userId:"",
        name:"",
        email:"",
        picture:""
    }
    componentClicked= ()=> console.log("ca marche et cliqué")
    responseFacebook= Response =>{
        //console.log(Response)
        this.setState({
            isLoggedIn:true,
            userId:Response.userId,
            name:Response.name,
            email:Response.email,
            picture:Response.picture.data.url
        })
    }


    render(){
        let fbContent
        if (this.state.isLoggedIn) {
            fbContent=(
                <div>
                    Salut {this.state.name}
                    <img src={this.state.picture}></img>
                    
                </div>
            )
        }else{
            fbContent=(<FacebookLogin
                appId="872949056453899"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }
    return (
        <div>
            {fbContent}
        </div >
    )
}
        
    
}