import React, {Component} from "react";
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';

//Stateful
class Baitap1 extends Component{
    render(){
        return(
            <div>
                <div className="header"><Header/></div>
                <div className="contents">
                    <div className="content"><Content/></div>
                    <div className="sidebar"><Sidebar/></div>
                </div>

                <div className="footer"><Footer/></div>
            </div>

            
        )
    }
}

export default Baitap1;