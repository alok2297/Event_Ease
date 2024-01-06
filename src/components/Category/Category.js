import './Category.css';
import { Container } from "../Elements/Container"
import { Iconify } from "../Elements/Icon";

const Category = () => {
    return (
        <Container children={
            <div className="">
                <div className="heading">
                    <div className="Wedding-Categories">Wedding Categories</div>
                    <div className="All-Categories">View all Categories
                        <Iconify width={20} height={20} icon="mdi:chevron-right"></Iconify>
                    </div>
                </div>
                <div className="Categories">
                    <div className="First_Category Common_Category">
                        <div className="text_div">
                            <div className="text_div_container">
                                <div className="text_div_first">Venues</div>
                                <div className="text_div_second">Banquet Halls, Lawns/Farmhouses,R..</div>
                            </div>
                        </div>
                        <div className="image_div">
                            <img className="first_image"
                                src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
                                alt="categoryImg" />
                        </div>
                    </div>
                    <div className="First_Category Common_Category">
                        <div className="text_div">
                            <div className="text_div_container">
                                <div className="text_div_first">Venues</div>
                                <div className="text_div_second">Banquet Halls, Lawns/Farmhouses,R..</div>
                            </div>
                        </div>
                        <div className="image_div">
                            <img className="first_image"
                                src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
                                alt="categoryImg" />
                        </div>
                    </div>
                    <div className="First_Category Common_Category">
                        <div className="text_div">
                            <div className="text_div_container">
                                <div className="text_div_first">Venues</div>
                                <div className="text_div_second">Banquet Halls, Lawns/Farmhouses,R..</div>
                            </div>
                        </div>
                        <div className="image_div">
                            <img className="first_image"
                                src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
                                alt="categoryImg" />
                        </div>
                    </div>
                    <div className="First_Category Common_Category">
                        <div className="text_div">
                            <div className="text_div_container">
                                <div className="text_div_first">Venues</div>
                                <div className="text_div_second">Banquet Halls, Lawns/Farmhouses,R..</div>
                            </div>
                        </div>
                        <div className="image_div">
                            <img className="first_image"
                                src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
                                alt="categoryImg" />
                        </div>
                    </div>
                    <div className="First_Category Common_Category">
                        <div className="text_div">
                            <div className="text_div_container">
                                <div className="text_div_first">Venues</div>
                                <div className="text_div_second">Banquet Halls, Lawns/Farmhouses,R..</div>
                            </div>
                        </div>
                        <div className="image_div">
                            <img className="first_image"
                                src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
                                alt="categoryImg" />
                        </div>
                    </div>
                    <div className="First_Category Common_Category">
                        <div className="text_div">
                            <div className="text_div_container">
                                <div className="text_div_first">Venues</div>
                                <div className="text_div_second">Banquet Halls, Lawns/Farmhouses,R..</div>
                            </div>
                        </div>
                        <div className="image_div">
                            <img className="first_image"
                                src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
                                alt="categoryImg" />
                        </div>
                    </div>
                </div>
            </div>
        }>

        </Container>
    );
}

export default Category;