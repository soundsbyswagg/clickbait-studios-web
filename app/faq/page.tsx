import Link from 'next/link';

const faqs = [
  {
    q: "What is the difference between A Room and B Room?",
    a: "Same equipment. A Room holds up to 6 guests; B Room up to 3. Choose A for larger groups or teams."
  },
  {
    q: "How far in advance do I need to book?",
    a: "Sessions must normally be booked at least 4 hours before the requested start time."
  },
  {
    q: "Do you offer mixing and mastering?",
    a: "Yes. Rough and final mixing is $50/hour. Mastering is available as an add-on. Confirm details at booking."
  },
  {
    q: "What is included in a standard session?",
    a: "Recording access. Engineering needs are determined via consultation or at time of booking. Files delivered via email, AirDrop, or WeTransfer. 2 revisions max. Files retained 30 days."
  },
  {
    q: "Is More Than Rap open to all ages?",
    a: "Youth creative program. Exact age range pending verification (reported 4-15 range in discovery)."
  }
];

export default function FAQPage() {
  return (
    <main className="container py-12 max-w-3xl">
      <h1 className="text-5xl tracking-tight mb-8">Frequently Asked Questions</h1>

      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="font-medium text-lg mb-2">{faq.q}</h3>
            <p className="text-muted">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm">
        <Link href="/contact" className="underline">Still have questions? Contact us</Link>
      </div>
    </main>
  );
}
