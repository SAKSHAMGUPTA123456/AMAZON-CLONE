import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    const tokenId = credentialResponse.credential;

    try {
      const res = await fetch("http://127.0.0.1:5000/google-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_token: tokenId }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.access_token);
         localStorage.setItem("name", data.name);       // store user's name
  localStorage.setItem("email", data.email);
        navigate("/");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-[#EAEDED] flex flex-col items-center pt-10">
      <div className="bg-white w-[350px] p-6 rounded border border-gray-300">

        <h1 className="text-2xl font-medium mb-4">Create account</h1>

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded text-sm font-semibold mb-4">
          Continue
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t" />
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="flex-1 border-t" />
        </div>

        {/* GOOGLE SIGN IN */}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Google Login Failed")}
        />

        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
      </div>
    </div>
  );
};
