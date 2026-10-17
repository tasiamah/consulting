# Content checklist — complete before going live

The site is built and deployable, but some content is **illustrative placeholder
data**. It reads as credible, which is exactly why it is dangerous to leave in
place: a bank, insurer, or enterprise client that checks a detail and finds it
cannot be verified will discount the entire site.

Work through this list before pointing `aandhconsultinggroup.com` at the new
deployment.

---

## 1. Must fix — verifiable claims

These are the items a bank or counterparty is most likely to check.

### Team members — `src/content/team.ts`

**Every person listed is invented.** Replace with real staff.

- [ ] Replace all 11 entries with actual personnel (name, role, office, bio)
- [ ] Delete any entry you cannot back with a real person
- [ ] Add real photos to `/public/team/` and set the `photo` field, or leave the
      monogram avatars (both look fine; monograms are honest)
- [ ] Add `linkedin` URLs where profiles exist — this is the single strongest
      verification signal you can give a reviewer

> An accurate team of three beats an invented team of eleven. If you are
> genuinely three people, say three, and update `stats` and `teamStats` to match.

### Company facts — `src/content/company.ts`

- [ ] `foundedYear` — currently `2019`. Set to the real incorporation year.
- [ ] `stats` — "40+ engagements", "11 consultants", "96% client retention" are
      invented. Replace with numbers you can evidence, or remove the band.
- [ ] `registration.uaeLicenseNumber` — add your IFZA licence number
- [ ] `registration.ukCompanyNumber` — add if a UK entity exists, otherwise
      **leave unset** and reword the London office as a branch/representative
      office (unset values are hidden automatically sitewide)
- [ ] `registration.vatNumber` — add if VAT/TRN registered
- [ ] `registration.uaeAuthority` — currently "International Free Zone Authority
      (IFZA), Dubai". Confirm this matches the licence exactly.
- [ ] **Legal suffix** — IFZA issues licences to `FZCO` and `FZ-LLC` entities.
      `company.legalName` currently reads "A & H Consulting Group LLC". If the
      licence says FZCO or FZ-LLC, correct it: the name on the site must match
      the licence character for character, because the bank will compare them.
- [ ] `phone` — currently unset, so no phone number is shown anywhere. A listed
      landline materially improves bank onboarding; add one if you have it.
- [ ] `linkedin` — add the company page URL

> Leave registration fields unset rather than approximate. A wrong licence
> number is worse than no licence number.

### Case studies — `src/content/case-studies.ts`

**All four engagements are invented**, including the metrics.

- [ ] Rewrite each to describe a real engagement, or
- [ ] Reduce to the ones you can evidence, or
- [ ] Remove the section entirely (delete `src/app/case-studies/`, the two
      `caseStudies` references in `src/app/page.tsx`, and the navigation entries
      in `src/content/navigation.ts`)

Client names may only be used with written permission. The anonymised format
used here is standard consultancy practice and requires no permission, but the
underlying engagement must be real.

### Email addresses

The site references three addresses. Confirm each one receives mail:

- [ ] `info@aandhconsultinggroup.com`
- [ ] `careers@aandhconsultinggroup.com`
- [ ] `privacy@aandhconsultinggroup.com`

Aliases pointing to one inbox are fine. A bounce from an address printed on your
own site is a bad look during due diligence.

---

## 2. Should fix — claims to verify

### Operating commitments — `src/content/company.ts` (`assurances`)

These describe practices, not certifications, and are deliberately worded that
way. Confirm each is actually true of how you operate, and amend what is not:

- [ ] Written MSA with acceptance criteria and change control on every engagement
- [ ] Mutual NDA signed before discovery
- [ ] GDPR and UAE Federal Decree-Law No. 45 of 2021 practices in place
- [ ] Managed secrets store, least-privilege access, segregated client environments
- [ ] Documentation, IaC, and runbooks delivered on every engagement

### Insurance and documentation

Several pages state that certificates are available on request.

- [ ] Confirm professional indemnity insurance is in force
- [ ] Have the certificate of incorporation, trade licence, and insurance
      certificate ready to send
- [ ] If you do not hold PI insurance, remove the claim — search for
      "professional indemnity" in `src/content/faqs.ts` and `src/app/about`

### Certifications

No certifications (ISO 27001, AWS/Azure partner status, Cyber Essentials) are
claimed anywhere, by design. Only add them once certificates are held — these
are the easiest claims in the world for a reviewer to check.

### Open roles — `src/content/careers.ts`

- [ ] Keep only roles you are genuinely hiring for, or remove `/careers`

### Legal pages — `src/app/legal/`

The privacy policy, terms of service, and cookie policy are drafted to a
professional standard and reference UK/EU GDPR and UAE Federal Decree-Law No. 45
of 2021 correctly. **They are not legal advice.**

- [ ] Have a UAE-qualified lawyer review before relying on them
- [ ] Confirm the governing-law clause in the terms matches your contracts
- [ ] Update `LAST_UPDATED` in each file when revised
- [ ] Confirm the stated data retention periods match your actual practice

---

## 3. Nice to have

- [ ] Office photographs for the about page (real offices, not stock imagery)
- [ ] Client logos — only with written permission
- [ ] Named client testimonials — the `quote` field on each case study renders
      automatically when set
- [ ] Google Business Profile for both offices, with matching addresses
- [ ] LinkedIn company page with employees who list A&H as their employer

---

## 4. Consistency check

Banks cross-reference. These must match exactly across every source:

- [ ] Legal name identical on the site, trade licence, and bank application
- [ ] Office addresses identical on the site, licence, and Google Business Profile
- [ ] Domain email (not Gmail) used on the bank application
- [ ] Staff count on the site consistent with payroll
- [ ] Company LinkedIn consistent with the site's team page
