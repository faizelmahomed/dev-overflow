import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use React Query?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "10",
      name: "Hans Solo",
      picture: "https://example.com/johndoe.jpg",
    },
    upvotes: 4421,
    views: 52421,
    answers: [{ text: "Use the useQuery hook.", author: "Jane Doe" }],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to use Next.js App Router?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "10",
      name: "Eric Johnson",
      picture: "https://example.com/johndoe.jpg",
    },
    upvotes: 14120,
    views: 104120,
    answers: [{ text: "Use the useRouter hook.", author: "Jane Doe" }],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How to center a div?",
    tags: [
      { _id: "3", name: "css" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "10",
      name: "Dark Vader",
      picture: "https://example.com/johndoe.jpg",
    },
    upvotes: 944420,
    views: 1414240,
    answers: [{ text: "Use flexbox.", author: "Jane Doe" }],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to post! 🚀 Get answers to your questions in seconds with
          out artifical intelligence code reviewer or wait for a real human to get
          back to you!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
