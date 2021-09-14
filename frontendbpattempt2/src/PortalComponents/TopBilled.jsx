import React, { Component } from "react";
import "./css/style_topbilled.css"
import "./css/style_dash_s2.css"

class TopBilled extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <div class="mycard ">

                    <div class="header">
                        <i class="arrow fas fa-chevron-left"></i>
                        <h3 class="title">Top Billed</h3>
                        <div></div>
                    </div>

                    <div class="profile">

                        <div class="person second">
                            <div class="num">2</div>
                            <i class="fas fa-caret-up"></i>
                            <img src="https://image.flaticon.com/icons/png/512/949/949666.png" alt="" class="photo" />
                            <p class="mylink">@dorisklien</p>
                            <p class="points">8023</p>
                        </div>

                        <div class="person first">
                            <div class="num">1</div>
                            <i class="fas fa-crown"></i>
                            <img src="https://image.flaticon.com/icons/png/512/4086/4086600.png" alt="" class="photo mymain" />
                            <p class="mylink">@sher234</p>
                            <p class="points">8122</p>
                        </div>

                        <div class="person third">
                            <div class="num">3</div>
                            <i class="fas fa-caret-up"></i>
                            <img src="https://image.flaticon.com/icons/png/512/4333/4333609.png" alt="" class="photo" />
                            <p class="mylink">@lord_0980</p>
                            <p class="points">7884</p>
                        </div>

                    </div>

                    <div class="rest">
                        <div class="others myflex">
                            <div class="rank">
                                <i class="fas fa-caret-up"></i>
                                <p class="num">4</p>
                            </div>
                            <div class="info myflex">
                                <img src="https://image.flaticon.com/icons/png/512/2922/2922510.png" alt="" class="p_img" />
                                <p class="mylink">@adam56</p>
                                <p class="res-points">7861</p>
                            </div>
                        </div>

                    </div>

                    <div class="rest">
                        <div class="others myflex">
                            <div class="rank">
                                <i class="fas fa-caret-up"></i>
                                <p class="num">4</p>
                            </div>
                            <div class="info myflex">
                                <img src="https://image.flaticon.com/icons/png/512/2922/2922510.png" alt="" class="p_img" />
                                <p class="mylink">@adam56</p>
                                <p class="res-points">7861</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default TopBilled;
