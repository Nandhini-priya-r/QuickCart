"use client";
import React from "react";
import Navbar from "@/components/Navbar"; // <-- ADD NAVBAR

const AboutPage = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <section>
        <div className="container mx-auto px-6 md:px-16 lg:px-32 py-16">
          <div className="section-inner">

            {/* PAGE TITLE */}
            <div className="text-center mb-14">
              <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-dark)]">
                About Us
              </h1>

              <div className="w-24 h-1.5 bg-[var(--primary)] mx-auto mt-3 rounded-full"></div>

              <p className="text-[var(--text-muted)] max-w-2xl mx-auto mt-4">
                Learn more about our journey, mission, and the values that drive QuickCart.
              </p>
            </div>

            {/* WHO WE ARE */}
            <section>
              <div className="container mx-auto">
                <div className="section-inner max-w-4xl mx-auto text-center mb-20">
                  <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-4">
                    Who We Are
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    QuickCart was built with one mission — to offer a seamless and reliable
                    shopping experience. Our platform connects customers with quality
                    products and fast delivery while keeping the process simple, transparent, 
                    and enjoyable.
                  </p>
                </div>
              </div>
            </section>

            {/* MISSION & VISION */}
            <section>
              <div className="container mx-auto">
                <div className="section-inner grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">

                  {/* Mission */}
                  <div className="border border-[var(--border)] rounded-xl p-8 bg-white">
                    <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">
                      Our Mission
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      To deliver a smooth, affordable, and trustworthy digital marketplace
                      that connects customers with quality products — supported by fast
                      delivery and excellent customer service.
                    </p>
                  </div>

                  {/* Vision */}
                  <div className="border border-[var(--border)] rounded-xl p-8 bg-white">
                    <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">
                      Our Vision
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      To become the most customer-centric e-commerce platform where users
                      can shop effortlessly with confidence and satisfaction.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* WHY CHOOSE US */}
            <section>
              <div className="container mx-auto">
                <div className="section-inner max-w-5xl mx-auto text-center">

                  <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-4">
                    Why Choose QuickCart?
                  </h2>
                  <p className="text-[var(--text-muted)] mb-10">
                    Here's what makes us stand out.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* FAST DELIVERY */}
                    <div className="border border-[var(--border)] rounded-xl p-6 bg-white">
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)]/15 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zm-6-2V5a2 2 0 00-2-2H3v12h2m14 0h2v-3.586a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0017.586 8H13v7z" />
                        </svg>
                      </span>
                      <p className="font-medium text-[var(--text-dark)]">Fast Delivery</p>
                    </div>

                    {/* QUALITY PRODUCTS */}
                    <div className="border border-[var(--border)] rounded-xl p-6 bg-white">
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)]/15 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 2l2.833 5.743 6.333.92-4.583 4.468 1.081 6.307L12 16.75 6.336 19.44l1.081-6.307L2.833 8.663l6.333-.92L12 2z" />
                        </svg>
                      </span>
                      <p className="font-medium text-[var(--text-dark)]">Quality Products</p>
                    </div>

                    {/* SECURE PAYMENT */}
                    <div className="border border-[var(--border)] rounded-xl p-6 bg-white">
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)]/15 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17 11V7a5 5 0 10-10 0v4M5 11h14v10H5V11z" />
                        </svg>
                      </span>
                      <p className="font-medium text-[var(--text-dark)]">Secure Payments</p>
                    </div>

                    {/* SUPPORT */}
                    <div className="border border-[var(--border)] rounded-xl p-6 bg-white">
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)]/15 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M18 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                        </svg>
                      </span>
                      <p className="font-medium text-[var(--text-dark)]">24/7 Support</p>
                    </div>

                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
