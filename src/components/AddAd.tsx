import {Button} from "./Button";
import {SyntheticEvent, useState} from "react";
import {geocode} from "../utils/geocoding";
import {API_URL} from "../config";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

export const AddAd = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        brand: '',
        model: '',
        version: '',
        year: 2022,
        power: 0,
        price: 0,
        url: '',
        address: '',
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);
        const {lat, lon} = await geocode(form.address);

        const res = await fetch(`${API_URL}/ad`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...form,
                lat,
                lon,
            }),
        });
        const data = await res.json();

        setId(data.ad.id);


        setLoading(false);
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <Wrapper><h1>Adding ad is in progress...</h1></Wrapper>;
    }

    if (id) {
        return <Wrapper>
            <h1>Your ad has been correctly added</h1>
            <Button text="Go to map" to="/" />
        </Wrapper>;
    }

    return (
        <FORM onSubmit={saveAd}>
            <h1>Adding an advertisement</h1>
            <p>
                <label>
                    Brand: <br/>
                    <input
                        type="text"
                        name="brand"
                        placeholder="BMW"
                        required
                        maxLength={30}
                        value={form.brand}
                        onChange={e => updateForm('brand', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Model: <br/>
                    <input
                        type="text"
                        name="model"
                        placeholder="M3"
                        required
                        maxLength={30}
                        value={form.model}
                        onChange={e => updateForm('model', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Version: <br/>
                    <input
                        type="text"
                        name="version"
                        placeholder="Competition M xDrive"
                        maxLength={50}
                        value={form.version}
                        onChange={e => updateForm('version', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Year: <br/>
                    <input
                        type="number"
                        name="year"
                        required
                        value={form.year}
                        onChange={e => updateForm('year', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Power: <br/>
                    <input
                        type="number"
                        name="power"
                        required
                        value={form.power}
                        onChange={e => updateForm('power', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Price: <br/>
                    <input
                        type="number"
                        name="price"
                        required
                        value={form.price}
                        onChange={e => updateForm('price', Number(e.target.value))}
                    />
                </label>
            </p>
            <p>
                <label>
                    URL: <br/>
                    <input
                        type="url"
                        name="url"
                        placeholder="https://www.otomoto.pl/..."
                        maxLength={500}
                        value={form.url}
                        onChange={e => updateForm('url', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Address on the map: <br/>
                    <input
                        type="text"
                        name="address"
                        placeholder="Aleja Krakowska 89, 02-180 Warszawa"
                        required
                        value={form.address}
                        onChange={e => updateForm('address', e.target.value)}
                    />
                </label>
            </p>
            <Button text="Save"/>
        </FORM>
    );
}

const FORM = styled.form`
  width: 60%;
  margin: 0 auto;
  
  h1 {
    margin: 1rem 0;
    text-align: center;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    padding: .5rem 0;
    border-radius: .3rem;
  }
  
  p {
    margin-bottom: .5rem;
  }
  
  input {
    width: 100%;
    margin-top: .5rem;
    border: 1px solid #ccc;
    border-radius: .3rem;
    padding: .3rem .5rem;
  }
  
  Button {
    width: 100%;
    margin-top: 1rem;
  }
`

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  h1 {
    margin: 1rem 0;
    text-align: center;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    padding: .5rem 0;
    border-radius: .3rem;
  }
  
  Button {
    text-align: center;
  }
`
