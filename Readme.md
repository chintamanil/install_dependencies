# Installation
```
npm install
```

# Run
```
node app.js
```

# Apartment Marketing Fees

Develop an algorithm that can be used to identify the best marketing source, by dollar spent per lead cost, each quarter based on the cost structure outlined below:

* Apartment Guide = $495 per month, flat rate
* Apartments.com = $295 per signed lease
* Rent.com = $595 or 50% per lease signed, whichever is higher.
* For Rent = $195 monthly, plus $25 per lead.
* Craigslist = Free!
* Resident Referral = $500 per signed lease

## Dataset Description
* **guest_cards.json** - Each record is a unique person who has visited the apartment.  The record will let you determine who leased a unit.

## Metric Definitions

* **Closing Time** - Each record contains a "first_seen" and "lease_signed" value.  A lease is considered closed when there is a date in "lease_signed."  You should use the delta in days as the time to close.

* **Closing Rate** - The total number of records with "lease_signed" in a month.

## Output

**This is not real output, use it as a guide for formatting.**

```
Q1 2014:

1. For Rent - total leads: 10, signed leases: 1, total cost: $445.00, avg cost per lead: $44.50
1. Rent.com - total leads: 10, signed leases: 2, total cost: $1,190.00, avg cost per lead: $119.00
1. Apartments Guide - total leads: 1, signed leases: 1, total cost: $495.00, avg cost per lead: $495.00
```

