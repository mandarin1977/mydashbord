import React from "react";
import './Dashboard.scss';

function Dashboard() {
    return (
        <>
            <section className="mainDashboard">
                <article className="noticeArea">
                    <aside>
                        <h2>공지사항</h2>
                        <p>여기다가 공지사항 내용 나옴</p>
                        <button>더보기</button>
                    </aside>
                </article>
                <section className="mainDashArea">
                    <article className="dashInfo">
                        <ul className="dashInfoTab">
                            <li>업무현황</li>
                            <li>직원 관리</li>
                            <li>일정&공지</li>
                            <li>설정</li>
                        </ul>
                    </article>
                </section>
            </section>
            
        </>
    );
}
export default Dashboard;