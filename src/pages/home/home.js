import React from "react";
import './home.scss';
import {connect} from 'react-redux';
import {setUserSession} from "../../actions/user";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isKaked: {
                monty: 'monty name'
            },
            value: '',
            isAbdulah: true
        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        let {isAbdulah, isKaked} = this.state;
        console.log("updated session" + JSON.stringify(this.props.userReducer.session));
        return (
            <section className={'home-page'} data-component="main-class">
                <div className={'home-bg'}>
                    <div className={'background'}></div>
                    <div className={'mask'}></div>
                </div>
                <div className={'content'}>
                    <div className="v-align">
                        <h2>Muntaser Almuhasen</h2>
                        <div id="rotate" className="text-rotate">
                            <div>
                                <p className="home-page-description">Senior Frontend Engineer</p>
                            </div>
                        </div>

                        <div className="home-page-block">
                            <ul className="info-list">
                                <li>
                                    <span className="title">Date of Birth</span>
                                    <span className="value">07 Nov, 1988</span>
                                </li>
                                <li>
                                    <span className="title">Address</span>
                                    <span className="value">
                                        <a target='_blank' href={'https://www.google.com/maps/dir//31.8818297,35.875397/@31.8817359,35.8757015,491m/data=!3m1!1e3!4m2!4m1!3e0'}>
                                            Airport Street, Amman, Jordan
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span className="title">E-Mail</span>
                                    <span className="value"><a href="mailto:montaserfzy@gmail.com">
                                        montaserfzy@gmail.com</a>
                                    </span>
                                </li>
                                <li>
                                    <span className="title">Skype</span>
                                    <span className="value">
                                        MMohesen
                                    </span>
                                </li>
                                <li>
                                    <span className="title">Phone</span>
                                    <span className="value"><a href="tel:+962797590040">+962 797590040</a></span>
                                </li>
                                <li>
                                    <span className="title" title='working full time'>Full Time</span>
                                    <span className="value available">Available</span>
                                </li>
                                <li>
                                    <span className="title" title='working remote'>Remote</span>
                                    <span className="value available">Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapDispatchToProps = (dispatch, oldProps) => {
    return {
        dispatch
    }
};

const mapStateToProps = ({userReducer}) => {
    return {
        userReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)