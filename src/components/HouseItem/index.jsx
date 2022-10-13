import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import { Container} from './style';


export const HouseItem = () => {
  const [data, setData] = useState();
  const params = useParams();
  const request = useRequest();


  useEffect(() => {
    request({url:`/houses/list${params?.id}`}).then((res)=> 
      setData(res?.data || [])
    );

  }, [params?.id]);

  console.log(params)
  return (
    <Container>
      <h1>HoseItem</h1>
    </Container>
  );
};

export default HouseItem;
