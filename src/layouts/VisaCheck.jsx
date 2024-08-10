import logo from "../assets/realme-header-logo-dark.png";
import VisaCheckForm from "../components/form/VisaCheckForm";

const VisaCheck = () => {
  return (
    <>
      <div className="bg-neutral-950 py-3">
        <div className="container mx-auto w-full max-w-[1120px] px-3">
          <img src={logo} alt="logo" className="w-36" />
        </div>
      </div>

      <div>
        <VisaCheckForm />
      </div>
    </>
  );
};

export default VisaCheck;
