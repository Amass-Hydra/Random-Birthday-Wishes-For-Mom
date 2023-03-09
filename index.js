// Array of birthday wishes
const birthdayWishes = [
    "Happy Birthday Mom! Wishing you all the love, joy, and happiness you deserve on your special day!",
    "Happy Birthday to the most amazing Mom in the world! May your day be filled with love, laughter, and lots of cake!",
    "Wishing you a very Happy Birthday, Mom! Thank you for always being there for me and for being the best mom ever!",
    "Happy Birthday to the strongest, most beautiful, and most inspiring woman I know. Love you, Mom!",
    "May your birthday be as wonderful as you are, Mom! Thank you for all the love and support you've given me over the years.",
    "Happy Birthday to the most caring and loving Mom in the universe! You mean the world to me.",
    "On your special day, I want to thank you for everything you've done for me and wish you a very Happy Birthday, Mom!",
    "Sending you lots of love and warm wishes on your birthday, Mom! You are the best!",
  ];
  
  // Generate a random birthday wish
  const randomIndex = Math.floor(Math.random() * birthdayWishes.length);
  const randomWish = birthdayWishes[randomIndex];
  
  // Output the random birthday wish
  console.log(randomWish);
  