import SContainer from "../SContainer";

const FooterCopyright = () => {
  return (
    <div className="border-t mt-14 text-center md:py-8 py-6">
      <SContainer>
        <p className="lg:text-base text-sm">
          © {new Date().getFullYear()} Sportify. All rights reserved. Made with
          love by{" "}
          <a href="https://junayed-noman.web.app/" target="_blank">
            Junayed Noman
          </a>
        </p>
      </SContainer>
    </div>
  );
};

export default FooterCopyright;
