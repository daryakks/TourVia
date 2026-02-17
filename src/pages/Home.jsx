import React from "react";
import CardTrip from "../components/CardTrip";
import FeatureDestination from "../components/FeatureDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Mention from "../components/Mention";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
const Home = () =>{
    return(
        <>
        <CardTrip />
        <FeatureDestination />
        <ExclusiveOffers />
        <Mention />
        <ContactForm />
        
        </>
    );
};
export default Home;