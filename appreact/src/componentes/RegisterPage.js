import HeaderLogin from "./HeaderLogin";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {

    return(
        <>
            <HeaderLogin/>
            <div className="container rounded bg-light my-3 py-3">

                <RegisterForm/>

            </div>


        </>
    )


}

export default RegisterPage;