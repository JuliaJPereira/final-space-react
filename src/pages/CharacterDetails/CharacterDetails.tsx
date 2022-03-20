import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Container, Image, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { Character } from "../Home";
import "./CharacterDetails.css";

export const CharacterDetails: React.FC = () => {
    const [character, setcCharacter] = useState<Character | null>(null);
    const { id } = useParams();
    console.log({ id });

    const getCharacter = async () => {
        try {
            const response = await axios.get<Character>(`character/${id}`);
            setcCharacter(response.data);
        } catch (error: any) {
            toast(error.response.data ?? error.message, {
                type: "error",
            });
        }
    }

    useEffect(() => {
        getCharacter();
    }, [id]);

    if (character === null) {
        return <h1>Loading...</h1>;
    }

    return (
        <Container>
            <Image src={character.img_url} roundedCircle className="char-image" />
            <h1 className="header">{character.name}</h1>

            <div className="container-badge">
                <h2>Alias</h2>
                {character.alias.map(item => (
                    <Badge key={item} bg="primary">{item}</Badge>
                ))}
            </div>

            <div className="container-badge">
                <h2>Abilities</h2>
                {character.abilities.map(item => (
                    <Badge key={item} bg="success">{item}</Badge>
                ))}
            </div>

            <h2 className="more-info">More Informations</h2>

            <ListGroup className="list-group-info">
                <ListGroupItem>
                    Status: {character.status}
                </ListGroupItem>
                <ListGroupItem>
                    Species: {character.species}
                </ListGroupItem>
                <ListGroupItem>
                    Gender: {character.gender}
                </ListGroupItem>
                <ListGroupItem>
                    Hair: {character.hair}
                </ListGroupItem>
                <ListGroupItem>
                    Origin: {character.origin}
                </ListGroupItem>
            </ListGroup>
        </Container>
    );
}