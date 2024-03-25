import { Box, Paper, Stack, Typography, IconButton, useTheme } from "@mui/material";
import Line from "../Line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";


export default function Row2(){
    const theme = useTheme()

    return(
        <Stack direction={'row'} flexWrap={"wrap"} gap={1}>
            <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "300px" }}>
                <Stack direction={'row'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Typography
                        color={"secondary"}
                        mb={1}
                        mt={2}
                        ml={4}
                        variant="h6"
                        fontWeight={"bold"}
                        >
                        Revenue Generated
                    </Typography>
                    <Typography variant="body2" ml={4}>
                    $59,342.32
                    </Typography>
                </Box>

                <Box>
                    <IconButton sx={{ mr: 3 }}>
                        <DownloadOutlined />
                    </IconButton>
                </Box>
                </Stack>
                <Line isDahboard={true} />
            </Paper>
            <Box 
                sx={{
                    overflow: "auto",
                    borderRadius: "4px",
                    minWidth: "280px",
                    maxHeight: 355,
                    flexGrow: 1,
                }}>
                <Paper>
                    <Typography
                        color={"secondary"}
                        fontWeight={"bold"}
                        p={1.2}
                        variant="h6"
                    >
                        Recent Transactions
                    </Typography>
                </Paper>
                {Transactions.map((item) => {
                    return (
                        <Paper
                            key={item.txId}
                        sx={{
                            mt: 0.4,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        >
                        <Box p={1.2}>
                            <Typography variant="body1">{item.txId}</Typography>
                            <Typography variant="body2">{item.user} </Typography>
                        </Box>
                        <Typography variant="body1">{item.date} </Typography>

                        <Typography
                            borderRadius={1.4}
                            p={1}
                            bgcolor={theme.palette.error.main}
                            color={theme.palette.getContrastText(theme.palette.error.main)}
                            variant="body2"
                        >
                            ${item.cost}
                        </Typography>
                        </Paper>
                    );
                    })}
            </Box>
        </Stack>
    )
}