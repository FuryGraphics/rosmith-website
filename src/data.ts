import { PracticeArea, Testimonial, BlogPost, ServiceArea } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'criminal-defense',
    title: 'Criminal Defense',
    description: 'From DUI and traffic violations to drug charges and domestic violence, we defend your rights aggressively.',
    longDescription: 'Facing criminal charges in New York can be overwhelming, with severe consequences including potential jail time, heavy fines, and a permanent criminal record. Randy O. Smith provides aggressive, strategic litigation to defend your federal and state constitutional rights. We handle a wide spectrum of criminal matters, including DUI/DWI, traffic moving violations, misdemeanor offenses, drug possession, domestic allegations, white-collar crimes, and grand larceny. Our absolute priority is protecting your record, your freedom, and your peace of mind through structured, trial-tested advocacy and relentless dedication key to New York criminal proceedings.',
    iconName: 'Shield'
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    description: 'Car accidents, motorcycle crashes, slip & fall—we fight to recover full compensation for your injuries.',
    longDescription: 'If you have been injured due to another party\'s negligence, you have a legal right to seek full and fair compensation for your physical pain and financial loss. R.O. Smith Law Firm represents injured individuals in motor vehicle accidents, truck collisions, motorcycle crashes, pedestrian incidents, slip-and-fall injuries, and premises liability. We manage every single aspect of your case, from conducting independent investigations and recovering critical evidence to negotiating with aggressive insurance adjusters and representing you in front of a judge and jury. We focus on recovering compensation for your medical bills, lost wages, future care, and overall suffering.',
    iconName: 'Heart'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Law',
    description: 'Residential and commercial transactions, disputes, and title issues handled with precision.',
    longDescription: 'Real estate transactions in the New York metropolitan area are complex and require deep attention to detail. R.O. Smith Law Firm represents residential buyers and sellers, commercial developers, and landlords or tenants in Nassau, Suffolk, Westchester, and NYC. We handle essential legal matters including deed transfers, contract drafting and reviews, closing representation, title clearing, boundary/easement disputes, commercial lease negotiations, and refinancing transactions. We ensure that your valuable investments are legally secured and transactions proceed smoothly and without unexpected liability.',
    iconName: 'Building'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Randy O. Smith is an outstanding attorney. When I was facing charges in Queens and felt completely anxious, he stepped in, explained the entire court process clearly, and was able to get my charges completely dismissed. Available 24/7 means he actually answered my late night call!",
    author: "Douglas M.",
    caseType: "Dismissed Criminal Charge",
    rating: 5
  },
  {
    id: 't2',
    quote: "After my car accident on the Southern State Parkway, the insurance company refused to pay my medical bills. R.O. Smith Law Firm took over, kept me updated every week, and secured a settlement that covered all my expenses and lost wages plus compensation. Highly professional and caring.",
    author: "Samantha R.",
    caseType: "Car Accident Injury Recovery",
    rating: 5
  },
  {
    id: 't3',
    quote: "Randy helped my family close on our first home in Elmont, NY. He discovered a major title issue that the bank almost missed, resolved it with the seller within 48 hours, and ensured our closing went without a hitch. His precision is exactly what you want when buying real estate.",
    author: "Marcus & Elena K.",
    caseType: "Residential Home Closing",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Understanding New York’s No-Fault Insurance Laws',
    excerpt: 'What does New York\'s "No-Fault" state status mean for your medical bills after an auto accident? Learn how to protect your rights, coordinate benefits, and file within key deadlines.',
    content: `New York is one of a handful of states that operates under a strictly mandated 'No-Fault' auto insurance system. This means that regardless of who caused your motor vehicle accident, your own auto insurance policy (specifically the Personal Injury Protection or PIP coverage) is legally responsible for paying your initial medical bills, up to 80% of lost earnings from work, and other reasonable, necessary expenses up to a standard limit of $50,000.

However, many injured New Yorkers misunderstand the critical limitations and extremely tight deadlines of this system. Here are the most vital details you must know:

1. The Strict 30-Day filing Deadline: You must submit a completed No-Fault Application (NF-2 Form) with your insurance carrier within 30 calendar days of the accident. Missing this window allows your insurer to completely deny your medical medical claims!
2. Choosing Your Medical Providers: You are entitled to see any doctor who accepts No-Fault insurance, but they must billing-comply with strict Workers' Compensation board fee schedules.
3. The "Serious Injury" Threshold: To jump outside the No-Fault system and file a direct personal injury lawsuit against the negligent driver for "pain and suffering," your injury must meet New York's legal definition of a "serious injury." This includes fractures, significant disfigurement, permanent loss of use of a body organ or member, or a non-permanent injury that prevents you from performing your usual daily activities for at least 90 of the 180 days immediately following the crash.

Navigating No-Fault claims while trying to recover from physical trauma is exhausting. At R.O. Smith Law Firm, we represent motor vehicle accident victims on a contingency fee basis—you pay nothing unless we recover capital for you. We file all required paperwork cleanly, manage medical collection disputes, and aggressively pursue the maximum recovery possible.`,
    category: 'Personal Injury',
    date: 'May 25, 2026',
    imageSeed: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80',
    author: 'Randy O. Smith, Esq.'
  },
  {
    id: 'blog-2',
    title: 'Crucial Steps to Take Immediately Following a NY Arrest',
    excerpt: 'If you or a loved one is arrested in New York City or Nassau County, knowing your immediate constitutional rights can drastically affect your criminal defense case.',
    content: `An arrest in New York is an incredibly stressful experience that can leave you feeling powerless and confused. However, what you say and do during the first few hours of police custody represents a crucial foundation for any future defense strategies. 

Here is a simple, direct survival guide on your constitutional rights and how to protect your future:

1. Exercise Your Right to Remain Silent: The Fifth Amendment protects you from self-incrimination. You are legally required to provide basic identifying info (such as your name, date of birth, and current address) during booking. Beyond that, do not talk, explain, or attempt to plead your innocence to detectives. Repeat this phrase: "I am exercising my right to remain silent, and I would like to speak to an attorney."
2. Never Consents to Searches: If officers ask to search your pockets, your vehicle, or your home, clearly state: "I do not consent to this search." This preserves your right to challenge the legality of any seized evidence later in suppression hearings.
3. Understand the Arraignment Window: In New York City and surrounding counties, anyone arrested must generally be brought before a criminal court judge for arraignment within 24 hours of arrest. At arraignment, you learn the official charges, and the judge decides whether to set bail or release you on your own recognizance (ROR).
4. Contact an Experienced Attorney Fast: Do not attempt to represent yourself at arraignment or let police convince you that a lawyer isn't necessary. A skilled trial attorney can argue successfully for your release without bail.

R.O. Smith Law Firm is available 24/7 to intervene on arrest matters. We can guide you through booking, stand beside you during immediate arraignment in NYC or Long Island, and aggressively represent your rights before police and prosecutors.`,
    category: 'Criminal Defense',
    date: 'April 18, 2026',
    imageSeed: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    author: 'Randy O. Smith, Esq.'
  },
  {
    id: 'blog-3',
    title: 'Residential Closings 101: What NY Buyers Must Know',
    excerpt: 'From title searches and contract reviews to closing disclosure statements, understand the essential legal checklist required for a smooth, dispute-free home purchase.',
    content: `Purchasing a home or commercial building is often the largest financial transaction of a person’s lifetime. In New York, the real estate buying process is unique and requires that both the buyer and the seller are represented by independent legal counsel. Under New York customs, standard real estate agents do not prepare or draft binding purchase contracts.

Here is the essential checklist of legal benchmarks that must occur before you can accept the keys to your new home:

1. The Contract of Sale: Once your offer is accepted, the seller's attorney prepares the initial Contract of Sale. Your attorney will review this contract in meticulous detail to verify contingencies (such as mortgage financing approval), clarify what appliances or property features are included, and negotiate the timeline for delivery.
2. The Escrow Deposit: Upon signing the contract, the buyer must provide a down payment (typically 10% of the purchase price), which is legally held in the seller’s attorney's specialized escrow account until closing day.
3. The Title Search and Survey: Before ownership can transfer, a title insurance company conducts a thorough title search of public deeds and county records. This search reveals if any mortgages, tax liens, municipal violations, or unpaid judgements exist on the property. Your attorney ensures these are fully paid off by the seller prior to or at closing.
4. The Closing Table: At the actual closing, several parties assemble (buyer, seller, attorneys, title closer, and bank representative). You will review and sign numerous financial and legal forms, including the deed, the mortgage agreement, and the Closing Disclosure (detailing exact loan costs).

Having an experienced, precise attorney manages these legal benchmarks prevents unexpected delays, avoids lost escrow deposits, and ensures your investment is legally protected. R.O. Smith Law Firm handles all components of residential and commercial transactions across the suburbs and boroughs of New York.`,
    category: 'Real Estate Law',
    date: 'March 12, 2026',
    imageSeed: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    author: 'Randy O. Smith, Esq.'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'nyc',
    name: 'New York City',
    coverage: 'Queens, Brooklyn, Manhattan, The Bronx, Staten Island',
    details: 'Full representation across all five boroughs. We defend cases in criminal and civil courts throughout NYC, regularly handling arraignments, injury litigations, and commercial real estate.'
  },
  {
    id: 'nassau',
    name: 'Nassau County',
    coverage: 'Hicksville (Office), Hempstead, Garden City, Mineola, Levittown',
    details: 'With our office centrally located in Hicksville, we provide aggressive local defense and represent clients in real estate closings and accident claims across Long Island.'
  },
  {
    id: 'suffolk',
    name: 'Suffolk County',
    coverage: 'Babylon, Huntington, Islip, Riverhead, Brookhaven',
    details: 'Extending representation further east into Suffolk. We travel to local courts, represent injury claims, and support real estate transactions in both eastern Suffolk and the Hamptons.'
  },
  {
    id: 'westchester',
    name: 'Westchester County',
    coverage: 'Yonkers, New Rochelle, White Plains, Mount Vernon',
    details: 'Serving communities north of New York City. We manage criminal, personal injury, and real estate litigation in local Westchester County courts.'
  },
  {
    id: 'queens',
    name: 'Queens',
    coverage: 'Jamaica, Flushing, Astoria, Long Island City, Forest Hills, Far Rockaway',
    details: 'With our office centrally located in Hicksville, we provide rapid, around-the-clock representation throughout Queens. We appear regularly in Queens County Criminal and Supreme Courts and handle injury and real estate matters across the entire borough.'
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    coverage: 'Downtown Brooklyn, Park Slope, Bay Ridge, Bushwick, Flatbush, Williamsburg',
    details: 'We represent clients throughout Kings County, appearing in Brooklyn criminal and civil courts. From accident claims to residential and commercial closings, our team delivers focused, aggressive advocacy across every Brooklyn neighborhood.'
  },
  {
    id: 'bronx',
    name: 'The Bronx',
    coverage: 'South Bronx, Riverdale, Fordham, Pelham Bay, Throgs Neck, Morris Park',
    details: 'Our attorneys handle criminal defense, personal injury, and real estate matters across the Bronx, with frequent appearances in Bronx County courthouses. We remain available 24/7 for arrests and time-sensitive emergencies.'
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    coverage: 'Midtown, Harlem, Lower Manhattan, Upper East Side, Washington Heights, Chelsea',
    details: 'We represent individuals and businesses throughout New York County. Whether you are facing charges in Manhattan Criminal Court or closing on a co-op or condo, we provide meticulous, high-level representation in the heart of the city.'
  },
  {
    id: 'rockland',
    name: 'Rockland County',
    coverage: 'New City, Spring Valley, Nyack, Suffern, Pearl River, Nanuet',
    details: 'Extending our representation across the Hudson into Rockland County, we assist clients with criminal defense, injury claims, and real estate transactions in local Rockland courts and communities.'
  },
  {
    id: 'orange',
    name: 'Orange County',
    coverage: 'Newburgh, Middletown, Goshen, Monroe, Port Jervis, Warwick',
    details: 'We serve clients throughout Orange County in the lower Hudson Valley, handling criminal, personal injury, and property matters with the same 24/7 availability and personal attention our clients rely on.'
  }
];
