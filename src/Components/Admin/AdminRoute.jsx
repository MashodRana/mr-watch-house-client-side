import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, isLoading } = useAuth();
    if (isLoading) {
        return <div class="flex justify-center items-center">
            <div
                class="
            animate-spin
            rounded-full
            h-32
            w-32
            border-t-2 border-b-2 border-purple-500
          "
            ></div>
        </div>
    }
    if (isAdmin===null) {
        return <div class="flex justify-center items-center">
            <div
                class="
            animate-spin
            rounded-full
            h-32
            w-32
            border-t-2 border-b-2 border-purple-500
          "
            ></div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;