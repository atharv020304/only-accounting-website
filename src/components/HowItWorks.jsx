import React from "react";
import { FaBook, FaFileInvoice, FaUsers } from "react-icons/fa";


export default function HowItWorks() {
return (
<section className="howItWorks">
<h3>How We Work</h3>
<div className="container">
<div className="card">
<div className="icon"><FaUsers /></div>
<h4>Understand Your Requirements</h4>
<p>We analyze your business needs to tailor the perfect accounting solution.</p>
</div>


<div className="card">
<div className="icon"><FaBook /></div>
<h4>Process & Manage Financials</h4>
<p>We maintain accurate books, prepare reports, and ensure 100% compliance.</p>
</div>


<div className="card">
<div className="icon"><FaFileInvoice /></div>
<h4>Deliver Reports & Insights</h4>
<p>You receive clear insights, statements, and guidance for better decisions.</p>
</div>
</div>
</section>
);
}