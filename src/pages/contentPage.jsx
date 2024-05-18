import HeaderContent from "../components/common/headers/header_content";
import Footer from "../components/common/footers/footer";
import Aside from "../components/common/utils/aside";
import useTasks from "../hooks/fetch/useTasks";
import useUsername from "../hooks/fetch/useUsername";
import "../css/pages/contentPage.css"


const ContentPage = ({contentComponent: ContentComponent}) => {
    const username = useUsername();

    return (
        <div>
            <div className="header_wrap">
                <HeaderContent username={username}/>
            </div>
            <div className="pageContent">
                <Aside />
                <div className="content">
                    <ContentComponent />
                </div>
            </div>
            <div className="footer_wrap">
                <Footer/>
            </div>
        </div>
    );
};

export default ContentPage;