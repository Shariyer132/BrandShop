
const Help = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-5 py-10">
            <h6 className="text-center font-medium pt-10 pb-3 text-lg">Have any queries?</h6>
            <h2 className="text-center text-4xl font-semibold">We're here to help</h2>
            <hr className="max-w-16 mx-auto my-7 border border-black"/>
            <div className="grid grid-cols-1 md:grid-cols-2 py-5 lg:grid-cols-4 gap-5">
                {/* card one */}
                <div className="card border hover:shadow-lg bg-white shadow-md">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-medium">Sales</h2>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <h5 className="text-xl font-medium text-blue-500">01886600369</h5>
                    </div>
                </div>
                {/* card two */}
                <div className="card border hover:shadow-lg bg-white shadow-md">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-medium">Complaints</h2>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <h5 className="text-xl font-medium text-blue-500">01886600369</h5>
                    </div>
                </div>
                {/* card three */}
                <div className="card border hover:shadow-lg bg-white shadow-md">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-medium">Returns</h2>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <h5 className="text-xl font-medium text-blue-500">01886600369</h5>
                    </div>
                </div>
                {/* card four */}
                <div className="card border hover:shadow-lg bg-white shadow-md">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-medium">Marketing</h2>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                        <h5 className="text-xl font-medium text-blue-500">01886600369</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;