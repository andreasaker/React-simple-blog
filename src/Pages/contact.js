import React from 'react';

const Contact = () => {
    return(
        <div>
        <h2>Contact!</h2>
        <div class="flex-row alternate-background">
            <div class="flex-small padding-top-small">
                <img src="https://cdn.vox-cdn.com/thumbor/52wMLCpqUS3gdBIVN_igAa8yKRU=/30x0:941x607/1200x800/filters:focal(30x0:941x607)/cdn.vox-cdn.com/assets/1349871/screenshot-20120910-085923.png" class="responsive-image" alt="Map of office"></img>
            </div>
        <div class="flex-small">
            <h5>Office</h5>
            <p>
                196-210 Broome St<br/>
                New York, NY 10002<br/>
                USA 
            </p>
            <p>
                Phone: 08550 8048 80<br/>
                Mail: your@mail.not
            </p>
        </div>
        </div>

        <div class="flex-row padding-top contacts">
            <div class="flex-small alternate-background padding-top-small card">
                <img src="http://clipart-library.com/images/5cRrbRK8i.jpg" class="responsive-image" alt="Contact"></img>
                <ul>
                    <li>Name</li>
                    <li>Number</li>
                    <li>Mail</li>
                </ul>
            </div>
            <div class="flex-small alternate-background padding-top-small card">
                <img src="http://clipart-library.com/images/5cRrbRK8i.jpg" class="responsive-image" alt="Contact"></img>
                <ul>
                    <li>Name</li>
                    <li>Number</li>
                    <li>Mail</li>
                </ul>
            </div>
            <div class="flex-small alternate-background padding-top-small card">
                <img src="http://clipart-library.com/images/5cRrbRK8i.jpg" class="responsive-image" alt="Contact"></img>
                <ul>
                    <li>Name</li>
                    <li>Number</li>
                    <li>Mail</li>
                </ul>
            </div>
            <div class="flex-small alternate-background padding-top-small card-end">
                <img src="http://clipart-library.com/images/5cRrbRK8i.jpg" class="responsive-image" alt="Contact"></img>
                <ul>
                    <li>Name</li>
                    <li>Number</li>
                    <li>Mail</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Contact;