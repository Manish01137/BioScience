import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/919730775907?text=Hello%20Biospire%20Lifesciences%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center no-underline cursor-pointer"
      title="Chat on WhatsApp"
      aria-label="Chat with Biospire on WhatsApp"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  )
}
