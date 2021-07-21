export function ConfigureNewServerForm() {
  return (
    <div className="w-full md:w-1/2 mx-auto">
      <div>
        Configure new server
      </div>

      <form className="pure-form" autoComplete="off">
        <div>
          <input type="text" name="ip" className="w-full" placeholder="Server ip"/>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div>
              Server connection
            </div>

            <div className="py-3">
              <input type="text" name="username" className="w-full" placeholder="Username"/>
            </div>
            <div className="py-3">
              <input type="text" name="password" className="w-full" placeholder="Password"/>
            </div>

            <div className="text-center">
              Or
            </div>

            <div className="py-3">
              <textarea name="privateKey" className="w-full" rows={40} placeholder="Private key"/>
            </div>
          </div>

          <div>
            <div>
              Permanent storage
            </div>

            <div className="py-3">
              <input type="text" name="megauploadUsername" className="w-full" placeholder="Megaupload Username"/>
            </div>

            <div className="py-3">
              <input type="text" name="megauploadPassword" className="w-full" placeholder="Megaupload Password"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
