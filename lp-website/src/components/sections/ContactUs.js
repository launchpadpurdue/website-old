import { Box, Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";

function ContactUs() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
        <Grid
          container
          spacing={4}
          direction="column"
          marginLeft="1%"
          sx={{
            width: "50%",
          }}
        >
          <br></br>
          <h1>Contact Us</h1>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            margin="none"
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            margin="normal"
          />
          <TextField
            id="filled-basic"
            label="Subject"
            variant="filled"
            margin="normal"
          />
          <TextField
            id="filled-basic"
            label="Message"
            variant="filled"
            margin="normal"
            sx={{ height: "300" }}
          />
          <br></br>
          <Box component="span" justifyContent="right">
            <Button variant="contained">Submit</Button>
          </Box>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          sx={{
            width: "48%",
          }}
        >
          <h1>Frequently Asked Questions</h1>
          <h2>What is Finger Binary?</h2>
          <h3>
            Finger binary is a system for counting and displaying binary numbers
            on the fingers of either or both hands. Each finger represents one
            binary digit or bit. This allows counting from zero to 31 using the
            fingers of one hand, or 1023 using both: that is, up to 25−1 or
            210−1 respectively. Using all ten toes as well would theoretically
            increase this to 1,048,575, but it seems unlikely that many people
            have the dexterity for this.
          </h3>
          <h2>What is The Island of California?</h2>
          <h3>
            The Island of California (Spanish: Isla de California) refers to a
            long-held European misconception, dating from the 16th century, that
            the Baja California Peninsula was not part of mainland North America
            but rather a large island (spelled on early maps as "Cali Fornia")
            separated from the continent by a strait now known as the Gulf of
            California. One of the most famous cartographic errors in history,
            it was propagated on many maps during the 17th and 18th centuries,
            despite contradictory evidence from various explorers.
          </h3>
          <h2>Why is Yum Yum, Tennessee?</h2>
          <h3>
            The community derives its name from a 19th-century brand of candy.
            Local tradition states that the community was named when U.S.
            Senator Kenneth McKellar asked storekeeper John J. Garnett what to
            name the new post office and Garnett answered, "Just call it Yum
            Yum. There won't be another name like that."
          </h3>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ContactUs;
