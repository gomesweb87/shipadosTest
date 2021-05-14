import * as React from 'react';

import { ContainerInput, InputStuled } from './styles';

export interface IInputProps {
    type: string;
    label: string;
    name: string;
    value: string;
    onChange: Function;
}

export default function Input(props: IInputProps) {
    return (
        <ContainerInput>
            <label htmlFor={props.name}>{props.label}</label>
            <InputStuled
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={ev => {
                    props.onChange((prev: any) => ({ ...prev, [props.name]: ev.target.value }));
                }}
                placeholder="seu nome"
                id={props.name}
                autoComplete="off"
            />
        </ContainerInput>
    );
}
