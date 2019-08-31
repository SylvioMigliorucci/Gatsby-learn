import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar';
import * as S from './styles';

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
    <S.ProfileWrapper>
        <S.ProfileLink>
            
            <Avatar />
            <S.ProfileAuthor>

                {author} 
            <h1>{title}</h1>
                <S.ProfilePosition> {position} </S.ProfilePosition>
            </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription>
            <p>{description}</p>
        </S.ProfileDescription>

    </S.ProfileWrapper>
   
    )
}

export default Profile