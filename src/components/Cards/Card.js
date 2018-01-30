<Card key={e.userId} className='AVA-first-place-agent'>
<Header as='h1'>1st Place</Header>
<Image className='first-place-img' centered size='small' src={e.photos} />
<Card.Content>
<Card.Header>{e.name}</Card.Header>
<Card.Description>
  <p>Team: {e.team}</p>
  {/* change to dials later */}
  Sales: {e.standings.salesKPI}
</Card.Description>
</Card.Content>
</Card>

<Card >
    <Header as='h4'>2nd Place</Header>
    <Image size='small' src={e.photos} />
<Card.Content>
    <Card.Header>{e.name}</Card.Header>
    <Card.Description><p>Team: {e.team}</p>
        {/* change to dials later */}
        Sales: {e.standings.salesKPI}</Card.Description>
</Card.Content>
</Card>