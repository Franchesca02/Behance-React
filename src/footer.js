import React from './footer';
import landify from './Images/Landify.PNG';

function Footer() {
    return (
        <div className="footer">

<div className="landify">
<img src={landify} alt="Landify icon" />
<div className="land">
<h5 className="land">Landify</h5>
<div className="copyright">
        <p>&copy;2020 Landify UI Kit. All Rights Reserved</p>
        </div>
</div>



<div className="product">
<h5 className="pro">Product</h5>
<ul>
    <li className="list-three">Overview</li>
    <li className="list-three">Features</li>
    <li className="list-three">Tutorials</li>
    <li className="list-three">Pricing</li>
    <li className="list-three">Releases</li>
</ul>
</div>

<div className="company">
<h5 className="pro">Company</h5>
<ul>
    <li className="list-one">About</li>
    <li className="list-one">Press</li>
    <li className="list-one">Careers</li>
    <li className="list-one">Contact</li>
    <li className="list-one">Partners</li>
</ul>
</div>

<div className="support">
<h5 className="pro">Support</h5>
<ul>
    <li className="list-two">Help Center</li>
    <li className="list-two">Terms of service</li>
    <li className="list-two">Legal</li>
    <li className="list-two">Privacy policy</li>
    <li className="list-two">Status</li>
</ul>
</div>

<div className="follow-us">
<h5 className="pro">Follow Us</h5>
<ul>
    <li className="list-four">Facebook</li>
    <li className="list-four">Twitter</li>
    <li className="list-four">Dribble</li>
    <li className="list-four">Instagram</li>
    <li className="list-four">LinkedIn</li>
</ul>
</div>

</div>

        </div>
    );
}

export default Footer;