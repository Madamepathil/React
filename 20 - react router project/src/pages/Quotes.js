import React, { useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "learning react is fun" },
  { id: "q2", author: "alex", text: "learning javascript is fun" },
  { id: "q3", author: "aboo", text: "learning java is fun" },
];

const Quotes = () => {
  const {
    sendRequest,
    statuss,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (statuss == " pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (statuss === "completed" && (!loadedQuotes || loadedQuotes.length == 0)) {
    return <p>no quotes found</p>;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default Quotes;
