"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:lajara.agullo@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row p-2 justify-center items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 xl:mt-10">
        <h4 className="text-lg md:text-3xl font-semibold text-center">
          I have just what you need.{" "}<br />
          <span className="underline decoration-[#0AABF7]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0AABF7] h-4 w-4 animate-pulse" />
            <p className="text-lg md:text-2xl">+376 357 232</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0AABF7] h-4 w-4 animate-pulse" />
            <p className="text-lg md:text-2xl"> lajara.agullo@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0AABF7] h-4 w-4 animate-pulse" />
            <p className="text-lg md:text-2xl"> Andorra</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full text-sm"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput "
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#0AABF7] py-5 px-10 rounded-md text-black font-bold text-sm md:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
