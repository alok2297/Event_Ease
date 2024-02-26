import React, { Suspense, lazy } from "react";
const GenieService = lazy(() => import('./GenieService'));
const Information = lazy(() => import('./Information'));
const Components = {
    GenieService: GenieService,
    Information: Information
};

const creatingComponents = (component, attributes) => {
    const DynamicComponent = Components[component]
    // component does exist
    if (typeof Components[component] !== "undefined") {
        return <DynamicComponent {...attributes} />
    }
    //   component doesn't exist yet
    return React.createElement(
        () => {
            <div>The component {component} has not been created yet.</div>
        }
    );
}

const DynamicComponent = ({ component, attributes }) => {
    return (
        <Suspense fallback={<p>loading...</p>}>
            {creatingComponents(component, attributes)}
        </Suspense>
    )
}

export default DynamicComponent