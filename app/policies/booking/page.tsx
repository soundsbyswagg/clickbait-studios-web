export default function BookingPolicyPage() {
  const sections = [
    ['Booking and arrival', 'Book at least four hours before the requested start time. Automated arrival instructions are sent by text after booking. Customers have a 15-minute lateness window, and booked time is not automatically extended for late arrival.'],
    ['Payment and no-shows', 'Standard sessions require a 50% deposit or full payment. Website processing fees apply. No-show deposits are nonrefundable.'],
    ['Session timing', 'The base session has a three-hour minimum. There is no separate overtime rate. A five-minute grace period applies at the end of the session. Extensions require engineer approval, availability, and in-house confirmation.'],
    ['Age and responsibility', 'Standard studio clients must be at least 18 years old. The booking client is responsible for damage caused by the client or guests. More Than Rap is a separate supervised youth-program lane.'],
    ['Studio conduct', 'No smoking, guns or weapons, or illegal activity is permitted.'],
    ['Files and additional work', 'Files are stored for 30 days and may be delivered by email, AirDrop, or WeTransfer. Typical turnaround is 24 to 72 hours based on the project. Mastering and revisions are paid add-ons, with a maximum of two revisions.'],
  ];
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-8 text-5xl tracking-tight">Booking Policy</h1>
      <div className="space-y-7">{sections.map(([title, body]) => <section key={title}><h2 className="mb-2 text-xl font-semibold">{title}</h2><p className="text-muted">{body}</p></section>)}</div>
    </div>
  );
}
