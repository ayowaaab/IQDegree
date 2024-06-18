import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Course } from "../../shared/types";
import Badge from "./Badge";

interface Props extends Course {}

const CardCourse = ({ title, description, subject, grade_level,_id }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt={`Course-img`}
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography className="text-nowrap" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {grade_level}
        </Typography>

        <Badge text={subject} color="#0097EC" />

        <Typography className="line-clamp-3" variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardCourse;
