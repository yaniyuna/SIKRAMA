import Layout from "../Layouts/Layout"

function Home(){
    return(
        <>
            <h1 className="title">Hellow</h1>
        </>
    )
}

Home.layout = page => <Layout Children={page}/>

export default Home;