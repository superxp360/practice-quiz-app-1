import Footer from "./Footer";
import NavMenu from "./NavMenu";

export default function AppLayout({ childern }) {

    return (
        <>
        <NavMenu />
        {childern}

        </>
    )
}