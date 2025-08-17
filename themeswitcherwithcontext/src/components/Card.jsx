import React from 'react'

export default function Card() {
    return (
        <div className="card w-100 shadow-sm">
            <a href="/">
                <img className="card-img-top p-4" src="https://img.freepik.com/free-photo/young-man-work-with-laptop-computer-front-white-studio-wall_231208-2320.jpg?t=st=1755422852~exp=1755426452~hmac=276503ab7cdcc6c4d997b0a056a5069bbe9b17e741366641c9529e1eebd5f48c&w=2000?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
            </a>
            <div className="card-body p-4">
                <a href="/" className="text-decoration-none">
                    <h5 className="card-title fs-5 fw-bold text-dark">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="d-flex align-items-center my-3">
                    <svg
                        className="bi bi-star-fill text-warning me-1"
                        width="16"
                        height="16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="bi bi-star-fill text-warning me-1"
                        width="16"
                        height="16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="bi bi-star-fill text-warning me-1"
                        width="16"
                        height="16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="bi bi-star-fill text-warning me-1"
                        width="16"
                        height="16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="bi bi-star-fill text-secondary"
                        width="16"
                        height="16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="badge bg-primary-subtle text-primary-emphasis ms-2 px-2 py-1 rounded">
                        4.0
                    </span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-3 fw-bold text-dark">$599</span>
                    <a
                        href="/"
                        className="btn btn-primary"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}