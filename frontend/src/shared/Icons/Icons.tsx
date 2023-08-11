import React from 'react';

type Props = {
  name: string,
  className?: string,
}

export const Icons: React.FC<Props> = ({ name, className }) => {
  switch(name){
    case 'checked':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="18" viewBox="0 0 16 18" fill="none">
          <g clipPath="url(#clip0_23_86)">
            <path d="M15.4195 3.70547C15.8589 4.14493 15.8589 4.8586 15.4195 5.29805L6.41948 14.2981C5.98003 14.7375 5.26636 14.7375 4.8269 14.2981L0.326904 9.79805C-0.112549 9.3586 -0.112549 8.64493 0.326904 8.20547C0.766357 7.76602 1.48003 7.76602 1.91948 8.20547L5.62495 11.9074L13.8304 3.70547C14.2699 3.26602 14.9835 3.26602 15.423 3.70547H15.4195Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_23_86">
              <rect width="15.75" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    case 'eyeOpen':
    case 'eyeClose':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke="#717586" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 13.5L16.5 16" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 11L22 13" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 13L4 11" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13.5L7.5 16" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.25 9.75H12M6 9.75H6.00673M9.75 12.75H6M12 12.75H11.9933" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 1.5V3M4.5 1.5V3" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.875 9.1824C1.875 5.91446 1.875 4.28046 2.81409 3.26523C3.75318 2.25 5.26462 2.25 8.2875 2.25H9.7125C12.7354 2.25 14.2469 2.25 15.1859 3.26523C16.125 4.28046 16.125 5.91446 16.125 9.1824V9.5676C16.125 12.8356 16.125 14.4695 15.1859 15.4848C14.2469 16.5 12.7354 16.5 9.7125 16.5H8.2875C5.26462 16.5 3.75318 16.5 2.81409 15.4848C1.875 14.4695 1.875 12.8356 1.875 9.5676V9.1824Z" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.25 6H15.75" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'google':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M24.7647 9.65113H23.7981V9.60133H12.9983V14.4012H19.78C18.7906 17.1954 16.1321 19.2012 12.9983 19.2012C9.0222 19.2012 5.79845 15.9774 5.79845 12.0013C5.79845 8.02516 9.0222 4.80141 12.9983 4.80141C14.8337 4.80141 16.5035 5.4938 17.7748 6.62478L21.169 3.23064C19.0258 1.23327 16.1591 0.00149536 12.9983 0.00149536C6.37144 0.00149536 0.998535 5.3744 0.998535 12.0013C0.998535 18.6282 6.37144 24.0011 12.9983 24.0011C19.6252 24.0011 24.9981 18.6282 24.9981 12.0013C24.9981 11.1967 24.9153 10.4113 24.7647 9.65113Z" fill="white"/>
          <path d="M2.38135 6.41598L6.32388 9.30733C7.39066 6.66618 9.97422 4.80141 12.9976 4.80141C14.8329 4.80141 16.5027 5.4938 17.7741 6.62478L21.1682 3.23064C19.0251 1.23327 16.1583 0.00149536 12.9976 0.00149536C8.38844 0.00149536 4.39131 2.60365 2.38135 6.41598Z" fill="white"/>
          <path d="M12.9987 24.0015C16.0983 24.0015 18.9146 22.8153 21.044 20.8863L17.3301 17.7436C16.0848 18.6906 14.5632 19.2028 12.9987 19.2016C9.87759 19.2016 7.22743 17.2114 6.22905 14.4341L2.31592 17.449C4.30188 21.3351 8.33501 24.0015 12.9987 24.0015Z" fill="white"/>
          <path d="M24.7649 9.65112H23.7984V9.60132H12.9985V14.4012H19.7802C19.307 15.7311 18.4545 16.8931 17.3281 17.7438L17.3299 17.7426L21.0438 20.8853C20.781 21.1241 24.9983 18.0012 24.9983 12.0013C24.9983 11.1967 24.9155 10.4113 24.7649 9.65112Z" fill="white"/>
        </svg>
      )
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.998 0.297546C6.36805 0.297546 0.998047 5.66755 0.998047 12.2975C0.998047 17.6075 4.43305 22.0925 9.20305 23.6825C9.80305 23.7875 10.028 23.4275 10.028 23.1125C10.028 22.8275 10.013 21.8825 10.013 20.8775C6.99805 21.4325 6.21805 20.1425 5.97805 19.4675C5.84305 19.1225 5.25805 18.0575 4.74805 17.7725C4.32805 17.5475 3.72805 16.9925 4.73305 16.9775C5.67805 16.9625 6.35305 17.8475 6.57805 18.2075C7.65805 20.0225 9.38305 19.5125 10.073 19.1975C10.178 18.4175 10.493 17.8925 10.838 17.5925C8.16805 17.2925 5.37805 16.2575 5.37805 11.6675C5.37805 10.3625 5.84305 9.28255 6.60805 8.44255C6.48805 8.14255 6.06805 6.91255 6.72805 5.26255C6.72805 5.26255 7.73305 4.94755 10.028 6.49255C10.988 6.22255 12.008 6.08755 13.028 6.08755C14.048 6.08755 15.068 6.22255 16.028 6.49255C18.323 4.93255 19.328 5.26255 19.328 5.26255C19.988 6.91255 19.568 8.14255 19.448 8.44255C20.213 9.28255 20.678 10.3475 20.678 11.6675C20.678 16.2725 17.873 17.2925 15.203 17.5925C15.638 17.9675 16.013 18.6875 16.013 19.8125C16.013 21.4175 15.998 22.7075 15.998 23.1125C15.998 23.4275 16.223 23.8025 16.823 23.6825C19.2052 22.8783 21.2752 21.3472 22.7417 19.3049C24.2082 17.2626 24.9973 14.8118 24.998 12.2975C24.998 5.66755 19.628 0.297546 12.998 0.297546Z" fill="white"/>
        </svg>
      )
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M25.001 12.075C25.001 5.406 19.628 0 13.001 0C6.37105 0.0015 0.998047 5.406 0.998047 12.0765C0.998047 18.102 5.38705 23.097 11.123 24.003V15.5655H8.07805V12.0765H11.126V9.414C11.126 6.3885 12.9185 4.7175 15.659 4.7175C16.973 4.7175 18.3455 4.953 18.3455 4.953V7.923H16.832C15.3425 7.923 14.8775 8.8545 14.8775 9.81V12.075H18.2045L17.6735 15.564H14.876V24.0015C20.612 23.0955 25.001 18.1005 25.001 12.075Z" fill="white"/>
        </svg>
      )
    default:
      return null;
  }
};
