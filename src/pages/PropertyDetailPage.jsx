
import React from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import properties from '../lib/data';
import PropertyDetail from '../components/PropertyDetail';

/**
 * This page displays detailed information about a specific property, accessed by clicking on a property in the Home page.
 * It imports and uses the PropertyDetail component, fetching data based on the property ID from the URL, and is crucial
 * for providing detailed views of properties.
 */

const PropertyDetailPage = () => {
    const { id } = useParams(); // This will be used to fetch property details based on the property ID.
    const property = properties.find(p => p.id.toString() === id); // Find the property by ID from the hardcoded data.

    return (
        <Layout>
            <div className="container mx-auto px-4">
                <div className="mt-8">
                    {/* PropertyDetail component is used here to display the detailed information of the property */}
                    {property ? <PropertyDetail property={property} /> : <p>Property not found.</p>}
                </div>
            </div>
        </Layout>
    );
};

export default PropertyDetailPage;
