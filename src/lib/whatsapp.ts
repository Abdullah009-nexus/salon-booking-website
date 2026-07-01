export function buildWhatsAppUrl(name: string, service: string, datetime: string) {
  const number = '923120847866';
  const message = `Hi Glamour Saloon, I'd like to book an appointment.\nName: ${name}\nService: ${service}\nPreferred time: ${datetime}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
