import { useActionState } from "react";
import { useState } from "react";

function InstagramHackDemo() {
    const [data, action, pending] = useActionState(handleSubmit, null);

    async function handleSubmit(prevData, formData) {
        const username = formData.get('username');
        const password = formData.get('password');
        
        console.log('Submitted:', username, password);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Always return "hacked" message (for demo purposes)
        return { 
            hacked: true,
            username: username 
        };
    }

    return (
        <div style={{ 
            maxWidth: '350px', 
            margin: '0 auto', 
            padding: '20px', 
            border: '1px solid #dbdbdb',
            borderRadius: '8px',
            textAlign: 'center',
            fontFamily: 'Arial'
        }}>
            {/* Instagram Logo */}
            <h1 style={{ 
                fontFamily: 'Instagram Sans, sans-serif', 
                color: '#262626',
                marginBottom: '20px'
            }}>
                Instagram Database
            </h1>
            
            <div style={{ marginBottom: '20px' }}>
                <svg aria-label="Instagram" fill="#262626" height="30" viewBox="0 0 48 48" width="30">
                    <path d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8h-4.4c-.6 0-1.1.5-1.1 1.1v4.4c0 .6.5 1.1 1.1 1.1h4.4c.6 0 1.1-.5 1.1-1.1v-4.4c0-.6-.5-1.1-1.1-1.1zM24 19.3c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7zm12 14.7c0 1.7-1.3 3-3 3H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h18c1.7 0 3 1.3 3 3v19z"></path>
                </svg>
            </div>

            <form action={action}>
                {/* Username Field */}
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #dbdbdb',
                            borderRadius: '4px',
                            fontSize: '14px'
                        }}
                    />
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: '15px' }}>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #dbdbdb',
                            borderRadius: '4px',
                            fontSize: '14px'
                        }}
                    />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    disabled={pending}
                    style={{
                        width: '100%',
                        padding: '8px',
                        backgroundColor: '#0095f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {pending ? "Hacking..." : "Proccesd"}
                </button>

                {/* Hacked Message */}
                {data?.hacked && (
                    <div style={{ 
                        marginTop: '20px',
                        color: 'red',
                        fontWeight: 'bold'
                    }}>
                        {`Account ${data.username ? `@${data.username}` : ''} has been hacked!`}
                    </div>
                )}
            </form>
        </div>
    );
}

export default InstagramHackDemo;