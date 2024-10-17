"use client"
import React from "react";
import { usePathname } from "next/navigation";
function Footer() {
  const pathname = usePathname();
  const isRegister = pathname && pathname.startsWith("/register"); 
  const isLogin = pathname && pathname.startsWith("/login");
  return (
    <footer className={`${isLogin || isRegister ? "hidden" : "block"}`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div>
            <div className="mb-6 md:mb-0 flex gap-2 h-8 items-center">
              <img src="/logo.png" alt="logo" className="w-8" />
              <img
                src="/logo_heading.png"
                alt="logo_heading"
                className="w-16 h-6"
              />
            </div>
            <div className="w-64 text-sm text-gray-400 mt-6">
              Take your business to new heights with faster cash flow and clear
              financial insights all with a free Novo account. Apply in 10
              Minutes
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="grid max-sm:grid-cols-1 mt-6 max-md:grid-cols-2 gap-8 grid-cols-4">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Our Product
              </h2>
              <ul className="text-gray-400 text-sm dark:text-gray-400">
                <li className="mb-1">
                  <a href="" className="hover:underline">
                    Checking Account
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Debit Card
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Funding
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Invoices
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Partner Perks
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Company
              </h2>
              <ul className="text-gray-400 text-sm dark:text-gray-400">
                <li className="mb-1">
                  <a href="" className="hover:underline">
                    Our Customers
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Company News
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Resource
              </h2>
              <ul className="text-gray-400 text-sm dark:text-gray-400">
                <li className="mb-1">
                  <a href="" className="hover:underline">
                    Resource Center
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Company News
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Our Apps
              </h2>
              <ul className="text-gray-400 text-sm dark:text-gray-400">
                <li className="mb-1">
                  <a href="" className="hover:underline">
                    Download for iOS
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Download for Android
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:underline">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
