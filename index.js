import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var headlines = [
  `'Be Thankful!' Trump Berates Zelensky in Insane Oval Office Meltdown`,
  `Crossing the uncanny valley of conversational voice`,
  `Euclid finds complete Einstein Ring in NGC galaxy`
];
var authors = [
  "Prem Thakker",
  "Brendan Iribe, Ankit Kumar, and the Sesame team",
  "Knud Jahnke",
];
var genres = [
  "US News",
  "General",
  "Science",
];  
var subtitles = [
  `The US president and his vice-president tag-teamed to attack, rebuke, and mock Ukraine's president, on live television, before asking him to leave the White House and threatening to cut off aid.`,
  `How do we know when someone truly understands us? It is rarely just our words—it is in the subtleties of voice: the rising excitement, the thoughtful pause, the warm reassurance.`,
  `Euclid, a European Space Agency satellite, has discovered a complete Einstein Ring in the NGC 7321 galaxy, a rare astronomical event that occurs when a galaxy is perfectly aligned behind another galaxy.`,

];
var blogTexts = [
  `“President @realDonaldTrump invited me to the White House today for the signing of the critical minerals deal between the U.S. and Ukraine. I am honored to attend,” Senator Lindsey Graham tweeted Friday morning. “President Trump, the deal maker and peace maker, is on display.”

Less than two hours later, Ukrainian President Volodymyr Zelensky was kicked out of the White House, no deal was signed, and the White House pushed out social media clips boasting about it all.

Has there ever been an Oval Office meeting between a US president and a visiting foreign leader like the one today?

President Donald Trump and Vice President JD Vance welcomed Zelensky to the Oval Office as the nations were set to sign an agreement granting American access to mineral rights in Ukraine. Things quickly derailed, however, after Vance and Zelensky escalated a ceremonial event into outright pandemonium in front of the press.

It began as Trump said the trio would take one more question. But then Vance chimed in.

The VP complained that previous administrations had “talked tough” on Putin, that the US tried “the pathway of Joe Biden of thumping our chest,” and that diplomacy would be the pathway to peace.

Zelensky asked Vance what kind of diplomacy he was talking about, given, for example, Russia’s 2014 invasion, or its violation of previous ceasefire agreements. Vance then unloaded, without addressing Zelensky’s concerns.

“Mr. President, with respect, I think it's disrespectful for you to come into the Oval Office and try to litigate this in front of the American media,” Vance started.

“Have you ever been to Ukraine, that you say what problems we have?” Zelensky questioned, asking him to “come once.”

“I’ve actually - I've actually watched and seen the stories…” Vance began. Just have a look at the video yourself:

The chaos continued, as Trump and Vance pounced on Zelensky, saying he doesn’t “have the cards,” and accused him of campaigning for Kamala Harris [false] and never thanking the US for its massive support [false].

Despite all the tough talk, Trump would never speak to a rival nation the way he spoke to Zelensky, a US ally, here. The public castigation, for instance, paled in comparison to Trump’s appearance alongside Vladimir Putin in 2018 at the Helsinki Summit, where the US president deferred to Putin on whether Russia attempted to influence US elections.

Trump concluded the mayhem with a post to Truth Social:

“We had a very meaningful meeting in the White House today. Much was learned that could never be understood without conversation under such fire and pressure. It’s amazing what comes out through emotion, and I have determined that President Zelenskyy is not ready for Peace if America is involved, because he feels our involvement gives him a big advantage in negotiations. I don’t want advantage, I want PEACE. He disrespected the United States of America in its cherished Oval Office. He can come back when he is ready for Peace.”

After the post, Secretary of State Marco Rubio and national security adviser Michael Waltz then reportedly informed Zelensky that he was being asked to leave and that negotiations were done for the day.

After the chaos, the Washington Post’s John Hudson, citing a senior administration official, reported: “the Trump administration is considering ending all ongoing shipments of military aid to Ukraine in response to Zelensky’s remarks in the Oval Office on Friday and his perceived intransigence in the peace process.”

Zelensky, for his part, kept his post-White House visit comments short. “Thank you America, thank you for your support, thank you for this visit. Thank you @POTUS, Congress, and the American people,” he tweeted. “Ukraine needs just and lasting peace, and we are working exactly for that.”

Russian officials cheered on the mayhem.

“The insolent pig finally got a proper slap down in the Oval Office. And @realDonaldTrump is right: The Kiev regime is ‘gambling with WWIII,’” tweeted Deputy Chair of Russia’s Security Council and former President Dmitry Medvedev.

Sen. Graham – who just before the meeting was hailing Trump as a “deal maker and peace maker,” and taking photos with Zelensky and Democratic Sens. Amy Klobuchar and Chris Coons captioned “We stand with Ukraine” – said he has “NEVER been more proud of the President,” and boasted that “the deal is off.” Graham retweeted White House press accounts boosting his comments.

The cherry on top to the chaos was Voice of America media personality Brian Glenn (the boyfriend of Georgia Rep. Marjorie Taylor Greene, or as he self-proclaims, the other half of “MAGA America’s favorite couple”) asking Zelensky why he doesn’t wear a suit. Several other visitors have arrived suitless for official White House meetings, including, famously, the US-backed Afghan mujahideen for their Oval Office picture with Ronald Reagan in 1983, and, more infamously and recently, shadow president Elon Musk at the Trump Cabinet meeting on Wednesday.

[This post belogns to https://www.zeteo.com]`,
`Voice is our most intimate medium as humans, carrying layers of meaning through countless variations in tone, pitch, rhythm, and emotion.

Today’s digital voice assistants lack essential qualities to make them truly useful. Without unlocking the full power of voice, they cannot hope to effectively collaborate with us. A personal assistant who speaks only in a neutral tone has difficulty finding a permanent place in our daily lives after the initial novelty wears off.

Over time this emotional flatness becomes more than just disappointing—it becomes exhausting.

Achieving voice presence:
At Sesame, our goal is to achieve “voice presence”—the magical quality that makes spoken interactions feel real, understood, and valued. We are creating conversational partners that do not just process requests; they engage in genuine dialogue that builds confidence and trust over time. In doing so, we hope to realize the untapped potential of voice as the ultimate interface for instruction and understanding.

Key components:
Emotional intelligence: reading and responding to emotional contexts.
Conversational dynamics: natural timing, pauses, interruptions and emphasis.
Contextual awareness: adjusting tone and style to match the situation.
Consistent personality: maintaining a coherent, reliable and appropriate presence.

We’re not there yet:
Building a digital companion with voice presence is not easy, but we are making steady progress on multiple fronts, including personality, memory, expressivity and appropriateness. This demo is a showcase of some of our work in conversational speech generation. The companions shown here have been optimized for friendliness and expressivity to illustrate the potential of our approach.

[This post belongs to https://www.sesame.com]`,
`Gravitational lenses are rare in the sky – galaxies bending the light-paths of light from other galaxies behind them to form distorted or even multiple images. Even rarer is a perfect alignment of the two galaxies with us, the obervers, with the light being bent into a so-called Einstein Ring. And the rarest case was now observed by Euclid: this happening in an extremely nearby NGC galaxy.

Gravitational lensing is the effect of mass bending space and light following along this bent space. If the masses are high enough, as for a galaxy, then this can lead to an image of an object behind a galaxy to be distorted or even split up into several images: a strong gravitational lens. If vary rare cases – for a perfect alignment of source, galaxy, and observer on a line – the image gets bent into a ring. These so-called Einstein Rings have been found before, but in all configurations only approximately 1000 gravitational galaxy–galaxy lenses are currently known across the sky.

The phenomenon of strong gravitational lensing has been first discussed already in the late 1700s, in the case of Newtonian gravity. But only Albert Einstein was able to calculate the correct angle of light-bending, using his General Theory of Relativity in 1915. In the years after, expeditions to properly measure the lensing effect for the mass of the sun during a solar eclipse then actually confirmed General Relativity based on the lensing effect. This was for the sun.

Coming back much more massive galaxies, the realisation that they could act as lenses – and image sources in the background – took until 1937 when Fritz Zwicky used the new knowledge about galaxies being really distant collections of stars like our own Milky Way. And in the 1960s it was realized that quasars, very bright, point-like active centers of galaxies, would make the perfect sources for lensing. And so it took until 1979, when the first “twin” quasar was found and identified as two images of the same background source – the first observed gravitational lens.

To dive deeper, the chance of a galaxy – or galaxy cluster – acting as a gravitational lens is highest for some intermediate distance from us observers, and for the source galaxy to be quite a bit further away. Most gravitational lens galaxies are therefore several billions of light-years away. So it’s extremely rare for lensing galaxies to be very close to us. A galaxy has to be very massive to have enough impact to create multiple lensed images, so what we would call “in our neighbourhood”, within a distance of 700 million light years, only 2400 galaxies exist that would be massive enough. Then, given the background distribution of available sources, of these nearby galaxies only 1 in 2000 has a statistical chance of actually creating a bright lensed system, with an increasing chance for fainter and fainter sources being lensed.

So when ESA and Euclid Consortium scientists looked through the first science data, it did not come as a surprise that they spotted a first first gravitational lens – overall Euclid is expected to 100-fold the number of known lenses and find 100,000 during its 6-year mission. However it is beyond astonishing that the first lens is very nearby, actually located in an NGC galaxy – from the New General Catalogue of nearby galaxies – and that it shows a perfect Einstein Ring of the source galaxy. The lens galaxy is NGC 6505, located at redshift z=0.042, corresponding to a distance of only 590 million light-years. Only five similarly nearby other gravitational lenses are known so far, but none in such a prominent galaxy. NGC 6505 has been known since the year 1884, but no-one up to now was able to take an image as clear as Euclid has done. Follow-up spectroscopy with the Keck telescope on Hawaii and its KCWI integral-field spectrograph showed the source galaxy to lie at redshift z=0.406, or about 4.5 billion light-years distance from us.

While the image of NGC 6505 itself is already stunning, with many other galaxies around it and thousand’s more in the background, the surprise came with the first look into its very center: Is that a ring? And why did it look so peculiar? Galaxies can in fact have rings of stars near their centers that can form from motions of gas and stars – but normally only for rotating spiral galaxies, when at a certain distance from the center no net forces exist to move material further in or out. But this is not expected for a spheroidal galaxy as NGC 6505. With the peculiar structure of the right it was quickly clear that this must be the case of strong gravitational lensing, and the ring was actually not part of NGC 6505 but the distorted image of a background galaxy. A more close inspection and modelling extracted an almost too-good-to-be true Einstein Ring.

But this is understandable: never before has an Einstein Ring be found in an NGC galaxy, and never has such an exquisite telescope looked at this galaxy so long. Euclid visited NGC 6505 and the region around it in its initial “Performance Verification” phase in late 2023. Euclid observed this region multiple times, with a total integration time of more than 11 hours with VIS and almost 2 hours with NISP, about 50x longer than most fields in Euclid ongoing Wide Survey. So this image and the whole field have an exceptional signal, low noise, and this allowed an unprecendented modelling of the lens system.

The science analysis was able to extract information about the amount of dark matter in the center of NGC 6505 (11.1% of the total central mass), as well as make very precise statements about the composition of low- and high-mass stars in the central region. Simulation show that the chance for finding a lens at this distance with the brighness that is seen in NGC 6505 was computed 1 in 2000 – and between 4 and 20 further nearby lenses are predicted to still be found in Euclid’s Wide Survey over the next years. However, the fact that this lens in NGC 6505 indeed exists and was observed by Euclid and recognised so quickly, was sheer coincidence – and attention to the data.

More lenses at larger distances are currently being searched for and first results for Euclid’s Q1 Data Release will be presented on the 19th of March 2025.

[This post belongs to https://www.euclid-ec.org]`,

];

const app = express();
const port = 10000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs", { headlines: headlines, authors: authors, genres: genres, subtitles: subtitles, blogTexts: blogTexts });
  console.log("Home page rendered");
});

app.get("/add", (req, res) => {
  res.render("addBlog.ejs");
  console.log("Add page rendered");
});

app.get("/blog", (req, res) => {
  const blogId = parseInt(req.query.id, 10);
  if (blogId !== undefined && blogId < headlines.length) {
    const blog = {
      headline: headlines[blogId],
      genre: genres[blogId],
      author: authors[blogId],
      subtitle: subtitles[blogId],
      blogText: blogTexts[blogId]
    };
    var data = {
      headlines: headlines,
      subtitles: subtitles,
    };
    
    console.log("Blog data:", blog); // Log the blog object
    res.render("blog.ejs", { blog: blog, blogId: blogId, data: data });
    console.log("Blog page rendered for blog ID:", blogId);
  } else {
    res.status(404).send("Blog not found");
  }
});

app.post("/", (req, res) => {
  const newBlog = req.body;
  console.log('Received new blog data:');
  headlines.push(newBlog.headline);
  authors.push(newBlog.author);
  if (newBlog.genre) genres.push(newBlog.genre);
  else genres.push("General");
  subtitles.push(newBlog.subtitle);
  blogTexts.push(newBlog.blogText);

  // Redirect to the home page
  res.redirect("/");
});

app.delete("/delete", (req, res) => {
  const blogId = req.query.id;
  if (blogId !== undefined && blogId < headlines.length) {
    headlines.splice(blogId, 1);
    authors.splice(blogId, 1);
    genres.splice(blogId, 1);
    subtitles.splice(blogId, 1);
    blogTexts.splice(blogId, 1);
    res.status(200).send("Blog deleted successfully");
  } else {
    res.status(404).send("Blog not found");
  }
});

app.listen(port, () => { 
  console.log(`Server is listening on port ${port}`);
});
