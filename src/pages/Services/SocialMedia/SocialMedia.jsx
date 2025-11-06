import React from "react";
import { Link } from "react-router-dom";

const SocialMediaMarketing = () => {
  const services = [
    {
      name: "Instagram Marketing",
      path: "/instagram",
      description:
        "Grow your brand on Instagram with posts, stories, reels, and targeted ads. Engage your audience with visually appealing content and interactive campaigns to increase followers and brand loyalty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
      color: "bg-pink-50",
      textColor: "text-pink-700",
    },
    {
      name: "Facebook Marketing",
      path: "/facebook",
      description:
        "Reach millions with Facebook pages, sponsored posts, and targeted advertisements. Analyze engagement metrics and refine campaigns to maximize your ROI and connect with the right audience.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      color: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      name: "YouTube Marketing",
      path: "/youtubemarketing",
      description:
        "Promote your business with engaging video content. Use YouTube ads, tutorials, and live streams to increase brand visibility, educate your audience, and drive conversions.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
      color: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      name: "SMS Marketing",
      path: "/sms",
      description:
        "Send instant SMS campaigns to engage your customers directly. Perfect for promotions, alerts, and reminders, ensuring high open rates and immediate responses.",
      image: "data:image/png;base64,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",
      color: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      name: "Google Marketing",
      path: "/google",
      description:
        "Boost traffic with Google Ads, search engine optimization, and remarketing strategies. Increase leads and conversions by appearing at the right place at the right time.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      color: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      name: "Email Marketing",
      path: "/email",
      description:
        "Reach your audience directly with personalized email campaigns. Increase open rates, click-throughs, and conversions by sending timely and relevant content.",
      image: "data:image/jpeg;base64,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",
      color: "bg-yellow-50",
      textColor: "text-gray-700",
    }
  ];

  const mainImage =
    "https://hindipanda.com/wp-content/uploads/2018/12/What-is-Social-Media-Marketing.jpg";

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 max-w-6xl mx-auto mt-12 space-y-12">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-center mb-4">
        Social Media Marketing
      </h1>
      <p className="text-gray-700 text-center text-lg max-w-3xl">
        Leverage the power of social media platforms to grow your business, connect with your audience, and boost your online presence. Explore our expert services below.
      </p>
      <img
        src={mainImage}
        alt="Social Media Marketing"
        className="w-full h-80 object-cover rounded-xl shadow-lg mt-6"
      />

      {/* Services Section */}
      <div className="flex flex-col w-full space-y-12 mt-12">
        {services.map((service, index) => (
          <Link
            key={service.name}
            to={service.path}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full md:w-1/3 h-52 object-contain rounded-lg mb-4 md:mb-0"
            />
            <div className={`md:ml-8 md:mr-8 flex-1 ${service.textColor}`}>
              <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
              <p className="text-gray-800 text-lg leading-relaxed">{service.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Click to learn more about <span className="font-semibold">{service.name}</span>.
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="w-full text-center mt-12 mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-gray-700 mb-6">
          Contact us today to start your personalized social media marketing strategy.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
