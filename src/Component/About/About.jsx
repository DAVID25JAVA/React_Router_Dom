function About() {
    return (  
        <>
            <div className="flex justify-center mt-20 flex-wrap">
                <div className="">
                    <img className="w-96 " style={{width:"30rem"}} src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="" />
                </div>  
                <div className="max-w-xl">
                    <h2 className="font-bold text-4xl f">What is React and why is very popular ?...</h2>
                    <p className="py-4 font-serif text-lg">React is a JavaScript library for building user interfaces, primarily developed by Facebook. It allows developers to create reusable UI components and manage the state of those components efficiently. React is known for its declarative syntax, which makes it easier to understand and maintain complex UIs</p>
                </div>
        </div>
        </>
    );
}

export default About;