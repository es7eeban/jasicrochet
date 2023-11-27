export const Contact = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-violet-900">
        Contacto
      </h2>
      <form className="w-5/6 mx-auto md:w-3/6">
        <div className="py-6 border-b border-gray-900/10">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">
            Información Personal
          </h2>
          <p className="mt-1 text-base leading-6 text-gray-600">
            Ingrese los datos de contacto.
          </p>

          <div className="grid grid-cols-1 mt-7 gap-x-6 gap-y-8 md:grid-cols-6">
            <div className="md:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>

              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full outline-none rounded-md mt-2 border-0 p-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 md:text-base md:leading-6"
              />
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>

              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full outline-none rounded-md mt-2 border-0 p-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 md:text-base md:leading-6"
              />
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="email"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full outline-none mt-2 rounded-md border-0 p-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 md:text-base md:leading-6"
              />
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="phone"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="block w-full outline-none mt-2 rounded-md border-0 p-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 md:text-base md:leading-6"
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                Comentario
              </label>
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full outline-none rounded-md border-0 p-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 md:text-base md:leading-6"
                defaultValue={""}
              />
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Ingresa tu comentario en la caja de texto.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-3 gap-x-6">
          <button
            type="submit"
            className="px-3 py-2 text-base font-semibold text-white rounded-md shadow-md bg-violet-600 hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};
