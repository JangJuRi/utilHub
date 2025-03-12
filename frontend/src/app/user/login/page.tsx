"use client";

import {ChangeEvent, FormEvent, useState} from "react";

export default function Register() {
    const [form, setForm] = useState({
        accountId: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="register-container">
            <h2 className="logo">UtilHub</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">아이디</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={form.accountId}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">비밀번호</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    로그인
                </button>
            </form>
        </div>
    );
}
