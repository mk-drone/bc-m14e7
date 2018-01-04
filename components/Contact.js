
let Contact = React.createClass({
    render: function(){
        return React.createElement('div', {className: 'contactItem'},
            React.createElement('img', {
                className: 'contactImage',
                src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico',
            }),
            React.createElement('p', {className: 'contactLabel'}, `Imie: ${this.props.item.firstName}`),
            React.createElement('p', {className: 'contactLabel'}, `Nazwisko: ${this.props.item.lastName}`),
            React.createElement('a', {className: 'contactEmail', href:`mailto:${this.props.item.email}`}, `E-mail: ${this.props.item.email}`),
        );
    },

    propTypes: {
        item: React.PropTypes.object.isRequired,
    }
});