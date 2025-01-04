import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black px-10 py-12 text-left text-sm text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-6">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Adela Kiel</h2>
        </div>

        <div>
          <h3 className="text-md mb-4 font-semibold">HELP</h3>
          <ul>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/size-guide">Size Guide</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping</Link>
            </li>
            <li>
              <Link href="/returns">Return & Exchanges</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md mb-4 font-semibold">QUICK LINKS</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md mb-4 font-semibold">MORE INFO</h3>
          <ul>
            <li>
              <Link href="/account">Account</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/track-order">Track My Order</Link>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h3 className="text-md mb-4 font-semibold">OTHERS</h3>
            <ul>
              <li>
                <Link href="/lorem">Lorem</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold">Stay Updated</h3>
              <p className="mb-6 text-sm text-gray-400">
                Sign up for the latest updates and exclusive access to sales.
              </p>
              <div className="mb-5 flex w-fit flex-row justify-between">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="mt-5 border-b border-white bg-transparent text-xs placeholder:text-white focus:outline-none"
                />

                <button className="text-white">→</button>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
