export default function GoogleMap() {
  return (
    <div className="h-full min-h-[500px] bg-white rounded-lg shadow-sm border border-gray-100 p-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127635.50877048017!2d32.5165757!3d0.3149625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0932c4aa25%3A0x2f9ab6d05f10658c!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1647882610000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="rounded-lg"
      />
    </div>
  );
}