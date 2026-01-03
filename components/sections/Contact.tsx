"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        count: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
        if (!formData.phone.trim()) newErrors.phone = "연락처를 입력해주세요.";
        else if (!/^[\d\s-]{10,}$/.test(formData.phone))
            newErrors.phone = "올바른 연락처 형식을 입력해주세요.";
        if (!formData.email.trim()) newErrors.email = "이메일을 입력해주세요.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "올바른 이메일 형식을 입력해주세요.";
        if (!formData.service) newErrors.service = "서비스를 선택해주세요.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section className="cta section" id="contact">
            <div className="container">
                <div className="cta-content reveal">
                    <h2>
                        지금 바로 무료 샘플로
                        <br />
                        <em>Studio Quiet Lux의 차이</em>를 경험하세요
                    </h2>
                    <p>
                        1장 무료 샘플 보정 서비스를 제공합니다. 부담 없이 시작해보세요.
                    </p>
                    <div className="cta-features">
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>24시간 내 견적 회신</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>1장 무료 샘플 보정</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>전문가 1:1 상담</span>
                        </div>
                    </div>
                </div>
                <div className="contact-form-wrapper reveal">
                    <form
                        className="contact-form"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        action="/success"
                        onSubmit={(e) => {
                            if (!validate()) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">이름 *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="홍길동"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <span className="error-message" style={{ color: "#EF4444", fontSize: "0.75rem" }}>
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">연락처 *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="010-1234-5678"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && (
                                    <span className="error-message" style={{ color: "#EF4444", fontSize: "0.75rem" }}>
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">이메일 *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <span className="error-message" style={{ color: "#EF4444", fontSize: "0.75rem" }}>
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="service">서비스 선택 *</label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">선택해주세요</option>
                                    <option value="standard">스탠다드 보정</option>
                                    <option value="premium">프리미엄 보정</option>
                                    <option value="rnb">알앤비 필터</option>
                                    <option value="other">기타</option>
                                </select>
                                {errors.service && (
                                    <span className="error-message" style={{ color: "#EF4444", fontSize: "0.75rem" }}>
                                        {errors.service}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="count">예상 매수</label>
                                <input
                                    type="number"
                                    id="count"
                                    name="count"
                                    placeholder="50장"
                                    min="1"
                                    value={formData.count}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">요청사항</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="보정 요청사항을 자유롭게 적어주세요. (원하는 색감, 특별히 보정 원하는 부분 등)"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full btn-large">
                            무료 견적 요청하기
                        </button>
                        <p className="form-note">
                            ※ 제출 후 24시간 이내에 연락드리겠습니다.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
