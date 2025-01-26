import { Menu, ShoppingCart, Heart, User, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Buddhas", href: "/buddhas" },
  { label: "Hindu Gods", href: "/hindu-gods" },
  { label: "Temples", href: "/temples" },
  { label: "Households", href: "/households" },
  { label: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2">
      <span className="text-xl font-bold text-primary">Abinash Sculptures</span>
    </Link>
  );

  const UserActions = () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon" className="relative">
        <Heart className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          0
        </span>
      </Button>
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          0
        </span>
      </Button>
      {user ? (
        <Button variant="ghost" size="icon" asChild>
          <Link to="/profile">
            <User className="h-5 w-5" />
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" size="icon" asChild>
          <Link to="/auth">
            <LogIn className="h-5 w-5" />
          </Link>
        </Button>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Logo />
          <UserActions />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-2 py-1 text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Logo />
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  <Link to={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <UserActions />
      </div>
    </div>
  );
};