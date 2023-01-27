import Card from "./components/Card";
import Data from "./data.json";


console.log(Data);

function App()
{
    return <div>
        <Card titleText={Data[0].title} descriptionText={Data[0].desc}/>
        <Card titleText={Data[1].title} descriptionText={Data[1].desc}/>
        <Card titleText={Data[2].title} descriptionText={Data[2].desc}/>
        <Card titleText={Data[3].title} descriptionText={Data[3].desc}/>
        <Card titleText={Data[4].title} descriptionText={Data[4].desc}/>
    </div>
}

export default App;