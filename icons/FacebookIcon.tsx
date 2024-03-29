import React from 'react'
import styled from 'styled-components'

interface IFacebookIcon {
  size?: number
  rounded?: boolean
}

const FacebookIcon = ({ size, rounded = false }: IFacebookIcon) => {
  if (rounded) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 39 39">
        <g id="Social_Midea" data-name="Social Midea" transform="translate(-1401 -7449)">
          <g id="Facebook">
            <circle id="Bg" cx="19.5" cy="19.5" r="19.5" transform="translate(1401 7449)" fill="#463f32" />
            <image
              id="Icon"
              width="7"
              height="15"
              transform="translate(1417 7461)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAPCAYAAAAoAdW+AAAABHNCSVQICAgIfAhkiAAAAKRJREFUGFdj/P//PwMSaAKy44FYEIjvMiJJ5gEFJiKrRJa8BpTQBOL3QLwEiF/AJBmBnOdALA7E3UBcBjIBWed9IF8BiPOBeBJMMgjI4ALiCUAsDMRbgHgFEL8C6URxLpKDTuCTnAeS9AGq5gbiqVBjNwHppUB8EdlBd4ECSkBcDsRdyK4FeeUhEMtCJUAK4F6hTPIzksNy0I29ChSQgQZGHUgSAE/hTPtqZp3/AAAAAElFTkSuQmCC"
            />
          </g>
        </g>
      </svg>
    )
  } else {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 310 310"
        xmlSpace="preserve"
        height={size}
        width={size}
      >
        <Path
          id="XMLID_835_"
          d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
        />
      </svg>
    )
  }
}

const Path = styled.path`
  fill: #fff;
`

export default FacebookIcon
