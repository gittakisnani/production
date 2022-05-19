import React from 'react';
import Section from "./Section"

const Main = () => {
  return (
    <main>
        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        rightBtn="Order Now"
        leftBtn="Existing Inventory"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        rightBtn="Order Now"
        leftBtn="Existing Inventory"
        />
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        rightBtn="Order Now"
        leftBtn="Existing Inventory"
        />
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        rightBtn="Order Now"
        leftBtn="Existing Inventory"
        />
        <Section 
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        rightBtn="Order Now"
        leftBtn="Learn More"
        />
        <Section 
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        image="solar-panel.jpg"
        rightBtn="Order Now"
        leftBtn="Learn More"
        />
        <Section 
        title="Accessories"
        image="accessories.jpg"
        rightBtn="Learn More"
        />
    </main>
  )
}

export default Main