

module.exports = {
    state: {
        data: [],
        pointValue: 0
    },

    addData: function(info) {
        this.state.data.push(info)
        this.state.pointValue += info
    },

    submit: function(){
        this.state.data = []
        this.state.pointValue = 0
    }
    
}