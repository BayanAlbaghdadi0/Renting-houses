import React from "react";
import Header from "../../components/Nav";
import Footer from "../../components/Footer";

function About() {
<<<<<<< HEAD
    return (
        <>
            <Header />
            <div id="about" className="relative  overflow-hidden">
                <div className='mb-16'>
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-[#282a36] sm:pb-16 md:pb-20 lg:max-w-[32rem] lg:w-full lg:pb-28 xl:pb-32">
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="text-lg px-10 sm:text-center lg:text-left">
                                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                                        About us
                                    </h2>
                                    <p>
                                        "We at [Company Name] take pride in offering top-quality home rental services. Whether you are looking for a place for a perfect vacation or want to rent a residence for an extended period, we are here to meet your needs. We strive to provide an exceptional experience for our clients by offering a wide range of options and around-the-clock support. Contact us today for more information on how we can help you find the perfect home.
                                    </p>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-20">
                        <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-[90%]" src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg" alt="" />
                    </div>
                </div>
                <div className="bg-inherit">
                    <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
                        <div className="relative mx-auto max-w-5xl text-center">
                            <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                                Why choose us
                            </span>
                            <h2
                                className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
                            >

                                Rent the home you love</h2>
                            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                                We strive to provide an exceptional experience for our clients by offering a wide range of options and around-the-clock support.
                            </p>
                        </div>

                        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-md border border-neutral-800 bg-[#282a36] p-8 text-center shadow">
                                <div
                                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                                        borderColor: 'rgb(93, 79, 240)',
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-color-swatch"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                                        <line x1="17" y1="17" x2="17" y2="17.01" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">unique and innovative style</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    We strive to meet your needs and comfort by providing high-quality homes according to your needs.
                                </p>
                            </div>

                            <div className="rounded-md border border-neutral-800 bg-[#282a36] p-8 text-center shadow">
                                <div
                                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                                        borderColor: 'rgb(93, 79, 240)',
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-bolt"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">Professional work team</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    We are committed to providing excellent customer service and ensuring your complete satisfaction.

                                </p>
                            </div>

                            <div className="rounded-md border border-neutral-800 bg-[#282a36] p-8 text-center shadow">
                                <div
                                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                                        borderColor: 'rgb(93, 79, 240)',
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-tools"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                                        <polyline points="12 8 7 3 3 7 8 12" />
                                        <line x1="7" y1="8" x2="5.5" y2="9.5" />
                                        <polyline points="16 12 21 17 17 21 12 16" />
                                        <line x1="16" y1="17" x2="14.5" y2="18.5" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">An unforgettable rental experience</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    We believe that every home can be an oasis of comfort and happiness                            </p>
                            </div>
                        </div>
                    </section>
=======
  return (
    <>
      <Header />
      <div id="about" className="relative  overflow-hidden">
        <div className="mt- mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-[#282a36] sm:pb-16 md:pb-20 lg:max-w-[32rem] lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-lg px-10 sm:text-center lg:text-left">
                  <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                    About us
                  </h2>
                  <p>
                    "We at [Company Name] take pride in offering top-quality
                    home rental services. Whether you are looking for a place
                    for a perfect vacation or want to rent a residence for an
                    extended period, we are here to meet your needs. We strive
                    to provide an exceptional experience for our clients by
                    offering a wide range of options and around-the-clock
                    support. Contact us today for more information on how we can
                    help you find the perfect home.
                  </p>
>>>>>>> cbddda08abbef4ea7bda4b2be9462f16a44d6613
                </div>
              </main>
            </div>
<<<<<<< HEAD
            <Footer />
        </>
    );
=======
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-20">
            <img
              className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-[90%]"
              src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-inherit">
          <section
            id="features"
            className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
          >
            <div className="relative mx-auto max-w-5xl text-center">
              <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Why choose us
              </span>
              <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Rent the home you love{" "}
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                We strive to provide an exceptional experience for our clients
                by offering a wide range of options and around-the-clock
                support.
              </p>
            </div>

            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md border border-neutral-800 bg-[#282a36] p-8 text-center shadow">
                <div
                  className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                    borderColor: "rgb(93, 79, 240)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-color-swatch"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                    <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                    <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                    <line x1="17" y1="17" x2="17" y2="17.01" />
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">
                  unique and innovative style
                </h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  We strive to meet your needs and comfort by providing
                  high-quality homes according to your needs.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-[#282a36] p-8 text-center shadow">
                <div
                  className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                    borderColor: "rgb(93, 79, 240)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bolt"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">Professional work team</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  We are committed to providing excellent customer service and
                  ensuring your complete satisfaction.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-[#282a36] p-8 text-center shadow">
                <div
                  className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                    borderColor: "rgb(93, 79, 240)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-tools"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                    <polyline points="12 8 7 3 3 7 8 12" />
                    <line x1="7" y1="8" x2="5.5" y2="9.5" />
                    <polyline points="16 12 21 17 17 21 12 16" />
                    <line x1="16" y1="17" x2="14.5" y2="18.5" />
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">
                  An unforgettable rental experience
                </h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  We believe that every home can be an oasis of comfort and
                  happiness{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
>>>>>>> cbddda08abbef4ea7bda4b2be9462f16a44d6613
}

export default About;
