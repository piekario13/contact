let Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', { className: 'contactItem' },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cicero.PNG/220px-Cicero.PNG'
                }),
                React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('div', { className: 'contact' },
                    React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email },
                        this.props.item.email
                    )
                )
            )
        )
    },
});