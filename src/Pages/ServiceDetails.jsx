import React from "react";
import { useParams } from "react-router-dom";


const details = {
1: {
title: "Accounting & Bookkeeping",
description: `• Full-cycle bookkeeping\n• Ledger maintenance\n• Monthly/quarterly reports\n• Cash flow management\n• AR & AP management`
},
2: {
title: "Tax Services",
description: `• Corporate & individual tax filing\n• GST support\n• Tax planning & compliance\n• Audit preparation & representation`
},
3: {
title: "Payroll Management",
description: `• Payroll processing\n• Deductions & filings\n• Employee benefits\n• Year-end payroll summaries`
},
4: {
title: "Financial Advisory",
description: `• Budget forecasting\n• Performance analysis\n• Internal controls\n• Strategy planning\n• Profitability improvement`
},
5: {
title: "Audit & Assurance",
description: `• Internal audits\n• External audit support\n• Risk assessments\n• Financial statement review`
},
6: {
title: "Business Formation & Compliance",
description: `• Company registration\n• Regulatory filing\n• Documentation\n• Corporate secretarial services`
}
};


export default function ServiceDetails() {
const { id } = useParams();
const service = details[id];


return (
<section className="details">
<h2>{service.title}</h2>
<pre>{service.description}</pre>
</section>
);
}