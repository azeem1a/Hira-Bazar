/**
 * WhatsApp Click-to-Chat Configuration
 *
 * Phone number in international format without '+' or other characters.
 * Hira Bazaar Curtain King WhatsApp: 919739711980 (+91 97397 11980)
 */
export const WHATSAPP_CONFIG = {
  number: "919739711980",
  defaultMessage:
    "Hi Hira Bazaar Curtain King, I'm interested in your curtain and window treatment services. I'd love to know more and get a quote.",
  getLink: (message?: string) => {
    const text = message ?? WHATSAPP_CONFIG.defaultMessage;
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(text)}`;
  },
};

export const WHATSAPP_CHAT_URL = WHATSAPP_CONFIG.getLink();
