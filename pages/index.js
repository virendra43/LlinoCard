import "carbon-addons-iot-react/css/carbon-addons-iot-react.css";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/SideNavPanel"),
  {
    ssr: false,
  }
);
import { Card } from "carbon-addons-iot-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Search,
  Dropdown,
} from "carbon-components-react";
import { px } from "@carbon/layout";

const Home = () => {
  const onChange = () => {
    <div>Hello wolrd</div>;
  };
  return (
    <div>
      <DynamicComponentWithNoSSR />
      <Card
        className={"iot--main-content"}
        CARD_SIZES={{
          LARGEWIDE: {
            lg: {
              h: 4,

              w: 16,
            },

            max: {
              h: 4,

              w: 16,
            },

            md: {
              h: 4,

              w: 8,
            },

            sm: {
              h: 4,

              w: 4,
            },

            xl: {
              h: 4,

              w: 16,
            },

            xs: {
              h: 4,

              w: 4,
            },
          },
        }}
        size="LARGEWIDE"
        hideHeader={true}
        // title="GeneOS Card"
      >
        <div id="parent">
          <Breadcrumb class="child">
            <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">
              {("Breadcrumb 3 text", "Breadcrumb 3")}
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="sb">
            <div className="button1">
              <Button>Test Button</Button>
            </div>
            <div className="button2">
              <Button>Test Button</Button>
            </div>

            <div className="search">
              <Search id="search-1" />
            </div>
          </div>
        </div>

        <div className="DropParent">
          <div className="twodrop" style={{ width: 600 }}>
            <Dropdown
              label="Group By"
              type="inline"
              items={["helloworld,virat"]}
              itemToString={(item) => (item ? item.text : "")}
              onChange={onChange}
            />
          </div>
          <div className="twodropOut">
            <div className="twodrop" style={{ width: 600 }}>
              <Dropdown
                label="Columns"
                type="inline"
                items={["helloworld,virat"]}
                itemToString={(item) => (item ? item.text : "")}
                onChange={onChange}
              />
            </div>
            <div className="twodrop" style={{ width: 600 }}>
              <Dropdown
                label="My Views(Default)"
                type="inline"
                items={["helloworld,virat"]}
                itemToString={(item) => (item ? item.text : "")}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
