import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";
const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, statuss } = useHttp(addQuote);

  useEffect(() => {
    if (statuss == "completed") {
      history.push("/quotes");
    }
  }, [statuss]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={statuss === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
