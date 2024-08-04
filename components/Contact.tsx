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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 md:space-y-10">
        <h4 className="text-lg md:text-3xl font-semibold text-center">
          I have just what you need.{" "}
          <span className="underline decoration-[#0AABF7]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0AABF7] h-4 md:h-7 w-4 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+353 083 047 3631</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0AABF7] h-4 md:h-7 w-4 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl"> lajara.agullo@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0AABF7] h-4 md:h-7 w-4 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl"> Dublin, Ireland</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full px-5 md:px-0"
        >
         
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
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
            className="bg-[#0AABF7] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
