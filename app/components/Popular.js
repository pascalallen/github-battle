var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java',  'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map(function(language){
                return (
                    <li style={language === props.selectedLanguage ? {color: '#d0021b'}: null} onClick={props.onSelect.bind(null, language)} key={language}>
                        {language}
                    </li>
                )
            })}
        </ul>
    )
}

SelectLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this); // this prevents from getting an undefined error by binding the this keyword to updateLanguage
    }
    updateLanguage (language) {
        this.setState(function(){
            return {
                selectedLanguage: language
            }
        })
    }
    render() {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
            </div>
        )
    }
}

module.exports = Popular;
