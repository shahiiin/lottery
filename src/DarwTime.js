import React from 'react';
import { FaAngleLeft,FaUserFriends } from "react-icons/fa";
import { Card,Button} from 'antd';
import { GiOpenTreasureChest } from "react-icons/gi";
import {withRouter} from 'react-router';

class DrawTime extends React.Component{

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind (this);
        this.state = {
        users: []
        };
      }
    
      componentDidMount () {
        // console.log (this.props.match);
        fetch (`https://lattary.liara.run/funds/${this.props.match.params.id}`)
          .then (res => res.json ())
          .then (json => {
            this.setState ({
              users: json.result,
              loading: true,
            });
          });
      }


    render(){
    

        return(
            <div className='lottery-body'  style={{ textAlign:"center" }}>
                
            <Card 
   hoverable
   style={{ width: 300,textAlign:"center",backgroundColor:'#263238',height:590 }}>
       <div style={{marginTop:0}}>
       <FaAngleLeft style={{ overflow:'hidden',marginLeft: '-9rem',fontSize: 26,position:'absolute',marginTop:2,color:'white'}}/>
                            
     
     
      
  <div>
    {this.state.users.map(item => (
      <h2 style={{color:'white'}}> {item.name}</h2>
   ))}
   </div>
     
         
      
      
       </div>
       <div>
             
       <GiOpenTreasureChest style={{ overflow:'hidden',marginLeft: 39,fontSize:19,position:'absolute',marginTop:-1,color:'white'}} />
       <h2 style={{color:'#969696',marginTop:10,fontSize:15}}>مبلغ جایزه</h2>
   
       </div>
       <div>
       {this.state.users.map(item => (
    <p style={{color:'#ff6f00',marginTop:10,fontSize:25,direction:'rtl'}}>{item.total}تومان</p>
    ))}
       </div>
       <Card
   hoverable
   style={{ width: 210,textAlign:"center",marginLeft:21,borderRadius:18 }}>
 
  <div>
       <FaUserFriends style={{ overflow:'hidden',marginLeft: 50,fontSize: 18,position:'absolute',marginTop:-1,color:'#969696'}}/>              
      <p style={{color:'#969696',fontSize:12,marginRight:13}}>:تعداد شرکت کنندگان</p>
  </div>
  
  <div>
  {this.state.users.map(item => (
  <p  style={{direction:'rtl'}}>  نفر{item.members.user_t}</p>
  ))}
    {this.state.users.map(item => (
    <p style={{color:'#ff6f00'}} > {item.created_at}امروز ساعت </p> 
    ))}
  </div>
  
<div className='time'>
 {/* <KashTime />   */}
</div>
    
   
       </Card>
       <Card
      
   hoverable
   style={{ width: 210,textAlign:'center',backgroundColor:'#ff6f00',marginLeft:20,borderRadius:18,height:120,marginTop:36,border:'none'}}>
       <div>
       <p  style={{color:'white'}}>:قیمت هر بلیط</p>
       {this.state.users.map(item => (
    <p  style={{direction:'rtl',color:'white',fontSize:25}}> {item.price}تومان</p>
    ))}
       <Button style={{width:185,borderRadius:8,color:'#ff6f00',height:54,marginLeft:-12,marginTop:-19}}>خرید بلیط </Button>
       </div>
   

   
       </Card>
  
    
   
 </Card>
 
   </div>
        )
    }
}
export default withRouter (DrawTime);