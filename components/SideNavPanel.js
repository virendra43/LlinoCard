import { SideNav, HeaderContainer, Header } from "carbon-addons-iot-react";
import React, { useEffect, useState } from "react";
import 'carbon-addons-iot-react/css/carbon-addons-iot-react.css';
import { BannerActionItems } from "./SampleData";
// import Workflow from "./icons/Workflow";
// import Runs from "./icons/Runs"


export default function SideNavPanel(props) {
    const [linksState, setLinksState] = useState([]);
    const [sideNavPanelLink, setSideNavPanelLink] = useState("");
    const SideNavItems = [
        {
            isEnabled: true,
            icon: '',
            metaData: {
            label: 'Workflows',
            element: 'a',
            href: "#",
            onClick: () => onSideNavPanelLinkClick("Workflows")
            },
            linkContent: 'Workflows',
        },
        {
          isEnabled: true,
          icon: '',
          metaData: {
          label: 'Run',
          element: 'a',
          href: "#",
          onClick: () => onSideNavPanelLinkClick("Run")
          },
          linkContent: 'Run'
        }
    ]

    //sim the initial data load.
    useEffect(() => {
        setLinksState(SideNavItems);
    }, []);

    function onSideNavPanelLinkClick(linkName) {
        setSideNavPanelLink(linkName);
    }

    let pageMainContent = props.children;
    // let newPageMainContent = React.cloneElement(pageMainContent, {linkName: sideNavPanelLink});

    return (        
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
                <Header
                    isSideNavExpanded={isSideNavExpanded}
                    onClickSideNavExpand={onClickSideNavExpand}
                    appName={"GeneOS"}
                    actionItems={BannerActionItems}
                    prefix={""}
                />
                <SideNav links={linksState} isSideNavExpanded={isSideNavExpanded} />
               
            </>
            )}
        />
    );
}