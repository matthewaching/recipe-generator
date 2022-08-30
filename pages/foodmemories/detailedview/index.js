import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../../src/firebase-config";
import { Box, Divider, Typography } from "@mui/material";

export default function DetailedView() {
  const router = useRouter();

  const [pageItem, setItem] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    return onValue(ref(db), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      setItem(data.dishes[router.query.dish]);
    });
  }, [router.isReady, router.query]);

  if (!pageItem) return;

  const wasCooked = (() => {
    if (pageItem.cooked === "Yes") {
      return "cooked.";
    } else {
      return "not cooked.";
    }
  })();

  return (
    <Box
      className="App"
      sx={{
        gap: "2rem",
      }}
    >
      <Typography variant="h2" sx={{ pt: "1rem" }}>
        {pageItem.name}
      </Typography>
      <Typography variant="subtitle1">
        Experienced on: {pageItem.date}
      </Typography>
      <Divider sx={{ alignSelf: "stretch" }} />
      <Typography variant="body1">Location: {pageItem.location}</Typography>
      <Typography variant="body1">City: {pageItem.city}</Typography>
      <Typography variant="body1">Mealtime: {pageItem.meal}</Typography>
      <Typography variant="body1">Type of Dish: {pageItem.type}</Typography>
      <Typography variant="body1">This dish was {wasCooked}</Typography>
    </Box>
  );
}
``;
