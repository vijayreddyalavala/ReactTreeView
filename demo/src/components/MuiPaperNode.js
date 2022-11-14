import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MuiPaperNode = ({ nodeDatum, orientation, toggleNode, onNodeClick }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {nodeDatum.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toggleNode}>Expand/Collapse</Button>
      </CardActions>
    </Card>
  )
}

export default MuiPaperNode;