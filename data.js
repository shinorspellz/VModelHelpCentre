export const generalTopics = [
  { name: "Portfolio", link: "portfolio", icon: "" },
  { name: "Business Hub", link: "business_hub", icon: "" },
  { name: "Creation Tools", link: "creation_tools", icon: "" },
  { name: "Feed", link: "feed", icon: "" },
  { name: "User Options", link: "user_options", icon: "" },
  { name: "Discover", link: "discover", icon: "" },
  { name: "QR Code", link: "qr_code", icon: "" },
  { name: "Invite and Earn", link: "invite_and_learn", icon: "" },
  { name: "VModel Credits (VMC)", link: "vmodel_credits", icon: "" },
  { name: "Beta Dashboard", link: "beta_dashboard", icon: "" },
  { name: "VModel Credits (VMC)", link: "vmodel_credits", icon: "" },
];

export const subTopics = {
  portfolio: [
    { name: "Your VModel Portfolio", link: "vmodel_portfolio" },
    { name: "Portfolio image", link: "portfolio_image" },
    { name: "Bio", link: "bio" },
    { name: "Menu icon", link: "menu_icon" },
    { name: "More information ", link: "more_information" },
    { name: "Star sign ", link: "star_sign" },
    { name: "Reviews and Feedback", link: "review_and_feedback" },
    { name: "Location", link: "location" },

    // { name: "Portfolio galleries/grids", link: "portfolio_galleries_grids" },
    // { name: "Messages", link: "messages" },
    // { name: "My network", link: "my_network" },
    // { name: "Polaroid", link: "polaroid" },
    // { name: "Bookings", link: "bookings" },
    // { name: "Offerings", link: "offerings" },
  ],
  business_hub: [
    { name: " Unavailability ", link: "unavailability" },
    { name: "Bookings", link: "bookings" },
    { name: "Jobs", link: "jobs" },
    { name: "Services", link: "services" },
    { name: "Applications", link: "applications" },
    { name: "Reviews", link: "reviews" },
    { name: "Earnings", link: "earnings" },
    { name: "Coupons", link: "coupons" },
    { name: "Invoice", link: "invoice" },
    { name: "Analytics", link: "analytics" },
  ],

  creation_tools: [
    { name: "Creating a Post", link: "creating_a_post" },
    { name: "Creating a service", link: "creating_a service" },
    { name: "Creating a job", link: "creating_a_job" },
    { name: "Creating a coupon", link: "creating_a_coupon" },
    {
      name: "Printing Portfolios or polaroids",
      link: "printing_portfolios_or_polaroids",
    },
    {
      name: "Splitting images (Splitter)",
      link: "splitting_images_splitter",
    },
  ],
  feed: [
    { name: "Slides", link: "slides" },
    { name: "Post options", link: "post_options" },
  ],
  user_options: [
    { name: "Job notifications", link: "job_notifications" },
    { name: "Service notifications", link: "service_notifications" },
    { name: "Post notifications", link: "post_notifications" },
  ],
  discover: [
    { name: "Member search and hashtags", link: "member_search_and_hashtags" },
    { name: "Spotlight", link: "spotlight" },
    {
      name: "Most popular, Talent near you, Rising talent.",
      link: "most_popular_talent_near_you_rising_talent.",
    },
  ],

  qr_code: [
    { name: "Creating QR codes", link: "creating_qr_codes" },
    { name: "Adjusting QR code colors", link: "adjusting_qr_code_colors" },
  ],
  invite_and_learn: [
    {
      name: "Inviting contacts",
      link: "inviting_contacts",
    },
  ],
  vmodel_credits: [
    {
      name: "VMC and how they work",
      link: "vmc_and_how_they_work",
    },
    {
      name: "How to earn VMC",
      link: "how_to_earn_vmc",
    },
  ],
  beta_dashboard: [
    {
      name: "Announcements",
      link: "announcements",
    },
    {
      name: "Upcoming features",
      link: "upcoming_features",
    },
    {
      name: "Updates documentation",
      link: "updates_documentation",
    },
    {
      name: "App Documentation",
      link: "app_documentation",
    },
  ],
};

export const subTopicContent = {
  portfolio: {
    vmodel_portfolio: `
        <article>
        <h1> Your VModel Portfolio </h1>
        <p>A Portfolio on VModel is your digital showcase, a personalised space where you, as a creative
        individual, present your skills, work, and offerings to the vibrant VModel community. It goes
        beyond a traditional resume or profile by providing a dynamic and visually engaging
        representation of your creative identity.</p>
        <p>or</p>
        <p>Your VModel Portfolio is like your own online stage. It's where you, as a creative, get to show off
        your skills and work to the awesome VModel community. Think of it as more exciting than a
        regular resumje or profile. It's all about giving a cool and visual peek into your creative side.</p>
        <div></div>
        <ul>
        <li>Grids</li>
        <li>Polaroids</li>
        <li>My network</li>
        <li>Messages</li>
        
        </ul>

        </article>
    
    `,
    portfolio_image: `<article>
                       <h1>Portfolio Image</h1>
                       <div></div>
                       <p>Let's talk about VModel's portfolio image - it's not just a picture, it's like your creative calling card. It's the
                       first thing folks see when they check you out on VModel. So, think of it as your chance to say, "Hey, this
                       is me, and this is what I'm all about!" Pick an image that feels true to your style and personality,
                       something that speaks volumes without saying a word. Your VModel portfolio image isn't just a snapshot;
                       it's your story in pixels. Choose wisely, and let your creativity shine through!</p>
                       <div></div>

                      <div>
                      <ul><li><a href="#"><span>How to edit/change your profile image</span></a></li></ul>
                      </div>
                      <div></div>
                      </article>`,
    bio: `<article><h1>Bio</h1>
              <div>
            <p> Introduce yourself to the VModel community with a captivating bio! Share what makes you tick, your
              passions, and the story behind your creative journey. Remember, on VModel, longer bios are like your
              space to really express yourself. They let others get to know you better before they even think about
              booking or reaching out. So, spill the beans and let your creativity shine!

            </p>
            <div></div>
              <ul><li><a>How to edit/change your Bio</a></li></ul>
              </div>
              <div></div>
              </article>`,

    menu_icon: `<article>
    <h1>Menu icon</h1>
    <div>
    <p>
    Accessing your menu is straightforward: find the icon at the top right of your VModel Portfolio. A simple
    tap opens up various features for you to explore and enhance your VModel experience!
    </p>
    </div>
</article>`,
    more_information: `<article>
                        <h1>More Information icon</h1>
                        <div><p>Depending on your user type, the "More Information" icon reveals a variety of details about you. If you're
                        a model, it might include your body measurements; if you're a photographer, it could showcase your
                        preferred camera type. Additionally, there are tools like social media analytics, allowing you to inform
                        clients about your performance on other platforms. The section also covers your years of experience in
                        your specialisation, your personality and more.</p></div>
                        <ul>
                          <li><a href="#">How to edit more information</a></li>
                        </ul>
                      </article>`,
    star_sign: `<article>
                    <h1> Star sign</h1>
                    <div>
                      <p> Explore the Star Sign feature in your portfolio to showcase your zodiac sign and creative character to the
                      VModel community. It's not just a cosmic touch – it also helps in recommending individuals who vibe with
                      similar creative energies. Considering personalities do vary and matter, it can be a valuable factor when
                      making booking decisions.</p>
                    </div>
                    <div></div>
                    <ul><li><a href="#">How star signs work</a></li></ul>
                  </article>`,
    review_and_feedback: `<article>
                            <h1>Reviews and Feedback</h1>
                            <div>
                              <p>
                              On VModel, members can receive star ratings and reviews from other members or, in some cases, from
                              VModel itself. Keep reading to learn more about how reviews and ratings work.
                              </p>
                            </div>
                          </article>`,
    location: `<article>
                <h1>Location</h1>
                <div>
                  <p>The location displayed on your profile is the one you entered when creating your account or during your
                  last location edit. Keep in mind that this may or may not be your precise geolocation, depending on when
                  you grant VModel access to your location. This geolocation feature is handy for discovering useful
                  services nearby and receiving recommendations for talent based on your location.</p>
                </div>
              </article>`,
    // portfolio_galleries_grids: `<article><h1></h1></article>`,
    // messages: `<article><h1></h1></article>`,
    // my_network: `<article><h1></h1></article>`,
    // polaroid: `<article><h1></h1></article>`,
    // bookings: `<article><h1></h1></article>`,
    // offerings: `<article><h1></h1></article>`,
  },
};

export const egHTML = `<article>
<div></div>
<h1>This is just a dummy content</h1>
<div></div>
<span>
  <p>
    <span style="font-weight: 400;">To have a safe and successful selling experience on Vinted, simply follow these tips:</span><span style="font-weight: 400;"><br></span>
  </p>
  <div>1. Build<span style="font-weight: 400;"> a trusted</span><span style="font-weight: 400;"> profile, adjust your settings</span></div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Add your profile picture and </span><a href="https://www.vinted.co.uk/help/406?access_channel=hc_topics"><span style="font-weight: 400;">verify your account</span><span style="font-weight: 400;"> </span></a><span style="font-weight: 400;">to show </span><span style="font-weight: 400;">you’re a real person</span><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Write something about yourself in the "About you" section.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">If you wish to exclude certain carriers from your listings, </span><a href="https://www.vinted.co.uk/help/447?access_channel=hc_topics"><span style="font-weight: 400;">adjust your shipping options</span></a><span style="font-weight: 400;">.&nbsp;</span></li>
  </ul>
  <div>2. List your items</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Find out </span><a href="https://vinted.co.uk/catalog-rules"><span style="font-weight: 400;">what you can sell on Vinted</span></a><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Add a few nice, clear </span><a href="https://www.vinted.co.uk/help/48?access_channel=hc_topics"><span style="font-weight: 400;">photos of the item</span></a><span style="font-weight: 400;">. If it’s an item by a well-known brand, </span><span style="font-weight: 400;">add at least 5 pictures of it to show its authenticity.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Be specific and honest in the </span><a href="https://www.vinted.co.uk/help/49?access_channel=hc_topics"><span style="font-weight: 400;">item's description</span></a><span style="font-weight: 400;">, and select the correct </span><a href="https://www.vinted.co.uk/help/51?access_channel=hc_topics"><span style="font-weight: 400;">parcel size</span></a><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Remember that listing has no fees,&nbsp;and uploading more items can help you sell faster.</span></li>
  </ul>
  <div>
    <blockquote>
      <div>
        <div><strong>Note</strong></div>
        <div><span style="font-weight: 400;">Once you upload an item, it might get screened automatically to go through</span><strong> </strong><span style="font-weight: 400;">a standard check to make sure it follows our </span><a href="https://vinted.co.uk/catalog-rules">Catalogue Rules</a><span style="font-weight: 400;"> and guidelines for selling. Normally, it takes up to 1 minute but, in some cases, can take up to 1 or 2 days.</span></div>
      </div>
    </blockquote>
  </div>
  <div>3. While you wait for buyers</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Get noticed </span><span style="font-weight: 400;">—</span><span style="font-weight: 400;"> </span><a href="https://www.vinted.co.uk/help/340?access_channel=hc_topics"><span style="font-weight: 400;">Bump your items</span></a><span style="font-weight: 400;"> and </span><a href="https://www.vinted.co.uk/help/452?access_channel=hc_topics"><span style="font-weight: 400;">use Wardrobe Spotlight</span></a><span style="font-weight: 400;"> to boost your wardrobe’s visibility.</span></li>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/422?access_channel=hc_topics"><span style="font-weight: 400;">Set a discount</span></a><span style="font-weight: 400;"> for item bundles: this may encourage members to buy more items from you.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Once a buyer contacts you, use </span><a href="https://www.vinted.co.uk/help/258?access_channel=hc_topics"><strong>Make an offer</strong></a><span style="font-weight: 400;"> button to suggest a better price for a single item.&nbsp;</span></li>
  </ul>
  <div>
    <blockquote>
      <div>
        <div><strong>Important</strong></div>
        <div><span style="font-weight: 400;">Stay on Vinted throughout your whole selling process </span><span style="font-weight: 400;">—</span><span style="font-weight: 400;"> from communicating to receiving your payment. This way we will be able to </span><a href="https://www.vinted.co.uk/help/551?access_channel=hc_topics"><span style="font-weight: 400;">cover you</span></a><span style="font-weight: 400;"> in case something goes not the way you expected.&nbsp;</span></div>
      </div>
    </blockquote>
  </div>
  <div>4. It’s sold! Time to ship</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/65?access_channel=hc_topics"><span style="font-weight: 400;">Pack your item</span></a><span style="font-weight: 400;">. A personal touch is always nice.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Ship the item within 5</span><span style="font-weight: 400;"> working </span><span style="font-weight: 400;">days of the sale.&nbsp;</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Use the shipping option your buyer has chosen to avoid any issues with parcel tracking or even canceled orders.</span></li>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/100?access_channel=hc_topics"><span style="font-weight: 400;">Track your parcel</span></a><span style="font-weight: 400;"> on Vinted if you’d like to.</span></li>
  </ul>
  <div>5. Delivered! Get your earnings and leave feedback</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">As soon as the buyer presses </span><strong>Everything is OK</strong><span style="font-weight: 400;">, your payment will become available in your </span><a href="https://www.vinted.co.uk/help/266?access_channel=hc_topics"><span style="font-weight: 400;">Vinted balance</span></a><span style="font-weight: 400;">.</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Money withdrawals</span><span style="font-weight: 400;"> may take up to </span><span style="font-weight: 400;">5 working days</span><span style="font-weight: 400;"> to appear in your bank account.&nbsp;</span></li>
    <li style="font-weight: 400;" aria-level="1"><a href="https://www.vinted.co.uk/help/14?access_channel=hc_topics"><span style="font-weight: 400;">Leave feedback</span></a><span style="font-weight: 400;"> for your buyer and help to build trust within the community.</span></li>
  </ul>
  <div>Good to know</div>
  <ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">If you ever experience any improper behaviour, harassment or spam activities from other members, </span><a href="https://www.vinted.co.uk/help/288?access_channel=hc_topics"><span style="font-weight: 400;">report it</span></a><span style="font-weight: 400;"> so we can immediately put a stop to it.</span></li>
  </ul>
</span>
</article>
`;
