import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CanWeHelp from '../../components/CanWeHelp';
import DefaultLayout from '../../components/Layouts/Default';

export default function Home() {
    const [widgetVisible, setWidgetVisible] = useState(false);

    const openMenuHandler = () => setWidgetVisible(true);
    const closeMenuHandler = () => setWidgetVisible(false);

    // useEffect(() => {
    //     setTimeout(openMenuHandler, 4000);
    // }, []);
    return (
        <>
            <Header />
            <DefaultLayout />
            {
                widgetVisible ?
                <CanWeHelp closeHandler={closeMenuHandler} /> :
                null
            }
        </>
    )
}