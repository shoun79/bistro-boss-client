import { Helmet } from "react-helmet-async";

const PageTitle = ({ pageName }) => {
    return (
        <Helmet>
            <title>Bistro Boss | {pageName}</title>
        </Helmet>
    );
};

export default PageTitle;