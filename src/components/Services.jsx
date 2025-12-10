import React from "react";
import { useNavigate } from "react-router-dom";


const servicesData = [
{ id: 1, title: "Accounting & Bookkeeping", desc: "Full-cycle bookkeeping, ledgers, and reporting." },
{ id: 2, title: "Tax Services", desc: "Tax filing, GST, audit support & compliance." },
{ id: 3, title: "Payroll Management", desc: "Payroll processing, deductions & employee records." },
{ id: 4, title: "Financial Advisory", desc: "Budgeting, forecasting & profitability consulting." },
{ id: 5, title: "Audit & Assurance", desc: "Internal audits, compliance checks & reviews." },
{ id: 6, title: "Business Formation & Compliance", desc: "Company registration & documentation." }
];


export default function Services() {
const navigate = useNavigate();


return (
<section className="services">
<h3>Our Core Services</h3>
<div className="grid">
{servicesData.map((service) => (
<div key={service.id} className="card" onClick={() => navigate(`/service/${service.id}`)}>
<h4>{service.title}</h4>
<p>{service.desc}</p>
</div>
))}
</div>
</section>
);
}