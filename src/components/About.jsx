import React from "react";

export const About = () => {
  return (
    <div className="container mt-5 pt-5 text-center" style={{ height: "1700px" }}>
      {/* Section 1 */}
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-md-8 mb-5">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">What is Agriculture?</h3>
          <p>
            Agriculture is the science and practice of cultivating soil,
            growing crops, and raising animals for food, fiber, fuel, and other
            products used to sustain and enhance human life.
          </p>
          <a href="#" className="icon-link">
            more details
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>

        <div className="col-md-8">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">📜 History of Agriculture</h3>
          <p>
            <strong>Origin:</strong> Began around 10,000 years ago during the Neolithic Revolution. <br />
            <strong>Early Practices:</strong> Included basic crop farming and animal domestication. <br />
            <strong>Development:</strong> Evolved with tools, techniques, and technology — from plows and irrigation to modern-day machinery and genetically modified crops.
          </p>
          <a href="#" className="icon-link">
            more details
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>

      {/* Section 2 */}
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-md-8 mb-5">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">🌱 Types of Agriculture</h3>
          <p>
            <strong>Subsistence Agriculture:</strong> Small-scale, mostly for family or local consumption. <br />
            <strong>Commercial Agriculture:</strong> Large-scale, aimed at selling produce for profit. <br />
            <strong>Organic Farming:</strong> Uses natural methods, avoiding synthetic fertilizers and pesticides. <br />
            <strong>Industrial Agriculture:</strong> Uses technology and machinery for mass production. <br />
            <strong>Agroforestry, Aquaculture, and Permaculture:</strong> Specialized forms combining various natural systems.
          </p>
          <a href="#" className="icon-link">
            more details
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>

        <div className="col-md-8">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">🚜 Importance of Agriculture</h3>
          <p>
            <strong>Food Supply:</strong> Primary source of food for humans and animals. <br />
            <strong>Economic Growth:</strong> Supports economies, especially in developing countries. <br />
            <strong>Employment:</strong> Provides jobs for billions worldwide. <br />
            <strong>Raw Materials:</strong> Supplies materials for clothing (like cotton), biofuels, and medicine.
          </p>
          <a href="#" className="icon-link">
            more details
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bootstrap Hero Section */}
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="Ag1.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">Agriculture</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            In conclusion, agriculture remains the cornerstone of human civilization. From its ancient roots to its modern innovations, it continues to provide food, raw materials, employment, and economic stability worldwide. As we face global challenges like climate change, population growth, and sustainability, the future of agriculture depends on responsible practices, technological advancement, and a commitment to preserving natural resources for generations to come.


          </p>
        </div>
      </div>
    </div>
  );
};
