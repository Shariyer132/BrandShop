import NavbarTwo from "../../Shared/NavbarTwo/NavbarTwo";

const CheckOut = () => {
    return (
        <div className="bg-[#F5F7F9]">
            <NavbarTwo />
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 py-10">
                {/* form */}
                <div className="card shrink-0 lg:w-3/5">
                    <h4 className="text-2xl text-center pt-10 pb-3 border-b-2 font-medium">Billing details</h4>
                    {/* Name */}
                    <form className="card-body">
                        <div className="form-control md:flex-row gap-12">
                            {/* First Name */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">First name *</span>
                                </label>
                                <input type="name" name="firstName" className="input input-bordered" required />
                            </div>
                            {/* Last Name */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Last name *</span>
                                </label>
                                <input type="name" name="lastName" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Company */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company name (optional)</span>
                            </label>
                            <input type="name" name="companyName" className="input input-bordered" required />
                        </div>
                        {/* Country */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country / Region *</span>
                            </label>
                            <select name="countryName" className="select select-bordered">
                                <option disabled selected>Normal</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                        </div>
                        {/* Street */}
                        <div className="form-control gap-4">
                            <label className="px-1">
                                <span className="label-text">Street address *</span>
                            </label>
                            <input type="name" name="house" placeholder="House number and street name" className="input input-bordered" required />
                            <input type="name" name="apartment" placeholder="Apartment, suite, unit, etc.(optional)" className="input input-bordered" required />
                        </div>
                        {/* Town */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Town / City *</span>
                            </label>
                            <input type="name" name="town" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">District *</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Normal</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Postcode / ZIP (optional)</span>
                            </label>
                            <input type="code" name="code" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone *</span>
                            </label>
                            <input type="number" name="number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address *</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered" required />
                        </div>
                        <h4 className="text-2xl py-3 border-b font-medium">Additional information</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order notes (optional)</span>
                            </label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery" className="textarea textarea-bordered textarea-sm" ></textarea>
                        </div>

                    </form>
                </div>
                {/* orders */}
                <div className="w-2/5">
                    <div className="border p-7 flex flex-col gap-4 w-full">
                        <h5 className="text-2xl font-medium">Your order</h5>
                        <div className="flex justify-between">
                            <span className="font-medium">Product</span>
                            <span className="font-medium">Subtotal</span>
                        </div>
                        <hr />
                        <div className="flex justify-between sm:text-lg">
                            <span>Black Over-the-shoulder Handbag × 1</span>
                            <span>$150.00</span>
                        </div>
                        <hr />
                        <div className="flex justify-between sm:text-lg">
                            <span>DNK Yellow Shoes × 1</span>
                            <span>$120.00</span>
                        </div>
                        <hr />
                        <div className="flex justify-between sm:text-lg">
                            <span>Subtotal</span>
                            <span>$270.00</span>
                        </div>
                        <hr />
                        <div className="flex justify-between sm:text-lg">
                            <span>Total</span>
                            <span>$270.00</span>
                        </div>
                        <hr />
                        <button className="btn btn-info rounded-none text-white">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;