export default function Process() {
    return (
        <section className="process section" id="process">
            <div className="container">
                <div className="section-header reveal">
                    <p className="section-label">Process</p>
                    <h2 className="section-title">
                        간단한 <em>보정 프로세스</em>
                    </h2>
                    <p className="section-description">
                        복잡한 과정 없이 쉽고 빠르게 시작할 수 있습니다
                    </p>
                </div>
                <div className="process-timeline">
                    <div className="process-step reveal">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h3>무료 견적 요청</h3>
                            <p>
                                하단의 문의 폼을 통해 보정 원하는 사진과 요청사항을 알려주세요.
                                24시간 이내에 상세 견적을 보내드립니다.
                            </p>
                        </div>
                    </div>
                    <div className="process-step reveal">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h3>파일 전송</h3>
                            <p>
                                견적 확정 후 원본 사진을 안전한 파일 전송 링크를 통해
                                보내주세요. 대용량 파일도 문제없습니다.
                            </p>
                        </div>
                    </div>
                    <div className="process-step reveal">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h3>보정 작업 진행</h3>
                            <p>
                                전문 보정팀이 사진을 분석하고 최상의 결과를 위해 보정 작업을
                                진행합니다. 진행 중간중간 확인 가능합니다.
                            </p>
                        </div>
                    </div>
                    <div className="process-step reveal">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <h3>완료 및 납품</h3>
                            <p>
                                최종본을 확인 후 요청사항 대로 수정 반영하여 고해상도 파일로
                                납품합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
