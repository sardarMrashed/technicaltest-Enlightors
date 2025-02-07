import React from "react";
import Image from "next/image"; // Next.js Image component for optimization

// Import your company logo or an appropriate image
// import EnlightorsLogo from "../public/enlightors-logo.png"; // Replace with your actual path
import TeamPhoto from "../../assets/img/our-team.jpg"; // Replace with your actual team photo

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section 1: Company Overview */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About Enlightors
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Enlightors is a modern e-commerce platform dedicated to providing
            innovative solutions and exceptional products. We believe in
            creating a seamless and enjoyable online shopping experience for our
            customers. Our mission is to illuminate your life with quality and
            convenience.
          </p>
        </section>

        {/* Section 2: Our Team */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src={TeamPhoto}
              alt="Enlightors Team"
              className="rounded-lg shadow-xl object-cover object-center w-full h-full" // Use object-cover and object-center
              width={600} // Adjust as needed
              height={400} // Adjust as needed
              layout="responsive" // Important for responsiveness with Next.js Image
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Dedicated Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are a team of passionate individuals committed to excellence.
              From developers and designers to customer service and marketing
              experts, we work collaboratively to bring you the best possible
              e-commerce experience. We value innovation, integrity, and
              customer satisfaction.
            </p>
            {/* Optional: List key team members or roles */}
            {/* <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>John Doe - CEO</li>
              <li>Jane Smith - Head of Marketing</li>
              <li>Peter Jones - Lead Developer</li>
            </ul> */}
          </div>
        </section>

        {/* Section 3: Our Values */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Innovation
              </h4>
              <p className="text-gray-600">
                We constantly seek new and creative ways to improve our products
                and services.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Customer Focus
              </h4>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to
                exceed their expectations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Integrity
              </h4>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical principles in
                all our interactions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
