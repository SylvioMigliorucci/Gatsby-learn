import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar';
// import { Container } from './styles';

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, author, description},
        },
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata{
                    title
                    author
                    position
                    description
                }
            }
        }
    `)

    return (
        <div className="Profile-wrapper">
        <Avatar />
        <h1>{title}</h1>
        <h2>{author} - {position}</h2>
        <p>{description}</p>
    </div>
    )
}

export default Profile