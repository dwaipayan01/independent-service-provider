import React from 'react';

const CheckOut = () => {
    const handleSubmit = () => {
        alert("Thank you for submitting");
    }
    return (
        <div className='mx-auto w-25 mt-5'>
            <form action="">
                <div class="form-group mt-3">
                    <label for="fullname">Full Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="fullname"
                        placeholder="Enter Your Full Name"
                        required
                    />
                </div>
                <div class="form-group mt-3">
                    <label for="email">E-mail Address</label>
                    <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Enter Your E-mail Address"
                        required
                    />
                </div>
                <div class="form-group mt-3">
                    <label for="phone">Phone Number</label>
                    <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Enter Your Phone Number"
                        required
                    />
                </div>
                <div class="form-group mt-3">
                    <label for="password">Password</label>
                    <input
                        type="text"
                        class="form-control"
                        id="password"
                        placeholder="Enter Your Password"
                        required
                    />
                </div>
                <div class="form-group mt-3">
                    <label for="gender" class="mr-4">Choose Your Gender</label>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            id="male"
                            value="male"
                            name="gender"
                        />
                        <label class="form-check-label" for="male">male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            id="female"
                            value="female"
                            name="gender"
                        />
                        <label class="form-check-label" for="female">female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            id="other"
                            value="other"
                            name="gender"
                        />
                        <label class="form-check-label " for="other">other</label>
                    </div>
                </div>
                <div class="form-group mx-auto mt-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="tnc" />
                        <label class="form-check-label" for="tnc"
                        >I agree all terms & conditions</label
                        >
                    </div>
                </div>
                <button onClick={handleSubmit} class="btn btn-primary mx-auto mt-3">Submit</button>
            </form>
        </div>
    );
};

export default CheckOut;