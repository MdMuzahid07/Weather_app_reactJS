import React from 'react';

const TodayWeatherDetails = () => {
    return (
        <div className='grid md:grid-cols-3 gap-3 mt-7'>
            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="p-3">
                    <div className='font-bold flex justify-between items-center'>
                        <p><small>Humidity</small></p>
                        <svg className='dashboard_icon_bg rounded' xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10.583 15.458q.167-.02.292-.156.125-.135.125-.344 0-.229-.167-.375-.166-.145-.395-.104-1.209.167-2.219-.562-1.011-.729-1.198-1.979-.021-.188-.156-.313-.136-.125-.323-.125-.23 0-.386.167-.156.166-.114.395.229 1.626 1.541 2.626 1.313 1 3 .77ZM10 18q-2.708 0-4.604-1.896T3.5 11.5q0-2.021 1.552-4.271T10 2q3.458 3.125 4.979 5.354T16.5 11.5q0 2.708-1.896 4.604T10 18Zm0-1.5q2.083 0 3.542-1.458Q15 13.583 15 11.5q0-1.417-1.125-3.104Q12.75 6.708 10 3.979 7.25 6.708 6.125 8.396 5 10.083 5 11.5q0 2.083 1.458 3.542Q7.917 16.5 10 16.5Zm0-6.5Z" fill="#ffffff" /></svg>
                    </div>
                    <h2 className='text-center font-bold my-2'><span>82</span>%<span>Bad</span></h2>
                </div>
            </div>

            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="p-3">
                    <div className='font-bold'>
                        <p><small>Humidity</small></p>
                    </div>
                </div>
            </div>

            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="p-3">
                    <div className='font-bold'>
                        <p><small>Humidity</small></p>
                    </div>
                </div>
            </div>

            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="p-3">
                    <div className='font-bold'>
                        <p><small>Humidity</small></p>
                    </div>
                </div>
            </div>


            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="p-3">
                    <div className='font-bold'>
                        <p><small>Humidity</small></p>
                    </div>
                </div>
            </div>


            <div className="card bg-white drop-shadow rounded-3xl">
                <div className="p-3">
                    <div className='font-bold'>
                        <p><small>Humidity</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayWeatherDetails;