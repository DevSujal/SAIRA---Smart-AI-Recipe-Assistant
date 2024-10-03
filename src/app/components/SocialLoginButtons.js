import React from "react";

const SocialLoginButtons = () => {
  return (
    <div className="flex justify-center gap-5 pb-2">
      <button type="submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value="facebook">
        <img className="w-9 h-9" src="facebook_ic.svg" alt="facebook" />
      </button>
      <button type="submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value="google">
        <img className="w-9 h-9" src="google_ic.svg" alt="google" />
      </button>
      <button type="submit" className="bg-white py-2 px-4 rounded-lg cursor-pointer" name="action" value="github">
        <img className="w-9 h-9" src="github-mark.svg" alt="github" />
      </button>
    </div>
  );
};

export default SocialLoginButtons;
