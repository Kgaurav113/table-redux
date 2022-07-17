import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getcountry } from "../Redux/action";
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";


const Homepage = () => {
  
  const dispatch = useDispatch();
  const [searchParams, setsearchParams] = useSearchParams();

  const urlsortby = searchParams.get("sortby");
console.log("ghgs",getcountry)
  //    console.log(urlCategory,urlsort)
  const [sortby, setsortby] = useState(urlsortby || "");
  const handlesort = (el) => {

    setsortby(el.target.value);
    
  };

  useEffect(() => {
    if (sortby) {
      let params={};
      
      sortby && (params.sortby=sortby);
      setsearchParams(params);
   
    }
  }, [ sortby, dispatch, setsearchParams]);
  
 
  
  const country = useSelector((state) => state.countries);
  
  useEffect(() => {
    if (country.length === 0 ) {
      const sortby = searchParams.get("sortby");
      const getcountryParams = {
        params: {
          _sort: "population",
          _order: sortby,
        },
      };
      // console.log(getbookscountry);
      dispatch(getcountry(getcountryParams));
    }
  }, [country?.length, sortby,dispatch, searchParams]);
   console.log(country);
   const handledelete1=(id)=>{
    setsortby(country.filter(country=>sortby.id!==id))
   }
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup >
          <Stack direction="row" onChange={handlesort}>
            <Radio data-cy="asc" value="asc" >
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            
            {country.map((e)=>{
              console.log(country)
              return(
                <tr>
                <th>{e.country}</th>
                <th>{e.city}</th>
                <th>{e.population}</th>
              <Link to="/country/:id"> <th><><button style={{backgroundColor:"black",color:"yellow"}}>Edit</button></></th></Link> 
                <th><><button style={{backgroundColor:"white",color:"red"}} onClick={handledelete1}>Delete</button></></th>
              </tr>
              )
              
              
            })}
            
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
