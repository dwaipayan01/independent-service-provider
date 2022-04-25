import React from 'react';

const Blogs = () => {
    return (
        <div className="container mt-5">
            <h3> Difference between authorization and authentication ?</h3>
            <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board</p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>
            <h3>What other services does firebase provide other than authentication ?</h3>
            <p>Firebase Storage provides a simple way to save binary files — most often images, but it could be anything — to Google Cloud Storage directly from the client.Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN </p>
        </div>
    );
};

export default Blogs;