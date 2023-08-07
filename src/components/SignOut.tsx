import { useAuthenticator } from "@aws-amplify/ui-react";

export default function SignOut() {
    const { signOut } = useAuthenticator((context) => [context.signOut]);
    window.alert("You have been signed out");
    return <div onClick={signOut}></div>;
}
