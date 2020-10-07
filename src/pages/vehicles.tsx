import { NextPageContext } from "next";
import { myGet } from "../../api/myGet";

export default function vehicles({vehicles} : any) {
return <div>Hello vehicles {JSON.stringify(vehicles)}</div>
}

vehicles.getInitialProps = async (ctx: NextPageContext) => {
    const json = await myGet('http://localhost:3000/api/vehicles', ctx);
    return {vehicles: json};
}