import React, { useEffect } from 'react';
import { Container } from './style';
import HouseCard from '../HouseCard';
import { useState } from 'react';
import useRequest from '../../hooks/useRequest';
import { useLocation, useNavigate } from 'react-router-dom';



export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest()

  useEffect(() => {
    request({url:`/houses/list${search}`}).then((res)=> 
      setData(res?.data || [])
    );

  }, [search]);
  
  const onSelect = (id) =>{
    navigate(`/properties/${id}`)
  };
  return (
    <Container>
      {data.map((value) => {
        return <HouseCard 
          onClick={()=> onSelect(value.id)}
          key={value.id} 
          data={value} />;
      })}
    </Container>
  );
};

export default Properties;
