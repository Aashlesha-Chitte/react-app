import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { useQuery } from '@apollo/client';

import { GET_USERS } from '../../graphql/queries/users/index';

const Table = () => {
    const [userData, setUserData] = useState([]);
    const {
        loading, error, data, refetch,
    } = useQuery(GET_USERS, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'network-only',
    });

    const getData = () => {
        const usersData = data?.getUsers?.data.map((d) => {
            return {
                name: d.name,
                role: d.role
            }
        })
        console.log('usersData', usersData);
        setUserData(usersData);
    }

    const handleRefresh = (e) => {
        e.preventDefault();
        refetch();
        console.log('handleRefresh called');
    }

    useEffect(() => {
        getData();
    }, [data]);

    return (
        <>
            {loading ?
                <h1>Loading....</h1> :
                <div>
                    <button onClick={handleRefresh}>
                        refresh
                    </button>
                    <br />
                    <br />
                    <table style={{ "border": "1px solid black", width: "100%" }}>

                        <tr style={{ "border": "1px solid black"}}>
                            <td style={{ "border": "1px solid black" }}>Name</td>
                            <td style={{ "border": "1px solid black" }}>Role</td>
                        </tr>
                        {userData?.map((d) => {
                            return (
                                <tr style={{ "border": "1px solid black" }}>
                                    <td style={{ "border": "1px solid black" }}>{d.name}</td>
                                    <td style={{ "border": "1px solid black" }}>{d.role}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            }</>
    );
};


export default Table;
