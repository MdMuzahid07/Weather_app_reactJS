import Carousel from 'nuka-carousel/lib/carousel';
import React from 'react';

const WeatherSlider = () => {
    return (
        <div className='mt-10 mb-10 md:mb-0'>
            <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" fill="#ffffff" /></svg>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" fill="#ffffff" /></svg>
                    </button>
                )}
                renderBottomCenterControls={false}
            >
                <div className='flex justify-center'>
                    <div>
                        <h2 className='text-6xl font-bold'>27 <sup>o</sup></h2>
                        <h2 className='text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 4.333q-.396 0-.698-.302Q9 3.729 9 3.333V1.667q0-.396.302-.688.302-.291.698-.291.396 0 .698.291.302.292.302.688v1.666q0 .396-.302.698-.302.302-.698.302Zm4.021 1.646q-.271-.291-.271-.687 0-.396.271-.688l1.167-1.187q.291-.292.708-.282.416.011.687.282.292.291.292.687 0 .396-.292.688l-1.187 1.187q-.292.271-.688.271-.396 0-.687-.271ZM16.667 11q-.396 0-.698-.302-.302-.302-.302-.698 0-.396.302-.698.302-.302.698-.302h1.666q.396 0 .688.302.291.302.291.698 0 .396-.291.698-.292.302-.688.302ZM10 19.312q-.396 0-.698-.291Q9 18.729 9 18.333v-1.666q0-.396.302-.698.302-.302.698-.302.396 0 .698.302.302.302.302.698v1.666q0 .396-.302.688-.302.291-.698.291ZM4.604 5.979 3.417 4.812q-.313-.291-.313-.697 0-.407.313-.698.291-.292.687-.292.396 0 .688.292l1.187 1.187q.292.292.302.688.011.396-.302.687-.291.271-.698.271-.406 0-.677-.271Zm10.584 10.604-1.167-1.187q-.271-.292-.271-.688 0-.396.271-.687.291-.292.687-.292.396 0 .688.292l1.187 1.167q.292.291.292.697 0 .407-.292.698-.271.313-.687.302-.417-.01-.708-.302ZM1.667 11q-.396 0-.688-.302Q.688 10.396.688 10q0-.396.291-.698Q1.271 9 1.667 9h1.666q.396 0 .698.302.302.302.302.698 0 .396-.302.698-.302.302-.698.302Zm1.771 5.604q-.292-.292-.292-.687 0-.396.292-.688l1.187-1.187q.271-.292.677-.292t.698.292q.312.291.302.698-.01.406-.302.698l-1.167 1.166q-.291.292-.698.302-.406.011-.697-.302ZM10 14.875q-2.021 0-3.448-1.417Q5.125 12.042 5.125 10q0-2.021 1.417-3.448Q7.958 5.125 10 5.125q2.021 0 3.448 1.417Q14.875 7.958 14.875 10q0 2.021-1.417 3.448-1.416 1.427-3.458 1.427Zm0-1.979q1.208 0 2.052-.844.844-.844.844-2.052 0-1.208-.844-2.052-.844-.844-2.052-.844-1.208 0-2.052.844-.844.844-.844 2.052 0 1.208.844 2.052.844.844 2.052.844Z" fill="#ffffff" /></svg> <span className='ml-2'>Sunny</span></h2>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <h2 className='text-6xl font-bold'>27 <sup>o</sup></h2>
                        <h2 className='text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 4.333q-.396 0-.698-.302Q9 3.729 9 3.333V1.667q0-.396.302-.688.302-.291.698-.291.396 0 .698.291.302.292.302.688v1.666q0 .396-.302.698-.302.302-.698.302Zm4.021 1.646q-.271-.291-.271-.687 0-.396.271-.688l1.167-1.187q.291-.292.708-.282.416.011.687.282.292.291.292.687 0 .396-.292.688l-1.187 1.187q-.292.271-.688.271-.396 0-.687-.271ZM16.667 11q-.396 0-.698-.302-.302-.302-.302-.698 0-.396.302-.698.302-.302.698-.302h1.666q.396 0 .688.302.291.302.291.698 0 .396-.291.698-.292.302-.688.302ZM10 19.312q-.396 0-.698-.291Q9 18.729 9 18.333v-1.666q0-.396.302-.698.302-.302.698-.302.396 0 .698.302.302.302.302.698v1.666q0 .396-.302.688-.302.291-.698.291ZM4.604 5.979 3.417 4.812q-.313-.291-.313-.697 0-.407.313-.698.291-.292.687-.292.396 0 .688.292l1.187 1.187q.292.292.302.688.011.396-.302.687-.291.271-.698.271-.406 0-.677-.271Zm10.584 10.604-1.167-1.187q-.271-.292-.271-.688 0-.396.271-.687.291-.292.687-.292.396 0 .688.292l1.187 1.167q.292.291.292.697 0 .407-.292.698-.271.313-.687.302-.417-.01-.708-.302ZM1.667 11q-.396 0-.688-.302Q.688 10.396.688 10q0-.396.291-.698Q1.271 9 1.667 9h1.666q.396 0 .698.302.302.302.302.698 0 .396-.302.698-.302.302-.698.302Zm1.771 5.604q-.292-.292-.292-.687 0-.396.292-.688l1.187-1.187q.271-.292.677-.292t.698.292q.312.291.302.698-.01.406-.302.698l-1.167 1.166q-.291.292-.698.302-.406.011-.697-.302ZM10 14.875q-2.021 0-3.448-1.417Q5.125 12.042 5.125 10q0-2.021 1.417-3.448Q7.958 5.125 10 5.125q2.021 0 3.448 1.417Q14.875 7.958 14.875 10q0 2.021-1.417 3.448-1.416 1.427-3.458 1.427Zm0-1.979q1.208 0 2.052-.844.844-.844.844-2.052 0-1.208-.844-2.052-.844-.844-2.052-.844-1.208 0-2.052.844-.844.844-.844 2.052 0 1.208.844 2.052.844.844 2.052.844Z" fill="#ffffff" /></svg> <span className='ml-2'>Sunny</span></h2>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <h2 className='text-6xl font-bold'>27 <sup>o</sup></h2>
                        <h2 className='text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 4.333q-.396 0-.698-.302Q9 3.729 9 3.333V1.667q0-.396.302-.688.302-.291.698-.291.396 0 .698.291.302.292.302.688v1.666q0 .396-.302.698-.302.302-.698.302Zm4.021 1.646q-.271-.291-.271-.687 0-.396.271-.688l1.167-1.187q.291-.292.708-.282.416.011.687.282.292.291.292.687 0 .396-.292.688l-1.187 1.187q-.292.271-.688.271-.396 0-.687-.271ZM16.667 11q-.396 0-.698-.302-.302-.302-.302-.698 0-.396.302-.698.302-.302.698-.302h1.666q.396 0 .688.302.291.302.291.698 0 .396-.291.698-.292.302-.688.302ZM10 19.312q-.396 0-.698-.291Q9 18.729 9 18.333v-1.666q0-.396.302-.698.302-.302.698-.302.396 0 .698.302.302.302.302.698v1.666q0 .396-.302.688-.302.291-.698.291ZM4.604 5.979 3.417 4.812q-.313-.291-.313-.697 0-.407.313-.698.291-.292.687-.292.396 0 .688.292l1.187 1.187q.292.292.302.688.011.396-.302.687-.291.271-.698.271-.406 0-.677-.271Zm10.584 10.604-1.167-1.187q-.271-.292-.271-.688 0-.396.271-.687.291-.292.687-.292.396 0 .688.292l1.187 1.167q.292.291.292.697 0 .407-.292.698-.271.313-.687.302-.417-.01-.708-.302ZM1.667 11q-.396 0-.688-.302Q.688 10.396.688 10q0-.396.291-.698Q1.271 9 1.667 9h1.666q.396 0 .698.302.302.302.302.698 0 .396-.302.698-.302.302-.698.302Zm1.771 5.604q-.292-.292-.292-.687 0-.396.292-.688l1.187-1.187q.271-.292.677-.292t.698.292q.312.291.302.698-.01.406-.302.698l-1.167 1.166q-.291.292-.698.302-.406.011-.697-.302ZM10 14.875q-2.021 0-3.448-1.417Q5.125 12.042 5.125 10q0-2.021 1.417-3.448Q7.958 5.125 10 5.125q2.021 0 3.448 1.417Q14.875 7.958 14.875 10q0 2.021-1.417 3.448-1.416 1.427-3.458 1.427Zm0-1.979q1.208 0 2.052-.844.844-.844.844-2.052 0-1.208-.844-2.052-.844-.844-2.052-.844-1.208 0-2.052.844-.844.844-.844 2.052 0 1.208.844 2.052.844.844 2.052.844Z" fill="#ffffff" /></svg> <span className='ml-2'>Sunny</span></h2>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default WeatherSlider;