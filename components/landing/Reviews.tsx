import { playStoreUrl } from "./data";
import { Reveal } from "./motion";
import { Arrow } from "./shared";

/**
 * Real Google Play reviews. Wording is the reviewer's own — only spelling,
 * punctuation and capitalisation are tidied, and long ones are excerpted.
 * Very short or copy-pasted reviews are left out.
 */
type Review = { name: string; date: string; text: string };

const featured = {
  name: "Aman Gupta",
  date: "15 Oct 2026",
  text: "This app helped me track my parents when I'm away. Great app!",
  helpful: 21,
};

const rowA: Review[] = [
  { name: "Izies", date: "Nov 2026", text: "A very useful and secure app for keeping my family connected and safe. I can easily check the real-time location of my child." },
  { name: "Charvi Sahasra", date: "Nov 2026", text: "I have been using the Lookzon app for 2 months and I am completely satisfied with it." },
  { name: "Spider Motors", date: "Nov 2026", text: "This app is very helpful, especially for Indian users." },
  { name: "Raunak Rajput", date: "Nov 2026", text: "Very helpful for keeping track of family members on the map." },
  { name: "Md Afsar", date: "Nov 2026", text: "Ye app bahut accha hai, kaam ka hai. I love it!" },
  { name: "Umang Kumar", date: "Nov 2026", text: "Very good app, super easy to track." },
];

const rowB: Review[] = [
  { name: "Mahendra Rawat", date: "Nov 2026", text: "Its simple interface makes it easy to navigate, and location sharing helps family members stay connected." },
  { name: "Juber Khan", date: "Nov 2026", text: "Works very well for location, and it is very safe. 10/10 🥳" },
  { name: "Ravendra Kumar", date: "Nov 2026", text: "A very useful app for my family's safety. I like this app the best." },
  { name: "Kanhaiya Kumar", date: "Nov 2026", text: "A wonderful app for sharing your location with your family." },
  { name: "Sabari", date: "Nov 2026", text: "Been using it for 5 days — very useful and worth it. Must try 👍" },
  { name: "Mukesh Tripathi", date: "Nov 2026", text: "Works very well for locating family." },
];

const tones = ["mint", "violet", "amber", "sky"];

function Card({ r, i }: { r: Review; i: number }) {
  return (
    <figure className="rv">
      <blockquote>{r.text}</blockquote>
      <figcaption>
        <span className={`rv-av ${tones[i % tones.length]}`} aria-hidden="true">
          {r.name[0]}
        </span>
        <span className="rv-name">{r.name}</span>
        <span className="rv-date">{r.date}</span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse }: { items: Review[]; reverse?: boolean }) {
  return (
    <div className={reverse ? "review-row reverse" : "review-row"}>
      {items.map((r, i) => (
        <Card r={r} i={i} key={r.name} />
      ))}
      <div className="review-dup" aria-hidden="true">
        {items.map((r, i) => (
          <Card r={r} i={i} key={`dup-${r.name}`} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <Reveal className="shell reviews-head">
        <span className="kicker">Reviews from Google Play</span>
        <h2 id="reviews-title">
          Families, <em>in their own words.</em>
        </h2>
      </Reveal>

      <Reveal className="shell featured-quote" delay={0.1}>
        <figure>
          <blockquote>“{featured.text}”</blockquote>
          <figcaption>
            <span className="rv-av mint" aria-hidden="true">
              A
            </span>
            <span>
              <b>{featured.name}</b>
              <small>
                {featured.date} · {featured.helpful} people found this helpful
              </small>
            </span>
          </figcaption>
        </figure>
      </Reveal>

      <div className="review-rows">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <div className="shell reviews-foot">
        <span>Real reviews, lightly edited for spelling.</span>
        <a className="text-link" href={playStoreUrl}>
          Read all reviews on Google Play <Arrow />
        </a>
      </div>
    </section>
  );
}
