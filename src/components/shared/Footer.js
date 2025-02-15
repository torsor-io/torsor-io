// src/components/shared/Footer.js

const Footer = ({ 
  subtleText,
  borderColor, 
  footerColor
}) => {
  return (
	  <>
{/* Footer wihout border-t */}
<footer className={`${footerColor}  ${borderColor} py-3 opacity-50`}>
  <div className={`max-w-7xlt text-sm mx-auto px-4 sm:px-6 lg:px-8 text-center ${subtleText}`}>
    <p>© 2025 Torsor Labs. All rights reserved. </p>
  </div>
</footer>
    </>
  );
};

export default Footer;
