import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { photoUpload } from './../../ducks/reducer'

function sendToback( photo ){
    console.log(photo)
    return axios.post( '/api/photoUpload', photo )
}

class FileUpload extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            file: '',
            filename: '',
            filetype: ''
        }
        this.handlePhoto=this.handlePhoto.bind(this)
        this.sendPhoto=this.sendPhoto.bind(this)
    }

    handlePhoto( event ) {
        const reader = new FileReader()
            , file = event.target.files[0]
            , _this = this
        
        reader.onload = photo => {
            this.setState({
                file: photo.target.result,
                filename: file.name,
                filetype: file.type
            })
        }
        reader.readAsDataURL( file )
    }

    sendPhoto( event ) {
        event.preventDefault()

        sendToback( this.state ).then( response => {
            console.log(response.data)                  //should contain photo url
            this.props.photoUpload( response.data ) 
            // let Photo = response.data                   // add data to store and db.create badge here.
            // axios.post( '/api/create_badge')
            // create_badge ( req, res ) {
            //     const db = req.app.get( 'db' )
            //     let { Name, Description, Badge_Type_id, Score_Type_id, Score_SubType_id, Score_Target, Reward_Type_id, Reward_Value } = req.body
            //     if ( req.body.Badge_Type_id === 1 ) {
            //         db.create_achievement_badge( [Name, Description, Photo, Badge_Type_id, Score_Type_id, Score_SubType_id, Score_Target, Reward_Type_id, Reward_Value] )
            //     } else if ( req.body.Badge_Type_id === 2 ) {
            //         db.create_trophy_badge( [Name, Description, Photo, Badge_Type_id, Score_Type_id, Score_SubType_id, Score_Target, Reward_Type_id, Reward_Value] )
            //     }
                // .then( badge => {
                //     res.send( badge )
                // })
            // }
        })
    }

    render() {
        this.state.file && console.log(this.state.photo)
        return (
            <div className="FileUpload">
                <input type="file" onChange={this.handlePhoto}/>
                <br/>
                {
                this.state.file &&
                <img src={this.state.file} alt="" className="file-preview"/>  
                }
                <button onClick={this.sendPhoto}>Upload Image</button>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return state
}

export default connect( mapStateToProps, { photoUpload } )( FileUpload )