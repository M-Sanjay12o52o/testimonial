"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Landing() {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc("/video/high.mp4");
  }, []);

  return (
    <div>
      <p className="p-4 pl-8">
        <Image src={'logo.svg'} alt="Testimonial" width={150} height={150} />
      </p>
      <div>
        <div className="pl-16">
          <h1 className="text-5xl font-bold mb-4 pt-16 pl-12 pr-12">
            Get testimonials from your
          </h1>
          <h1 className="text-5xl font-bold mb-4 pl-24 pr-12">
            customers with ease
          </h1>
        </div>
        <p className="text-center text-gray-400 text-xl max-w-3xl mx-auto">
          Collecting testimonials is hard, we get it! So we built Testimonial. In mintes, you collect text and video testimonials from your customers with no need for a developer or website hosting.
        </p>
      </div>
      <div className="mt-4">
        <div className="flex flex-row items-center justify-center">
          <Link href={'/dashboard'} className="bg-indigo-500 text-white py-2 px-4 mr-4 rounded">Try FREE Now</Link>
          <button
            className="flex flex-row border border-indigo-500 text-white py-2 px-8 rounded">
            Talk to us
            <Image className="rounded-full ml-1" src="/avatar/avatar1.png" alt="Phone" width={20} height={20} />
            <Image className="rounded-full -ml-1" src="/avatar/avatar2.png" alt="Phone" width={20} height={20} />
            <Image className="rounded-full -ml-1" src="/avatar/avatar3.jpg" alt="Phone" width={20} height={20} />
            <Image className="rounded-full -ml-1" src="/avatar/avatar4.png" alt="Phone" width={20} height={20} />
          </button>
        </div>
        <p className="mt-2 mb-6 font-semibold text-center text-gray-400 text-sm">
          Get started with free credits on us.
          <Link href="/pricing" className="underline">See our pricing→</Link>
        </p>
      </div>

      <br />
      <br />

      <div className="w-full flex justify-center">
        {videoSrc && (
          <video width="full" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <br />
      <br />

      <div>
        <h2
          className="text-center text-gray-400 font-bold text-xl">
          TRUSTED CUSTOMERS
        </h2>
        <div className="flex flex-row justify-around mt-4">
          <Image src="/customers/mixpanel.png" alt="customers" width={60} height={10} />
          <Image src="/customers/chime-logo.svg" alt="customers" width={60} height={10} />
          <Image src="/customers/levels-fyi-darkmode.svg" alt="customers" width={60} height={10} />
          <Image src="/customers/yoast.png" alt="customers" width={60} height={10} />
        </div>
        <div className="flex flex-row justify-around mt-4 mb-4">
          <Image src="/customers/yotta.png" alt="customers" width={60} height={10} />
          <Image src="/customers/ko-fi.png" alt="customers" width={60} height={10} />
          <Image src="/customers/earnest-capital-darkmode.svg" alt="customers" width={60} height={10} />
          <Image src="/customers/chili-piper.png" alt="customers" width={60} height={10} />
        </div>

        <br />
        <br />

        <hr className="border-t bg-gray-400 my-4 mx-16" />

      </div>

      <div>
        <h1 className="text-5xl mb-2 font-bold mt-16 text-center mx-4
        leading-snug">
          Add testimonials to your website with no coding!
        </h1>
        <p className="text-center text-gray-400 text-xl max-w-2xl mx-auto">
          Copy and paste our HTML code to add the Wall Of Love ( 👉<Link href={'/full-version'}>full version</Link>) to your website.
        </p>
        <p className="text-center text-gray-400 text-xl max-w-2xl mx-auto">
          We support any no-code platform (Webflow, WordPress, you name it!)
        </p>

        <br />
        <br />
        <br />

        {/* videos and tweets goes here */}
        <div className="mx-16">
          <Image src={"/video-frame/videoframe2.png"} alt="Video testimonial" width={500} height={300} />
          <div>
            <div className="bg-red-500">
              <Image src={"/avatar/hanna-masler"} alt="Avatar" width={500} height={300} />
            </div>
            <h1>
              Hannah Maslar
            </h1>
            <p>Head of Customer Marketing & Community, Mixpanel</p>
          </div>
          <div>
            <div className="bg-red-500">
              <Image src={"/avatar/hanna-masler"} alt="Avatar" width={500} height={300} />
            </div>
            <h1>
              Madeleine Work
            </h1>
            <p>Content Marketing Manager at Chili Piper</p>
          </div>
          <div>
            <div className="bg-red-500">
              <Image src={"/avatar/madeleinework"} alt="Avatar" width={500} height={300} />
            </div>
            <h1>
              Hannah Maslar
            </h1>
            <p>Head of Customer Marketing & Community, Mixpanel</p>
          </div>
          <div>
            <div className="bg-red-500">
              <Image src={"/avatar/hanna-masler"} alt="Avatar" width={500} height={300} />
            </div>
            <h1>
              Hannah Maslar
            </h1>
            <p>Head of Customer Marketing & Community, Mixpanel</p>
          </div>
          <div>
            <div className="bg-red-500">
              <Image src={"/avatar/hanna-masler"} alt="Avatar" width={500} height={300} />
            </div>
            <h1>
              Hannah Maslar
            </h1>
            <p>Head of Customer Marketing & Community, Mixpanel</p>
          </div>
          <Image src={"/video-frame/videoframe1.png"} alt="Video testimonial" width={500} height={300} />
          {/* <Image src={"/video-frame/videoframe3.png"} alt="Video testimonial" width={500} height={300} /> */}
          <Image src={"/video-frame/videoframe4.png"} alt="Video testimonial" width={500} height={300} />
          <Image src={"/video-frame/videoframe5.png"} alt="Video testimonial" width={500} height={300} />
        </div>
      </div>

      <div>
        <h3>Try our sample embed code</h3>
        <p>Embed the wall of love to your website in 1 minute</p>

        <code>

        </code>

        <button>Copy the code</button>
        <button>Live demo</button>
      </div>

      <div>
        <h1>Collect and display testimonials all in one solution</h1>

        <br />
        <br />

        <h3>Quick to setup</h3>
        <h2>A dedicated landing page</h2>
        <p>Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SM. Setup can be done in two minutes.</p>
        <button>Try it for free</button>

        <br />
        <br />

        <Image src="/images/landing-page.png" alt="Landing page" width={500} height={300} />

        <h3>Easy to manage</h3>
        <h2>A dashboard to manage all testimonials</h2>
        <p>You will have a simple & clean dashboard to manage all testimonials in one place. It's like you email inbox, but it&apos;s designed for your social proof!</p>
        <button>Try it for free</button>

        <Image src="/images/dashboard.png" alt="Dashboard" width={500} height={300} />


        <h3>Track the metrics</h3>
        <h2>Understand how video testimonials are performing</h2>
        <p>Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best performing videos to different marketing channels.</p>
        <p>* Available in the Ultimate plan</p>
        <button>Try it for free</button>

        <Image src="/images/metrics.png" alt="Metrics" width={500} height={300} />

        <h3>More social proof</h3>
        <h2>If you have testimonials on social media (e.g. Twitter, LinkedIn, TikTok etc), video hosting platforms (e.g. YouTube, Vimeo), and other review sites (e.g. G2, Google, Capterra, Yelp etc), bring them all to your account. Testimonial helps you manage all your social proof in a single place!</h2>

        <button>Try it for free</button>

        <Image src="/images/more-social-proof.png" alt="More social proof" width={500} height={300} />

        <h3>Embed the Wall of Love</h3>
        <h2>The best testimonials all in one place</h2>
        <p>Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!</p>
        <Link href={"/wall-of-love"}>See our Wall of Love in action 👉</Link>
        <button>Try it for free</button>

        <Image src="/images/wall-of-love.png" alt="Wall of Love" width={500} height={300} />

        <h3>Embed a single video testimonial</h3>
        <h1>Ad-free hosting for each video</h1>
        <p>For the video testimonial, you can embed it directly on your own website like this. You don&apos;t need to use any 3rd-party Ad-free hosting service, e.g. Wistia, Vimeo.</p>
        <button>Try it for free</button>

        <Image src="/video-frame/videoframe_3432.png" alt="Video testimonial" width={500} height={300} />
      </div>

      <div>
        <h1>Integrate with any platform</h1>
        <p>We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code, you can embed all your testimonials to any platform!</p>

        <br />
        <br />

        <div className="flex flex-col items-center">
          <Image src="/companies/wordpress.png" alt="WordPress" width={100} height={100} />
          <Image src="/companies/webflow.png" alt="Webflow" width={100} height={100} />
          <Image src="/companies/shopify-logo.png" alt="Shopify" width={100} height={100} />
          <Image src="/companies/squarespace-logo-horizontal-black.png" alt="Magento" width={100} height={100} />
          <Image src="/companies/kajabi-logo.svg" alt="WooCommerce" width={100} height={100} />
          <Image src="/companies/framer-logo.png" alt="Custom" width={100} height={100} />
          <Image src="/companies/carrd-logo.png" alt="Custom" width={100} height={100} />
          <Image src="/companies/bubble-logo.svg" alt="Custom" width={100} height={100} />

          <Link href={'/companies'} className="underline">
            ✨ See all 100+ integrations
          </Link>

          <div>
            <p>
              We embedded Testimonial.to on the last page of our Prehireforms (candidates' skills assessment forms) and candidates' testimonials started coming in automatically! Testimonials collection is now automated and we don't need to ask customers or candidates to drop us testimonials anymore!
            </p>
            <Image src="/avatar/avatar" alt="Avatar" width={500} height={300} />
            <p>Kam Ling</p>
            <p>Co-Founder at Prehireforms.com</p>
          </div>

          <div>
            <h1
              className="text-4xl font-bold text-center mt-16 mb-4"
            >
              Ready to collect testimonials?
            </h1>
            <p className="text-center text-gray-400 text-xl max-w-2xl mx-auto leading-snug">
              We are loved by Fortune 500 companies, early-stage startups, marketing agencies, real estate agents, freelancers, and many more. Your customers&apos; testimonials are the best social proof you can get! Get started now 👇
            </p>
            <ul className="text-center my-8">
              <li className="mb-6">✅ No coding skill required.</li>
              <li>✅ Start in under 2 minutes.</li>
            </ul>
            <div className="flex flex-row items-center justify-center">
              <button className="bg-indigo-500 text-white py-2 px-4 mr-4 rounded">Try FREE Now</button>
              <button
                className="flex flex-row border border-indigo-500 text-white py-2 px-8 rounded">
                Talk to us
                <Image className="rounded-full ml-1" src="/avatar/avatar1.png" alt="Phone" width={20} height={20} />
                <Image className="rounded-full -ml-1" src="/avatar/avatar2.png" alt="Phone" width={20} height={20} />
                <Image className="rounded-full -ml-1" src="/avatar/avatar3.jpg" alt="Phone" width={20} height={20} />
                <Image className="rounded-full -ml-1" src="/avatar/avatar4.png" alt="Phone" width={20} height={20} />
              </button>
            </div>
            <div className="flex items-center justify-center mt-2 mb-32">
              <Link href={'/pricing'} className="underline text-gray-400 font-semibold">
                See our pricing →
              </Link>
            </div>
          </div>

          <div id="footer" className="flex flow-row">
            <div>
              {/* <h3>Testimonial</h3> */}
              <p className="p-4 pl-8">
                <Image src={'logo.svg'} alt="Testimonial" width={150} height={150} />
              </p>
              <p>The easiest solution to getting text and video testimonials from your customers.</p>
            </div>

            <div>
              <h3>PRODUCTS</h3>
              <ul>
                <li>Our Wall of Love</li>
                <li>Chrome extension</li>
                <li>Slack app</li>
                <li>Hopin app</li>
                <li>Pricing</li>
                <li>Features</li>
                <li>Integrations</li>
                <li>Help center</li>
                <li>Product Demo</li>
                <li>Status page</li>
              </ul>
            </div>

            <div>
              <h3>COMPANY</h3>
              <ul>
                <li>Our resources</li>
                <li>Tutorials</li>
                <li>Customer stories</li>
                <li>Join affiliate</li>
                <li>program</li>
                <li>Privacy policy</li>
                <li>Terms of Service</li>
                <li>Cookie policy</li>
                <li>DPA (GDPR)</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div>
              <h3>CUSTOMERS</h3>
              <ul>
                <li>Agencies</li>
                <li>B2B companies</li>
                <li>Course creators</li>
                <li>eCommerce</li>
                <li>Consumer apps</li>
              </ul>
            </div>

            <div>
              <h3>LATEST VIDEO</h3>
              <p>AI Space Creator in Testimonial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
