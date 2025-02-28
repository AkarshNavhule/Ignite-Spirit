/****************************************************
 * 1. RESTORE CACHED DATA ON PAGE LOAD
 ****************************************************/
window.addEventListener("load", () => {
    const storedName = localStorage.getItem("userName");
    const storedGender = localStorage.getItem("userGender");
    const storedQuote = localStorage.getItem("lastQuote");
  
    // If we have a stored name, put it in the #name input
    if (storedName) {
      document.getElementById("name").value = storedName;
    }
  
    // If we have a stored gender, check the appropriate radio button
    if (storedGender) {
      document.querySelectorAll('input[name="gender"]').forEach((radio) => {
        if (radio.value === storedGender) {
          radio.checked = true;
        }
      });
    }
  
    // If we have a stored quote, display it in the #quote div
    if (storedQuote) {
      document.getElementById("quote").textContent = storedQuote;
    }
  });
  
  /****************************************************
   * 2. SAMPLE QUOTE ARRAYS
   ****************************************************/
  const quotesMale = [
    "{name}, you're the king of your world, sakkath style!",
    "{name}, machan, keep pushing hard – full on jhakaas!",
    "{name}, you're unstoppable, bhai – thumba power undi!",
    "{name}, shine bright like a diamond, yaar, bindaas!",
    "{name}, you'll conquer every challenge, full on swag!",
    "{name}, nee da boss! Stand tall and rock it!",
    "{name}, your energy is unmatched, macha – absolutely chusuko!",
    "{name}, keep slaying, bhai! Tere mein dum hai!",
    "{name}, be fearless, machan – full on kuthu vibe!",
    "{name}, dikhade apni asli shaan, full on boss style!",
    "Keep it real, {name} – full on attitude, machan!",
    "Charge ahead, {name}! Nee super hit movie madodu!",
    "{name}, power full on undi – believe and achieve, boss!",
    "Go for gold, {name}! Full on jhakaas, yaar!",
    "{name}, every setback is a setup for a comeback, macha!",
    "Rise up, {name} – thumba swag undu, keep moving!",
    "{name}, you're a legend in the making – full on desi style!",
    "Push your limits, {name}! Boss, macha, and inspire!",
    "Stand tall, {name} – your energy is pure fire, yaar!",
    "{name}, unleash your inner hero – full on dhamaal!",
    "Keep grinding, {name}! Machan, your time has come.",
    "Believe in yourself, {name} – full on bindaas swag!",
    "{name}, you're the real deal, boss – macha style!",
    "Get up and shine, {name}! Sakkath energy every day.",
    "{name}, your passion is lit – full on kuthu power!",
    "Rock on, {name}! Tere mein dum hai, machan!",
    "{name}, every challenge is your stage – full on desi swag!",
    "Keep moving forward, {name}! Boss vibes all the way.",
    "{name}, you're unstoppable – full on jhakaas style!",
    "Rise and conquer, {name}! Machan, you're pure dynamite.",
    "{name}, your drive is full on fire – keep it rocking!",
    "Go big, {name}! Thumba power undi, full on swag.",
    "{name}, never give up – macha, you’re a champion!",
    "Show the world what you've got, {name}! Full on attitude.",
    "Keep your head high, {name}! Boss, macha, always on.",
    "{name}, let nothing stop you – full on power, yaar!",
    "Unstoppable is your middle name, {name}! Machan style.",
    "{name}, dare to dream – full on jhakaas energy!",
    "Rise up, {name}! Tere mein dum hai, full on swag.",
    "{name}, be bold – macha, you're a powerhouse!",
    "Keep the fire burning, {name}! Boss vibes all day.",
    "{name}, you're destined for greatness – full on desi style!",
    "Chase your dreams, {name}! Machan, you're a star.",
    "{name}, let your passion lead – full on kuthu energy!",
    "Charge forward, {name}! Boss mode activated, macha!",
    "{name}, your spirit is unbreakable – full on jhakaas.",
    "Keep pushing, {name}! Tera josh kabhi kam nahi hoga.",
    "{name}, show 'em what you're made of – full on swag!",
    "Keep your hustle strong, {name} – macha, you're amazing!",
    "{name}, the world is yours – full on boss energy, yaar!",
    "Stand tall, {name}! Machan, your spirit is fire.",
    "{name}, never settle – full on desi attitude, boss style!",
    "Go for it, {name}! Macha, you're full on unstoppable.",
    "{name}, rise above it all – full on jhakaas and power.",
    "Keep slaying, {name}! Boss vibes, macha style.",
    "{name}, you define excellence – full on desi swag!",
    "Keep grinding, {name}! Tera dam bharpoor hai, yaar.",
    "{name}, your journey is epic – full on boss attitude.",
    "Stay strong, {name}! Machan, you are a warrior.",
    "{name}, let your dreams take flight – full on jhakaas energy!",
    "Push harder, {name}! Boss mode: activated, macha!",
    "{name}, every moment counts – full on desi style, yaar.",
    "Keep moving, {name}! Tere mein dum hai – boss vibes.",
    "{name}, your drive is legendary – full on jhakaas power.",
    "Step up, {name}! Machan, your time is now – full on swag.",
    "{name}, let your ambition soar – full on desi attitude!",
    "Keep shining, {name}! Boss style, macha, always on point.",
    "{name}, you’re the man – full on jhakaas energy, yaar!",
    "Rise and rule, {name}! Machan, your power is unmatched.",
    "{name}, you're a dynamo – full on desi swag and power.",
    "Keep chasing greatness, {name}! Boss vibes, macha style.",
    "{name}, ignite your inner fire – full on jhakaas passion!",
    "Charge ahead, {name}! Tere mein dum hai, full on power.",
    "{name}, be legendary – macha, full on desi attitude!",
    "Keep the momentum, {name}! Boss mode: on, yaar.",
    "{name}, shine bright – full on jhakaas style and power.",
    "Step into greatness, {name}! Macha, you are unstoppable.",
    "{name}, keep rising – full on desi swag and boss vibes.",
    "Unleash the beast, {name}! Machan, full on jhakaas energy.",
    "{name}, you’re built for success – full on boss mode, yaar!",
    "Keep conquering, {name}! Macha, your time is now – full on power.",
    "{name}, let your courage roar – full on desi attitude!",
    "Stay fierce, {name}! Boss style, macha – jhakaas always.",
    "{name}, every challenge is a win – full on swag and power.",
    "Keep grinding, {name}! Tere mein dam hai – full on boss energy.",
    "{name}, you're the future – machan, full on desi passion!",
    "Keep pushing boundaries, {name}! Full on jhakaas style, yaar.",
    "{name}, be the legend you are – boss mode, macha, always.",
    "Rise up, {name}! Full on desi swag and unstoppable power.",
    "{name}, never give up – have faith and hustle, yaar!",
    "{name}, keep the faith – full on energy and desi swag!",
    "{name}, stay positive – jhakaas spirit and never back down!",
    "{name}, have faith – full on boss mode, macha, always!",
    "{name}, never quit – your fire is unstoppable, yaar!",
    "{name}, keep pushing – faith and hustle make you a champion!",
    "{name}, stay energetic – full on jhakaas and positive vibes!",
    "{name}, never give in – have faith and rock on, boss!",
    "{name}, keep the momentum – full on desi energy and faith!",
    "{name}, your spirit is invincible – never give up, yaar!",
    "{name}, have faith in yourself – full on positive vibes, macha!"
  ];
  
  // 100 motivational quotes for females (with regional slangs, swag, and faith/never-give-up energy)
  const quotesFemale = [
    "{name}, you're a queen, full on jhakaas style!",
    "{name}, machi, shine bright like a star – boss lady!",
    "{name}, you're unstoppable, yaar – full on desi swag!",
    "{name}, nee da superwoman! Own your power, boss.",
    "{name}, every challenge is your runway – full on kuthu vibes!",
    "{name}, shine with elegance and power – bindaas style!",
    "{name}, you're a force of nature – full on jhakaas, machi!",
    "Slay the day, {name}! Tere mein dum hai, boss lady!",
    "{name}, be fearless – full on desi swag and power!",
    "Rise and shine, {name}! Machan, you're a true queen.",
    "{name}, your spirit is brilliant – full on jhakaas energy!",
    "Own your day, {name}! Boss vibes, machi style.",
    "{name}, keep rocking – full on desi attitude and charm!",
    "Step into your power, {name}! Tere mein dum hai, yaar!",
    "{name}, you're a dazzling star – full on boss lady energy!",
    "Keep shining, {name}! Machi, you're unstoppable.",
    "{name}, let your dreams soar – full on jhakaas style!",
    "Rise, {name}! Boss lady mode on – full on desi swag.",
    "{name}, you redefine strength – full on bindaas attitude!",
    "Embrace your power, {name}! Machan, you're a legend.",
    "{name}, slay every moment – full on desi style and grace.",
    "Keep it real, {name}! Boss lady vibes, machi, always.",
    "{name}, your energy is mesmerizing – full on jhakaas power!",
    "Rule your world, {name}! Tere mein dum hai – boss style.",
    "{name}, you're a wonder – full on desi swag and elegance.",
    "Keep hustling, {name}! Machan, you're pure magic.",
    "{name}, let your spirit fly – full on jhakaas and chic!",
    "Stand tall, {name}! Boss lady energy, machi style.",
    "{name}, you're a gem – full on desi attitude and charm.",
    "Keep shining, {name}! Tere mein dum hai – full on boss vibes.",
    "{name}, be bold and brilliant – full on jhakaas spirit!",
    "Rise up, {name}! Machan, your power is unmatched.",
    "{name}, own your journey – full on desi swag and grace!",
    "Unleash your magic, {name}! Boss lady mode: activated.",
    "{name}, you're the star of your story – full on jhakaas style!",
    "Keep rocking, {name}! Machi, you light up the world.",
    "{name}, your charm is unstoppable – full on desi power!",
    "Shine on, {name}! Tere mein dum hai – boss vibes all day.",
    "{name}, let your heart lead – full on jhakaas attitude!",
    "Step into your greatness, {name}! Machan, you're phenomenal.",
    "{name}, your resilience is inspiring – full on desi swag!",
    "Keep your spirit high, {name}! Boss lady vibes, machi.",
    "{name}, you are pure magic – full on jhakaas and fierce!",
    "Embrace every moment, {name}! Tere mein dum hai, yaar!",
    "{name}, you're the queen of your journey – full on desi style.",
    "Keep soaring, {name}! Machan, you're a true boss lady.",
    "{name}, let your dreams shine – full on jhakaas power!",
    "Rise and rule, {name}! Boss lady mode: full on swag.",
    "{name}, your energy is divine – full on desi charm!",
    "Keep shining, {name}! Machi, you're an inspiration.",
    "{name}, be fearless – full on jhakaas and elegant!",
    "Own your destiny, {name}! Tere mein dum hai – boss lady.",
    "{name}, you're a trailblazer – full on desi swag and grace.",
    "Keep blazing, {name}! Machan, your light is unstoppable.",
    "{name}, shine with confidence – full on jhakaas vibes!",
    "Step up, {name}! Boss lady energy, machi, always on.",
    "{name}, you are pure strength – full on desi elegance!",
    "Rise up, {name}! Tere mein dum hai – full on boss mode.",
    "{name}, let your passion guide you – full on jhakaas style!",
    "Keep moving, {name}! Machan, you're a queen in action.",
    "{name}, your spirit is unbreakable – full on desi swag!",
    "Stay brilliant, {name}! Boss lady vibes, machi, forever.",
    "{name}, you're destined for greatness – full on jhakaas power.",
    "Keep shining, {name}! Tere mein dum hai – own it, boss lady.",
    "{name}, be bold – full on desi attitude and charm!",
    "Rise and conquer, {name}! Machan, your energy is magic.",
    "{name}, you're a superstar – full on jhakaas style, yaar!",
    "Keep pushing, {name}! Boss lady mode on – full on swag.",
    "{name}, your dreams are limitless – full on desi power.",
    "Step into your glory, {name}! Machi, you're unstoppable.",
    "{name}, let your light shine – full on jhakaas energy!",
    "Own the day, {name}! Tere mein dum hai – boss vibes.",
    "{name}, you're a marvel – full on desi style and grace.",
    "Keep hustling, {name}! Machan, your fire is unmatched.",
    "{name}, be fierce – full on jhakaas and chic!",
    "Rise and inspire, {name}! Boss lady mode: full on swag.",
    "{name}, your power is legendary – full on desi magic!",
    "Keep sparkling, {name}! Machi, you are a true star.",
    "{name}, shine with all your might – full on jhakaas energy!",
    "Step up, {name}! Tere mein dum hai – own it, boss lady.",
    "{name}, you're the epitome of grace – full on desi swag!",
    "Keep moving forward, {name}! Machan, you're fabulous.",
    "{name}, your journey is epic – full on jhakaas style!",
    "Rise and rule, {name}! Boss lady vibes, machi, always.",
    "{name}, you define strength – full on desi elegance!",
    "Keep conquering, {name}! Tere mein dum hai – full on swag.",
    "{name}, let your dreams take flight – full on jhakaas power!",
    "Step into your destiny, {name}! Machan, you're unstoppable.",
    "{name}, shine on, queen – full on desi style and grace!",
    "Keep the spark alive, {name}! Boss lady mode: full on magic.",
    "{name}, you are a beacon of hope – full on jhakaas vibes!",
    "Rise, {name}! Tere mein dum hai – own your power, machi.",
    "{name}, be the change – full on desi swag and brilliance!",
    "Keep glowing, {name}! Machan, you're an inspiration.",
    "{name}, your spirit is radiant – full on jhakaas energy!",
    "Embrace your power, {name}! Boss lady vibes, machi, forever.",
    "{name}, you're a shining star – full on desi elegance!",
    "Keep breaking barriers, {name}! Tere mein dum hai – full on swag.",
    "{name}, let your passion soar – full on jhakaas style!",
    "Rise up, {name}! Boss lady mode: full on desi power and grace."
  ];
  
  
  /****************************************************
   * 3. START BUTTON - SAVE NAME & GENDER
   ****************************************************/
  document.getElementById("generate-btn").addEventListener("click", () => {
    const nameVal = document.getElementById("name").value.trim();
    let genderVal = "";
  
    // Find which radio is checked
    document.querySelectorAll('input[name="gender"]').forEach((radio) => {
      if (radio.checked) {
        genderVal = radio.value;
      }
    });
  
    // Store the user's name & gender in localStorage
    localStorage.setItem("userName", nameVal);
    localStorage.setItem("userGender", genderVal);
  
    // Optionally, you could clear any existing quote here if desired:
    // localStorage.removeItem("lastQuote");
    // document.getElementById("quote").textContent = "Your quote will appear here...";
  });
  
  /****************************************************
   * 4. GENERATE BUTTON - DISPLAY NEW QUOTE
   ****************************************************/
  document.getElementById("generate-btn").addEventListener("click", () => {
    // Retrieve stored name/gender or fallback
    const storedName = localStorage.getItem("userName") || "Friend";
    const storedGender = localStorage.getItem("userGender") || "";

    let quote = "";
    if (storedGender === "male") {
        const randomIndex = Math.floor(Math.random() * quotesMale.length);
        quote = quotesMale[randomIndex];
    } else if (storedGender === "female") {
        const randomIndex = Math.floor(Math.random() * quotesFemale.length);
        quote = quotesFemale[randomIndex];
    } else {
        quote = "Stay motivated, {name}!";
    }

    // Replace {name} placeholder with the user's name
    quote = quote.replace("{name}", storedName);

    // Get the quote element
    const quoteEl = document.getElementById("quote");

    // Remove previous animation class if present
    quoteEl.classList.remove("animate-quote");

    // Force reflow to reset animation
    void quoteEl.offsetWidth;

    // Add the animation class again to trigger animation
    quoteEl.classList.add("animate-quote");

    // Display the quote
    quoteEl.textContent = quote;

    // Cache the last generated quote
    localStorage.setItem("lastQuote", quote);
});

  