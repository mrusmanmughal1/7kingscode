/* eslint-disable no-unused-vars */

const Location = () => {
  return (
    <>
      <div className="  md:absolute flex justify-center items-center md:p-12 -inset-x-8  ">
        <div className="w-full md:w-[70%] bg-blue-600 mx-auto p-8 ">
          <div className="flex  flex-col md:flex-row justify-center  gap-8 items-center">
            <div className="md:p-8">
              <div className=" text-lg  md:text-3xl   text-center font-semibold mdw-8/12 text-white">
                7KingsCode Always Ready For Solve Your Problem
              </div>
            </div>
            <div className="">
              <button
                className="bg-white text-black py-5 px-12 font-semibold rounded hover:bg-black 
              hover:text-white hover:translate-y-1 transition duration-300"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex w-full items-center mt-28">
        <iframe
          className="w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0877948274874!2d74.43700677601765!3d31.521748547073308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f001cd9c3b9%3A0x5008832bdcab6397!2s7%20Kings%20Code!5e0!3m2!1sen!2s!4v1716219858753!5m2!1sen!2s"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
