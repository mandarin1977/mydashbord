import { NavLink } from "react-router-dom";
import './Sidebar.scss';

function Sidebar() {
    return (
        <>

            <aside className="sidebar">
                <h1>ITIT</h1>
                <section className="sidebar_menu">
                    <nav>
                        <h2>Main Menu</h2>
                        <ul>
                            <li><NavLink to="/dashboard" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/#">업무일지</NavLink></li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>업무현황</h2>
                        <ul>
                            <li><NavLink to="/#" activeClassName="active">업무리스트</NavLink></li>
                            <li><NavLink to="/#">업무 현황</NavLink></li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>직원 관리</h2>
                        <ul>
                            <li><NavLink to="/#" activeClassName="active">조직도</NavLink></li>
                            <li><NavLink to="/#">직원 프로필</NavLink></li>
                            <li><NavLink to="/#">직원 상태</NavLink></li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>일정&공지</h2>
                        <ul>
                            <li><NavLink to="/#" activeClassName="active">공지사항</NavLink></li>
                            <li><NavLink to="/#">연차 관리</NavLink></li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>Profile</h2>
                        <ul>
                            <li><NavLink to="/settings" activeClassName="active">설정</NavLink></li>
                            <li><NavLink to="/#">Log out</NavLink></li>
                        </ul>
                    </nav>
                </section>

            </aside>
        </>
    );
}
export default Sidebar;