import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0b1035;
  padding: 4rem 0 2rem 0;

  .container {
    max-width: 1170px;
    margin: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  ul {
    list-style: none;
  }

  .footer {
    background-color: #24262b;
    padding: 70px 0;
  }

  .footer-col {
    width: 25%;
    padding: 0 15px;

    h4 {
      font-size: 18px;
      color: #ffffff;
      text-transform: capitalize;
      margin-bottom: 35px;
      font-weight: 500;
      position: relative;
    }
  }

  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #1521cf;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }

  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }

  .footer-col .social-links {
    display: flex;

    a {
      display: inline-block;
      height: 40px;
      width: 40px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 0 10px 10px 0;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;
      color: #ffffff;
      transition: all 0.5s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .container {
      align-items: center;
      text-align: center;

      .footer-col {
        width: 100%;
        margin-bottom: 30px;
        text-align: center;

        h4 {
          margin-bottom: 25px;
        }

        h4::before {
          left: 50%;
          
          transform: translateX(-50%);
        }


        .social-links {
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 574px) {
    .footer-col {
      width: 100%;
    }
  }
`;
