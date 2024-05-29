import './Category.css';
import { Container } from "../../Elements/Container"
import { Iconify } from "../../Elements/Icon";
import { Breadcrumbs } from "../../Elements/Breadcrumbs";
import { useNavigate } from "react-router-dom";

const Category = (props) => {
    const links = [
        {
            path: "/",
            name: "home"
        },
        {
            path: "/vendors",
            name: "vendors"
        }
    ]

    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate("/venues")
    }

    const viewAll = () => {
        navigate("/vendors")
    }

    return (
        <Container children={
            <div className="wedding-categories-cntr">
                {props.show && <Breadcrumbs links={links}></Breadcrumbs>}
                <div className="heading">
                    <div className="Wedding-Categories">Wedding Categories</div>
                    {
                        !props.show &&
                        <div className="All-Categories" onClick={viewAll}>
                            <span>View all Categories</span>
                            <Iconify width={20} height={20} icon="mdi:chevron-right"></Iconify>
                        </div>
                    }
                </div>
                <div className="Categories">
                    {props.category.map((item, index) => (
                        <div className="First_Category Common_Category" key={index} style={{ backgroundColor: item.color }} onClick={() => { handleClick(item) }}>
                            <div className="text_div">
                                <div className="text_div_container">
                                    <div className="text_div_first">{item.title}</div>
                                    <div className="text_div_second">{item.subtitle}</div>
                                </div>
                            </div>
                            <div className="image_div">
                                <img className="first_image"
                                    src={item.imgUrl}
                                    alt="categoryImg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }>

        </Container>
    );
}

export default Category;