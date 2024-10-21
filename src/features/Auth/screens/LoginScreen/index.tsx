import SignInForm from "../../components/SignInForm";

LogInScreen.propTypes = {};

function LogInScreen(props: any) {
  return (
    <div className="login-content flex-row-fluid d-flex flex-column p-10 bg-transparent">
      {/* begin::Top */}
      <div className="text-right d-flex justify-content-end align-items-center">
        <div className="top-signin text-right d-flex justify-content-end pb-lg-0"></div>
        {/* Language */}
      </div>
      {/* end::Top */}

      {/* begin::Wrapper */}
      <div className="d-flex flex-row-fluid flex-center justify-content-center justify-content-lg-start">
        {/* begin::Sign In */}
        <div className="login-form">
          {/* begin: Form */}
          <SignInForm onSubmit={() => {}} />
          {/* end: Form */}
        </div>
        {/* end::Sign In */}
      </div>
      {/* end::Wrapper */}
    </div>
  );
}

export default LogInScreen;
