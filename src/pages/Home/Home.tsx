import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import "./Home.css";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import logo from "assets/logo.png";

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    hair: string;
    alias: string[];
    origin: string;
    abilities: string[];
    img_url: string;
}

export const Home: React.FC = () => {
    const [characters, setCharacter] = useState<Character[]>([]);
    const navigate = useNavigate();

    console.log({ characters });

    // função assincrona para consultar os dados da API
    const getCharacters = async () => {
        try {
            const response = await axios.get<Character[]>("character");
            setCharacter(response.data);
        } catch (error: any) {
            toast(error.response.data ?? error.message,{
                type: "error",
            });
        }
    }

    useEffect(() => {
        getCharacters();
    }, []); // array vazio significa que essa função sí vai ser chamada 1 vez

    return (
        <Container>
            <Image src={logo} className="logo"/>
            <Row>
                {characters.map((item) => (
                    <Col md={3} key={item.id} className="card-margin">
                        <Card>
                            <Card.Img variant="top" src={item.img_url}/>
                            <Card.Body>
                                <Card.Title>
                                    {item.name}
                                </Card.Title>
                                <Card.Text>
                                    Status: {item.status}
                                </Card.Text>
                                <Button variant="primary" onClick={()=> navigate(`/character/${item.id}`)}>See details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}