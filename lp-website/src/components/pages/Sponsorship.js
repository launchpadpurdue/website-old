import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

function Sponsorship() {
  return (
    <div>
      <Box
        sx={{ width: "100%", justifyContent: "center" }}
        marginLeft={{ xs: "2%", sm: "1% " }}
      >
        <Stack spacing={5}>
          <h2 textAlign="left">Big Thanks to our Sponsors!</h2>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-around"
            alignItems={"center"}
          >
            <img
              src="https://vignette.wikia.nocookie.net/fictionalcompanies/images/b/b3/DunderMifflinLogo.jpg/revision/latest?cb=20130917132424"
              alt="Dunder Mifflin Paper Company"
              width="150"
              height="150"
            ></img>

            <img
              src="https://th.bing.com/th/id/OIP.q8aYTsXwemGeeuHCkcHsiQHaJ4?pid=ImgDet&rs=1"
              alt="UAC"
              width="150"
              height="150"
            ></img>
            <img
              src="https://i2-prod.insider.co.uk/incoming/article10210901.ece/ALTERNATES/s615b/da43aefb3619eea87136be6902b0c87e.jpg"
              alt="Wonka Factory"
              width="150"
              height="150"
            ></img>
          </Stack>

          <h2>Want to Sponsor Us?</h2>

          <h3 justifyContent="left">
            <Box
              width={"60%"}
              sx={{
                width: "75%",
              }}
              marginLeft="1.5%"
            >
              Toe wrestling is similar to arm wrestling. To play, players must
              take off their shoes and socks as the game is played with bare
              feet. Players must link toes and each player's foot must touch
              flat on the other person's 2 out of 3 rounds. Rounds are played
              first with the right foot, then left, and right again if necessary
              [please replace with actual content].
            </Box>
          </h3>
        </Stack>
      </Box>
    </div>
  );
}

export default Sponsorship;
