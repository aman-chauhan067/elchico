import { sourceContact } from './source/contact';

export const contact = {
  ...sourceContact,
  phone: sourceContact.phones.find(p => p.verified)?.number || sourceContact.phones[0].number,
  address: sourceContact.locations[0].address,
  openingHours: "Monday - Sunday: 11:00 AM - 11:00 PM",
  email: sourceContact.emails[0]?.email || "contact@elchico.in",
  googleMaps: "https://www.google.com/maps",
  whatsapp: "https://wa.me/919415128975"
};
