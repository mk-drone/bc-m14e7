
let Contact = React.createClass({
    render: function(){
        return (<div className={'contactItem'}>
                <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
                <p className={'contactLabel'}> Imie: {this.props.item.firstName} </p>
                <p className={'contactLabel'}> Nazwisko: {this.props.item.lastName} </p>
                <a className={'contactEmail'}> Imie: {this.props.item.email} </a>
            </div>);
    },

    propTypes: {
        item: React.PropTypes.object.isRequired,
    }
});