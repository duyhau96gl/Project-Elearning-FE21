import React, { Component } from 'react'
import "./topbar.scss";
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default class Topbar extends Component {
    render() {
        return (
        <div className="header__topbar">
             <div className="container">
              <div className="row">
                    {/* Socials */}
                    <div className=" topbar__socials col-6 col-sm-6 col-md-6 col-lg-2 ">
                      <ul className="">
                        <li>
                          <a className="socials__icon" href="#">
                            <i className="fab fa-facebook-square" />
                          </a>
                        </li>
                        <li>
                          <a className="socials__icon" href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="socials__icon" href="#">
                            <i className="fab fa-linkedin-in" />
                          </a></li>
                        <li>
                          <a className="socials__icon" href="#"><i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Contact */}
                    <div className=" topbar__contact col-0 col-sm-0 col-md-0 col-lg-5">
                      <ul className="">
                        <li>
                          <select className="form-control" id="sel1" name="sellist2">
                            <option value="UM" data-select2-id={6} className="flag-icon flag-icon-um">
                              United States
                            </option>
                            <option value="UM" data-select2-id={6} className="flag-icon flag-icon-um">
                              United States of
                              America 
                            </option>
                            <option lass="flag-icon flag-icon-um" value="AF" data-select2-id={24}>
                              Afghanistan</option>
                            <option value="AL" data-select2-id={25}>Albania</option>
                            <option value="AD" data-select2-id={26}>Andorra</option>
                            <option value="AG" data-select2-id={27}>Antigua and Barbuda</option>
                            <option value="AU" data-select2-id={28}>Australia</option>
                            <option value="AM" data-select2-id={29}>Armenia</option>
                            <option value="AO" data-select2-id={30}>Angola</option>
                            <option value="AR" data-select2-id={31}>Argentina</option>
                            <option value="AT" data-select2-id={32}>Austria</option>
                            <option value="AZ" data-select2-id={33}>Azerbaijan</option>
                            <option value="BA" data-select2-id={34}>Bosnia and Herzegovina
                            </option>
                            <option value="BB" data-select2-id={35}>Barbados</option>
                            <option value="BD" data-select2-id={36}>Bangladesh</option>
                            <option value="BE" data-select2-id={37}>Belgium</option>
                            <option value="BF" data-select2-id={38}>Burkina Faso</option>
                            <option value="BG" data-select2-id={39}>Bulgaria</option>
                            <option value="BH" data-select2-id={40}>Bahrain</option>
                            <option value="BJ" data-select2-id={41}>Benin</option>
                            <option value="BN" data-select2-id={42}>Brunei</option>
                            <option value="BO" data-select2-id={43}>Bolivia</option>
                            <option value="BT" data-select2-id={44}>Bhutan</option>
                            <option value="BY" data-select2-id={45}>Belarus</option>
                            <option value="CD" data-select2-id={46}>Congo</option>
                            <option value="CA" data-select2-id={47}>Canada</option>
                            <option value="CF" data-select2-id={48}>Central African Republic
                            </option>
                            <option value="CI" data-select2-id={49}>Cote d'Ivoire</option>
                            <option value="CL" data-select2-id={50}>Chile</option>
                            <option value="CM" data-select2-id={51}>Cameroon</option>
                            <option value="CN" data-select2-id={52}>China</option>
                            <option value="CO" data-select2-id={53}>Colombia</option>
                            <option value="CU" data-select2-id={54}>Cuba</option>
                            <option value="CV" data-select2-id={55}>Cabo Verde</option>
                            <option value="CY" data-select2-id={56}>Cyprus</option>
                            <option value="DJ" data-select2-id={57}>Djibouti</option>
                            <option value="DK" data-select2-id={58}>Denmark</option>
                            <option value="DM" data-select2-id={59}>Dominica</option>
                            <option value="DO" data-select2-id={60}>Dominican Republic</option>
                            <option value="EC" data-select2-id={61}>Ecuador</option>
                            <option value="EE" data-select2-id={62}>Estonia</option>
                            <option value="ER" data-select2-id={63}>Eritrea</option>
                            <option value="ET" data-select2-id={64}>Ethiopia</option>
                            <option value="FI" data-select2-id={65}>Finland</option>
                            <option value="FJ" data-select2-id={66}>Fiji</option>
                            <option value="FR" data-select2-id={67}>France</option>
                            <option value="GA" data-select2-id={68}>Gabon</option>
                            <option value="GD" data-select2-id={69}>Grenada</option>
                            <option value="GE" data-select2-id={70}>Georgia</option>
                            <option value="GH" data-select2-id={71}>Ghana</option>
                            <option value="GH" data-select2-id={72}>Ghana</option>
                            <option value="HN" data-select2-id={73}>Honduras</option>
                            <option value="HT" data-select2-id={74}>Haiti</option>
                            <option value="HU" data-select2-id={75}>Hungary</option>
                            <option value="ID" data-select2-id={76}>Indonesia</option>
                            <option value="IE" data-select2-id={77}>Ireland</option>
                            <option value="IL" data-select2-id={78}>Israel</option>
                            <option value="IN" data-select2-id={79}>India</option>
                            <option value="IQ" data-select2-id={80}>Iraq</option>
                            <option value="IR" data-select2-id={81}>Iran</option>
                            <option value="IS" data-select2-id={82}>Iceland</option>
                            <option value="IT" data-select2-id={83}>Italy</option>
                            <option value="JM" data-select2-id={84}>Jamaica</option>
                            <option value="JO" data-select2-id={85}>Jordan</option>
                            <option value="JP" data-select2-id={86}>Japan</option>
                            <option value="KE" data-select2-id={87}>Kenya</option>
                            <option value="KG" data-select2-id={88}>Kyrgyzstan</option>
                            <option value="KI" data-select2-id={89}>Kiribati</option>
                            <option value="KW" data-select2-id={90}>Kuwait</option>
                            <option value="KZ" data-select2-id={91}>Kazakhstan</option>
                            <option value="LA" data-select2-id={92}>Laos</option>
                            <option value="LB" data-select2-id={93}>Lebanons</option>
                            <option value="LI" data-select2-id={94}>Liechtenstein</option>
                            <option value="LR" data-select2-id={95}>Liberia</option>
                            <option value="LS" data-select2-id={96}>Lesotho</option>
                            <option value="LT" data-select2-id={97}>Lithuania</option>
                            <option value="LU" data-select2-id={98}>Luxembourg</option>
                            <option value="LV" data-select2-id={99}>Latvia</option>
                            <option value="LY" data-select2-id={100}>Libya</option>
                          </select>
                        </li>
                        <li>
                          <div className="dropdown">
                            <button type="button" className="btn btn-defautl dropdown-toggle" data-toggle="dropdown">
                              Language
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">English</a>
                              <a className="dropdown-item" href="#">Arapic</a>
                              <a className="dropdown-item" href="#">German</a>
                              <a className="dropdown-item" href="#">Greek</a>
                              <a className="dropdown-item" href="#">Spanish</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                              Currency
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">USD</a>
                              <a className="dropdown-item" href="#">EUR</a>
                              <a className="dropdown-item" href="#">INR</a>
                              <a className="dropdown-item" href="#">GPB</a>
                              <a className="dropdown-item" href="#">VNĐ</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Custom */}
                    <div className="topbar__custom col-6 col-sm-6 col-md-6 col-lg-5">
                      <ul>
                        <li><a href><i className="fa fa-user" /> <span>Register</span></a> </li>
                        <li><a href><i className="fa fa-sign-in-alt" /> <span>Login</span></a></li>
                        <li className="dropdown">
                          <a href className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-home" />
                            My Dashboard
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#"><i className="fa fa-user" /> My
                              Profile</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-comment-alt" />Inbox</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-bell" />Notifications</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-cogs" />Account Settings</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-power-off" />Log out</a>
                          </div>
                        </li>
                      </ul>
                    </div>
              </div>
            </div>  
        </div>     
        )
    }
}
