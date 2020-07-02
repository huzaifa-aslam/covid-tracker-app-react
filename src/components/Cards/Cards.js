import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:'1000px',
    margin:'0 auto',
    marginTop:'20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [globalData,setGlobalData]=useState({})
  const url='https://api.thevirustracker.com/free-api?global=stats';
  useEffect(()=>{
    async function getData(){
        const api=await fetch(url)
        const resp=await api.json();
        delete resp.results[0].source;
        //delete resp.results[0].total_cases
        console.log(resp.results[0]);
        setGlobalData(resp.results[0])
        console.log('data',globalData)


    }
    getData()
  },[])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}

      {Object.keys(globalData).map((key,index)=>{
          return(
            //   <li key={index}>{item}</li>
              <Grid item xs={4} key={index}>
              <Paper elevation={3} className={classes.paper} ><h3>{key.replace("_"," ").toUpperCase()}</h3>
          <h3>{globalData[key]}</h3>
              </Paper>
            </Grid>
          )
      })}
       </Grid>
    </div>
  );
}
