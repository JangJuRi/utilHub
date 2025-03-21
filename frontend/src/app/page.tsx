"use client";

import Link from "next/link";
import SearchBar from "../components/main/SearchBar";
import {useEffect, useState} from "react";
import customFetch from "@/api/customFetch";
import UtilPostCard from "@/components/main/UtilPostCard";

const Home = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const result= await customFetch('/user/util-post/list/load', {
            method: 'GET'
        })

        if (result.success) {
            setList(result.data);
        }
    }

    return (
        <div className="home-container">
            <h1 className="logo">UtilHub</h1>

            <SearchBar />
            <div className="d-flex justify-content-end w-100 px-4">
                <Link href="/user/util/write/new">
                    <button className="btn btn-primary write-btn">글쓰기</button>
                </Link>
            </div>
            <div className="row g-4 mt-4">
                {list.map((data, index) => (
                    <UtilPostCard key={index} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Home;
