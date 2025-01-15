import React from "react";
import SectionTitle from "@/components/main/SectionTitle";

const page: React.FC = () => {
  return (
    <div className="">
      <SectionTitle title="Contact" />
      <div className="flex gap-4 mt-8 flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-start pl-6 md:pl-0 md:justify-center bg-gray-500/10 py-8 rounded-md">
          swarajphalke555@gmail.com
        </div>
        <div className="flex-1 flex items-center justify-start pl-6 md:pl-0 md:justify-center bg-gray-500/10 py-8 rounded-md">
          +91 8421646984
        </div>
        <div className="flex-1 flex items-center justify-start pl-6 md:pl-0 md:justify-center bg-gray-500/10 py-8 rounded-md">
           <a href="https://www.linkedin.com/in/swaraj-phalke-b5539b220/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <section className=" text-gray-100 mt-8 pl-1">
        <div className="max-w-4xl">
          <SectionTitle title="Get into Touch" />
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-500/10 border border-gray-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-500/10 border border-gray-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-3 py-2 bg-gray-500/10 border border-gray-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                id="bottone1"
                className="text-black font-bold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
