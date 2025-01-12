import React from "react";
import herosectionimage from "../../assets/qualityassurance.jpg";
import { FaChevronDown } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const QualityAssurance = () => {
  return (
    <div className="w-full h-auto">
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${herosectionimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Quality Assurance</h1>
          <div className="absolute bottom-10 animate-bounce">
            <FaChevronDown size={30} />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full text-white lg:h-auto h-auto bg-blue-200 flex items-center justify-center py-8">
          <div className="w-10/12 md:w-8/12 lg:w-full h-full flex items-center flex-col text-center">
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-bold mt-12">
                <span className="font-bold text-4xl md:text-6xl">A</span>KS Interactive removes any chance that your website will make a bad impression on your visitors. We have a team of website testing experts who will thoroughly test your desktop, mobile or responsive sites.
              </p>
              <p className="text-xl md:text-2xl font-bold text-center mt-2">
                responsive sites.
              </p>

              <ul className="mt-8 text-xl md:text-xl px-4 flex flex-col items-start list-disc font-bold gap-y-5 mx-20 text-left">
                <li>We verify full performance</li>
                <li>We evaluate site compatibility using all supported browsers and operating systems</li>
                <li>We perform comprehensive eCommerce functionality testing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-11/12 md:w-9/12 mt-16">
          <div className="border border-blue-200 h-auto p-4 flex flex-col items-center justify-center">
            <div className="font-bold text-blue-200 text-2xl">
              HAS A WEBSITE EVER LEFT YOU DISAPPOINTED?
            </div>
            <div className="m-4 leading-7">
              In many cases a company's website is the first way - and sometimes the only way - customers find them. Whether we like it or not, people often associate the look, feel, and overall quality of a website with credibility. Having a website that contains a lot of bugs and flaws does not reflect well on your brand. That's why you should hire AKS Interactive. AKS removes any chance that your website will make a bad impression on your visitors. We have a team of website testing experts who will thoroughly test your desktop, mobile or responsive sites.
            </div>
          </div>
          <div className="border h-auto border-blue-200 mt-10 p-4 flex flex-col items-center justify-center">
            <div className="font-bold text-blue-200 text-2xl">
              HOW DOES WEBSITE TESTING WORK?
            </div>
            <div className="m-4 leading-7">
              Depending on a customer's requirements, our process begins when the AKS interactive QA team tests the website for functional compliance and/or compatibility compliance, using various supported platforms. We exercise the site’s functionality and compare it to documented specifications and also to the typical behaviors that an average user would expect. Functional compliance testing can be achieved with the use of well-written test scripts and/or ad hoc testing coverage.
            </div>
          </div>
          <div className="border h-auto border-blue-200 p-4 mt-10 flex flex-col items-center justify-center">
            <div className="font-bold text-blue-200 text-3xl mx-6 text-center">
              AKS Interactive creates web site test plans and processes and performs testing services. We employ a standardized website test methodology focused on the following areas:
            </div>
            <table className="w-full my-10">
              <tbody>
                <tr className="flex flex-col md:flex-row justify-between">
                  <td className="flex items-center space-x-4 py-4">
                    <div className="text-blue-100">
                      <SiTicktick />
                    </div>
                    <span className="text-richgrey-600">Website Functional Testing</span>
                  </td>
                  <td className="flex items-center space-x-4 py-4">
                    <div className="text-blue-100">
                      <SiTicktick />
                    </div>
                    <span className="text-richgrey-600">Website Usability Testing</span>
                  </td>
                </tr>
                <tr className="border-y border-richgrey-300 flex flex-col md:flex-row justify-between">
                  <td className="flex items-center space-x-4 py-4">
                    <div className="text-blue-100">
                      <SiTicktick />
                    </div>
                    <span className="text-richgrey-600">Cross Browser Testing</span>
                  </td>
                  <td className="flex items-center space-x-4 py-4">
                    <div className="text-blue-100">
                      <SiTicktick />
                    </div>
                    <span className="text-richgrey-600">Competitive Assessment</span>
                  </td>
                </tr>
                <tr className="border-b border-richgrey-600 flex flex-col md:flex-row justify-between">
                  <td className="flex items-center space-x-4 py-4">
                    <div className="text-blue-100">
                      <SiTicktick />
                    </div>
                    <span className="text-richgrey-600">Website Test Automation</span>
                  </td>
                  <td className="flex items-center space-x-4 py-4">
                    <div className="text-blue-100">
                      <SiTicktick />
                    </div>
                    <span className="text-richgrey-600">Website Load Testing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;