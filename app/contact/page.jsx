"use client";
import React from "react";
import Navbar from "@/components/Navbar"; // <-- ADD NAVBAR

const ContactPage = () => {
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
                Contact Us
              </h1>

              {/* Orange underline */}
              <div className="w-20 h-1.5 bg-[var(--primary)] mx-auto mt-3 rounded-full"></div>

              <p className="text-[var(--text-muted)] max-w-xl mx-auto mt-4">
                We're here to help! Reach out to us anytime.
              </p>
            </div>

            {/* CONTACT CARD */}
            <div className="max-w-2xl mx-auto bg-white border-2 border-[var(--primary)] rounded-2xl p-10 shadow-sm">

              <h2 className="text-xl font-semibold text-[var(--primary)] mb-8">
                Get in touch
              </h2>

              <div className="space-y-10">

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center">
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0L12 12m9.75-5.25L12 12m0 0L2.25 6.75m9.75 5.25L2.25 17.25" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-medium text-[var(--text-dark)]">Email</p>
                    <p className="text-[var(--text-muted)]">support@quickcart.com</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center">
                    {/* Phone Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-.34a1.5 1.5 0 00-.88-1.36l-3.4-1.53a1.5 1.5 0 00-1.75.44l-.9 1.13c-1.08-.24-2.1-.74-3.02-1.4a12.09 12.09 0 01-4.2-4.2c-.66-.92-1.16-1.94-1.4-3.02l1.13-.9a1.5 1.5 0 00.44-1.75L5.95 3.38A1.5 1.5 0 004.59 2.5h-.34A2.25 2.25 0 002 4.75v2z" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-medium text-[var(--text-dark)]">Phone</p>
                    <p className="text-[var(--text-muted)]">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center">
                    {/* Location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.8} stroke="var(--primary)" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 21.75c4.97-4.02 8.25-8.04 8.25-12a8.25 8.25 0 10-16.5 0c0 3.96 3.28 7.98 8.25 12z" />
                      <circle cx="12" cy="9" r="2.25" fill="var(--primary)" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-medium text-[var(--text-dark)]">Address</p>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      123 Online Market Street,<br />
                      Digital City, 90001
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
