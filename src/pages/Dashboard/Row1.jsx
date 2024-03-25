import { Stack } from "@mui/material";
import Card from "../../components/Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data";

export default function Row1(){
    return(
        <Stack direction={"row"} flexWrap={'wrap'} gap={1} justifyContent={{xs:'center', sm: 'space-between'}}>
            <Card icon={<Email color="secondary" sx={{fontSize: "25px"}} />} title={'12,361'} subTitle={'Email sent'} data={data1} increase={'+145%'} scheme={"nivo"} />
            <Card icon={<PointOfSale color="secondary" sx={{fontSize: "25px"}} />} title={'32,441'} subTitle={'Sales obtained'} data={data2} increase={'+21%'} scheme={"category10"}  />
            <Card icon={<PersonAdd color="secondary" sx={{fontSize: "25px"}} />} title={'431.225'} subTitle={'New Clints'} data={data3} increase={'+5%'} scheme={"accent"} />
            <Card icon={<Traffic color="secondary" sx={{fontSize: "25px"}} />} title={'1,325,626'} subTitle={'Traffic Recieved'} data={data4} increase={'+42%'} scheme={"dark2"} />
        </Stack>
    )
}