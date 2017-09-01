import React from 'react';


class Contacts extends React.Component {
    componentDidMount() {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");
        script1.src = "/js/googleMap.js";
        script2.async = true;
        script2.defer = true;
        script2.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOw3RjQA8M72BmduwNrLCvS3krvGddZco&callback=initMap";
        document.getElementsByClassName("content")[0].appendChild(script1);
        document.getElementsByClassName("content")[0].appendChild(script2);
    }
    compone
    render() {
        return (<div className="content container">
            <div id="map">
            </div>
            <div className="contacts">
                <h2 className="title">Телефоны:</h2>
                <ul>
                    <li>
                        +375331234567
                        </li>
                    <li>
                        +375331234568
                        </li>
                </ul>
                <h2 className="title">E-mail:</h2>
                <ul>
                    <li>
                        example-1@gmail.com
                        </li>
                    <li>
                        example-2@gmail.com
                        </li>
                </ul>
                <h2 className="title">Адрес:</h2>
                <ul>
                    <li>
                        г. Минск
                        </li>
                </ul>
            </div>
        </div>);
    }
};
export default Contacts;