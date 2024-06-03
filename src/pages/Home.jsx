
import React from 'react';
import Layout from '../components/Layout';
import PropertyList from '../components/PropertyList';
import properties from '../lib/data';

/**
 * This page serves as the landing page of the property management website, displaying a list of all properties
 * using the PropertyList component. It acts as the main entry point for users and utilizes React Router for
 * navigation to detailed property pages.
 */

const Home = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4">
                <div className="mt-8">
                    {/* PropertyList component is used here to display all properties */}
                    <PropertyList properties={properties} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
