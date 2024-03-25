import { Box, Button, MenuItem, Stack, TextField, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";



const sel = [
    {
        value: "Admin",
        label: "Admin"
    },
    {
        value: "Manager",
        label: "Manager"
    },
    {
        value: "User",
        label: "User"
    }
]

export default function Form(){
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm()
    const [open, setOpen] = useState(false)
    
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setOpen(false);
      };

    const onSubmit = () => {
        console.log("doneeeeeeeeeeee");
        setOpen(true);
    };

    useEffect(()=>{
          if(isSubmitSuccessful){
              reset()
          }

    }, [isSubmitSuccessful, reset])

    return(
        <Box>
            <Header title="CREATE USER" subTitle="Create a New User Profile" />
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5
                }}
            >
                    <Stack  direction={"row"} sx={{gap: 3}}>
                        <TextField
                            id="fname" 
                            label="First Name" 
                            variant="filled" 
                            sx={{flex: 1}}
                            {...register("fname", { 
                                required:{
                                    value: true,
                                    message: "First Name is required"
                                },
                                minLength:{
                                    value: 3,
                                    message: "Name must be grater than 2 litters"
                                },
                                pattern:{
                                    value: /[a-zA-z]/,
                                    message: "Please write a valide Name"
                                }
                            })}
                            error={Boolean(errors.fname)}
                            helperText={errors.fname?.message}
                            />
                        <TextField 
                            id="lastname" 
                            label="Last Name" 
                            variant="filled" 
                            sx={{flex: 1}} 
                            {...register("lastname", { 
                                required:{
                                    value: true,
                                    message: "Last Name is required"
                                },
                                minLength:{
                                    value: 3,
                                    message: "Name must be grater than 2 litters"
                                },
                                pattern:{
                                    value: /[a-zA-z]/,
                                    message: "Please write a valide Name"
                                }
                            })}
                            error={Boolean(errors.lastname)}
                            helperText={errors.lastname?.message}
                            />
                    </Stack>
                    <TextField 
                        label="Email" 
                        variant="filled"
                        {...register("email", {
                            pattern : {
                                value : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email is Not Valid"
                            }
                        })} 
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        />
                    <TextField 
                        label="Contact Number" 
                        variant="filled" 
                        {...register('phone', { 
                            required: "Phone is required" ,
                            pattern:{
                                value: /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
                                message: 'Invalid phone number',
                            }
                        })}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone?.message}
                    />
                    <TextField 
                        label="Address" 
                        variant="filled" 
                    />
                    <TextField
                        variant="filled"
                        select
                        label="Role"
                        defaultValue="User"
                        {...register("role")}
                    >
                        {sel.map((option)=>(
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Box sx={{textAlign: "right"}}>
                    <Button type="submit" variant="contained" sx={{textTransform: "capitalize"}}>Create New User</Button>

                    <Snackbar
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            open={open}
                            autoHideDuration={3000}
                            onClose={handleClose}
                        >
                            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
                            Account created successfully
                            </Alert>
                        </Snackbar>
                    </Box>
            </Box>
        </Box>
    )
}