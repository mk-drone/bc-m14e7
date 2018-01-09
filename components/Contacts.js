
let Contacts = React.createClass({

    render: function(){
        let contacts = this.props.items.map((contact)=>{
            return (<Contact item={contact} key={contact.id}/>);
        });

        return (<ul className={'contactList'}>{contacts}</ul>)
    },

    propTypes: {
        items: React.PropTypes.array.isRequired,
    }
});