import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.titulo}</Heading>
                        <Text>
                            {producto.precio}
                        </Text>
                        <Text>
                            {producto.categoria}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        <Link to={`/producto/${producto.id}`}>ver mas</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )

}

export default Item