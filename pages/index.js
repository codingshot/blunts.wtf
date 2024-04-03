import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>blunts.wtf</title>
          <meta
            name="description"
            content="the unlimitted blunt hacks. a replenishing treasury to request blunts around the world powered by BluntDAO"
          />
          <meta property="og:title" content="blunts.wtf" />
          <meta
            property="og:description"
            content="the unlimitted blunt hacks. a replenishing treasury to request blunts around the world powered by BluntDAO"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6a84ef1a-1de1-4611-9300-64b653130fff/354462f3-2198-4dd4-bf07-9c363908df1d?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="home-hero">
          <animate-on-reveal
            animation="pulse"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <img
              alt="bluntdao noggles"
              src="/fogglesvector.svg"
              data-thq-animate-on-reveal="true"
              className="home-image"
            />
          </animate-on-reveal>
          <h1 className="home-text">blunts.wtf</h1>
          <h3 className="home-text01">forever re-upping the blunt treasury.</h3>
          <a
            href="/waitlist"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link button"
          >
            waitlist
          </a>
        </div>
        <p className="home-text02">
          <span>
            on 🔵
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://base.org"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            BASE
          </a>
          <span>
            {' '}
            built with 💨 by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://bluntdao.org"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            BluntDAO 
          </a>
          <br></br>
          <span className="home-text06">
            This work is licensed under the Creative Commons
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://creativecommons.org/public-domain/cc0/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            CC0
          </a>
          <span className="home-text07">
            {' '}
            1.0 Universal Public Domain Dedication.
          </span>
          <br className="home-text08"></br>
          <span className="home-text09">
            {' '}
            +
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://nouns.wtf"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            NounsDAO
          </a>
          <span className="home-text10"> Ecosystem</span>
          <br></br>
        </p>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
            justify-content: center;
          }
          .home-hero {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-height: 100%;
            min-height: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 400px;
            object-fit: cover;
          }
          .home-text {
            font-size: 50px;
            font-family: 'Londrina Solid';
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text01 {
            font-size: 15px;
            font-style: normal;
            font-family: 'Londrina Solid';
            font-weight: 400;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            margin-top: 5px;
            transition: 0.3s;
            font-family: 'Londrina Solid';
            padding-top: var(--dl-space-space-unit);
            border-color: #000000;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: 5px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #5c65f1;
          }
          .home-link:hover {
            transform: scale(1.02);
          }
          .home-text02 {
            align-self: center;
            text-align: center;
            padding-top: 1px;
            padding-left: 1px;
            padding-right: 1px;
            padding-bottom: 1px;
            background-color: #f1f1f1;
          }
          .home-link1 {
            text-decoration: underline;
          }
          .home-link2 {
            text-decoration: underline;
          }
          .home-text06 {
            font-size: 10px;
            line-height: 1;
          }
          .home-link3 {
            font-size: 10px;
            line-height: 1;
            text-decoration: underline;
          }
          .home-text07 {
            font-size: 10px;
            line-height: 1;
          }
          .home-text08 {
            font-size: 10px;
            line-height: 1;
          }
          .home-text09 {
            font-size: 10px;
            line-height: 1;
          }
          .home-link4 {
            font-size: 10px;
            line-height: 1;
            text-decoration: underline;
          }
          .home-text10 {
            font-size: 10px;
            line-height: 1;
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
