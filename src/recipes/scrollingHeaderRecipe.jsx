import React,{Component} from 'react';
import ScrollingHeader from '../components/scrollingHeader.jsx';

export default class ScrollingHeaderRecipe extends Component{
    constructor(props){
        super(props);
    }

    render(){
    return (<div className='row'>
                <ScrollingHeader  /> 
                <div className='row space'>
                   <div className='section'>  
                    <h2>The scrolling header</h2>
                    <p>Minima est qui quis officiis ex rerum quas molestias. Blanditiis maiores vel illo facilis 
                        aperiam quia placeat voluptatem. Et et aliquid quis eum quae. 
                        Voluptatem ab cum. Iste et natus voluptatum quod dignissimos voluptatibus placeat at.
                    </p>

                    <p>Non aspernatur eligendi fugit molestiae natus eius et et. Et dolores similique aut aperiam est voluptatem. Impedit molestiae repellendus ea est nemo facilis. Architecto in odio quis qui asperiores corrupti maiores ratione.
 
                    Aut corporis dicta voluptatem. Est deleniti modi nulla sit libero voluptas laborum. Sapiente qui illum ut neque voluptatum.
                    
                    Alias tempora aut. Vitae fugiat enim dicta deleniti. Facere illo culpa suscipit nobis facere non.
                    </p>

                    <p>Consequatur laborum asperiores consequatur nesciunt sed. Expedita asperiores natus incidunt repudiandae sunt magnam modi fugiat. Dolores nam aut architecto delectus ea enim veniam minus. Id qui velit sint qui est et repellendus ut.
                    </p>


                   </div> 
                </div>
                <div className='section space'> </div>
            <footer>
                <div className='footer'>Footer</div>
            </footer> </div>);
    }
}