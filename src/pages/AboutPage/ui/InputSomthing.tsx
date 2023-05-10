import React, {useState} from "react";

export interface IInputValue {
    firstName: string;
    type?: string;
}

interface IInputSomthingProps {
    sendToComponent: (inputValue: IInputValue) => void
}

export function InputSomthing({sendToComponent}: IInputSomthingProps) {
    const [inputValue, setInputValue] = useState<IInputValue>({firstName: '', type: ''});


    const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(inputValue => {
            return {...inputValue, [evt.target.name]: evt.target.value}
        });
    }

    // Object.keys(inputValue).map((key) => {
    //     console.log(key)
    // });

    const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        sendToComponent(inputValue)
        setInputValue(inputValue => {
                // console.log(inputValue)
                return {
                    ...inputValue, firstName: ''

                    // ...inputValue, Object.keys(inputValue).map((key)=>key:'');
                    // (Object.keys(inputValue) as Array<keyof typeof inputValue>).map((key: string)=>key='')

                }
            }
        );
    }
    // console.log(inputValue)
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input id="firstName" name="firstName"
                       value={inputValue.firstName}
                       onChange={inputHandler}/>
                <button type={'submit'}>Send to component</button>
            </form>
        </div>
    )
}
