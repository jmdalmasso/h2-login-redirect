import {useLoaderData} from '@remix-run/react';

export async function loader({context}) {
  return context.customerAccount.login();
}

export default function StartRoute() {
  useLoaderData();

  return <div>login route</div>;
}
