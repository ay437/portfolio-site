import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Intro from '../Into/Intro';
import Links from '../Links/Links';
import LinkData from './LinkData';

function CardWrapper(props) {
    const { name } = props;
    return (
        <Box height="100%" border="2px solid #f2f2f2" borderRadius="10px">
             {(() => {
                switch (name) {
                    case ('info'): 
                    return <Intro title="Web developer with a passion for Front End and UX" />;
                    case ('interest'):
                    return <Typography variant="h2">What I'm interested in currently</Typography>;
                    case ('links'):
                    return <Links links={LinkData} />;
                    default:
                    return <Typography variant="h2">No case found</Typography>;
    
                }
            })()}
        </Box>
      );
}

export default CardWrapper;