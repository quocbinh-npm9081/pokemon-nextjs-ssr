// import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router';
import styles from '../../styles/Detail.module.css'

export const getServerSideProps = async ({ params }) => {
  const resp = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`);
  console.log("params", params);
  return {
    props: {
      pokemon: await resp.json()
    }
  }
}

const Detail = ({ pokemon }) => {

  // const { query: { id } } = useRouter(); get id with client side rendering


  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/">Back to home</Link>
      </div>
      <div className={styles.layout}>
        <img className={styles.picture}
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt="image" />

        <div >
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join("-")}</div>
        </div>
      </div>
    </div>
  )
}

export default Detail