import { useTransition } from "react";
function Usetransition() {
    const [isPending, startTransition] = useTransition();
    
    const HandleSubmit = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 3000));
            alert("Form Submitted");
        });
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                HandleSubmit();
            }}>
                <input type="text" placeholder="Enter your name" name="name" />
                <br />
                <input type="password" placeholder="Enter your password" name="password" />
                <br />
                <hr />
                {isPending && (
                    <img 
                        style={{ width: "100px", height: "100px" }} 
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fgifs%2Fgrey-gradient-loader-loading-9026%2F&psig=AOvVaw2ByI1jy0rhG6w7rjG52ZUz&ust=1754635679307000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODp77eN-I4DFQAAAAAdAAAAABAL" 
                        //src={./24.gif}
                        alt="Loading..." 
                        //C:\Users\Shivam\Pictures\ful\REACT-VITE\my-app\src\Hooks\24.gif
                    />
                )}
                <button type="submit" disabled={isPending}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Usetransition;