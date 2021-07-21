import logo from '../images/psm.svg';
export default function PageHeader() {
  return (
    <div className="text-center">
      <img src={logo} alt="psm" className="h-32 mx-auto"/>
      <h1 className="text-2xl mt-2 text-blue-600 font-bold">
        Deploy Personal Social Media Server
      </h1>
    </div>
  );
}
