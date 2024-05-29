import React, { Suspense, lazy } from "react";
const GenieService = lazy(() => import('./GenieService'));
const Information = lazy(() => import('./Information'));
const Footer = lazy(() => import('../components/Blocks/Footer/Footer'));
const Header = lazy(() => import('../components/Blocks/Header/Header'));
const VenueSection = lazy(() => import('../components/Blocks/Venue/Venue'));
const Login = lazy(() => import('../components/Blocks/Authentication/Login'));
const VendorLogin = lazy(() => import('../components/Blocks/Authentication/VendorLogin'));
const Home = lazy(() => import('../Pages/HomePage'));
const Vendors = lazy(() => import('../Pages/Vendors'));
const Wedsta = lazy(() => import('../Pages/Wedsta'));
const RealWedidingStroies = lazy(() => import('../Pages/RealWedidingStroies'));
const RealWeddingDetail = lazy(() => import('../Pages/RealWeddingDetail'));
const Photos = lazy(() => import('../Pages/Photos'));
const PageNotFound = lazy(() => import('../components/Blocks/PageNotFound/PageNotFound'));

const Components = {
    GenieService: GenieService,
    Information: Information,
    VenueSection: VenueSection,
    Footer: Footer,
    Header: Header,
    Login: Login,
    VendorLogin: VendorLogin,
    Home: Home,
    Vendors: Vendors,
    Wedsta: Wedsta,
    RealWedidingStroies: RealWedidingStroies,
    RealWeddingDetail: RealWeddingDetail,
    Photos: Photos,
    PageNotFound: PageNotFound,
};

const creatingComponents = (component, attributes) => {
    const DynamicComponent = Components[component]
    // component does exist
    if (typeof Components[component] !== "undefined") {
        return <DynamicComponent {...attributes} />
    }
    //   component doesn't exist yet
    return <div style={{color: 'red', padding: '10px 20px'}}>The component ''---"{component}"--- does not exist.</div>
}

const DynamicComponent = ({ component, attributes }) => {
    return (
        <Suspense fallback={<p>loading...</p>}>
            {creatingComponents(component, attributes)}
        </Suspense>
    )
}

export default DynamicComponent