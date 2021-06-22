import React from "react";
import { Segment } from "semantic-ui-react";
export default function Content() {
    return (
        <>
            <Segment
                inverted
                vertical
                style={{
                    position: "static",
                    bottom: 0,
                    width: "100%",
                }}
            >

                <footer>
                    <div class="footer-content">
                        <h3>Kariyerinize Yön Verin</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam vel provident unde fugiat neque id
                            et laudantium adipisci libero, consequatur amet facilis ab, excepturi eos ad! Aspernatur in veritatis beatae.</p>
                        <u1 class="socials">
                            <li><a href="#" ><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                        </u1>
                    </div>
                    <div class="footer-bottom">
                        <p>HRMS Project &copy;2021 Berkan Demiral <span>kodlama.io</span></p>
                    </div>
                </footer>

            </Segment>
        </>
    );
}
