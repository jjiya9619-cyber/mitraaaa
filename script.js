const services = [
  {
    id: 1,
    type: "document",
    name: "Aadhaar Card",
    sub: "New Aadhaar",
    benefit: "Identity proof",
    eligibility: "All citizens",
    docs: "Birth proof, address proof, passport photo",
    place: "Aadhaar Center / CSC",
    color: "#11683a",
    tags: ["aadhaar", "csc", "id"],
  },
  {
    id: 2,
    type: "document",
    name: "Aadhaar Card",
    sub: "Mobile number update",
    benefit: "For OTP-based services",
    eligibility: "Citizen with Aadhaar",
    docs: "Aadhaar card",
    place: "Aadhaar Center / CSC",
    color: "#11683a",
    tags: ["aadhaar", "mobile", "otp", "csc"],
  },
  {
    id: 3,
    type: "document",
    name: "Aadhaar Card",
    sub: "Name correction",
    benefit: "Information correction",
    eligibility: "Citizen with Aadhaar",
    docs: "Aadhaar card, proof of name",
    place: "Aadhaar Center / CSC",
    color: "#11683a",
    tags: ["aadhaar", "correction", "csc"],
  },
  {
    id: 4,
    type: "document",
    name: "Aadhaar Card",
    sub: "Address correction",
    benefit: "Address update",
    eligibility: "Citizen with Aadhaar",
    docs: "Address proof",
    place: "Aadhaar Center / CSC",
    color: "#11683a",
    tags: ["aadhaar", "address", "csc"],
  },
  {
    id: 5,
    type: "document",
    name: "Aadhaar Card",
    sub: "Date of birth correction",
    benefit: "DOB correction",
    eligibility: "Citizen with Aadhaar",
    docs: "Birth proof",
    place: "Aadhaar Center / CSC",
    color: "#11683a",
    tags: ["aadhaar", "dob", "csc"],
  },
  {
    id: 6,
    type: "document",
    name: "PAN Card",
    sub: "New PAN",
    benefit: "Income Tax ID card",
    eligibility: "Taxpayer / citizen",
    docs: "Aadhaar card, photo",
    place: "PAN Center / Online",
    color: "#0b4f97",
    tags: ["pan", "online"],
  },
  {
    id: 7,
    type: "document",
    name: "PAN Card",
    sub: "PAN correction",
    benefit: "Information correction",
    eligibility: "Citizen with PAN",
    docs: "PAN card, Aadhaar card",
    place: "PAN Center",
    color: "#0b4f97",
    tags: ["pan", "correction"],
  },
  {
    id: 8,
    type: "document",
    name: "PAN Card",
    sub: "Duplicate PAN",
    benefit: "Get a replacement copy",
    eligibility: "Citizen with PAN",
    docs: "PAN details",
    place: "Online",
    color: "#0b4f97",
    tags: ["pan", "duplicate", "online"],
  },
  {
    id: 9,
    type: "document",
    name: "Voter Card",
    sub: "New registration",
    benefit: "Voting rights",
    eligibility: "Indian citizen aged 18+",
    docs: "Aadhaar, address proof, passport photo",
    place: "BLO / Election Office / Online",
    color: "#5a2b88",
    tags: ["voter", "online"],
  },
  {
    id: 10,
    type: "document",
    name: "Voter Card",
    sub: "Name correction",
    benefit: "Information correction",
    eligibility: "Citizen with voter card",
    docs: "Aadhaar card",
    place: "Election Office",
    color: "#5a2b88",
    tags: ["voter", "correction"],
  },
  {
    id: 11,
    type: "document",
    name: "Voter Card",
    sub: "Address change",
    benefit: "Voter list update",
    eligibility: "Citizen with voter card",
    docs: "Address proof",
    place: "Election Office",
    color: "#5a2b88",
    tags: ["voter", "address"],
  },
  {
    id: 12,
    type: "document",
    name: "Passport",
    sub: "New passport",
    benefit: "For foreign travel",
    eligibility: "Indian citizen",
    docs: "Aadhaar, PAN, address proof, birth proof, photo",
    place: "Passport Seva Kendra (PSK)",
    color: "#0b4f97",
    tags: ["passport"],
  },
  {
    id: 13,
    type: "document",
    name: "Passport",
    sub: "Renewal",
    benefit: "Passport renewal",
    eligibility: "Citizen with old passport",
    docs: "Old passport",
    place: "Passport Seva Kendra (PSK)",
    color: "#0b4f97",
    tags: ["passport", "renewal"],
  },
  {
    id: 14,
    type: "document",
    name: "Income Certificate",
    sub: "New certificate",
    benefit: "For government schemes",
    eligibility: "Beneficiary family",
    docs: "Aadhaar, ration card, electricity bill, passport photo",
    place: "Mamlatdar Office / CSC",
    color: "#11683a",
    tags: ["income", "certificate", "csc"],
  },
  {
    id: 15,
    type: "document",
    name: "EWS Certificate",
    sub: "New certificate",
    benefit: "Reservation benefits for economically weaker sections",
    eligibility: "Eligible EWS citizen",
    docs: "Income certificate, property details, Aadhaar card",
    place: "Mamlatdar Office",
    color: "#11683a",
    tags: ["ews", "certificate"],
  },
  {
    id: 16,
    type: "document",
    name: "Domicile Certificate",
    sub: "New certificate",
    benefit: "State residence proof",
    eligibility: "Citizen residing in the state",
    docs: "Aadhaar card, address proof",
    place: "Mamlatdar Office",
    color: "#11683a",
    tags: ["domicile", "certificate"],
  },
  {
    id: 17,
    type: "document",
    name: "Caste Certificate",
    sub: "SC certificate",
    benefit: "Reservation benefits for school and jobs",
    eligibility: "SC community",
    docs: "Aadhaar, school leaving certificate, caste proof",
    place: "Mamlatdar Office",
    color: "#d85d08",
    tags: ["caste", "sc"],
  },
  {
    id: 18,
    type: "document",
    name: "Caste Certificate",
    sub: "ST certificate",
    benefit: "Reservation benefits for school and jobs",
    eligibility: "ST community",
    docs: "Aadhaar, caste proof",
    place: "Mamlatdar Office",
    color: "#d85d08",
    tags: ["caste", "st"],
  },
  {
    id: 19,
    type: "document",
    name: "Caste Certificate",
    sub: "SEBC / OBC certificate",
    benefit: "Reservation benefits for school and jobs",
    eligibility: "Eligible SEBC / OBC citizen",
    docs: "Aadhaar, caste proof",
    place: "Mamlatdar Office",
    color: "#d85d08",
    tags: ["caste", "obc", "sebc"],
  },
  {
    id: 20,
    type: "document",
    name: "Birth Certificate",
    sub: "New copy",
    benefit: "Legal proof of birth",
    eligibility: "Birth must be registered",
    docs: "Birth details",
    place: "Municipality / AMC / Gram Panchayat",
    color: "#c9303f",
    tags: ["birth", "certificate"],
  },
  {
    id: 21,
    type: "document",
    name: "Birth Certificate",
    sub: "Correction",
    benefit: "Information correction",
    eligibility: "Citizen with birth certificate",
    docs: "Birth certificate, supporting proof",
    place: "Municipality / AMC",
    color: "#c9303f",
    tags: ["birth", "correction"],
  },
  {
    id: 22,
    type: "document",
    name: "Death Certificate",
    sub: "New copy",
    benefit: "For legal and government work",
    eligibility: "Death must be registered",
    docs: "Death details",
    place: "Municipality / AMC / Gram Panchayat",
    color: "#c9303f",
    tags: ["death", "certificate"],
  },
  {
    id: 23,
    type: "document",
    name: "Death Certificate",
    sub: "Correction",
    benefit: "Information correction",
    eligibility: "Citizen with death certificate record",
    docs: "Death certificate, supporting proof",
    place: "Municipality / AMC",
    color: "#c9303f",
    tags: ["death", "correction"],
  },
  {
    id: 24,
    type: "document",
    name: "Marriage Registration",
    sub: "New certificate",
    benefit: "Legal proof of marriage",
    eligibility: "Married couple",
    docs: "Aadhaar, marriage date, photo, witness Aadhaar",
    place: "Marriage Registrar Office",
    color: "#c9303f",
    tags: ["marriage", "certificate"],
  },
  {
    id: 25,
    type: "document",
    name: "Disability Certificate",
    sub: "New certificate",
    benefit: "For disability benefits and schemes",
    eligibility: "Person with disability",
    docs: "Aadhaar, medical report, passport photo",
    place: "Civil Hospital / Social Justice Department",
    color: "#5a2b88",
    tags: ["disability", "certificate"],
  },
  {
    id: 26,
    type: "document",
    name: "UDID Card",
    sub: "New UDID",
    benefit: "Unified disability identity",
    eligibility: "Person with disability",
    docs: "Disability certificate, Aadhaar, mobile number",
    place: "Online / CSC",
    color: "#5a2b88",
    tags: ["udid", "disability", "online", "csc"],
  },
  {
    id: 27,
    type: "scheme",
    name: "Income Certificate",
    sub: "New certificate",
    benefit: "For government benefits",
    eligibility: "Main earning person of the household",
    docs: "Aadhaar card, ration card, electricity bill, panchanama photo, previous income card copy",
    place: "Mamlatdar Office / CSC",
    color: "#11683a",
    tags: ["income", "scheme", "csc"],
  },
  {
    id: 28,
    type: "scheme",
    name: "Widow Assistance",
    sub: "New application",
    benefit: "Rs. 1250 monthly financial assistance",
    eligibility: "Widow woman",
    docs: "Aadhaar card, ration card, passport photo, income certificate, husband's death certificate, bank passbook",
    place: "Mamlatdar Office / CSC",
    color: "#0b4f97",
    tags: ["widow", "assistance", "csc"],
  },
  {
    id: 29,
    type: "scheme",
    name: "Destitute Elderly Assistance",
    sub: "New application",
    benefit: "Rs. 1000 monthly assistance",
    eligibility: "Destitute elderly person or person with disability",
    docs: "Aadhaar card, ration card, passport photo, income certificate, age proof",
    place: "Mamlatdar Office / CSC",
    color: "#08756f",
    tags: ["senior", "assistance", "csc"],
  },
  {
    id: 30,
    type: "scheme",
    name: "Indira Gandhi Old Age Pension Scheme",
    sub: "New application",
    benefit: "Rs. 1000 monthly assistance",
    eligibility: "Elderly person from a BPL-listed family",
    docs: "Aadhaar card, ration card, passport photo, bank passbook, age proof",
    place: "Municipal Corporation / CSC",
    color: "#d85d08",
    tags: ["pension", "senior", "csc"],
  },
  {
    id: 31,
    type: "scheme",
    name: "National Family Assistance Scheme",
    sub: "New application",
    benefit: "Rs. 20,000 one-time financial assistance",
    eligibility: "Widow woman and BPL cardholder",
    docs: "Aadhaar card, ration card, passport photo, bank passbook, death certificate, BPL list proof",
    place: "Mamlatdar Office / CSC",
    color: "#c9303f",
    tags: ["family", "assistance", "csc"],
  },
  {
    id: 32,
    type: "scheme",
    name: "Ayushman Card (AB PMJAY-MA)",
    sub: "New registration",
    benefit: "Medical assistance up to Rs. 10 lakh",
    eligibility: "Family with income up to Rs. 4 lakh",
    docs: "Aadhaar card, ration card, income certificate, Aadhaar-registered mobile number",
    place: "CSC / Hospital / Help Desk",
    color: "#0b4f97",
    tags: ["ayushman", "health", "csc"],
  },
  {
    id: 33,
    type: "scheme",
    name: "Vay Vandana Scheme",
    sub: "New registration",
    benefit: "Medical assistance up to Rs. 10 lakh",
    eligibility: "Person aged 70 or above",
    docs: "Updated Aadhaar card only",
    place: "Help Desk / CSC",
    color: "#11683a",
    tags: ["senior", "health", "csc"],
  },
  {
    id: 34,
    type: "scheme",
    name: "Foster Parent Assistance Scheme",
    sub: "New application",
    benefit: "Rs. 3000 per month for a studying child",
    eligibility: "Studying child whose parents have passed away",
    docs: "Child Aadhaar card, ration card, bank details, school bonafide, parents' death certificates",
    place: "Mamlatdar Office / CSC",
    color: "#d85d08",
    tags: ["children", "education", "csc"],
  },
  {
    id: 35,
    type: "scheme",
    name: "Kunvarbai Mameru Scheme",
    sub: "New application",
    benefit: "Rs. 12,000 one-time financial assistance",
    eligibility: "Married daughter",
    docs: "Bride's Aadhaar card, ration card, birth/school certificate, father's Aadhaar, bank passbook, marriage certificate, caste certificate",
    place: "Mamlatdar Office / CSC",
    color: "#b51f63",
    tags: ["marriage", "assistance", "csc"],
  },
  {
    id: 36,
    type: "scheme",
    name: "Manav Garima Scheme",
    sub: "New application",
    benefit: "Tool kit worth Rs. 25,000",
    eligibility: "Person connected with household or small trade work",
    docs: "Aadhaar card, ration card, passport photo, income certificate, bank passbook, caste certificate, e-Shram card",
    place: "Industry Department / CSC",
    color: "#7a3510",
    tags: ["employment", "toolkit", "csc"],
  },
  {
    id: 37,
    type: "scheme",
    name: "R.T.E.",
    sub: "New registration",
    benefit: "Free education from Standard 1 to 8",
    eligibility: "Child who has completed 6 years of age",
    docs: "Child Aadhaar card, ration card, Anganwadi certificate, birth certificate, parents' Aadhaar card, income certificate",
    place: "Education Department / CSC",
    color: "#0b4f97",
    tags: ["education", "rte", "csc"],
  },
  {
    id: 38,
    type: "scheme",
    name: "e-Shram Card",
    sub: "New registration",
    benefit: "Accident insurance up to Rs. 2 lakh",
    eligibility: "Worker / laborer aged 18-59",
    docs: "Aadhaar card, bank passbook, Aadhaar-registered mobile number",
    place: "CSC",
    color: "#11683a",
    tags: ["eshram", "worker", "csc"],
  },
];

let activeFilter = "all";
let searchText = "";
let selectedServiceId = services[0].id;

const serviceList = document.querySelector("#serviceList");
const serviceDetail = document.querySelector("#serviceDetail");
const resultCount = document.querySelector("#resultCount");
const activeFilterLabel = document.querySelector("#activeFilterLabel");
const searchInput = document.querySelector("#serviceSearch");
const clearSearch = document.querySelector("#clearSearch");
const chips = [...document.querySelectorAll(".chip")];

function searchableText(item) {
  return [
    item.name,
    item.sub,
    item.benefit,
    item.eligibility,
    item.docs,
    item.place,
    item.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function matchesFilter(item) {
  if (activeFilter === "all") return true;
  if (activeFilter === "online") return searchableText(item).includes("online");
  if (activeFilter === "csc") return searchableText(item).includes("csc");
  return item.type === activeFilter;
}

function matchesSearch(item) {
  if (!searchText) return true;
  return searchableText(item).includes(searchText);
}

function getFilteredServices() {
  return services.filter((item) => matchesFilter(item) && matchesSearch(item));
}

function filterLabel() {
  const activeChip = chips.find((chip) => chip.dataset.filter === activeFilter);
  return activeChip ? activeChip.textContent : "All services";
}

function serviceOption(item) {
  const isActive = item.id === selectedServiceId ? " active" : "";
  return `
    <button class="service-option${isActive}" type="button" data-id="${item.id}" style="--accent:${item.color}">
      <span class="badge">${item.id}</span>
      <div>
        <strong>${item.name}</strong>
        <span>${item.sub}</span>
        <small>${item.type === "scheme" ? "Scheme" : "Document"} - ${item.place}</small>
      </div>
    </button>
  `;
}

function documentItems(item) {
  return item.docs
    .split(",")
    .map((doc) => doc.trim())
    .filter(Boolean)
    .map((doc) => `<li>${doc}</li>`)
    .join("");
}

function renderDetail(item) {
  serviceDetail.innerHTML = `
    <div class="detail-hero" style="--accent:${item.color}">
      <span class="step-pill">Step 2</span>
      <h3>${item.name}</h3>
      <p>${item.sub}</p>
      <div class="tags">
        <span class="tag">${item.type === "scheme" ? "Scheme" : "Document"}</span>
        ${item.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    <div class="detail-body" style="--accent:${item.color}">
      <div class="step-list">
        <div class="step-card">
          <strong>Confirm the benefit or purpose</strong>
          <span>${item.benefit}</span>
        </div>
        <div class="step-card">
          <strong>Check eligibility</strong>
          <span>${item.eligibility}</span>
        </div>
        <div class="step-card">
          <strong>Prepare these documents</strong>
          <ul class="doc-list">${documentItems(item)}</ul>
        </div>
        <div class="step-card">
          <strong>Apply at the right place</strong>
          <span>${item.place}</span>
        </div>
      </div>
      <div class="detail-actions">
        <a class="action-btn primary" href="tel:14555">Call 14555</a>
        <a class="action-btn secondary" href="#posters">View source posters</a>
      </div>
    </div>
  `;
}

function renderDirectory() {
  const filtered = getFilteredServices();
  if (!filtered.some((item) => item.id === selectedServiceId)) {
    selectedServiceId = filtered[0]?.id || services[0].id;
  }

  serviceList.innerHTML = filtered.length
    ? filtered.map(serviceOption).join("")
    : `<div class="empty-state">No matching services found. Try another search or reset filters.</div>`;

  const selected = services.find((item) => item.id === selectedServiceId) || filtered[0] || services[0];
  renderDetail(selected);
  resultCount.textContent = `${filtered.length} results found`;
  activeFilterLabel.textContent = filterLabel();
}

searchInput.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();
  renderDirectory();
});

clearSearch.addEventListener("click", () => {
  searchText = "";
  activeFilter = "all";
  searchInput.value = "";
  chips.forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === "all"));
  renderDirectory();
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((button) => button.classList.toggle("active", button === chip));
    renderDirectory();
  });
});

serviceList.addEventListener("click", (event) => {
  const option = event.target.closest(".service-option");
  if (!option) return;
  selectedServiceId = Number(option.dataset.id);
  renderDirectory();
});

renderDirectory();
