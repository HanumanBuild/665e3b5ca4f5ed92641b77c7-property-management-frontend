
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

/**
 * Provides navigation links across the website, containing links to the Home page and potentially other future pages or sections.
 * It uses Link from react-router-dom for SPA navigation without page reloads, ensuring easy and efficient user navigation.
 */

const Nav = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="bg-white shadow-md rounded px-2 py-3">
                <NavigationMenuItem>
                    <NavigationMenuLink as={Link} to="/" className="text-blue-500 hover:text-blue-700">
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Additional menu items can be added here as the site expands */}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Nav;
