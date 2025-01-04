import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="mb-4 flex justify-center gap-4 text-2xl text-gray-600">
      <Link href="https://facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-600" />
      </Link>
      <Link href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" />
      </Link>
      <Link href="https://twitter.com" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400" />
      </Link>
      <Link href="https://tiktok.com" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} className="hover:text-green-500" />
      </Link>
    </div>
  );
};

export default Socials;
