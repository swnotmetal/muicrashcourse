import { Box, Container, Typography, Paper, BottomNavigation } from "@mui/material";
import StandardImageList from "../components/imageCollage";
import CustomizedAccordions from "../components/accor";
import BasicModal from "../components/modal";


const Tour = () => <Container sx={{ width: 900}}>
    
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
     <img src="https://media.tacdn.com/media/attractions-content--1x-1/12/85/9e/df.jpg" 
     alt="" height={325} width={635}
     />
     <StandardImageList />
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
       About this ticket
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam harum, libero dolores repudiandae vitae reiciendis eveniet animi voluptatum voluptatibus maxime fuga enim molestiae cupiditate, 
       reprehenderit, quae ipsum dolore! Commodi.
    </Typography>
    </Box>
    <Box marginBottom={10}>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
       FAQ
    </Typography>

    <CustomizedAccordions/>

    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            
        >
            <BasicModal />
        </BottomNavigation>
      </Paper>
    
</Container>


export default Tour;