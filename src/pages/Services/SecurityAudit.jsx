import MainBannerImg from "./assets/audit/main-banner.gif";
import Icon1 from "./assets/audit/icon-01.png";
import Icon2 from "./assets/audit/icon-02.png";
import Icon3 from "./assets/audit/icon-03.png";
import Icon4 from "./assets/audit/icon-04.png";
import Icon5 from "./assets/audit/icon-05.png";
import Icon6 from "./assets/audit/icon-06.png";
import StandardsImg from "./assets/audit/Standards_Enforcement.png";
import OperationalImg from "./assets/audit/Operational_Disruptions.png";
import ThreatImg from "./assets/audit/Threat_Intelligence.png";
import GenSecurityImg from "./assets/audit/General-security.png";
import IdentityImg from "./assets/audit/Identity_Management.png";
import DataProtectionImg from "./assets/audit/Data_protection.png";
import NetworkSecurityImg from "./assets/audit/Network_Security.png";
import ContentSecurityImg from "./assets/audit/Content_Security.png";

const auditTypes = [
  { icon: Icon1, title: "Vulnerability Assessment" },
  { icon: Icon2, title: "Configuration Audit" },
  { icon: Icon3, title: "Risk Assessment" },
  { icon: Icon4, title: "Social Engineering" },
  { icon: Icon5, title: "Compliance Audit" },
  { icon: Icon6, title: "Network Security Audit" },
];

const auditFrequency = [
  {
    img: StandardsImg,
    title: "Standards Enforcement",
    desc: "Many industries have regulatory requirements (e.g., GDPR, HIPAA, PCI DSS) that mandate periodic security audits, often annually or quarterly, to ensure organizations stay compliant with legal and industry standards.",
    reverse: true,
  },
  {
    img: OperationalImg,
    title: "Operational Disruptions",
    desc: "Security audits should be conducted immediately after major changes to IT systems or following security incidents (e.g., data breaches) to assess vulnerabilities introduced and to mitigate any potential risks.",
    reverse: false,
  },
  {
    img: ThreatImg,
    title: "Threat Intelligence",
    desc: "Our compliance audits ensure that a business is adhering to external regulations and internal policies, covering areas such as data protection, financial reporting, cybersecurity, and industry-specific standards.",
    reverse: true,
  },
];

const auditServices = [
  {
    img: GenSecurityImg,
    title: "General Security",
    desc: "Our Website Security Audit provides Regular Software Updates which may involve the CMS, Plugins, and Frameworks.",
  },
  {
    img: IdentityImg,
    title: "Identity Management",
    desc: "We provide the authentication process involving verifying user passwords, whether the user credentials are valid or not.",
  },
  {
    img: DataProtectionImg,
    title: "Data Protection",
    desc: "Data protection is essential in Security Audit which is the evaluation and assessment of an organization's policies.",
  },
  {
    img: NetworkSecurityImg,
    title: "Network Security",
    desc: "Network Security is essential for the success of the development of the organization and provides insights.",
  },
  {
    img: ContentSecurityImg,
    title: "Content Security",
    desc: "We provide content security, including digital rights management and content encryption.",
  },
];

const auditBenefits = [
  {
    icon: Icon2,
    title: "Risk Identification",
    desc: "Helps identify potential vulnerabilities and threats that could compromise the security of systems and data.",
  },
  {
    icon: Icon4,
    title: "Improved Security",
    desc: "Strengthens overall security by addressing weaknesses and gaps identified during the audit.",
  },
  {
    icon: Icon6,
    title: "Cost Saving",
    desc: "Proactively addressing security vulnerabilities can reduce the financial impact of a data breach or cyber-attack.",
  },
];

export default function SecurityAudit() {
  return (
    <div className="space-y-24">

      {/* Main Banner */}
      <section className="bg-indigo-50 py-12 sm:py-16 mt-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Security Audit
            </h2>
            <p className=" text-gray-700 leading-relaxed">
              Security Audits with <span className="font-semibold text-blue-600">V Net Technologies </span>
              in Coimbatore are comprehensive examinations of an organization's
              security systems and data protection measures. They ensure compliance
              with established security policies, identify possible attacks, and
              detect security gaps and weaknesses to strengthen your digital infrastructure.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={MainBannerImg}
              alt="Security Audit"
              className="rounded-full shadow-lg w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Types of Security Audit */}
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <em>Types of Security Audit</em> we provide
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {auditTypes.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <img src={item.icon} alt={item.title} className="mx-auto mb-4 w-16 sm:w-20 h-16 sm:h-20" />
              <h4 className="font-semibold  ">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Audit Frequency */}
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            How Frequently <em>Security Audits</em> is Necessary?
          </h2>
        </div>

        {auditFrequency.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 ${item.reverse ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3 text-center lg:text-left px-2 sm:px-0">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">
                {item.title}
              </h4>
              <p className=" text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Audit Services Carousel */}
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Services provided in <em>Security Audit</em> at V Net Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {auditServices.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 text-center">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 rounded-lg w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover"
              />
              <h4 className="font-semibold mb-2 text-base sm:text-lg md:text-xl">{item.title}</h4>
              <p className="text-gray-700 ">{item.desc}</p>
            </div>

          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Benefits of a Security Audit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {auditBenefits.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-center">
              <img src={item.icon} alt={item.title} className="mx-auto mb-4 w-12 sm:w-16 h-12 sm:h-16" />
              <h4 className="font-semibold mb-2  ">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
