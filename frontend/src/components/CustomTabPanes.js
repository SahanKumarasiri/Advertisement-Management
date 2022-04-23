import { Tabs } from "antd";
import CreateAdvertisement from "./CreateAdvertisemnet";
import DisplayAdvertisement from "./DisplayAdvertisement";
import StripeCheckout from "react-stripe-checkout";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const CustomTabPanes = () => (
  <center>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Advertisement Create" key="1">
        <CreateAdvertisement />
      </TabPane>
      <TabPane tab="Advertisement Display" key="2">
        <DisplayAdvertisement />
      </TabPane>
      <TabPane tab="Advertisement Payment Details" key="3">
        <StripeCheckout
          stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
          name="Advertisement Payment Gateway"
          billingAddress
          shippingAddress
        />
      </TabPane>
    </Tabs>
  </center>
);

export default CustomTabPanes;
