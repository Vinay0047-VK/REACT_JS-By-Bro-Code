function RightPanel(){
    return(
        <div className="role-panel active" id="panelStudent" role="tabpanel" aria-labelledby="tabStudent">

          <div className="form-view active" id="studentLogin">
            <div className="form-header">
              <h2>Welcome Back! 👋</h2>
              <p>Sign in to continue your learning journey</p>
            </div>

            <form id="formStudentLogin" novalidate>
              <div className="field-group">
                <label htmlFor="sLoginEmail">Email or Mobile Number</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                  <input type="text" id="sLoginEmail" placeholder="email@example.com or 9876543210" autocomplete="email" />
                </div>
                <span className="field-error" id="sLoginEmailErr"></span>
              </div>

              <div className="field-group">
                <label htmlFor="sLoginPassword">Password</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  <input type="password" id="sLoginPassword" placeholder="Enter your password" autocomplete="current-password" />
                  <button type="button" className="toggle-pw" aria-label="Toggle password visibility" data-target="sLoginPassword">
                    <svg className="eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg className="eye-closed hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  </button>
                </div>
                <span className="field-error" id="sLoginPasswordErr"></span>
              </div>

              <div className="form-row">
                <label className="checkbox-label">
                  <input type="checkbox" id="sRemember" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <button type="button" className="link-btn forgot-btn" data-role="student">Forgot Password?</button>
              </div>

              <button type="submit" className="btn-primary" id="btnStudentLogin">
                <span className="btn-text">Sign In</span>
                <span className="btn-spinner hidden"></span>
              </button>

              <div className="divider"><span>or continue with</span></div>

              <button type="button" className="btn-google" id="btnGoogleStudent">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>
            </form>

            <p className="form-switch">Don't have an account? <button type="button" className="link-btn" onclick="switchView('studentRegister')">Sign up free</button></p>
          </div>

          <div className="form-view" id="studentRegister">
            <div className="form-header">
              <h2>Create Account 🎓</h2>
              <p>Join thousands of learners today</p>
            </div>

            <form id="formStudentRegister" novalidate>
              <div className="form-row-2">
                <div className="field-group">
                  <label htmlFor="sRegName">Full Name</label>
                  <div className="input-wrap">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input type="text" id="sRegName" placeholder="John Doe" autocomplete="name" />
                  </div>
                  <span className="field-error" id="sRegNameErr"></span>
                </div>
                <div className="field-group">
                  <label htmlFor="sRegMobile">Mobile Number</label>
                  <div className="input-wrap">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    <input type="tel" id="sRegMobile" placeholder="+91 98765 43210" autocomplete="tel" />
                  </div>
                  <span className="field-error" id="sRegMobileErr"></span>
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="sRegEmail">Email Address</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                  <input type="email" id="sRegEmail" placeholder="john@example.com" autocomplete="email" />
                </div>
                <span className="field-error" id="sRegEmailErr"></span>
              </div>

              <div className="field-group">
                <label htmlFor="sRegPassword">Password</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  <input type="password" id="sRegPassword" placeholder="Min. 8 characters" autocomplete="new-password" />
                  <button type="button" className="toggle-pw" aria-label="Toggle password visibility" data-target="sRegPassword">
                    <svg className="eye-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg className="eye-closed hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  </button>
                </div>
                <div className="pw-strength" id="sRegPwStrength">
                  <div className="pw-bar"><div className="pw-fill" id="sRegPwFill"></div></div>
                  <span className="pw-label" id="sRegPwLabel">Password strength</span>
                </div>
                <span className="field-error" id="sRegPasswordErr"></span>
              </div>

              <div className="field-group">
                <label>Interests (Optional)</label>
                <div className="interest-tags" id="interestTags">
                  <button type="button" className="tag" data-val="web">💻 Web Dev</button>
                  <button type="button" className="tag" data-val="data">📊 Data Science</button>
                  <button type="button" className="tag" data-val="design">🎨 Design</button>
                  <button type="button" className="tag" data-val="ai">🤖 AI / ML</button>
                  <button type="button" className="tag" data-val="business">💼 Business</button>
                  <button type="button" className="tag" data-val="lang">🗣 Languages</button>
                </div>
              </div>

              <button type="submit" className="btn-primary" id="btnStudentRegister">
                <span className="btn-text">Create My Account</span>
                <span className="btn-spinner hidden"></span>
              </button>
            </form>

            <p className="form-switch">Already have an account? <button type="button" className="link-btn" onclick="switchView('studentLogin')">Sign in</button></p>
          </div>
        </div>
    );
}
export default RightPanel;