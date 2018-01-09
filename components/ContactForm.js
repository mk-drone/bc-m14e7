
let ContactForm = React.createClass({
    render: function() {
        return (<form className={'contactForm'}>
                <input type={'text'} placeholder={'Imie'} value={this.props.contact.firstName}/>
                <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
                <input type={'text'} placeholder={'E-Mail'} value={this.props.contact.email}/>
                <button type={'submit'}>Dodaj Kontakt</button>
            </form>);
    },
})