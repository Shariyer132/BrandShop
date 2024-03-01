
const Form = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-5 py-10">
            <div>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left lg:w-1/2 py-20">
                        <span className="font-medium">Don't be a stranger!</span>
                        <h1 className="md:text-5xl text-3xl font-semibold pb-2">You tell us. We listen.</h1>
                        <p className="py-6 leading-loose">Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
                    </div>
                    <div className="lg:w-1/2 pb-10">
                        <form className="card-body bg-white shadow-xl gap-5">
                            <input type="name" name="name" placeholder="NAME" className="input input-bordered" required />
                            <input type="text" name="subject" placeholder="SUBJECT" className="input input-bordered" required />
                            <input type="email" name="email" placeholder="EMAIL" className="input input-bordered" required />
                            <textarea placeholder="MESSAGE" name="message" className="textarea textarea-bordered" rows={7} ></textarea>
                            <div className="mt-6">
                                <button className="btn btn-info text-white">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;