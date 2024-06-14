import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>About Indoor Plant Selling Management System (IPSMS)</h1>
        <p>
          Welcome to the Indoor Plant Selling Management System (IPSMS), your ultimate solution for managing and selling indoor plants. IPSMS is designed to streamline the process of selling and managing indoor plants, ensuring a seamless experience for both customers and administrators.
        </p>
        <p>
          Developed as a part of a Summer Project Report, IPSMS aims to offer a comprehensive platform that includes features such as inventory management, order processing, customer management, and more. This system not only simplifies the process of buying and selling plants but also enhances the overall customer experience.
        </p>
        <p>
          IPSMS is built with modern technologies and best practices to ensure reliability, scalability, and ease of use. Our team is committed to providing a user-friendly interface and robust functionalities that meet the needs of plant enthusiasts and business owners alike.
        </p>
        <p>
          We hope you find IPSMS useful and enjoyable to use. If you have any questions or feedback, please do not hesitate to reach out to us.
        </p>
        <p>
          Sincerely,<br />
          [Your Name]<br />
          [Your Position]
        </p>
      </div>
    </>
  );
}

export default About;
