
let Contacts = React.createClass({

    render: function(){
        let contacts = this.props.items.map((contact)=>{
            return React.createElement(Contact, {item: contact, key: contact.id});
        });

        return React.createElement('ul', {className: 'contactList'}, contacts);
    },

    propTypes: {
        items: React.PropTypes.array.isRequired,
    }
});