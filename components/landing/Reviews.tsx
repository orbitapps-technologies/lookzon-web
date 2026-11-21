import { playStoreUrl } from "./data";
import { Reveal } from "./motion";
import { Arrow, Icon } from "./shared";
import { Spotlight, type Spot } from "./Spotlight";

/**
 * Real Google Play reviews. Wording is the reviewer's own — only spelling,
 * punctuation and capitalisation are tidied, and long ones are excerpted.
 * Very short or copy-pasted reviews are left out.
 */
const spotlight: Spot[] = [
  { name: "Aman Gupta", date: "15 Oct 2026", tone: "mint", helpful: 21, text: "This app helped me track my parents when I'm away. Great app!" },
  { name: "Izies", date: "5 Nov 2026", tone: "violet", helpful: 34, text: "A very useful and secure app for keeping my family connected and safe. I can easily check the real-time location of my child and other family members, which gives me peace of mind." },
  { name: "Charvi Sahasra", date: "15 Nov 2026", tone: "amber", helpful: 2, text: "I have been using the Lookzon app for 2 months and I am completely satisfied with it." },
  { name: "Mahendra Rawat", date: "15 Nov 2026", tone: "sky", text: "Its simple interface makes it easy to navigate, and the location-sharing feature helps family members stay connected." },
  { name: "Spider Motors", date: "17 Nov 2026", tone: "mint", text: "This app is very helpful, especially for Indian users." },
];

type Review = { name: string; date: string; text: string };

const rowA: Review[] = [
  { name: "Raunak Rajput", date: "16 Nov 2026", text: "Very helpful for keeping track of family members on the map." },
  { name: "Md Afsar", date: "15 Nov 2026", text: "Ye app bahut accha hai, kaam ka hai. I love it!" },
  { name: "Umang Kumar", date: "16 Nov 2026", text: "Very good app, super easy to track." },
  { name: "Kanhaiya Kumar", date: "15 Nov 2026", text: "A wonderful app for sharing your location with your family." },
];

const rowB: Review[] = [
  { name: "Juber Khan", date: "15 Nov 2026", text: "Works very well for location, and it is very safe. 10/10 🥳" },
  { name: "Ravendra Kumar", date: "15 Nov 2026", text: "A very useful app for my family's safety. I like this app the best." },
  { name: "Sabari", date: "16 Nov 2026", text: "Been using it for 5 days — very useful and worth it. Must try 👍" },
  { name: "Mukesh Tripathi", date: "16 Nov 2026", text: "Works very well for locating family." },
];

const tones = ["mint", "violet", "amber", "sky"];

function Card({ r, i }: { r: Review; i: number }) {
  const tone = tones[i % tones.length];
  return (
    <figure className={`rv ${tone}`}>
      <figcaption>
        <span className={`rv-av ${tone}`} aria-hidden="true">
          {r.name[0]}
        </span>
        <span className="rv-who">
          <b>{r.name}</b>
          <small>{r.date}</small>
        </span>
        <Icon name="play" className="rv-gp" />
      </figcaption>
      <blockquote>{r.text}</blockquote>
    </figure>
  );
}

function Row({ items, reverse }: { items: Review[]; reverse?: boolean }) {
  // each half holds the list twice so the strip is always wider than the screen
  const half = [...items, ...items];
  return (
    <div className={reverse ? "review-row reverse" : "review-row"}>
      {half.map((r, i) => (
        <Card r={r} i={i} key={`a-${i}`} />
      ))}
      <div className="review-dup" aria-hidden="true">
        {half.map((r, i) => (
          <Card r={r} i={i} key={`b-${i}`} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="shell">
        <Reveal className="section-heading">
          <div>
            <span className="kicker">Reviews from Google Play</span>
            <h2 id="reviews-title">
              Families, <em>in their own words.</em>
            </h2>
          </div>
          <p>
            Real reviews from parents and children using Lookzon across India — lightly edited for
            spelling.
            <br />
            <a className="text-link" href={playStoreUrl}>
              Read all reviews <Arrow />
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Spotlight items={spotlight} />
        </Reveal>
      </div>

      <div className="review-rows">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
