export default function AuthModals() {
  return (
    <>
      <div className="modal similar__modal fade" id="loginModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="max-content similar__form form__padding">
              <div className="d-flex mb-3 align-items-center justify-content-between">
                <h6 className="mb-0">Login To Moonlit</h6>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form
                action="#"
                method="post"
                className="d-flex flex-column gap-3"
              >
                <div className="form-group">
                  <label htmlFor="email-popup" className="text-dark mb-3">
                    Your Email
                  </label>
                  <div className="position-relative">
                    <input
                      type="email"
                      name="email-popup"
                      id="email-popup"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-dark mb-3">
                    Password
                  </label>
                  <div className="position-relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="forgot__password text-para"
                    data-bs-toggle="modal"
                    data-bs-target="#forgotModal"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="form-group my-3">
                  <button className="theme-btn btn-style sm-btn fill w-100">
                    <span>Login</span>
                  </button>
                </div>
              </form>
              <div className="d-block has__line text-center">
                <p>Or</p>
              </div>
              <div className="d-flex gap-4 flex-wrap justify-content-center mt-20 mb-20">
                <div className="is__social google">
                  <button className="theme-btn btn-style sm-btn">
                    <span>Continue with Google</span>
                  </button>
                </div>
                <div className="is__social facebook">
                  <button className="theme-btn btn-style sm-btn">
                    <span>Continue with Facebook</span>
                  </button>
                </div>
              </div>
              <span className="d-block text-center">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  data-bs-target="#signupModal"
                  data-bs-toggle="modal"
                  className="text-primary"
                >
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="modal similar__modal fade" id="signupModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="max-content similar__form form__padding">
              <div className="d-flex mb-3 align-items-center justify-content-between">
                <h6 className="mb-0">Create A Free Account</h6>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <form className="d-flex flex-column gap-3">
                <div className="form-group">
                  <label htmlFor="sname" className="text-dark mb-3">
                    Your Name
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      name="sname"
                      id="sname"
                      placeholder="Candidate"
                      required
                    />
                    <i className="fa-light fa-user icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="signemail" className="text-dark mb-3">
                    Your Email
                  </label>
                  <div className="position-relative">
                    <input
                      type="email"
                      name="signemail"
                      id="signemail"
                      placeholder="Enter your email"
                      required
                    />
                    <i className="fa-sharp fa-light fa-envelope icon" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="spassword" className="text-dark mb-3">
                    Password
                  </label>
                  <div className="position-relative">
                    <input
                      type="password"
                      name="spassword"
                      id="spassword"
                      placeholder="Enter your password"
                      required
                    />
                    <i className="fa-light fa-lock icon" />
                  </div>
                </div>

                <div className="form-group my-3">
                  <button className="theme-btn btn-style sm-btn fill w-100">
                    <span>Register</span>
                  </button>
                </div>
              </form>
              <div className="d-block has__line text-center">
                <p>Or</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-20 mb-20">
                <div className="is__social google">
                  <button className="theme-btn btn-style sm-btn">
                    <span>Continue with Google</span>
                  </button>
                </div>
                <div className="is__social facebook">
                  <button className="theme-btn btn-style sm-btn">
                    <span>Continue with Facebook</span>
                  </button>
                </div>
              </div>
              <span className="d-block text-center">
                Have an account?{" "}
                <a
                  href="#"
                  data-bs-target="#loginModal"
                  data-bs-toggle="modal"
                  className="text-primary"
                >
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="modal similar__modal fade" id="forgotModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="max-content similar__form form__padding">
              <div className="d-flex mb-3 align-items-center justify-content-between">
                <h6 className="mb-0">Forgot Password</h6>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form className="d-flex flex-column gap-3">
                <div className="form-group">
                  <label htmlFor="fmail" className="text-dark mb-3">
                    Your Email
                  </label>
                  <div className="position-relative">
                    <input
                      type="email"
                      name="email"
                      id="fmail"
                      placeholder="Enter your email"
                      required
                    />
                    <i className="fa-sharp fa-light fa-envelope icon" />
                  </div>
                </div>
                <div className="form-group my-3">
                  <button className="theme-btn btn-style sm-btn fill w-100">
                    <span>Reset Password</span>
                  </button>
                </div>
              </form>

              <span className="d-block text-center">
                Remember Your Password?{" "}
                <a
                  href="#"
                  data-bs-target="#loginModal"
                  data-bs-toggle="modal"
                  className="text-primary"
                >
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

