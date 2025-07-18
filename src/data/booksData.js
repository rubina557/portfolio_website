import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.png";
import book4 from "../assets/images/book4.png";
import book5 from "../assets/images/book5.png";
import book6 from "../assets/images/book6.png";
import book7 from "../assets/images/book7.png";
import book8 from "../assets/images/book8.png";
import book9 from "../assets/images/book9.jpg";
import book10 from "../assets/images/book10.png";
import book11 from "../assets/images/book11.png";
import book12 from "../assets/images/book12.png";
import book13 from "../assets/images/book13.png";
import book14 from "../assets/images/book14.png";
import book15 from "../assets/images/book15.png";
import book16 from "../assets/images/book16.png";
import book17 from "../assets/images/book17.png";
import book18 from "../assets/images/book18.png";
import book19 from "../assets/images/book19.png";
import book20 from "../assets/images/book20.png";

const bookImages = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
  book15,
  book16,
  book17,
  book18,
  book19,
  book20,
];

const rawBooksData = [
  {
    id: 1,
    title: "The Almanack of Naval Ravikant",
    link: "https://www.goodreads.com/book/show/54898389-the-almanack-of-naval-ravikant",
  },
  {
    id: 2,
    title: "Meditations",
    link: "https://www.goodreads.com/book/show/30659.Meditations",
  },
  {
    id: 3,
    title: "Man's Search For Meaning",
    link: "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    link: "https://www.goodreads.com/book/show/23692271-sapiens",
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    link: "https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer",
  },
  {
    id: 6,
    title: "Grokking Algorithms",
    link: "https://www.goodreads.com/book/show/22847284-grokking-algorithms",
  },
  {
    id: 7,
    title: "JavaScript: The Definitive Guide",
    link: "https://www.goodreads.com/book/show/54862419-javascript",
  },
  {
    id: 8,
    title: "Rework",
    link: "https://www.goodreads.com/book/show/6732019-rework",
  },
  {
    id: 9,
    title: "Principles: Life and Work",
    link: "https://www.goodreads.com/book/show/34536488-principles",
  },
  {
    id: 10,
    title: "Steal Like an Artist",
    link: "https://www.goodreads.com/book/show/11893247-steal-like-an-artist",
  },
  {
    id: 11,
    title: "Deep Work",
    link: "https://www.goodreads.com/book/show/25744928-deep-work",
  },
  {
    id: 12,
    title: "How to Stop Worrying and Start Living",
    link: "https://www.goodreads.com/book/show/45108.How_to_Stop_Worrying_and_Start_Living",
  },
  {
    id: 13,
    title: "The Psychology of Money",
    link: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
  },
  {
    id: 14,
    title: "The Obstacle Is the Way",
    link: "https://www.goodreads.com/book/show/18668669-the-obstacle-is-the-way",
  },
  {
    id: 15,
    title: "Ego Is the Enemy",
    link: "https://www.goodreads.com/book/show/27036528-ego-is-the-enemy",
  },
  {
    id: 16,
    title: "Atomic Habits",
    link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
  },
  {
    id: 17,
    title: "The Design of Everyday Things",
    link: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things",
  },
  {
    id: 18,
    title: "Thinking, Fast and Slow",
    link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
  },
  {
    id: 19,
    title: "Zero to One",
    link: "https://www.goodreads.com/book/show/18050143-zero-to-one",
  },
  {
    id: 20,
    title: "Don't Make Me Think, Revisited",
    link: "https://www.goodreads.com/book/show/18197267-don-t-make-me-think-revisited",
  },
  {
    id: 21,
    title: "The Lean Startup",
    link: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
  },
  {
    id: 22,
    title: "Hooked: How to Build Habit-Forming Products",
    link: "https://www.goodreads.com/book/show/22668720-hooked",
  },
  {
    id: 23,
    title: "Show Your Work!",
    link: "https://www.goodreads.com/book/show/18290401-show-your-work",
  },
  {
    id: 24,
    title: "Clean Code",
    link: "https://www.goodreads.com/book/show/3735293-clean-code",
  },
  {
    id: 25,
    title: "The Hard Thing About Hard Things",
    link: "https://www.goodreads.com/book/show/18176747-the-hard-thing-about-hard-things",
  },
  {
    id: 26,
    title: "Refactoring UI",
    link: "https://www.goodreads.com/book/show/42790933-refactoring-ui",
  },
  {
    id: 27,
    title: "The Four Agreements",
    link: "https://www.goodreads.com/book/show/6596.The_Four_Agreements",
  },
  {
    id: 28,
    title: "How to Win Friends and Influence People",
    link: "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
  },
];

export const booksData = rawBooksData.map((book, index) => {
  const imageSrc = index < 20 ? bookImages[index] : bookImages[index % 20];
  return { ...book, imageSrc };
});
