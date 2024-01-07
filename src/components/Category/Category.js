import './Category.css';
import { Container } from "../Elements/Container"
import { Iconify } from "../Elements/Icon";
import WeddingCategory from '../../LocalFile/WeddingCategory.json';
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
                    {WeddingCategory.map((item)=>(
                        <div className="First_Category Common_Category" key={item.id} style={{backgroundColor:item.color}}>
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