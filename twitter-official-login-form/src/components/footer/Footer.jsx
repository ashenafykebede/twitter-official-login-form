import './styles.css';

export const Footer = () => {
  return (
    <div class="footer-input-form">
      <input
        class="input-1"
        placeholder="Phone,email or username"
        type="text"
      />
      <button>Next</button>
      <input class="input-2" placeholder="Forgot Password?" type="text" />
      <span href="#">
        Don't have an account <a href="#">Sign Up</a>{" "}
      </span>
    </div>
  );
};
