import React, { useEffect } from 'react';
import { fetchNavigationList, navigationSelector } from './../../core/store/navigation/navigation.slice'
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from './../../components/loading';
import { Container } from './../../components/centered-content'
import { Alert } from 'react-bootstrap';
import { Navigation } from './../../components/navigation';

export const Main = () => {
  const dispatch = useDispatch();
  const navigationState = useSelector(navigationSelector)
  useEffect(() => {
    dispatch(fetchNavigationList())
  }, [])

  if (navigationState.loading) {
    return <Container>
      <Loading />
    </Container>
  }
  
  if (navigationState.error) {
    return <Alert variant={'danger'}>
      Error fetching the data (for e.g promise rejected)
    </Alert>
  }

  return (
    <Container>
      <Alert variant={'primary'}>
        Async data fetched
      </Alert>

      <Navigation items={navigationState.data} />
    </Container>
  );
}