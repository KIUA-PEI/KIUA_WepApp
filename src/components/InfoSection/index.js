import React from 'react'
import {Button2} from '../ButtonElement'
import {InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './InfoElements'

const InfoSection = ({lightBg,id,lightText,imgStart,img,darkText,buttonLabel, alt, topLine, headline, description, primary, dark,dark2, url}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                         <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button2 target="_blank" rel="noopener noreferrer" href={url}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                // offset={-80}
                                primary={primary ? 1: 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button2>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection


// VER TUTORIAL PARA POR FOOTER