import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ExploreIssues = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await axios.get('./data.json')
            return res.data

        }

    })
    // console.log(data);

    if (isPending) {
        return <p>data....</p>
    }
    return (
        <div className=' max-w-11/12 mx-auto pt-12'>
            <h1 className="text-3xl font-semibold mx-auto text-left">Explore Issues</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                {
                    data.map((blog) => (
                        <>
                            <div
                            key={blog.id}
                            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                                <img className="rounded-xl" src={blog.image} alt="" />
                                <h3 className="text-base text-slate-900 font-medium mt-3">{blog.title}</h3>
                                <p className="text-xs text-green-600 font-medium mt-1">{blog.location
                                }</p>
                            </div>
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default ExploreIssues;