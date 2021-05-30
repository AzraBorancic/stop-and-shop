import LogoImage from "./logo.png";
import LogoSvg from "./logo.svg";
import LogoTransparent from "./logo_transparent.png";
import {Image} from "semantic-ui-react";

const Logo = ({ size='mini', transparent, centered, isSvg }) => <Image style={{color: '#586E72'}}
                                                          src={transparent ? LogoTransparent : !isSvg ? LogoImage : LogoSvg}
                                                          centered={centered}
                                                          size={size}
/>

export default Logo;
