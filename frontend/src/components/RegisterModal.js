import { Routes, Route, Link } from 'react-router-dom'
import LoginModal from './LoginModal'

import '../css/RegisterModal.css'

function RegisterModal() {
    return (
        <div className="register-modal container p-4">
            <p className="register__title fs-2 fw-bold text-center m-3">Đăng kí tài khoản</p>
            <form>
                <div className="mt-2 mb-2">
                    <label 
                        className="form-label col-sm-2 col-form-label fw-bold"
                        htmlFor="name"
                    >Tên của bạn?</label>
                    <input 
                        placeholder="Họ và tên của bạn"
                        className="form-control"
                        type="text"
                        id="name"
                    />
                </div>

                <div className="mt-2 mb-2">
                    <label 
                        className="form-label col-sm-2 col-form-label fw-bold"
                        htmlFor="email"
                    >Email</label>
                    <input 
                        placeholder="Địa chỉ email"
                        className="form-control"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <input 
                        placeholder="Mật khẩu"
                        className="form-control"
                        type="password"
                    />
                </div>

                <div className="d-flex justify-content-between mt-2 mb-2">
                    <input 
                        placeholder="Nhập mã xác nhận"
                        className="form-control me-3"
                        type="text"
                    />
                    <button className='btn btn-primary w-25'>Gửi mã</button>
                </div>

                <button className='btn btn-primary w-100 mt-3'>Đăng kí</button>
            </form>
        </div>

    )
}


export default RegisterModal
