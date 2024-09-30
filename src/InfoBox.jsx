import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const Initial_Url =
    "https://images.unsplash.com/photo-1708552592233-5934a64eaec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const Hot_Url =
    "https://images.unsplash.com/photo-1429277005502-eed8e872fe52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Cold_Url =
    "https://plus.unsplash.com/premium_photo-1671004292035-1daa72d72fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const Rain_Url =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbndlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="Infobox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.Humidity > 75
                ? Rain_Url
                : info.Temp > 15
                ? Hot_Url
                : Cold_Url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.Humidity > 75 ? (
                <ThunderstormIcon />
              ) : info.Temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <SevereColdIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Weather = {info.Weather}</div>
              <div>Temperature = {info.Temp}&deg;C</div>
              <div>TempMax = {info.TempMax}&deg;C</div>
              <div>TempMin = {info.TempMin}&deg;C</div>
              <div>Humidity = {info.Humidity}</div>
              <div>The weather Feels Like = {info.FeelsLike}&deg;C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
