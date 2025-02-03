export const redirectToWhatsApp = (productName: string, price: number) => {
  const phoneNumber = "917305971450"; // Format: country code (91) + phone number
  const message = encodeURIComponent(
    `Hi, I'm interested in purchasing ${productName} priced at ₹${price}. Could you please provide more details?`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};