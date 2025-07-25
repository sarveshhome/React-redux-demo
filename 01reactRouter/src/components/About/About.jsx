import React from 'react';

export default function About() {
  return (
    <div className="py-5 bg-white">
      <div className="container mx-auto px-4 text-secondary">
        <div className="row align-items-center g-5">
          <div className="col-md-5 col-lg-5">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="About us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7 col-lg-6">
            <h2 className="h1 fw-bold text-dark mb-4">
              React development is carried out by passionate developers
            </h2>
            <p className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="lead">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}