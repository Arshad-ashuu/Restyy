import React from "react";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 right-0",
        "block bg-black/5 py-2 px-3 text-sm/6 text-white",
        "border-t border-gray-200 dark:border-gray-700",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-white/25"
      )}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Restyy™
          </a>
          . All Rights Reserved.
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Made with ❤️ by Arshad.
        </span>
      </div>
    </footer>
  );
}
