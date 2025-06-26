
export default function RenderingElements() {
    let message = "Hello World";
    let username = "Nguyen";
    let age = 18;

    const news = () => {
        return (
            <div>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore culpa illo molestias impedit illum, sunt, minima, officiis natus debitis tempora voluptatum ipsam quisquam aperiam quibusdam quos expedita ex commodi nisi.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis expedita porro et cum! Sunt provident quis praesentium magni voluptatum excepturi ex, animi rem dolorem? Hic eligendi minima dolor cupiditate?</p>
            </div>
        )
    };
   
    return (
        <div>
            <h1>RenderingElements</h1>
            <div>{message}</div>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
            {news()};
        </div>
    )
}
