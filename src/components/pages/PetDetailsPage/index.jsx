import { useParams } from "react-router";
import { useContext, useEffect, useState} from "react";

import "./styles.css";
import PetsOrderContext from "../../../context/petsOrderContext";

export const PetDetailsPage = (props) => {
    const {id} = useParams();

    const[pet, setPet] = useState({});

    const globalState = useContext(PetsOrderContext);

    useEffect (() => {
        const pet = globalState.pets.find(
            (pet) => pet.id.stringValue === id
        );
        setPet(pet);
    }, [])

    if (pet){
        return (
            <div className="pets-page">
                <h1 className="pets-title"> {pet.name?.stringValue} </h1>
            </div>
        )
    }else {
        return<p>No pet with this id</p>
    }
}