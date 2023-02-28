import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "learning react is fun" },
  { id: "q2", author: "alex", text: "learning javascript is fun" },
  { id: "q3", author: "aboo", text: "learning java is fun" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const param = useParams();
  const quote = DUMMY_QUOTES.find((item) => item.id === param.quoteId);
  if (!quote) {
    return <p>no quote found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
