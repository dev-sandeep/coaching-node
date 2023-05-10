import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Calculator = ()=>{
    const [speedObj, setSpeedObj] = React.useState({
        kmph: 0,
        mph: 0
    });

    const convertKmphToMph = (kmph)=>{
        const mph = kmph/1.6;
        setSpeedObj({
            kmph: kmph,
            mph: mph
        });
    }
    const convertMphToKmph = (mph)=>{
        const kmph = mph*1.6;
        setSpeedObj({
            kmph: kmph,
            mph: mph
        });
    }

    return (
        <Card className='pos-center' style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Speed Converted</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                Convert Kmph to Mph
            </Card.Subtitle>
            <hr />
            <Card.Text>
                {/* both my input box goes here */}
                <SpeedInput type={2} converter={convertKmphToMph} speed={speedObj.kmph}  />
                <SpeedInput type={1} converter={convertMphToKmph} speed={speedObj.mph}  />
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

// const KmphInput = ({converter, speed})=>{
//     const handler = (e)=>{
//         converter(e.target.value);
//     }
//     return (
//         <Form.Group className="mb-3">
//             <Form.Label>Speed (KMPH)</Form.Label>
//             <Form.Control type="number" value={speed} onChange={handler} placeholder="Enter speed in kmph" />
//             {/* <Form.Text className="text-muted">
                
//             </Form.Text> */}
//         </Form.Group> 

//     );
// }

// const giveNumber = ()=>{
//     return 1;
// }

// const MphInput = ({converter, speed})=>{
//     return (
//         <Form.Group className="mb-3">
//             <Form.Label>Speed (MPH)</Form.Label>
//             <Form.Control 
//             onChange={(e)=>converter(e.target.value)} 
//             type="number" value={speed} 
//             placeholder="Enter speed in mph" />
//         </Form.Group> 

//     );
// }

const SpeedInput = ({converter, speed, type})=>{//mph-1, kmph-2
    return (
        <Form.Group className="mb-3">
            <Form.Label>Speed ({type === 1?'MPH':'KMPH'})</Form.Label>
            <Form.Control 
            onChange={(e)=>converter(e.target.value)} 
            type="number" value={speed} 
            placeholder={`Enter speed in ${type === 1?'mph':'kmph'}`} />
           
        </Form.Group> 
    );
}

export default Calculator;