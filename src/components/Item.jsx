import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div>
            <Card>
                <CardBody> 
                    <Stack direction={['column', 'row']} spacing='24px'>
                        <Box w='200px' h='200px' bg='pink.200'>
                        <Heading size='md'>{producto.titulo}</Heading>
                        <Text>
                            {producto.precio}
                        </Text>
                        <Text>
                            {producto.categoria}
                        </Text>
                        </Box>
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