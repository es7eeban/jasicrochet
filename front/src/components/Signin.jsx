import { PropTypes } from "prop-types";
const Signin = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg p-11 w-100">
        <div className="flex items-center justify-center">
          <h2 className="font-extrabold ">Signin</h2>
        </div>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="Password"
              id="Password"
              className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </form>
        <div className="flex justify-around gap-4 mt-5">
          <button className="flex justify-center w-48 p-1 text-white bg-green-500 rounded-lg">
            <a href="/admin">Entrar</a>
          </button>

          <button
            onClick={handleOnClose}
            className="w-48 p-1 text-white bg-red-700 rounded-lg"
          >
            Cancelar
          </button>
        </div>
        {/* <div className="flex justify-center gap-2 mt-5">
          <p className="">¿Aún no está registrado?</p>
          <a href="/" className="font-semibold text-blue-500 font">
            Registrarse
          </a>
        </div> */}
      </div>
    </div>
  );
};

Signin.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Signin;
