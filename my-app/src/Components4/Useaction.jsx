import { useActionState } from "react";
import { useState } from "react";

function UseAction() {
    const [data, action, pending] = useActionState(handelSubmit, null);

    async function handelSubmit(prevData, formData) {
        let name = formData.get('name');
        let password = formData.get('password');
        console.log('handelSubmit called', name, password);

        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay

        if (name && password) {
            return { Message: "Data Submitted Successfully!" };
        } else {
            return { error: "Failed to submit. Enter proper data." };
        }
    }

    return (
        <div>
            <h1>Use Action State</h1>
            <form action={action}>
                <input type="text" placeholder="Enter name" name="name" />
                <br />
                <input type="password" placeholder="Enter password" name="password" />
                <br />
                <br />
                <button disabled={pending}>
                    {pending ? "Submitting..." : "Submit Data"}
                </button>
                {data?.error && (
                    <span style={{ color: 'red' }}>{data.error}</span>
                )}
                {data?.Message && (
                    <span style={{ color: 'green' }}>{data.Message}</span>
                )}
            </form>
        </div>
    );
}

export default UseAction;