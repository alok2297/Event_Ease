import DynamicComponent from "./DynamicComponent";
import { useLocation } from 'react-router-dom';
import { getPage } from "../Theme/Theme"
import { useState, useEffect } from "react";
import "./style.css"
export const PageLoader = () => {
    const [pageStructure, setPage] = useState()
    const location = useLocation();
    const { pathname } = location;
    const page = getPage(pathname)

    useEffect(() => setPage(page), [pathname]);
    return (
        <div className="page-container">
            <header>
                {pageStructure?.structure?.header?.map((item, id) => (
                    <DynamicComponent key={id} component={item?.component} attributes={item?.attributes} />
                ))}

            </header>
            <div className="content">
                {pageStructure?.structure?.body?.map((item, id) => (
                    <DynamicComponent key={id} component={item?.component} attributes={item?.attributes} />
                ))}

            </div>
            <footer>
                {pageStructure?.structure?.footer?.map((item, id) => (
                    <DynamicComponent key={id} component={item?.component} attributes={item?.attributes} />
                ))}
            </footer>

        </div>
    )
}

