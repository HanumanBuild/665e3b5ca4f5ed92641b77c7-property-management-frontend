
import React from 'react';
import { Label } from "@/components/ui/label";

/**
 * A simple footer component that includes basic copyright and contact information, used across all pages to provide a consistent look and feel at the bottom of the website.
 */

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <div>
                <Label className="text-sm">
                    © {new Date().getFullYear()} Property Management, Inc. All rights reserved.
                </Label>
            </div>
            <div className="mt-2">
                <Label htmlFor="contact" className="text-sm">
                    Contact us: <a href="mailto:info@propertymanagement.com" className="text-blue-300 hover:text-blue-500">info@propertymanagement.com</a>
                </Label>
            </div>
        </footer>
    );
};

export default Footer;
