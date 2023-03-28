import { FC } from "react";

interface layoutProps {}

function Layout ({children}: {children: React.ReactNode})  {
    return (
        <section className="pt-20">
            {children}
        </section>
    )
}

export default Layout