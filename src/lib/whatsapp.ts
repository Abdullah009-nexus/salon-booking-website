export const whatsappNumber = '923120847866';

export function buildWhatsAppUrl(name: string, service: string, datetime: string) {
  const message = `Hi Glamour Saloon, I'd like to book an appointment.\nName: ${name}\nService: ${service}\nPreferred time: ${datetime}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppUrl(service: string) {
  const message = `Hi Glamour Saloon, I would like to book ${service}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
