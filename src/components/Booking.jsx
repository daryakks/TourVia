import { Box, Typography, Paper,TextField,Button, MenuItem, Autocomplete, CircularProgress } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import{DatePicker} from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import dayjs from "dayjs";
import { getAllCountries } from "../api/countriesApi";


const Booking = () =>{
    const [countries, setContries] = React.useState([]);
    const[loading, setLoading] = React.useState(false);

    const[destination, setDestination] = React.useState(null);
    const [checkIn, setCheckIn] = React.useState(null);
    const [checkOut, setCheckOut] = React.useState(null);
    const [guests, setGuests] = React.useState(1);

    React.useEffect(()=>{
        const fetchCountries = async () =>{
            setLoading(true);
            const data =  await getAllCountries();
            setContries(data);
            setLoading(false);
            
        } 
        fetchCountries();
    },[]);

const handleSearch = () =>{
    console.log({
        destination,
        checkIn,
        checkOut,
        guests,
    });
}
return(
    <Box
        sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 1230 },
            px: { xs: 1, md: 0 },
            mx: "auto",
        }}
        >
        <Paper
            elevation={0}
            sx={{
                p:{xs: 1, md: 2},
                py:2,
                borderRadius:4,
                mt:2,
                backdropFilter: "blur(15px)",
                background: "rgba(225, 224, 224, 0.93)",
                boxShadow: "0 10px 30px rgba(135, 135, 135, 0.2)",
            }}
        >
            <LocalizationProvider dateAdapter = {AdapterDayjs}>
        <Box
            sx={{
                display:"flex",
                flexDirection:{xs:"column", md:"row"},
                gap:1,

            }}
        >
            <Autocomplete
                sx={{
                    flex: 2,
                }}
                options={countries}
                loading={loading}
                value={destination}
                
                onChange={(event, newValue)=>{setDestination(newValue)}}
                getOptionLabel={(option)=>option.name || ""}
                renderOption={(props, option)=>(
                    <Box 
                        component="li"
                        {...props}
                        sx={{
                            display:"flex",
                            gap: 2,
                        }}
                    >
                        <img 
                            src={option.flag}
                            alt =""
                            width="20"
                        />
                        {option.name}
                    </Box>
                )}
                renderInput={(params)=>(
                    <TextField
                        {...params}
                        label="Destination"
                        fullWidth
                        InputProps={{
                            ...params.InputProps,
                            endAdornment:(
                                <>
                                {loading &&(
                                    <CircularProgress size={20} />
                                )}
                                {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
            />
            {/*Arrival*/}
            <DatePicker
                sx={{
                    flex:1.5,
                }}
                label="Arrival"
                value={checkIn}
                onChange={(newValue)=>setCheckIn(newValue)}
                minDate = {dayjs()}
                slotProps={{textField:{fullWidth:true}}}
            
            />
            {/*Departure*/}
            <DatePicker
                sx={{
                        flex:1.5,
                    }}
                label="Departure"
                value={checkOut}
                onChange={(newValue)=>setCheckOut(newValue)}
                minDate = {checkIn ||dayjs()}
                slotProps={{textField:{fullWidth:true}}}
            
            />
            {/*Guests*/}
            <TextField
                sx={{
                    flex:1,
                }}
                select
                label="Guests"
                value={guests}
                onChange={(e)=>setGuests(e.target.value)}
                fullWidth
            >
                {[1,2,3,4,5,6].map((num)=>(
                    <MenuItem 
                        key={num}
                        value={num}
                     >
                        {num} Guests {num >1 && 's'}
                     </MenuItem>   
                ))}
            </TextField>
            <Button
                variant="contained"
                onClick={handleSearch}
                sx={{
                    px:4,
                    borderRadius:3,
                    height:{md: 56},
                    

                }}    
            >
                Search
            </Button>
        </Box>
    </LocalizationProvider>
</Paper>
</Box>
);
};
export default Booking;