function SubmitCheck() {
    const HandleSumbit = async (e) => {
        e.preventDefault(); // Prevent page reload
        await new Promise(resolve => setTimeout(resolve, 200));
        console.log("submit");
        
        // Access form data directly from the event
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            password: formData.get("password")
        };
        console.log(data);
    }

    return (
        <div>
            <h1>submit check</h1>
            <form onSubmit={HandleSumbit}>
                <input type="text" placeholder="Enter your name" name="name" />
                <br />
                <input type="password" placeholder="Enter your password" name="password" />
                <br />
                <hr />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SubmitCheck;