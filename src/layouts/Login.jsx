import React from 'react'
import { Image } from 'semantic-ui-react'
export default function Login() {
    return (


        <div class="limiter ">
            <div class="container-login100">
                <div class="wrap-login100">
                    <div class="login100-pic js-tilt" data-tilt>
                        <img src="https://png.pngtree.com/png-vector/20190810/ourlarge/pngtree-recruitment-search-find-human-resource-people-flat-color-ico-png-image_1654468.jpg" />
                    </div>
                    <form class="login100-form validate-form">
                        <span class="login100-form-title">
                            Üye Girişi
                        </span>
                        <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input required class="input100" type="text" name="email" placeholder="Kullanıcı adı/Email" />
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Password is required">
                            <input required class="input100" type="password" name="pass" placeholder="Parola" />
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn">
                                Login
                            </button>
                        </div>



                        <div class="text-center p-t-136">
                            <a class="txt2" href="#">
                                Hesap Oluştur
                                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}
