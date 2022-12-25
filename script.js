//Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "मुझे तो उस समय की ही तस्वीर चाहिए जब मैं इतना खुश था कि समझ भी नहीं आता था मैं खुश हूँ।",
    person: "Hrithik Roshan",
  },
  {
    quote: "बहुत सुनहरी हैं तो क्या हुआ? जब तुम सफेद हो जाओगे तो समझ आओगे।",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "मेरा तो हमेशा एक ही मूवी है, जो मैं देखने जाता हूँ, उसमें से एक ही हिस्सा ही बदलता है। वो है... मेरा भविष्य।",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "तोहफ़े महसूस करने से नहीं होते हैं। तोहफ़े तो महसूस की बात नहीं है। तोहफ़े तो वो हैं जो हमारे साथ होते हैं।",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "मुझे तो उस समय की ही तस्वीर चाहिए जब मैं इतना खुश था कि समझ भी नहीं आता था मैं खुश हूँ।",
    person: "Hrithik Roshan",
  },
  {
    quote: "बहुत सुनहरी हैं तो क्या हुआ? जब तुम सफेद हो जाओगे तो समझ आओगे।",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "मेरा तो हमेशा एक ही मूवी है, जो मैं देखने जाता हूँ, उसमें से एक ही हिस्सा ही बदलता है। वो है... मेरा भविष्य।",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "तोहफ़े महसूस करने से नहीं होते हैं। तोहफ़े तो महसूस की बात नहीं है। तोहफ़े तो वो हैं जो हमारे साथ होते हैं।",
    person: "Hrithik Roshan",
  },
  {
    quote: "I've got that summertime, summertime sadness.",
    person: "Lana Del Rey",
  },
  {
    quote: "I'm feeling myself, no need for a prescription.",
    person: "Kid Cudi",
  },
  {
    quote: "We both know that it's not fashionable to love me.",
    person: "Lana Del Rey",
  },
  {
    quote:
      "The only thing I'm trying to do is run from the demons I can't outrun.",
    person: "Kid Cudi",
  },
  {
    quote: "I'm your little scarlet, starlet, singing in the garden.",
    person: "Lana Del Rey",
  },
  {
    quote: "I got 99 problems and they all bitches.",
    person: "Kid Cudi",
  },
  {
    quote: "I'm tired of feeling like I'm fucking crazy.",
    person: "Lana Del Rey",
  },
  {
    quote: "It's all good now, got my head held high.",
    person: "Kid Cudi",
  },
  {
    quote: "I'm no good at love, but you can't blame me for trying.",
    person: "Lana Del Rey",
  },
  {
    quote: "I don't need no loving, cause I already love myself.",
    person: "Kid Cudi",
  },
  {
    quote: "In the land of gods and monsters, I was an angel.",
    person: "Lana Del Rey",
  },
  {
    quote:
      "I'm just trying to get my money's worth, I'm trying to live life to the fullest.",
    person: "Kid Cudi",
  },
  {
    quote: "My baby drives a Chevrolet, baby how you feel today?",
    person: "Lana Del Rey",
  },
  {
    quote: "I'm living my life like it's golden.",
    person: "Kid Cudi",
  },
  {
    quote: "I'm your national anthem.",
    person: "Lana Del Rey",
  },
  {
    quote:
      "I'm just trying to find my way and make a little bit of money while I'm doing it.",
    person: "Kid Cudi",
  },
  {
    quote:
      "Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping,    As of someone gently rapping, rapping at my chamber door.",
    person: "Edgar Allan Poe",
  },

  {
    quote:
      "But the Raven, sitting lonely on the placid bust, spoke only That one word, as if his soul in that one word he did outpour.",
    person: "Edgar Allan Poe",
  },

  {
    quote:
      "Ah, distinctly I remember it was in the bleak December, And each separate dying ember wrought its ghost upon the floor.",
    person: "Edgar Allan Poe",
  },

  {
    quote:
      "Eagerly I wished the morrow;—vainly I had sought to borrow From my books surcease of sorrow—sorrow for the lost Lenore.",
    person: "Edgar Allan Poe",
  },

  {
    quote:
      "Presently my soul grew stronger; hesitating then no longer,'Sir,' said I, 'or Madam, truly your forgiveness I implore.",
    person: "Edgar Allan Poe",
  },
  {
    quote:
      "I am Dream, the eternal embodiment of dreams, the Lord of Stories. I am the beginning and the end, the one constant in a world of variables.",
    person: "Dream",
  },
  {
    quote:
      "There is a edge to everything, as sharp as a razor, and as dangerous as a precipice. Reality is a balanced blade.",
    person: "Dream",
  },
  {
    quote:
      "There are no happy endings. Endings are the saddest part, so just give me a happy middle and a very happy start.",
    person: "Dream",
  },
  {
    quote:
      "I am Dream. I am the personification of dreams. I am everything you've ever dreamed of, and everything you've never dreamed of.",
    person: "Dream",
  },
  {
    quote:
      "Reality is often disappointing. That is, after all, why so many people dream.",
    person: "Dream",
  },
  {
    quote:
      "I am the essence of the thing that people dream about when they dream about things that do not exist.",
    person: "Dream",
  },
  {
    quote:
      "I am the embodiment of all stories and all dreams. I am the personification of imagination. I am the Prince of Stories.",
    person: "Dream",
  },

  {
    quote:
      "I am the embodiment of all that is dreamlike, the manifestation of all that is intangible and ephemeral.",
    person: "Dream",
  },
  {
    quote:
      "I am the embodiment of all that is dreamed and all that is imagined. I am the Lord of Dreams, the Prince of Stories.",
    person: "Dream",
  },
  {
    quote:
      "I am the keeper of secrets and the teller of tales. I am the guardian of dreams, the Lord of Sleep.",
    person: "Dream",
  },
  {
    quote:
      "I am the embodiment of all that is dreamlike, the manifestation of all that is intangible and ephemeral.",
    person: "Dream",
  },
  {
    quote:
      "I am the embodiment of all that is dreamed and all that is imagined. I am the Lord of Dreams, the Prince of Stories.",
    person: "Dream",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  let wrapper = document.getElementById("wrapper");
  if (quotes[random].person === "Hrithik Roshan") {
    wrapper.style.background = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.desktopdress.com%2Fdesktopwallpapers%2Fbollywood%2Fhrithik-roshan-24a.jpg&f=1&nofb=1&ipt=c96d9921ac10544ab165cb73213528ed032fffc3ae9c2b503c669a0985aafd17&ipo=images') no-repeat center center/cover`;
  } else if (quotes[random].person === "Kid Cudi") {
    wrapper.style.background = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://wallpapercave.com/wp/wp5030252.jpg') no-repeat center center/cover`;
  } else if (quotes[random].person === "Lana Del Rey") {
    wrapper.style.background = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://wallpapercave.com/wp/wp11699947.jpg') no-repeat center center/cover`;
  } else if (quotes[random].person === "Edgar Allan Poe") {
    wrapper.style.background = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://wallpapercave.com/wp/wp2328070.jpg') no-repeat center center/cover`;
  } else if (quotes[random].person === "Dream") {
    wrapper.style.background = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://wallpapercave.com/wp/wp11391369.jpg') no-repeat center center/cover`;
  }

  quote.innerText = "'" + quotes[random].quote + "'";
  person.innerText = quotes[random].person;
});
